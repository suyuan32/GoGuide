---
order: 9
title: Goroutine
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, goroutine, 协程, 并发编程, 并发模型
---

## Goroutine | 协程

Goroutine 是 Go 语言的并发编程模型，它是一种轻量级的线程，由 Go 运行时管理，我们也可以称之为协程。

::: tip 优点
- **轻量级**：Goroutine 的栈空间初始大小只有 2KB，可以动态扩容，最大可达 1GB
- **快速启动**：Goroutine 的启动时间只有 1~2us
- **高效调度**：Goroutine 的调度器采用 M:N 模型，可以将 M 个 Goroutine 映射到 N 个 OS 线程上，实现高效调度
- **通信简单**：Goroutine 之间通过 Channel 进行通信，实现数据共享
- **无锁**：Goroutine 之间通过 Channel 进行通信，无需加锁
- **高并发**：Goroutine 可以轻松创建数十万个，实现高并发
- **高性能**：Goroutine 的调度器采用抢占式调度，实现高性能
:::

::: warning 
Goroutine 是 Golang 十分重要的特性，也是 Golang 的并发编程的核心，掌握 Goroutine 的使用和原理对于 Golang 的学习至关重要。对于编写高性能的并发程序，Goroutine 是一个非常好的选择。
:::

### 创建 Goroutine

由于 Goroutine 是 Golang 非常重视的基本功能，因此在 Golang 中创建异步 Goroutine 非常简单，只需要在函数调用前加上 `go` 关键字即可，比绝大部分的编程语言都要简单。

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    go func() {
        for {
            fmt.Println("running...")
            time.Sleep(time.Second)
        }
    }()

    time.Sleep(5 * time.Second)
}
```

使用 `go` 加上任意 `func` 即可创建一个 Goroutine，Goroutine 会在后台执行，不会阻塞主线程。

::: tip 如何停止 Goroutine
- **运行结束**：Goroutine 会在函数运行结束后自动结束
- **超时结束**：通过 `context.WithTimeout()` 或 `context.WithDeadline()` 可以设置 Goroutine 的超时时间
- **手动结束**：通过 `context.WithCancel()` 可以手动结束 Goroutine
- **通道结束**：通过 Channel 通信，可以结束 Goroutine
:::

### Goroutine 和 Channel

我们知道，无论是在线程还是协程，在运行的时候都会遇到共享数据或传递数据的情况，在 Golang 中，我们可以通过 Channel 来实现 Goroutine 之间的通信。

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan int)

    go func() {
        for {
            select {
            case <-ch:
                fmt.Println("exit")
                return
            default:
                fmt.Println("running...")
                time.Sleep(time.Second)
            }
        }
    }()

    time.Sleep(5 * time.Second)
    ch <- 1
}
```

在上面的例子中，我们创建了一个 Channel `ch`，在主线程中向 `ch` 中发送了一个数据，Goroutine 中通过 `select` 语句监听 `ch`，当 `ch` 中有数据时，Goroutine 会退出。

协程之间通过 Channel 通信的例子：

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)

	go sendData(ch)
	go getData(ch)

	time.Sleep(time.Second)
}

func sendData(ch chan string) {
	ch <- "Bilibili"
	ch <- "Youtube"
}

func getData(ch chan string) {
	var input string
	for {
		input = <-ch
		fmt.Printf("%s ", input)
	}
}

// 结果: Bilibili Youtube
```


## Goroutine 字段介绍

::: info
[源码](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L422)
:::

| 字段         | 说明                          |
| ------------ | ----------------------------- |
| goid         | Goroutine ID, 唯一标识符      |
| status       | Goroutine 状态， 如运行和阻塞 |
| stack        | Goroutine 栈空间              |
| gopc         | Goroutine PC 寄存器           |
| m            | Goroutine 所在的 M            |
| locked       | Goroutine 是否被锁定          |
| sched        | Goroutine 调度器              |
| atomicstatus | Goroutine 原子状态            |

::: details 例子
使用 runtime 包可以获取当前 Goroutine 的 ID：
```go
goroutineID := runtime.GoID()
```
:::

## Goroutine 的9种状态类型

| **字段**          | **编号** | **描述**                                                                                                                                                                                                                                                                                                  |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Gidle            | 0        | 表示此 Goroutine 刚刚分配并且尚未初始化。                                                                                                                                                                                                                                                                 |
| _Grunnable        | 1        | 表示此 Goroutine 在运行队列中。它当前不执行用户代码。堆栈不属于它。                                                                                                                                                                                                                                       |
| _Grunning         | 2        | 表示此 Goroutine 可能执行用户代码。堆栈由此 Goroutine 拥有。它不在运行队列中。它被分配给一个 M 和一个 P。                                                                                                                                                                                                 |
| _Gsyscall         | 3        | 表示此 Goroutine 正在执行系统调用。它不执行用户代码。堆栈由此 Goroutine 拥有。它不在运行队列中。它被分配给一个 M。                                                                                                                                                                                        |
| _Gwaiting         | 4        | 表示此 Goroutine 在运行时被阻塞。它不执行用户代码。它不在运行队列中，但应该在某个地方记录（例如，一个通道等待队列），以便在必要时可以准备就绪。堆栈不属于它，除非在适当的通道锁下，通道操作可能读取或写入堆栈的某些部分。否则，在 Goroutine 进入 _Gwaiting 后访问堆栈是不安全的（例如，它可能会被移动）。 |
| _Gmoribund_unused | 5        | 目前未使用，但在 gdb 脚本中硬编码。                                                                                                                                                                                                                                                                       |
| _Gdead            | 6        | 表示此 Goroutine 当前未使用。它可能刚刚退出，位于空闲列表上，或者刚刚初始化。它不执行用户代码。它可能具有堆栈，也可能没有。G 和其堆栈（如果有）由正在退出 G 的 M 或从空闲列表中获取 G 的 M 拥有。                                                                                                         |
| _Genqueue_unused  | 7        | 目前未使用。                                                                                                                                                                                                                                                                                              |
| _Gcopystack       | 8        | 表示此 Goroutine 的堆栈正在移动。它不执行用户代码，也不在运行队列中。堆栈由将其放入 _Gcopystack 的 Goroutine 拥有。                                                                                                                                                                                       |
| _Gscan            | 0x1000   | 与除 _Grunning 之外的其他状态组合表示 GC 正在扫描堆栈。Goroutine 不执行用户代码，堆栈由设置 _Gscan 位的 Goroutine 拥有。                                                                                                                                                                                  |


