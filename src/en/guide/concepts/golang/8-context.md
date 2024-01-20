---
order: 8
title: "Context"
---

## Introduction

`Context` is a very important interface in Golang, used to define the context information in `goroutine`. `Context` is commonly used in the following situations:

- Data transfer: Transfer data among multiple `goroutines`.
- Timeout management: By setting a timeout, the termination time of the coroutine can be conveniently configured.
- Terminate coroutine: By using the `cancel()` method, the coroutine can be easily terminated, and multiple coroutines can be managed in batches.

### Context Interface

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

## Root Nodes and Derived Nodes

We can create root nodes and derived nodes for `context`, forming a tree structure. When the root node is `cancel()` or terminated due to timeout, all its derived nodes will also be terminated, and the data of the root node will be shared by all derived nodes.

![context structure](/assets/image/article/concept/context.png)

### Creating Root Nodes

```go
ctx := context.Background() // Create a blank context

ctx2 := context.TODO() // TODO is also a blank context
```

### Creating Derived Nodes

Use `context.WithXXX()` to create derived `context`

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

// Results：
// context.Background.WithValue(type string, val baseVal)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx1Val)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx2Val)
// context.Background.WithValue(type string, val baseVal).WithValue(type string, val ctx3Val)
```

## WithValue()

`context.WithValue()` can be used to create derived nodes and add key-value data, while retaining all data of the parent context.

## WithDeadline() WithTimeout()

`context.WithDeadline()` and `context.WithTimeout()` can be used to create a `context` with timeout control.

::: warning
`WithTimeout(1*time.Second)` is equivalent to `WithDeadline(time.Now().Add(1*time.Second))`
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

// Results：
// running...
// running...
// running...
// time out

```


## WithCancel()

Using `WithCancel()` can create a manually terminated `context`. Executing `cancel()` can manually terminate it.

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

// Results：
// running...
// running...
// running...
// canceled

```