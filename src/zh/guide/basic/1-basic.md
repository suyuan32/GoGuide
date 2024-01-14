---
order: 1
title: "基础"
---

## Golang 基础问题


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

####   Go 中的 rune 和 byte 有什么区别？
<details> <summary>展开查看</summary>

在 Go 语言中，byte 和 rune 都是用于表示字符的类型，但它们之间有一些区别：

##### 类型不同：
1.   byte ：字节，是 uint8 的别名类型
2.   rune ：字符，是 int32 的别名类型

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


