---
order: 1
title: "基础"
---

## Golang 基础问题

### 指针

#### 什么是指针和指针变量?
<details> <summary>展开查看</summary>
普通变量存储数据，而指针变量存储的是数据的地址。

- 学习指针，主要有两个运算符号`&`和`*`。


-   `&`：地址运算符，从变量中取地址

```go
// 定义普通变量并打印
num := 99
fmt.Println(num) //output: 99

ptr := &num
fmt.Println(ptr) //output: 例如：0xc000086020
```

-   `*`：引用运算符，取地址中数据

```go
tamp := *ptr
fmt.Println(tamp) //output: 99
```
</details>

#### 为什么使用指针？
<details> <summary>展开查看</summary>

**意义一：容易编码**

指针在数据结构中起着重要的作用。通过指针，我们可以创建复杂的数据结构，如链表、树和图。指针可在数据结构中轻松地访问和操作节点之间的关系，从而实现高效的数据存储和检索。

指针可在函数之间传递数据的引用，而不是复制整个数据。这样可以节省内存空间，并提高程序的执行效率。通过传递指针，函数可以直接修改原始数据，而不需要返回值。


**意义二：节省内存**

指针可直接访问和修改内存中的数据，通过指针，我们可以在运行时动态地分配内存，以满足程序的需求，并在不需要时释放内存，避免内存泄漏。

指针可在程序运行时动态地分配内存。通过动态内存分配，我们可以根据需要分配和释放内存，从而提高程序的灵活性和效率。
</details>



#### 对象选择器自动解引用怎么用？
<details> <summary>展开查看</summary>

从结构体实例对象中获取值，可用 `.` ，此符号为 **选择器**。

- 此做法可省去 `*` 操作，选择器 `.` 会直接解引用，示例如下

```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
	fmt.Println(p1.Name)  
}
```
- 过去通常如下
```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
  fmt.Println((*p1).Name)  
}
```

- 还有可省去 `*` 操作，选择器 `.` 会直接解引用，示例如下

```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
	fmt.Println(p1.Name)  
}
```

- 而可像下面这样
```go
type animal struct {
	name string
}

func (p *animal) Say() {
	fmt.Println(p.name)
}
```

- 不必像下面这样
```go
type animal struct {
	name string
}

func (p *animal) Say() {
	fmt.Println((*p).name)
}
```
</details>

### 字面量

#### 字面量是什么意思？
<details> <summary>展开查看</summary>

- 而下面这些基本类型值的文本，就是基本类型字面量。

| 基本类型 | 集合                                                                                     |
| -------- | ---------------------------------------------------------------------------------------- |
| 布尔类型 | `bool`                                                                                   |
| 字符串类 | `string`                                                                                 |
| 复数类型 | `complex64` `complex128`                                                                 |
| 浮点类型 | `float32` `float64`                                                                      |
| 整数类型 | `int8` `uint8` `int16` `uint16` `int32` `uint32` `int64` `uint64` `int` `uint` `uintptr` |


- 未命名常量是一种特殊的常量，它没有具体的名称。这种常量只有值，没有与之关联的变量名。
  如下字符串都是字符串字面量，就是 **未命名常量**。
```
"hello，world"   "123"
```
</details>

####  不同字面量可能同值吗？
<details> <summary>展开查看</summary>

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
</details>

####  字面量和变量的区别是什么？
<details> <summary>展开查看</summary>

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
</details>

####  什么是组合字面量？
<details> <summary>展开查看</summary>

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
</details>


### 其他
####   Go 中的 `rune` 和 `byte` 有什么区别？
<details> <summary>展开查看</summary>

在 Go 语言中，`byte` 和 `rune` 都是用于表示字符的类型，但它们之间有一些区别：

##### 类型不同：
-   byte ：字节，是 uint8 的别名类型
-   rune ：字符，是 int32 的别名类型

##### 存储的字符不同：
```go
//byte 用于表示 ASCII 码字符，只能存储 0-255 范围内的字符。
var a byte = 'Y'  // ASCII 码字符

//rune 用于表示 Unicode 字符，可以存储任意 Unicode 字符。
var b rune = '酥'  // Unicode 字符
```

##### 占用的字节大小不同：byte 占用1个字节，rune 占用4个字节。

```go
import "unsafe"
var a byte = 'Y'
var b rune = '酥'
fmt.Printf("a 占用 %d 个字节数\nb 占用 %d 个字节数", unsafe.Sizeof(a), unsafe.Sizeof(b))
// 输出: a 占用 1 个字节数 b 占用 4 个字节数
```

##### 表示的字符范围不同：
由于 byte 类型能表示的值是有限的，只有 2^8=256 个。所以想表示中文只能使用 rune 类型。

字符串表示：在 Go 中，字符串是用 UTF-8 进行编码的，英文字母占用一个字节，而中文字母占用 3个字节1。例如：

```go
var world string = "world,世界"
fmt.Println(len(world))  // 输出 12
var a byte = 'G'
var b rune = 'O'
fmt.Printf("a 占用 %d 个字节数\n", unsafe.Sizeof(a))
fmt.Printf("b 占用 %d 个字节数\n",unsafe.Sizeof(b))
// output
a 占用 1 个字节数
b 占用 4 个字节数
```
</details>