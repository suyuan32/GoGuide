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

    time.Sleep(1e9)
}

func sendData(ch chan string) {
    ch <- "BiliBili"
    ch <- "Youtube"
}

func getData(ch chan string) {
    var input string
    for {
        input = <-ch
        fmt.Printf("%s ", input)
    }
}

// Output: BiliBili Youtube
```