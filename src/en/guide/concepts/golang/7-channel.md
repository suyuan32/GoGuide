---
order: 7
title: "Channel"
head:
  - - meta
    - name: keywords
      content: channel, golang, goroutine, concurrency, create channel, send data, receive data, close channel
---

## Introduction

A `channel` is a conduit for end-to-end data communication, often used for data sharing between `goroutines`.

## Creating a channel

We use `make` to create a `channel`

```go
ch1 := make(chan T) // Unbuffered

ch2 := make(chan T, 2) // Buffered
```

`T` is the data type.

::: warning
- An unbuffered channel will be blocked until the data is received
- A buffered channel will be blocked when the sent data reaches the buffer size
:::

## Sending and receiving data

Using `<-` pointing to the channel means sending data to that channel, such as `ch <- 10`

Using `<-` on the left side of the channel means receiving data, such as `<-ch`

## Closing a channel

Use `close()` to close a `channel`

```go
close(ch)
```

::: warning
- If you send a message to a `channel` that has already been `close()`, it will cause a `panic`

- Reading from a closed `channel` can get a zero value, if using `range` to read `channel`, then `close` will terminate the loop

We can use `val, ok := <- ch` to determine whether it is a zero value, if `ok` is `false` then the channel is already `close`
:::


## Select

We usually use `select` to receive `channel` data, you can also use `default` to set the default action, `select` can receive multiple `channel` at the same time, if multiple `channel` send data at the same time, it will randomly select a `channel` to complete the operation

```go
select {
    case <-ch1:  // Receive ch1 data
        fmt.Println("ch1")  
    case <-ch2: // Receive ch2 data
        fmt.Println("ch2")
    case val := <-ch3:
        fmt.Println(ch3) //Receive ch3 data and print
    default:
        fmt.Println("default")
}
```

## Example

The timer is implemented through `channel` to return the timing result

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.NewTicker(3*time.Second)
	fmt.Println("start")
	<-t.C
	fmt.Println("finish")
}

```

## Precautions

- When using `channel`, be aware that there must be a data receiving end to avoid deadlock problems