---
order: 1
title: "基础"
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, 基础, 数据类型, 变量, 常量, 指针, 面试题, 面试
---


## 指针

### 什么是指针和指针变量?
::: details 答案
普通变量存储数据，而指针变量存储的是数据的地址。

- 学习指针，主要有两个运算符号`&`和`*`。
  1.  `&`：地址运算符，从变量中取地址
  2.  `*`：引用运算符，取地址中数据

```go
num := 99
fmt.Println(num) //输出: 99

ptr := &num
fmt.Println(ptr) //输出: 例如：0xc000086020

tamp := *ptr
fmt.Println(tamp) //输出: 99
```
:::

### 为什么使用指针？
::: details 答案

**意义一：容易编码**

指针在数据结构中起着重要的作用。通过指针，我们可以创建复杂的数据结构，如链表、树和图。指针可在数据结构中轻松地访问和操作节点之间的关系，从而实现高效的数据存储和检索。

指针可在函数之间传递数据的引用，而不是复制整个数据。这样可以节省内存空间，并提高程序的执行效率。通过传递指针，函数可以直接修改原始数据，而不需要返回值。


**意义二：节省内存**

指针可直接访问和修改内存中的数据，通过指针，我们可以在运行时动态地分配内存，以满足程序的需求，并在不需要时释放内存，避免内存泄漏。

指针可在程序运行时动态地分配内存。通过动态内存分配，我们可以根据需要分配和释放内存，从而提高程序的灵活性和效率。
:::

### 哪些对象可以获取地址，哪些不行？

::: details 答案

可以使用 `&` 获取内存地址的对象：

- 变量
- 指针
- 数组，切片及其内部数据
- 结构体指针
- Map
  
不能寻址的对象:

- 结构体
- 常量
- 字面量
- 函数
- map 非指针元素
- 数组字面量

:::


## 字面量

### 字面量是什么意思？
::: details 答案

- 下面这些基本类型赋值的文本，就是基本类型字面量。

| 基本类型 | 集合                                                                                     |
| -------- | ---------------------------------------------------------------------------------------- |
| 布尔类型 | `bool`                                                                                   |
| 字符串类 | `string`                                                                                 |
| 复数类型 | `complex64` `complex128`                                                                 |
| 浮点类型 | `float32` `float64`                                                                      |
| 整数类型 | `int8` `uint8` `int16` `uint16` `int32` `uint32` `int64` `uint64` `int` `uint` `uintptr` |

如 

```go
s := "hello world" // "hello world" 就是字面量
n := 10 // 10 就是字面量
```

- 未命名常量是一种特殊的常量，它没有具体的名称。这种常量只有值，没有与之关联的变量名。
  如下字符串都是字符串字面量，就是 **未命名常量**。
```
"hello，world"   "123"
```
:::

###  什么是有类型常量和无类型常量？
::: details 答案

- Golang 中，常量分为有类型常量和无类型常量。

```go
// 无类型常量
const A = 8

// 有类型常量
const colour string = "red"
```

- 当无类型的常量被赋值给一个变量的时，无类型的常量会转化成对应的类型

```go
package main

import "fmt"

func main() {
	const A = 8

	var t int16 = A
	fmt.Printf("%T ", t) 
}//输出： int16 
```
- 或者进行显式的转换

```go
package main

import "fmt"

func main() {
	const A int8 = 8

	var t int16 = int16(A) 
	fmt.Printf("%T ", t)  //输出： int16
}
```

- 而有类型常量在赋值的时，类型不同会报错

```go
package main

import "fmt"

func main() {
	const A int8 = 8

	var t int16 = A 
	fmt.Printf("type: %T \n", t) 
//出错： cannot use A (type int8) as type int16 in assignment
}
```
:::

###  不同字面量可能同值吗？
::: details 答案

- 一个值可存在多种字面量表示，如下十进制的数值 21，可由三种字面量表示

| 10进制 | 8进制 | 2进制       | 16进制 |
| ------ | ----- | ----------- | ------ |
| 21     | 0o25  | 0b0001 0101 | 0x15   |

```go
import "fmt"

func main() {
	fmt.Println(21 == 0o25)     
	fmt.Println(21 == 0x15 )    
	fmt.Println(21 == 0b0001 0101)  
}// 由运行结果得出他们相等
```
:::

###  字面量和变量的区别是什么？
::: details 答案

- 字面量，就是未命名的常量，跟常量一样，是不可寻址的。

- 举例如下

```go
func run() string {
	return "fast"
}

func main() {
	fmt.Println(&run())
}
```
```go
./main.go:10:14: cannot take the address of run()
```
- 若不用变量名承接，函数返回的一个字符串的文本值，也就是字符串字面量，
而这种字面量是不可寻址的，会出现错误。要用 `&` 寻址，须用变量名承接。

- 而下面这样就没错
```go
func run() string {
	return "fast"
}
func main() {
	t := run()
	fmt.Println(&t)
}
```
:::

###  什么是组合字面量？
::: details 答案

- 组合字面量就是把对象的定义和初始化放在了一起，进一步说，组合字面量是为结构体、数组、切片和map构造值，并且每次都会创建新值。它们由字面量的类型后紧跟大括号及元素列表。每个元素前面可以选择性的带一个相关key。


- 使用组合字面量会简单一些，而结构体、数组、切片和map的组合字面量方式如下。

- 结构体用组合字面量方式来定义和初始化
```go
type man struct {
	nationality string
	height int
}
func main() {
	// 声明和属性赋值
	su := man{
		nationality:   "China",
		height:    180,
	}
}
```

- 结构体用繁琐的常规方式如下
  
```go
type man struct {
	nationality string
	height int
}

func main() {
	// 声明对象
	var su man
	// 属性赋值
	su.nationality = "China"
	su.height = 180
}
```

- map用组合字面量方式的定义和初始化如下

```go
m := map[string]int {
	"math": 96,
	"Chinese": 90,
}
```

- 同样的，数组用组合字面量方式的定义和初始化可以如下
```go
colours := [3]string{"black", "red", "white"}
```

- 切片的组合字面量方式如下
```go
s := []string{"red", "black"} 
//会自动补上切片的容量和长度
```
:::

## Map

### 未初始化的 Map 可以读取 key 吗？

::: details 答案

可以的，未执行 `make` 初始化的 `map` 读取任何 `key` 都会返回当前类型的空值

```go
package main

import "fmt"

func main() {
	var m map[int]int

	fmt.Println(m[1])
}

// 结果：
// 0
```
:::

### 如果对未初始化的 Map 赋值会怎么样？

::: details 答案

会触发 `panic` 异常错误

```go
package main

func main() {
	var m map[int]int

	m[1] = 1
}

// 结果：
// panic: assignment to entry in nil map
```

:::

### 如果对未初始化的 Map 进行删除 key 的操作会发生什么？

::: details 答案

早期如果对未初始化的 `map` 进行 `delete` 操作会报 `panic` 错误， 现在的版本对于未初始化的 `map` 进行 `delete` 是不会报错的。

```go
package main

func main() {
	var m map[int]int

	delete(m, 1)
}

// 结果：
// 
```

:::


## 其他
###   Go 中的 `rune` 和 `byte` 有什么区别？
::: details 答案

在 Go 语言中，`byte` 和 `rune` 都是用于表示字符的类型，但它们之间有一些区别：

#### 类型不同：
-   `byte` ：字节，是 `uint8` 的别名类型
-   `rune` ：字符，是 `int32` 的别名类型

#### 存储的字符不同：
```go
//byte 用于表示 ASCII 码字符，只能存储 0-255 范围内的字符。
var a byte = 'Y'  // ASCII 码字符

//rune 用于表示 Unicode 字符，可以存储任意 Unicode 字符。
var b rune = '酥'  // Unicode 字符
```

#### 占用的字节大小不同：byte 占用1个字节，rune 占用4个字节。

```go
import "unsafe"
var a byte = 'Y'
var b rune = '酥'
fmt.Printf("a 占用 %d 个字节数\nb 占用 %d 个字节数", unsafe.Sizeof(a), unsafe.Sizeof(b))
// 输出: a 占用 1 个字节数 b 占用 4 个字节数
```

#### 表示的字符范围不同：
由于 byte 类型能表示的值是有限的，只有 2^8=256 个。所以想表示中文只能使用 rune 类型。

:::


###  Golang中的深拷贝和浅拷贝是什么？
::: details 答案

- 什么是拷贝？

拷贝最简单的一种形式如下
```go
a := 648
b := a    //把a 拷贝给 b
```

- 那什么是深拷贝和浅拷贝？

深浅拷贝也和类型有关

| 类型     | 详情                                              |
| -------- | ------------------------------------------------- |
| 引用类型 | `Slice` `Map` `Channels` `Interfaces` `Functions` |
| 值类型   | `String` `Array` `Int` `Struct` `Float` `Bool`    |

两种类型拷贝效果不同，先说我们比较熟悉的值类型。如什么是拷贝提问里易知，
若是值类型的话，在每一次拷贝后都会新申请一块空间存储值，拷贝后的两个值类型独立不影响。

- 以引用类型的切片(Slice)为例来讲讲深拷贝和浅拷贝

| 类型     | 例子                 |
| -------- | -------------------- |
| 深度拷贝 | copy(slice1, slice2) |
| 浅拷贝   | slice1 = slice2      |

 `浅拷贝`仅改变指针的指向，如下

```go
package main
import "fmt"

func main() {
	var slice1 = []int{7, 8, 9}     
	var slice2 = make([]int, 3)  //切片初始化
	slice2 = slice1    //浅拷贝改变了slice2的指向
	fmt.Println(slice1) 
	slice2[0] = 648  // 改变slice2[0]，slice1[0]也改变
	fmt.Println(slice2) 
	fmt.Println(slice1) 
}
```
输出结果如下

```go
[7 8 9]
[648 8 9]
[648 8 9]
```

- 所以对于切片来说，`浅拷贝`改变了它的地址。

- 而`深拷贝`会改变地址的内存内的数组值，如下

```go
package main
import "fmt"

func main() {
	var slice1 = []int{7, 8, 9}     
	var slice2 = make([]int, 3) //切片初始化
	copy(slice2, slice1)  //深拷贝会改变地址的内存内的数组值
	fmt.Println(slice2) 
	slice2[0] = 648  // 改变slice2[0]，slice1[0]不变
	fmt.Println(slice2) 
	fmt.Println(slice1) 
}
```
```go
[7 8 9]
[648 8 9]
[7 8 9]
```

:::


### `make` 和 `new` 有什么区别？

::: details 答案

`new` 用于给任意的类型分配内存地址，并返回该类型的指针，且初始化值为零值。

> `new` 并不是很常用

```go
package main

import "fmt"

func main() {
	s := new(string)
	n := new(int)

	fmt.Println(s) // 0xc00008a030
	fmt.Println(*s) // ""

	fmt.Println(n) // 0xc00000a0d8
	fmt.Println(*n) // 0
}
```

`make` 主要用于 `slices` `map` `channel` 初始化

```go
package main

import "fmt"

func main() {
	m := make(map[string]int, 10)

	fmt.Println(m) // map[]

}
```

:::

### 数组和切片有什么区别？

::: details 答案

- 数组的长度是固定的，在创建的时候就已经确定，且不可改变。切片的长度是动态的，会根据添加的数据自动扩容。
- 在函数参数传递时数据是值传递，切片是引用传递
- 切片有容量 （capacity） 参数，数组没有

:::

### 如果 `for range` 同时添加数据， `for range` 会无限执行吗？

::: details 答案

不会，在执行 `for range` 的时候实际遍历的是变量的副本，所以改变遍历的变量是不会有影响的

```go
package main

import "fmt"

func main() {
	n := []int{1, 2, 3}

	for  _, v := range n {
		n = append(n, v)
	}

	fmt.Println(n) // 结果： [1 2 3 1 2 3]
}
```

:::

### 多个 defer 的执行顺序是什么？

::: details 答案

执行的顺序类似堆栈，先进后出

```go
package main

import "fmt"

func main() {
	defer func() {
		fmt.Println(1)
	}()

	defer func() {
		fmt.Println(2)
	}()

	defer func() {
		fmt.Println(3)
	}()
}

// 结果：
// 3
// 2
// 1

```

:::

### 什么是数据溢出？

::: details 答案

在使用数字类型时如果数据达到最大值，则接下来的数据将会溢出，如 `uint` 溢出后会从 0 开始， `int` 溢出后会变为负数。

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	var n int8 = math.MaxInt8
	var m uint8 = math.MaxUint8

	n += 2
	m += 1

	fmt.Println(n) // -127
	fmt.Println(m) // 0
}
```

如何避免？

- 正数优先使用 uint, 范围更大
- 添加判断代码判断是否溢出 

:::

### 函数参数使用值还是指针？

::: details 答案

- 值传递

一般来说，对于常见的类型都可以使用值传递，值传递的优点是函数内对值的修改不会影响原始的变量，也不会出现并发问题。缺点是值传递会复制一份对应变量的副本，对内存占用会多一些，如果传入的结构体非常大，使用值传递就不太合适。

- 指针和引用传递

使用指针传递的好处是直接传递变量的地址，不需要额外的空间，缺点是并发操作时数据修改会影响到原始的数据。传入切片实际上就是传递切片的指针，避免重复拷贝，若传入数组则是值传递，会拷贝一份。

:::

### Golang 常见的字符串拼接方式有哪些？效率有何不同？

::: details 答案

| 方法              | 描述                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `+`               | 使用 `+` 操作符进行拼接会对遍历字符串，计算并开辟一个新的空间来存储合并后的字符串                                      |
| `fmt.Sprintf`     | 由于 `printf` 中可以使用 `%d` 等表示变量类型， `sprintf` 需要使用到反射来将不同的类型进行转换，效率较低                |
| `strings.Builder` | 使用 `WriteString()` 进行拼接操作，内部使用 `[]byte` 切片和 `unsafe.pointer` 指针实现                                  |
| `bytes.Buffer`    | `byte` 缓冲器，底层是 `[]byte` 切片                                                                                    |
| `strings.Join`    | `strings.Join` 是基于 `strings.Builder` 来实现的，在 `Join` 方法内调用了 `b.Grow(n)` 方法， 预分配了内存空间，较为高效 |

> [!important]
> `strings.Builder` 和 `bytes.Buffer` 有什么区别？
> 1. `strings.Builder` 会预分配空间，减少扩容，效率更高，适合较长的字符串拼接操作
> 2. `bytes.Buffer` 主要用于处理单个字符，拥有许多针对单个 `byte` 的操作，如删除替换等，这个是 `strings.Builder` 没有的。

> [!tip]
> 效率排行
> strings.Join ≈ strings.Builder > bytes.Buffer > "+" > fmt.Sprintf

:::

### Golang 中的 Tag 有什么用？

::: details 答案

Golang 的结构体字段可以添加各类自定义的 `Tag`, 在解析结构体时可以使用函数将 `Tag` 解析出来，方便进行操作，常见的 `Tag`:

- json: json tag 主要用于声明 json 在序列化和反序列化时的操作，如字段，可选等功能
- db: 主要用于声明数据库字段配置，用在 sqlx 中
- form: 常用在 web 框架中用于声明接收表单字段
- validate: 常用于校验器对于字段校验的配置

:::