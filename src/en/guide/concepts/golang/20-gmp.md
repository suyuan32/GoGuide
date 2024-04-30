---
order: 20
title: GMP Scheduler
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: golang, goroutine, process, thread, scheduler
---

## Scheduler

::: info Relationship Between Go Programs and Operating Systems

![os-runtime-program](/assets/image/article/concept/scheduler.png)

From the diagram above, we can see that the operating system kernel interacts with our logical code through the runtime. The runtime calls operating system system calls, which in turn interact with hardware resources. This orchestration allows our program to run.

:::

The so-called **scheduler** is responsible for managing the execution of goroutines. It ensures the order of execution and concurrency by following certain strategies. The underlying model used by the scheduler is the **GMP model**.

### GMP Model

The GMP model is the core model of the Go language scheduler. It serves as the foundation for Go's scheduler. The GMP model consists of the following components:

| **Component** | **Description**                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| G (Goroutine) | Represents a goroutine, including its stack and relevant context information.                                                                    |
| M (Machine)   | Represents an execution thread responsible for mapping goroutines to operating system threads. Each M has its own call stack and register state. |
| P (Processor) | Represents a logical processor that maintains a queue of runnable goroutines. Each M is associated with a P.                                     |

![gmp](/assets/image/article/concept/gmp.png)

::: tip
- **Global Queue (GRQ)**: Stores all goroutines waiting to run.
- **Local Queue (LRQ)**: Each P has its own local queue, which holds the currently running and waiting goroutines. Each P's local queue can hold up to 256 goroutines. When a new goroutine is created, it is initially placed in the local queue. If the local queue is full, half of its contents are moved to the global queue.
:::

::: warning
- **Number of Ps**: The number of Ps is fixed and determined by `GOMAXPROCS`, which represents the maximum concurrency (usually set to the number of CPU cores).
- **Number of Ms**: The number of Ms is dynamic and adjusted by the scheduler based on the current workload. By default, Go sets a high limit (around 10,000), but in practice, the actual limit is effectively unlimited. An M needs to acquire a P to execute tasks. If no P is available, the M blocks. If a P's local queue is empty, the M fetches goroutines from the global queue. If the global queue is also empty, the M steals half of the goroutines from another random P's local queue.
:::

::: info Abbreviations
- **LRQ** (Local Runnable Queue): Refers to the local queue.
- **GRQ** (Global Runnable Queue): Refers to the global queue.
:::

::: details GMP Data Structures

- `G` Data Structure [Source Code](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L422)
    - [Important Fields](/guide/concepts/golang/9-goroutine.html#goroutine-fields)
    - [Nine Goroutine States](/guide/concepts/golang/9-goroutine.html#goroutine-states)

- `M` Data Structure [Source Code](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L552)

> **Important Fields**

| **Field** | **Type** | **Description**                    |
| --------- | -------- | ---------------------------------- |
| g0        | \*g      | Initial goroutine for each M       |
| curg      | \*g      | Currently executing `G`            |
| p         | puintptr | Bound P                            |
| nextp     | puintptr | Preferred P when M wakes up        |
| id        | int64    | M's ID                             |
| spinning  | bool     | Indicates if M is spinning         |
| park      | note     | Used for M's sleep and wakeup      |
| alllink   | \*m      | M in the allm list                 |
| schedlink | muintptr | Next M in the M list               |
| mcache    | \*mcache | M cache size for memory allocation |
| lockedg   | guintptr | Pointer to locked `G`              |
| freelink  | \*m      | M in sched.freem list              |


- `P` Data Structure [Source Code](https://github.com/golang/go/blob/master/src/runtime/runtime2.go#L422)

> **Important Fields**

| **Field**      | **Type**      | **Description**                                                     |
| -------------- | ------------- | ------------------------------------------------------------------- |
| id             | int32         | Unique identifier for the `P`.                                      |
| status         | uint32        | Status of the `P`.                                                  |
| link           | puintptr      | Next `P` in the `P` list.                                           |
| m              | muintptr      | The `M` that owns this `P`.                                         |
| mcache         | \*mcache      | Local cache for memory allocation within the `P`.                   |
| runqhead       | uint32        | Head of the `G` queue for locally runnable `G`s (lock-free access). |
| runqtail       | uint32        | Tail of the `G` queue for locally runnable `G`s (lock-free access). |
| runq           | [256]guintptr | Queue of locally runnable `G`s (up to 256 elements).                |
| runnext        | guintptr      | Runnable `G` with higher priority than those in `runq`.             |
| gFree          | struct        | Linked list of dead `G`s; used when acquiring a `G`.                |
| gcBgMarkWorker | guintptr      | (Atomic) Used for background marking during GC.                     |
| gcw            | gcWork        | Work structure for GC.                                              |

**Five States of `P`**

| **State Field** | **Number** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Pidle          | 0          | Indicates that the `P` is currently not used for running user code or scheduling. Typically, it resides on the idle P list and is available for the scheduler, but it might be transitioning between other states. The `P` belongs to either the idle list or any other entity in transition to its state. Its run queue is empty.                                                                                                                                                                                                                                          |
| _Prunning       | 1          | Indicates that the `P` belongs to a specific `M` and is used for running user code or scheduling. Only the `M` that owns this `P` is allowed to change the `P` from _Prunning. The `M` can transition the `P` to _Pidle (if there's no more work), _Psyscall (when entering a system call), or _Pgcstop (used for GC pauses). The `M` can also directly transfer ownership of the `P` to another `M` (e.g., for scheduling locked `G`s).                                                                                                                                    |
| _Psyscall       | 2          | Indicates that the `P` is currently not running user code. It has affinity with a specific `M` during system calls but is not owned by that `M` and can be preempted by other `M`s. Similar to _Pidle, but with lightweight transitions and maintained M affinity. Leaving _Psyscall must be done using CAS to allow preemption or reacquisition of the `P`. Note that there's an ABA risk: even if the `M` successfully CASes the original `P` back to _Prunning after a system call, it must understand that the `P` might have been used by other `M`s during this time. |
| _Pgcstop        | 3          | Indicates that the `P` has stopped for STW (stop-the-world) and is owned by an M in the stop world. The M in the stop world continues to use its P, even during _Pgcstop. Transitioning from _Prunning to _Pgcstop causes the M to release its P and go to sleep. The P retains its run queue, and startTheWorld will restart the scheduler on a P with a non-empty run queue.                                                                                                                                                                                              |
| _Pdead          | 4          | Indicates that the `P` is no longer in use (due to decreasing GOMAXPROCS). If GOMAXPROCS increases, we reuse the P. Most resources associated with the dead P are reclaimed, although some resources (such as trace buffers) are still retained.                                                                                                                                                                                                                                                                                                                            |




::: important Scheduler Strategies

| Strategy              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Preemptive Scheduling | In goroutines, a goroutine must voluntarily yield the CPU for the next goroutine to use it. Goroutines in Go are limited to using the CPU for a maximum of 10ms, after which they are preempted to allow other goroutines to run. This prevents any single goroutine from monopolizing the CPU for an extended period.                                                                                                                                       |
| Thread Reuse          | Go's scheduler reuses threads instead of creating new ones each time. This reduces the overhead of thread creation and destruction, improving performance. <br>- **Work Stealing**: When an `M` has no runnable `G`s, it tries to steal half of the `G`s from another `P`'s local queue instead of destroying the `M`. <br>- **Handoff Mechanism**: When a `G` blocks due to a system call, the associated `M` releases its bound `P` for other `M`s to use. |
| Parallelism           | By configuring the number of `P`s using `GOMAXPROCS`, Go achieves parallel execution. The number of `P`s determines the degree of parallelism, and setting it equal to the number of CPU cores achieves maximum parallelism.                                                                                                                                                                                                                                 |
| Global Queue          | When there is no executable `G` in the local queue, `M` will first go to the global queue to try to obtain `G`. If there is no `G` to be run in the global queue, `M` will try to steal it from the local queue of other `P` to take `G`                                                                                                                                                                                                                     |

:::

### GMP Scheduling Flow

![schedule](/assets/image/article/concept/gofunc-schedule.png)

::: info Goroutine Scheduling Flow

1. **Creating a `G`**:
   - If the local queue is not full, a newly created `G` is randomly placed in an unfilled local queue. Otherwise, it goes into the global queue.
2. **Executing a `G`**:
   - The `P` acquires a `G` and executes it within an `M`.
   - If the `G` blocks due to a system call, the `M` is put to sleep, and another `M` takes over the `P`. If no `M` is available, a new `M` is created.
3. **Fetching a `G`**:
   - If `G` in the local queue has been executed, try to obtain `G` from the global queue. If there is no executable `G` in the global queue, steal `G` from the local queue of other `P`

:::

::: tip Common Blocking Scenarios

- I/O (e.g., `select`)
- Blocking on a syscall
- Channels
- Mutexes
- Sleep
- `runtime.Gosched()`

:::


### Lifecycle of M

![Scheduler Lifetime](/assets/image/article/concept/scheduler-lifetime.png)

::: info M0 and G0

| **Object** | **Description**                                                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M0         | `M0` is the first thread created by the main thread. It is responsible for creating and running the first `G`. It resides in the global variable `runtime.m0` and does not require heap allocation. |
| G0         | After creating M0, a `G0` is immediately spawned. G0 is exclusively used for scheduling `G`s and does not execute any logic. Each M has its own G0. The global variable G0 corresponds to M0's G0.  |

