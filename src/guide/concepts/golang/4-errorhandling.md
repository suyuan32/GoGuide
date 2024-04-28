---
order: 4
title: '错误处理'
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: 错误处理, golang, error
---

## 接口

golang 提供了 `error` 类型的接口

```go
type error interface {
    Error() string
}
```

只要结构体实现了 `Error()` 方法就属于 `error` 类型

## 创建错误

golang 提供了多种创建 `error` 的方法

我们可以使用 `errors.New()`  `fmt.Errorf()` 来创建错误

::: details 例子

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
    // 使用 New 创建错误
	err1 := errors.New("first error")

    // 使用 fmt 创建错误
	err2 := fmt.Errorf("second %s", "error")

	fmt.Println(err1, err2)
}

```

:::

## errors.Join

在 go 1.20 提供了 `errors.Join` 方法将多个 `error` 组合成一个数组

::: details 例子

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	// 使用 New 创建错误
	err1 := errors.New("first error")

	// 使用 fmt 创建错误
	err2 := fmt.Errorf("second %s", "error")

	// 使用 join 将多个 error 合并
	err3 := errors.Join(err1, err2)

	fmt.Println(err1, err2) 
	// 结果: first error second error
	
	fmt.Println(err3) 
	// 结果： 
	// first error
	// second error
}
```

:::

## errors.Is

使用 `errors.Is()` 方法可以判断当前 `error` 是否包含目标类型的 `error`

::: details 例子

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	// 使用 New 创建错误
	err1 := errors.New("first error")

	// 使用 fmt 创建错误
	err2 := fmt.Errorf("second %s", "error")

	// 使用 join 将多个 error 合并
	err3 := errors.Join(err1, err2)

	fmt.Println(err1, err2) 
	// 结果: first error second error
	
	fmt.Println(err3) 
	// 结果： 
	// first error
	// second error

	// 使用 errors.Is() 判断错误是否是目标错误， err3 包含 err1 所以为 true
	fmt.Println(errors.Is(err1, err2))
	// 结果: false
	fmt.Println(errors.Is(err3, err1))
	// 结果： true
}
```

:::

## errors.As

使用 `errors.As()` 方法可以将 error 中第一个符合目标类型的错误赋值到目标对象

::: details 例子

```go
package main

import (
	"errors"
	"fmt"
)

type NormalErr struct {
	e string
}

func (t NormalErr) Error() string {
	return t.e
}

func main() {
	// 使用 New 创建错误
	err1 := errors.New("first error")

	// 创建 T
	err2 := NormalErr{"second error"}

	// 使用 join 将多个 error 合并
	err3 := errors.Join(err1, err2)

	var err4 NormalErr

	errors.As(err3, &err4)

	fmt.Println(err4)
	// 结果： second error
}
```

:::