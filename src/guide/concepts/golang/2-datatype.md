---
order: 2
title: '数据类型'
---

## 整数 (int)

整数有两种类型：

| 类型                         | 范围        | 介绍                      |
| ---------------------------- | ----------- | ------------------------- |
| 有符号数 (signed integers)   | `-∞` ~ `+∞` | 有符号数包含正数和负数    |
| 无符号数 (unsigned integers) | `0` ~ `+∞`  | 无符号数包含 0 和所有正数 |

> golang 中 `int` 开头为有符号数， `uint` 开头为无符号数

Golang 中的整数类型：


| 位                      | 类型             |
| ----------------------- | ---------------- |
| 8                       | `int8` `uint8`   |
| 16                      | `int16` `uint16` |
| 32                      | `int32` `uint32` |
| 64                      | `int64` `uint64` |
| 32 或 64 (基于系统架构) | `int` `uint`     |

同时还有两个等价类型

- `rune` : 等价于 `int32` , 用于存储 `Unicode` 字符
- `byte` ：等价于 `uint8` , 用于存储 `ASCII` 字符

## 浮点数 (float)

浮点数就是包含小数点的数字

| 位  | 类型      |
| --- | --------- |
| 32  | `float32` |
| 64  | `float64` |

## 复数 (complex)

复数包含虚数和实数，实数为浮点数

| 位                 | 类型         |
| ------------------ | ------------ |
| 32 位浮点数 + 虚数 | `complex64`  |
| 64 位浮点数 + 虚数 | `complex128` |

::: details 例子

```go
// 初始化一个复数
var complexData complex64 = complex(5, 3) // 等于： 5 + 3i

// 另一种初始化方式
complexData2 := 5 + 3i
```

:::

## 字符串 (string)

字符串由一连串的字符组成，类型名称为 `string`

**字符串一旦创建，无法修改**

::: details 例子

```go
package main
import "fmt"

func main() {
  var str string := "Hi! Jack"
  
  // 不能修改，以下注释的代码会报错
  // str[2] = 'c'

  fmt.Printf("%s",str)
}
```

:::


## 布尔类型 (bool)

布尔类型的值为 `true` 或 `false`, 类型名称为 `bool`

::: details 例子

```go
var isNumber bool

isNumber = true
isNumber = false
```

:::

## 数组 (array)

数组由一系列数据组成，可通过下标获取数据

**数组的容量一经创建就无法修改**

::: details 例子

```go
data := [5]int{1, 2, 3, 4, 5}
```

:::

## 切片 (slices)

切片是动态的数组，可根据数据自动调整容量大小

::: details 例子

```go
package main

import "fmt"

func main() {
	var data []int

	for i := 0; i < 10; i ++ {
		data = append(data, i)
	}

	fmt.Println(data)
}

// 结果
// [0 1 2 3 4 5 6 7 8 9]

```

:::

## Map (map)

`map` 是一种键值映射表，通过 `key` 获取对应的 `value`

`map` 的声明方式
```
map[KeyType]ValueType
```
`KeyType` 为 key 的数据类型 , `ValueType` 为 `value` 的数据类型

::: details 例子

```go
// 声明 map
var m map[string]int

// 使用 make 初始化 map
m = make(map[string]int)

// 设置值
m["path"] = 66

// 输出值
fmt.Println(m["path"])
```

:::

## 结构体 (struct)

结构体由一系列自定义的字段组成，可通过 `.` 获取字段内容

::: details 例子

```go
type Animal struct {
    Name string
}

a := Animal{
    Name: "Lucky"
}

fmt.Println(a.Name)
```

:::

## 指针 (pointer)

指针存储的是变量的内存地址，在变量前使用 `*` 定义为指针，使用 `&` 获取变量地址，通过指针可以在函数中修改函数外的数据

::: details 例子

```go
var num *int

n := 10

num = &n
```

:::

## 零值表

| **类型**                        | **零值**                |
| ------------------------------- | ----------------------- |
| uint/uint8/uint16/uint32/uint64 | 0                       |
| int/int8/int16/int32/int64      | 0                       |
| float32/float64                 | 0                       |
| complex64/complex128            | 0+0i                    |
| bool                            | false                   |
| uintptr                         | 0                       |
| byte                            | 0                       |
| rune                            | 0                       |
| string                          | ""                      |
| struct                          | 内部属性全部是其对应0值 |
| interface                       | nil                     |
| slice                           | nil                     |
| map                             | nil                     |
| chan                            | nil                     |
| func                            | nil                     |
| pointer                         | nil                     |
