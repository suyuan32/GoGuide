---
order: 1
title: '保留关键字'
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang,保留关键字,const,func,import,package,type,var,chan,interface,map,struct,break,case,continue,default,else,fallthrough,for,goto,if,range,return,select,switch,defer
---

## 保留关键字

golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。

| 类型     | 关键字                                                                                                        | 介绍                                 |
| -------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 声明     | `const`  `func` `import`  `package`  `type` `var`                                                             | 这些关键字用于声明代码中的各种元素   |
| 复合类型 | `chan` `interface` `map` `struct`                                                                             | 这些关键字用于声明一些特殊的复合类型 |
| 流程控制 | `break` `case` `continue` `default` `else` `fallthrough` `for` `goto` `if` `range` `return` `select` `switch` | 这些关键字用于控制程序运行流程       |
| 功能修饰 | `defer` `go`                                                                                                  | 用于修饰特殊的 function              |

::: warning
注意： 下面的例子中的 `T` 表示任意类型
:::

## 声明类型关键字

### **const**

`const` 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。

::: details 例子

```go
const identifier T = value  // T 为数据类型，可以省略，编译器会自己推断。
const identifier1, identifier2 = value1, value2 // 声明多个，如 const a, b, c = "hello", 100, true

const (
    FeMale = 0
    Male = 1
) // 枚举

const (
    a = iota
    b
    c
) // iota
```
:::

### **func**

`func` 用于声明函数，支持多个返回值，不支持默认参数。


::: details 例子

```go
// p 为参数， T 为类型
func Test(p T) {} 
func Test(p T) (T1, T2) {}
func Test (p T, p1, T1, list ...T3) (T4, T5) {}  // 不定参数
```

:::

### **import**

`import` 用于导入包，使用其公开的标识符。

`import` 支持单行和多行导入。

::: details 例子

```go
import "flag" // 单个导入

import (
    "flag"
	"fmt"
) // 多个导入
```
:::

我们还可以使用  `.`, `_` 和别名修饰导入的包。

| 导入命令               | 使用方法 | 解析                                          |
| ---------------------- | -------- | --------------------------------------------- |
| `import   "lib/math"`  | math.Sin | 普通导入需要使用包名                          |
| `import m "lib/math"`  | m.Sin    | 可以在导入时设置别名                          |
| `import . "lib/math" ` | Sin      | 使用 `.` 导入本地可以直接使用函数，不需要包名 |

我们还可以使用 `_` 来修饰导入的包，这样只会执行导入包的初始化函数 `init()`

### **package**

`package` 用于定义包名

#### **type**

`type` 用于定义变量类型

::: details 例子

```go
// 定义接口
type Animal interface {
    eat()
}

// 定义结构
type Tiger struct {
    Name string
}

// 定义等价类型
type Num int32 // 定义一个新的类型
type Num = int32 // 仅定义别名

```

:::

### **var**

`var` 用于声明公开或者私有变量

::: details 例子

```go
var Name T  // 公开变量
var name T  // 私有变量

var name1, name2 T // 声明多个相同类型的变量
var name1, name2 T = val1, val2 // 声明多个相同类型的变量, 并初始化

var name1, name2 = val1, val2 // 根据 val1, val2 自动推断类型并初始化

// 使用括号
var (
    name1 = val1
    name2 = val2
)
```

:::

## 复合类型

### **chan**

`chan` (Channel) 用于声明信道。

::: details 例子

```go
// 用于发送和接收 T 类型的数据的信道
chan T
// 用于发送 T 类型的数据的信道
<-chan T
// 用于接收 T 类型的数据的信道
chan<- T
```

```go
ch := make(chan T) 		// 无缓冲信道
ch := make(chan T, 20)	// 带缓冲信道
```

:::

### **interface**

`interface` 用于声明接口

::: details 例子

```go
type File interface {
	Read(b Buffer) bool
	Write(b Buffer) bool
	Close()
}
```

:::

### **map**

`map` 用于声明集合，由无序的键值对组成，底层为 `hash map`. 虽然 `map` 会自动扩容，但是建议在初始化的时候就配置容量。

::: details 例子

```go
m := make(map[string]string)  // 空的 map

m := make(map[string]string, 10) // 初始容量为 10 的 map
```

:::

### **struct**

`struct` 用于声明结构体

::: details 例子

```go
type Person struct {
    Name string
}
```

:::

## 流程控制

### **if else**

`if` `else` 用于条件判断，可嵌套使用

::: details 例子

```go
if a > 0 {
    fmt.Println("hello")
} else {
    fmt.Println("world")
}
```

:::

### **switch fallthrough**

`switch` 用于根据不同条件执行不同的动作，默认每个 `case` 都带有 `break`, 执行完一个 `case` 会自动跳出，若希望继续执行下面的语句，需搭配 `fallthrough`

::: details 例子

```go
a := "2"
switch a {
    case "1":
        fmt.Println("hello")
    case "2":
        fmt.Println("world")
    default:  // 默认操作
        fmt.Println("default")
} 


// 结果： world
```

使用 `fallthrough` 可以在执行完对应 `case` 后直接执行下一个 `case` 的动作

```go
package main

import "fmt"

func main() {
   var dayOfWeek int = 4

   switch dayOfWeek
 {
      case 1:
         fmt.Println("Monday")
         fallthrough
      case 2:
         fmt.Println("Tuesday")
         fallthrough
      case 3:
         fmt.Println("Wednesday")
         fallthrough
      case 4:
         fmt.Println("Thursday")
         fallthrough
      case 5:
         fmt.Println("Friday")
         fallthrough
      case 6:
         fmt.Println("Saturday")
      case 7:
         fmt.Println("Sunday")
      default:
         fmt.Println("Invalid Day")
   }
}

// 结果：
// Thursday
// Friday
// Saturday
```

:::

### **for break continue range**

`for` 用于循环执行动作，使用 `break` 中断当前 `for` 循环， `continue` 用于跳过当前循环的剩余语句，继续执行下一轮循环

::: details 例子

```go
// 单个条件
for i <= 10 {
    fmt.Println(i)
    i = i + 1
}

// 初始化并判断
for i:=0; i < 3; i++ {
	fmt.Println(i)
}

// for range 遍历
array :=[]int{1, 2, 3, 4, 5}
for i, v :=range array{
	fmt.Println(i,v)
}


// break
for i, v :=range array{
    if i >= 2 {
        break
    }
	fmt.Println(i,v)
}

// continue
for i, v :=range array{
    if i == 2 {
        continue
    }
	fmt.Println(i,v)
}

```

:::

### **goto**

`goto` 可以跳到指定位置继续执行动作

::: details 例子

```go
package main

import "fmt"

func main() {
	for i := 0; i < 10; i ++ {
		if i == 5 {
			goto end // 跳到 end 位置执行
		}
		fmt.Println(i)
	}

end:
	fmt.Println("end")
}


// 结果： 
// 0
// 1
// 2
// 3
// 4
// end


```

:::

### **select**

`select` 让 `goroutine` 等待多个通信操作，`select` 会阻塞直到一个 `case` 接收到信息，如果同时多个通道收到数据，则会随机执行一个 `case`

::: details 例子

```go
package main

import "fmt"

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}

```

:::

## 功能修饰

### **defer**

`return` 用于终止函数的执行并返回0个或多个返回值， `defer` 用于函数 `return` 之前或执行完之后执行动作

::: details 例子

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}

// 结果
// hello
// world
```

注意：

- `defer` 的执行顺序是后进先出
- `defer` 在 return 之前执行意味着可以使用 defer 获取 return 之前变量的最终结果

```go
package main

import "fmt"

func main() {
	num := 1
	defer func() {
		fmt.Println(num)
	}()

	for i := 0; i < 4; i ++ {
		num += i
	}
	
}

// 结果：
// 7
```

:::

### **go**

`go` 用于创建协程（goroutine）, 在程序后台执行动作

::: details 例子

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	go func(){
		fmt.Println("no.1")
	}()
	go func(){
		fmt.Println("no.2")
	}()

	fmt.Println("start goroutine")
	time.Sleep(5*time.Second)
}

// 结果：
// start goroutine
// no.1
// no.2

```

:::
