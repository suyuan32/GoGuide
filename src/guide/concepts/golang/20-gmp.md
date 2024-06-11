---
order: 20
title: GMP 调度器
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: golang, goroutine, process, thread, scheduler, GMP, GMP 调度器, Go 调度
---

## Scheduler

::: info GO 程序和操作系统之间的关系

![os-runtime-program](/assets/image/article/concept/scheduler.png)

通过上图我们可以看到，操作系统内核和我们写的逻辑代码之间通过 runtime 进行交互，runtime 会调用操作系统的系统调用，操作系统会调用硬件资源，这样我们的程序才能运行。

:::

所谓的 Scheduler 就是负责调度 goroutine 的模块，它会根据一定的策略来调度 goroutine 的执行，这样才能保证 goroutine 的执行顺序和并发度。其使用的模型是 GMP 模型。

### GMP 模型

GMP 模型是 Go 语言调度器的核心模型，它是 Go 语言调度器的基础。GMP 模型是指：

| **组件**      | **描述**                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------- |
| G (Goroutine) | 表示一个 Goroutine，包含栈和相关的上下文信息                                                   |
| M (Machine)   | 表示一个执行线程，负责将 Goroutine 映射到操作系统的线程上。每个 M 都有自己的调用栈和寄存器状态 |
| P (Processor) | 表示一个逻辑处理器，维护一个处于可运行状态的 Goroutine 队列，每个 M 都和一个 P 相关联          |

![gmp](/assets/image/article/concept/gmp.png)

::: tip
- **全局队列**：存放所有正在等待运行的 `G`
- **本地队列**：存放当前 `P` 的 `G` 每个 `P` 都有一个本地队列， 用于存放当前 `P` 等待和正在运行的 `G`，每个 `P` 的本地队列中最多存放 `256` 个 `G` 。创建 `G` 时，会优先放入本地队列，如果本地队列满了， 则会将队列中一半的 `G` 移动到全局队列中。
:::

::: warning
- **P 的数量**：`P` 的数量是固定的，由 `GOMAXPROCS` 决定，即最大并发数, 默认为 `CPU` 核数。
- **M 的数量**：`M` 的数量是动态的，由调度器决定，根据当前的负载情况动态调整, GO默认设置为 10000，实际上内核很难达到该限制，可以认为是没有限制。`M` 想要运行任务就需要获取 `P`，如果没有 `P`，`M` 就会阻塞。如果 `P` 的本地队列为空，`M` 会从全局队列中获取 `G`，放入本地队列。 如果全局队列也为空，`M` 会从其他随机一个 `P` 的本地队列中获取一半的 `G` 放到本地队列中。
:::

::: info 名词缩写
- **LRQ** (local runnable queue): 本地队列
- **GRQ** (global runnable queue): 全局队列
:::

::: details GMP 数据结构

- `G` 的数据结构 [源码](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L422) 
    - [重要字段](/guide/concepts/golang/9-goroutine.html#goroutine-字段介绍)  
    - [Goroutine 的9种状态](/guide/concepts/golang/9-goroutine.html#goroutine-%E7%9A%849%E7%A7%8D%E7%8A%B6%E6%80%81%E7%B1%BB%E5%9E%8B)

- `M` 的数据结构 [源码](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L552)

> **重要字段**

| **字段**  | **类型** | **描述**                      |
| --------- | -------- | ----------------------------- |
| g0        | \*g      | 每个 M 都会有一个 g0          |
| curg      | \*g      | 正在运行的 `G`                |
| p         | puintptr | 绑定的 `P`                    |
| nextp     | puintptr | 当 M 被唤醒时，优先绑定的 `P` |
| id        | int64    | M 的 ID                       |
| spinning  | bool     | 是否处于自旋状态              |
| park      | note     | 用于 M 的休眠和唤醒           |
| alllink   | \*m      | 在 allm 链表上的 M            |
| schedlink | muintptr | 下一个 M，构成 M 链表         |
| mcache    | \*mcache | 内存分配的 M 缓存大小         |
| lockedg   | guintptr | 是否被锁，锁的指针            |
| freelink  | \*m      | 在 sched.freem 上的 M         |

- P 的数据结构 [源码](https://github.com/golang/go/blob/master/src/runtime/runtime2.go#L422)

> **重要字段**


| **字段**       | **类型**      | **描述**                                               |
| -------------- | ------------- | ------------------------------------------------------ |
| id             | int32         | `P` 的唯一标识符                                       |
| status         | uint32        | `P` 的状态                                             |
| link           | puintptr      | 下一个 `P，在` `P` 链表中                              |
| m              | muintptr      | 拥有这个 `P` 的 `M`                                    |
| mcache         | \*mcache      | 用于内存分配的 `P` 本地缓存                            |
| runqhead       | uint32        | P 本地 `runnable` 状态的 `G` 队列头部，无锁访问        |
| runqtail       | uint32        | P 本地 `runnable` 状态的 `G` 队列尾部，无锁访问        |
| runq           | [256]guintptr | P 本地 `runnable` 状态的 `G` 队列，最多 `256` 个元素   |
| runnext        | guintptr      | 一个比 `runq` 优先级更高的 runnable `G`                |
| gFree          | struct        | 状态为 dead 的 `G` 链表，在获取 `G` 时会从这里面获取。 |
| gcBgMarkWorker | guintptr      | (原子操作) 用于 `GC` 后台标记的 `worker`               |
| gcw            | gcWork        | 用于 `GC` 的工作结构体。                               |

`P` 的5个状态

| **状态字段** | **编号** | **描述**                                                                                                                                                                                                                                                                                                                                 |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Pidle       | 0        | 表示 P 当前未被用于运行用户代码或调度程序。通常，它在空闲 P 列表上，并可供调度程序使用，但它可能正处于其他状态之间的过渡中。P 属于空闲列表或正在过渡其状态的任何其他实体。其运行队列为空。                                                                                                                                               |
| _Prunning    | 1        | 表示 P 属于某个 M 并用于运行用户代码或调度程序。只有拥有此 P 的 M 允许从 _Prunning 更改 P 的状态。M 可以将 P 过渡到 _Pidle（如果没有更多工作要做），_Psyscall（进入系统调用时）或 _Pgcstop（用于 GC 停顿）。M 还可以直接将 P 的所有权移交给另一个 M（例如，以调度锁定的 G）。                                                            |
| _Psyscall    | 2        | 表示 P 当前未运行用户代码。它与某个 M 在系统调用中具有亲和性，但不由该 M 拥有，并且可能被其他 M 抢占。这类似于 _Pidle，但使用轻量级过渡并保持 M 亲和性。离开 _Psyscall 必须使用 CAS 完成，以便抢占或重新获取 P。请注意，存在 ABA 风险：即使 M 在系统调用后成功 CAS 回其原始 P 为 _Prunning，它也必须理解 P 可能在此期间被其他 M 使用过。 |
| _Pgcstop     | 3        | 表示 P 已停止用于 STW 并由停止世界的 M 拥有。停止世界的 M 继续使用其 P，即使在 _Pgcstop 中也是如此。从 _Prunning 过渡到 _Pgcstop 会导致 M 释放其 P 并进行休眠。P 保留其运行队列，startTheWorld 将在具有非空运行队列的 P 上重新启动调度程序。                                                                                             |
| _Pdead       | 4        | 表示 P 不再使用（GOMAXPROCS 减少）。如果 GOMAXPROCS 增加，我们会重用 P。已死亡的 P 大部分资源已被剥离，尽管仍有一些资源保留（例如，跟踪缓冲区）。                                                                                                                                                                                        |

:::

::: important 调度器策略

| 策略       | 描述                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 抢占式调度 | 在协程中需要一个协程主动让出 CPU 下一个协程才能使用 CPU， 而 Goroutine 规定一个 Goroutine 每次最多只能占用 10ms 的 CPU，然后就要切换到下一个, 防止其他协程长时间不被执行                                                                                                                                                                    |
| 复用线程   | Go 语言的调度器会复用线程，而不是每次都创建新的线程，这样可以减少线程创建和销毁的开销，提高性能。 <br>- **工作偷取(Work stealing)**:当 `M` 没有可运行的 `G` 时，会尝试从其他线程绑定的 `P` 的本地队列中偷取一半的 `G`来运行，而不是销毁 `M` <br>- **挂起机制(Hand off)**: 当 `G` 由于系统调用而阻塞时, `M` 会释放绑定的 `P` 供其他 `M` 使用 |
| 并行       | 通过 `GOMAXPROCS` 配置 `P` 的数量，从而实现并行执行，`P` 的数量决定了并行度，`P` 的数量等于 CPU 核数时，可以实现最大并行度。                                                                                                                                                                                                                |
| 全局队列   | 当本地队列中没有可运行的 `G`， `M` 会先去全局队列尝试获取 `G`， 若全局队列中没有待运行的 `G` 则会尝试去其他 `P` 的本地队列中偷取 `G`                                                                                                                                                                                                        |

:::

### GMP 调度流程

![schedule](/assets/image/article/concept/gofunc-schedule.png)

::: info Goroutine 调度流程

- 创建一个 `G`

如果本地队列没满，则随机放入一个未满的本地队列，否则放入全局队列。

- 执行 `G`

`P` 会获取一个 `G` 在 `M` 中执行，若 `G` 产生 `systemCall` 阻塞，则会将 `M` 放入休眠队列，并从休眠队列中取出一个 `M` 接管 `P` 执行，若休眠队列为空则创建一个新的 `M` 来接管 `P`。

- 获取 `G`

若本地队列中 `G` 已经执行完，则尝试从从全局队列中获取 `G`，若全局队列中没有可运行的 `G`， 则从其他 `P` 的本地队列中偷取 `G`

:::

::: tip 常见的阻塞

- `I/O` `Select`
- `Block on syscall`
- `Channel`
- `Mutex`
- `Sleep`
- `runtime.Gosched()`

:::


### M 的生命周期

![Scheduler Lifetime](/assets/image/article/concept/scheduler-lifetime.png)

::: info M0 和 G0

| **对象** | **描述**                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------------- |
| M0       | `M0` 是主线程创建的第一个线程，负责创建和运行第一个 `G`,  存储在 `runtime.mO` 中，不需要在 `Heap` 上分配 |
| G0       | `M0` 创建之后会立即创建一个 `G0` , 这个 `G0` 只用于调度 `G`， 不执行逻辑代码， `G0` 和 `M0` 对应         |


:::
