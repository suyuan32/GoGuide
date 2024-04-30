---
order: 9
title: Goroutine
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, goroutine, 协程, 并发编程, 并发模型
---


## Goroutine | Coroutine

Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a coroutine.

::: tip Advantages
- **Lightweight**: The initial stack size of a Goroutine is only 2KB, but it can dynamically grow up to 1GB.
- **Fast Startup**: Goroutines start quickly, typically within 1 to 2 microseconds.
- **Efficient Scheduling**: The Goroutine scheduler uses an M:N model, mapping M Goroutines to N OS threads for efficient scheduling.
- **Simple Communication**: Goroutines communicate with each other using channels, enabling data sharing.
- **Lock-Free**: Goroutines communicate via channels without the need for locks.
- **High Concurrency**: You can easily create hundreds of thousands of Goroutines, achieving high concurrency.
- **High Performance**: The Goroutine scheduler uses preemptive scheduling, resulting in high performance.
:::

::: warning
Goroutine is a crucial feature in Go and forms the core of Go's concurrency programming. Understanding how to use and reason about Goroutines is essential for learning Go. For writing high-performance concurrent programs, Goroutines are an excellent choice.
:::

### Creating Goroutines

Creating asynchronous Goroutines in Go is straightforward due to its emphasis on this fundamental feature. You only need to prefix a function call with the `go` keyword, which is simpler than in most other programming languages.

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

By using `go` before any function call, you create a Goroutine that runs in the background without blocking the main thread.

::: tip Stopping Goroutines
- **Natural Termination**: Goroutines automatically end when the function execution completes.
- **Timeout Termination**: You can set a timeout for a Goroutine using `context.WithTimeout()` or `context.WithDeadline()`.
- **Manual Termination**: Manually terminate a Goroutine using `context.WithCancel()`.
- **Channel Termination**: Use channels for communication between Goroutines to signal termination.
:::

### Goroutines and Channels

In Go, communication between Goroutines often involves sharing data. Channels provide a way for Goroutines to communicate with each other.

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

In the example above, we create a channel `ch`. The main thread sends data to `ch`, and the Goroutine listens to `ch` using a `select` statement. When data arrives in `ch`, the Goroutine exits.

Here's another example of communication between Goroutines using channels:

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

// Output: Bilibili Youtube
```

## Goroutine Field Descriptions

::: info
[Source Code](https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L422)
:::

| Field        | Description                                  |
| ------------ | -------------------------------------------- |
| goid         | Goroutine ID, a unique identifier            |
| status       | Goroutine status, such as running or blocked |
| stack        | Goroutine stack space                        |
| gopc         | Goroutine PC register                        |
| m            | The M where the Goroutine resides            |
| locked       | Whether the Goroutine is locked              |
| sched        | Goroutine scheduler                          |
| atomicstatus | Goroutine atomic status                      |

::: details Example
You can use the `runtime` package to obtain the current Goroutine ID:
```go
goroutineID := runtime.GoID()
```
:::

## 9 Goroutine Status Types

| **Field**         | **Number** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Gidle            | 0          | Indicates that this Goroutine was just allocated and has not yet been initialized.                                                                                                                                                                                                                                                                                                                                                                      |
| _Grunnable        | 1          | Represents a Goroutine on a run queue. It is not currently executing user code. The stack is not owned.                                                                                                                                                                                                                                                                                                                                                 |
| _Grunning         | 2          | Indicates that this Goroutine may execute user code. The stack is owned by this Goroutine. It is not on a run queue. It is assigned an M and a P.                                                                                                                                                                                                                                                                                                       |
| _Gsyscall         | 3          | Represents a Goroutine executing a system call. It is not executing user code. The stack is owned by this Goroutine. It is not on a run queue. It is assigned an M.                                                                                                                                                                                                                                                                                     |
| _Gwaiting         | 4          | Represents a Goroutine blocked in the runtime. It is not executing user code. It is not on a run queue, but should be recorded somewhere (e.g., a channel wait queue) so it can be ready()d when necessary. The stack is not owned, except that a channel operation may read or write parts of the stack under the appropriate channel lock. Otherwise, it is not safe to access the stack after a Goroutine enters _Gwaiting (e.g., it may get moved). |
| _Gmoribund_unused | 5          | Currently unused, but hardcoded in gdb scripts.                                                                                                                                                                                                                                                                                                                                                                                                         |
| _Gdead            | 6          | Indicates that this Goroutine is currently unused. It may have just exited, be on a free list, or be just being initialized. It is not executing user code. It may or may not have a stack allocated. The G and its stack (if any) are owned by the M that is exiting the G or that obtained the G from the free list.                                                                                                                                  |
| _Genqueue_unused  | 7          | Currently unused.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| _Gcopystack       | 8          | Indicates that this Goroutine's stack is being moved. It is not executing user code and is not on a run queue. The stack is owned by the Goroutine that put it in _Gcopystack.                                                                                                                                                                                                                                                                          |
| _Gscan            | 0x1000     | When combined with any of the above states other than _Grunning, it indicates that GC is scanning the stack. The Goroutine is not executing user code, and the stack is owned by the Goroutine that set the _Gscan bit.                                                                                                                                                                                                                                 |