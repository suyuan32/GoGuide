---
order: 8
title: "Context"
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, context, goroutine, 超时管理, 数据传递, 终止协程, Done, Deadline, Err, Value
---

## 介绍

`Context` 是 golang 中十分重要的接口，用于定义 `goroutine` 中的上下文信息，`context` 常用于以下几种情况：

- 数据传递： 在多个 `goroutine` 中传递数据
- 超时管理： 通过配置超时时间，可以方便地配置协程的终止时间
- 终止协程： 通过使用 `cancel()` 方法，协程可以很方便地终止，可以批量管理多个协程的终止

### Context 接口

```go
// A Context carries a deadline, a cancelation signal, and other values across
// API boundaries.
//
// Context's methods may be called by multiple goroutines simultaneously.
type Context interface {

    Done() <-chan struct{}

    Deadline() (deadline time.Time, ok bool)
    
    Err() error
    
    Value(key interface{}) interface{}
}
```

## 根节点和派生节点

我们可以为 `context` 创建根节点和派生节点，为树形结构，当根节点被 `cancel()` 或超时终止时，它的所有派生节点也会被终止，根节点的数据也会被所有派生节点共享。

![context 结构](/assets/image/article/concept/context.png)

### 创建根节点

```go
ctx := context.Background() // 创建空白 context

ctx2 := context.TODO() // TODO 同样是空白 context
```

### 创建派生节点

使用 `context.WithXXX()` 创建派生 `context`

```go
package main

import (
	"context"
	"fmt"
)

func main() {
	ctx := context.WithValue(context.Background(), "base", "baseVal")

	ctx1 := context.WithValue(ctx, "ctx1", "ctx1Val")
	ctx2 := context.WithValue(ctx, "ctx2", "ctx2Val")
	ctx3 := context.WithValue(ctx, "ctx3", "ctx3Val")

	fmt.Println(ctx)
	fmt.Println(ctx1)
	fmt.Println(ctx2)
	fmt.Println(ctx3)
}

// 结果：
// context.Background.WithValue(type string, val baseVal)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx1Val)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx2Val)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx3Val)
```

## WithValue()

`context.WithValue()` 可以用于创建派生节点并添加键值数据，同时保留父级 context 所有的数据

## WithDeadline() WithTimeout()

`context.WithDeadline()` 和 `context.WithTimeout()` 可以用来创建带有超时控制的 `context`

::: warning
`WithTimeout(1*time.Second)` 等同于 `WithDeadline(time.Now().Add(1*time.Second))`
:::

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	go func(ctx1 context.Context) {
		for {
			select {
			case <-ctx1.Done():
				fmt.Println("time out")
				return
			default:
				fmt.Println("running...")
				time.Sleep(time.Second)
			}
		}
	}(ctx)

	time.Sleep(5 * time.Second)
}

// 结果：
// running...
// running...
// running...
// time out

```


## WithCancel()

使用 `WithCancel()` 可以创建手动终止的 `context` 执行 `cancel()` 即可手动终止

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go func(ctx1 context.Context) {
		for {
			select {
			case <-ctx1.Done():
				fmt.Println("canceled")
				return
			default:
				fmt.Println("running...")
				time.Sleep(time.Second)
			}
		}
	}(ctx)

	time.Sleep(3*time.Second)
	cancel()
	time.Sleep(5 * time.Second)
}

// 结果：
// running...
// running...
// running...
// canceled

```