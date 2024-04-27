---
order: 6
title: "切片"
head:
  - - meta
    - name: keywords
      content: golang, 切片, slice, 创建切片, 切片截取, 长度及容量
---

## 创建切片

有三种方式可以创建切片

```go
package main

import "fmt"

func main() {
	// 第一种方式： 直接声明
	var dataSlice []string

	// 第二种方式： 直接初始化
	dataSlice1 := []string{}

	// 第三种方式： 使用 make
	dataSlice2 := make([]string, 10)

	fmt.Println(dataSlice, dataSlice1, dataSlice2)
}
```

可以在创建时直接将数据初始化

```go
dataSlice1 := []string{"Jack", "Mike"}
```

## 切片截取

`arr[beginIndex:endIndex]` 可以截取切片，包含 beginIndex， 不包含 endIndex 下标的数据。

```go
data := []int{0,1,2,3,4,5}

fmt.Println(data[2:4])

// 结果
// [2 3]
```

## 长度及容量

使用 `len()` 获取切片长度， 使用 `cap()` 获取切片容量

::: details 例子

```go
package main

import "fmt"

func main() {
	// 创建长度为 5 ， 容量为 9 的切片
	data := make([]int, 5, 9)

	fmt.Println(data, len(data), cap(data))
}

// 结果：
// [0 0 0 0 0] 5 9
```

:::

## 追加数据

使用 `append()` 函数追加数据

::: details 例子

```go
package main

import "fmt"

func main() {
	data := []int{0,1,2}

	// 追加一条数据
	data1 := append(data, 3)

	// 追加多条数据
	data2 := append(data, 4, 5, 6)

	fmt.Println(data)
	fmt.Println(data1)
	fmt.Println(data2)
}

// 结果：
// [0 1 2]
// [0 1 2 3]
// [0 1 2 4 5 6]

```

:::

## 克隆切片

我们知道切片属于引用类型，如果将一个切片赋值给另一个变量，实际上共用一个内存地址的数据，如果想创建两个相同数据的切片，可以使用 `copy()` 方法

::: details 例子

```go
package main

import "fmt"

func main() {
	data := []int{0,1,2}

	// 创建一个长度相同的切片
	data1 := make([]int, len(data))

	// 复制 data 的数据到 data1
	copy(data1, data)

	// 给 data1 添加数据
	data1 = append(data1, 3, 4, 5)

	fmt.Println(data)
	fmt.Println(data1)
	
	// 会发现 data 没被改变
}

// 结果：
// [0 1 2]
// [0 1 2 3 4 5]
```

:::