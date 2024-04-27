---
order: 7
title: "信道"
head:
  - - meta
    - name: keywords
      content: 信道, channel, golang, 创建信道, 发送数据, 接收数据, 关闭信道
---

## 介绍

`channel` 是一个信道，用于端到端数据的通信，常用于 `goroutine`  之间数据共享。

## 创建 channel

我们使用 `make` 来创建 `channel`

```go
ch1 := make(chan T) // 无缓冲

ch2 := make(chan T, 2) // 带缓冲
```

`T` 为数据类型。

::: warning
- 无缓冲区的信道会被阻塞直到数据被接收
- 有缓冲区的信道在发送的数据达到缓冲区大小后才会被阻塞
:::

## 发送接收数据

使用 `<-` 指向 channel 表示发送数据到该 channel, 如 `ch <- 10`

使用 `<-` 在 channel 左侧表示接收数据，如 `<-ch`

## 关闭 channel

使用 `close()` 关闭 `channel`

```go
close(ch)
```

::: warning
- 如果往一个已经 `close()` 的 `channel` 发送消息，会产生 `panic`

- 读取已关闭的 `channel` 可以获得零值, 若使用 `range` 读取 `channel`, 则 `close` 后会终止循环

我们可以使用 `val, ok := <- ch` 来判断是否是零值，若 `ok` 为 `false` 则信道已经 `close`
:::


## Select

通常我们会使用 `select` 来接收 `channel` 的数据, 还可以使用 `default` 设定默认执行的动作, `select` 可以同时接收多个 `channel` ，若多个 `channel` 同时发送过来数据，则会随机选择一个 `channel` 完成操作

```go
select {
    case <-ch1:  // 接收 ch1 的数据
        fmt.Println("ch1")  
    case <-ch2: // 接收 ch2 的数据
        fmt.Println("ch2")
    case val := <-ch3:
        fmt.Println(ch3) //接收 ch3 的数据并打印
    default:
        fmt.Println("default")
}
```

## 例子

定时器就是通过 `channel` 实现了定时结果的返回

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

## 注意事项

- 使用 `channel` 时要注意必须有接收数据端，注意避免死锁问题
