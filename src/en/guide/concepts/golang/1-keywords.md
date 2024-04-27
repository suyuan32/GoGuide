---
order: 1
title: 'Keywords'
head:
  - - meta
    - name: keywords
      content: golang, reserved keywords, const, func, import, package, type, var, chan, interface, map, struct, break, case, continue, default, else, fallthrough, for, goto, if, range, return, select, switch, defer
---

## Keywords

Golang has 25 reserved keywords that cannot be used as program identifiers.

| Type               | Keywords                                                                                                      | Introduction                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Declaration        | `const`  `func` `import`  `package`  `type` `var`                                                             | These keywords are used to declare various elements in the code.  |
| Composite Types    | `chan` `interface` `map` `struct`                                                                             | These keywords are used to declare some special compound types.   |
| Control Flow       | `break` `case` `continue` `default` `else` `fallthrough` `for` `goto` `if` `range` `return` `select` `switch` | These keywords are used to control the flow of program execution. |
| Function Modifiers | `defer` `go`                                                                                                  | Used to modify special functions.                                 |

## Declaration Types

### **const**

`const` is used to declare constants, which once declared cannot be changed, and must specify an initial value when declaring a constant.

::: details Example

```go
const identifier T = value  // T is the data type, which can be omitted, and the compiler will infer it.
const identifier1, identifier2 = value1, value2 // Declare multiple, such as const a, b, c = "hello", 100, true

const (
    FeMale = 0
    Male = 1
) // Enumeration

const (
    a = iota
    b
    c
) // iota
```
:::

### **func**

`func` is used to declare functions, supports multiple return values, and does not support default parameters.

::: details Example

```go
// p is the parameter, T is the type
func Test(p T) {}
func Test(p T) (T1, T2) {}
func Test(p T, p1 T1, list ...T3) (T4, T5) {}  // variadic parameters
```

:::

### **import**

`import` is used to import packages to use their public identifiers.

`import` supports single-line and multi-line imports.

::: details Example

```go
import "flag" // single import

import (
    "flag"
    "fmt"
) // multiple imports
```
:::

We can also use `.`, `_`, and aliases to modify imported packages.

| Import Command        | Usage    | Explanation                                                       |
| --------------------- | -------- | ----------------------------------------------------------------- |
| `import "lib/math"`   | math.Sin | Normal import requires the package name                           |
| `import m "lib/math"` | m.Sin    | Aliases can be set during import                                  |
| `import . "lib/math"` | Sin      | Using `.` allows direct use of functions without the package name |

We can also use `_` to modify imported packages, which will only execute the package's initialization function `init()`.

### **package**

`package` is used to define the package name.

#### **type**

`type` is used to define variable types.

::: details Example

```go
// Define an interface
type Animal interface {
    eat()
}

// Define a structure
type Tiger struct {
    Name string
}

// Define equivalent types
type Num int32 // Define a new type
type Num = int32 // Only define an alias

```

:::

### **var**

`var` is used to declare public or private variables.

::: details Example

```go
var Name T  // public variable
var name T  // private variable

var name1, name2 T // declare multiple variables of the same type
var name1, name2 T = val1, val2 // declare and initialize multiple variables of the same type

var name1, name2 = val1, val2 // infer types and initialize based on val1, val2

// Using parentheses
var (
    name1 = val1
    name2 = val2
)
```

:::

## Composite Types

### **chan**

`chan` (Channel) is used to declare channels.

::: details Example

```go
// Channel for sending and receiving data of type T
chan T
// Channel for sending data of type T
<-chan T
// Channel for receiving data of type T
chan<- T
```

```go
ch := make(chan T)       // unbuffered channel
ch := make(chan T, 20)   // buffered channel
```

:::

### **interface**

`interface` is used to declare interfaces.

::: details Example

```go
type File interface {
    Read(b Buffer) bool
    Write(b Buffer) bool
    Close()
}
```

:::

### **map**

`map` is used to declare collections, consisting of unordered key-value pairs, with an underlying `hash map`. Although `map` will automatically expand, it is recommended to configure the capacity at initialization.

::: details Example

```go
m := make(map[string]string)  // empty map

m := make(map[string]string, 10) // map with an initial capacity of 10
```

:::

### **struct**

`struct` is used to declare structures.

::: details Example

```go
type Person struct {
    Name string
}
```

:::

Here is the translation into English:

## Control Flow

### **if else**

`if` `else` is used for conditional judgments and can be nested.

::: details Example

```go
if a > 0 {
    fmt.Println("hello")
} else {
    fmt.Println("world")
}
```

:::

### **switch fallthrough**

`switch` is used to perform different actions based on different conditions. By default, each `case` comes with a `break`, and after executing one `case`, it will automatically exit. If you want to continue executing the following statements, you need to use `fallthrough`.

::: details Example

```go
a := "2"
switch a {
    case "1":
        fmt.Println("hello")
    case "2":
        fmt.Println("world")
    default:  // default action
        fmt.Println("default")
} 


// Result: world
```

Using `fallthrough`, you can directly execute the action of the next `case` after completing the corresponding `case`.

```go
package main

import "fmt"

func main() {
   var dayOfWeek int = 4

   switch dayOfWeek {
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

// Result:
// Thursday
// Friday
// Saturday
```

:::

### **for break continue range**

`for` is used to loop actions, using `break` to interrupt the current `for` loop, and `continue` to skip the remaining statements of the current loop and continue with the next round.

::: details Example

```go
// Single condition
for i <= 10 {
    fmt.Println(i)
    i = i + 1
}

// Initialization and judgment
for i:=0; i < 3; i++ {
	fmt.Println(i)
}

// for range iteration
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

`goto` can jump to a specified location to continue executing actions.

::: details Example

```go
package main

import "fmt"

func main() {
	for i := 0; i < 10; i ++ {
		if i == 5 {
			goto end // Jump to the end position to execute
		}
		fmt.Println(i)
	}

end:
	fmt.Println("end")
}


// Result: 
// 0
// 1
// 2
// 3
// 4
// end


```

:::

### **select**

`select` allows `goroutine` to wait for multiple communication operations. `select` will block until one `case` receives information. If multiple channels receive data at the same time, a random `case` will be executed.

::: details Example

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

## Function Modifiers

### **defer**

`return` is used to terminate the execution of a function and return zero or more return values. `defer` is used to perform actions before the function's `return` or after it has finished executing.

::: details Example

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}

// Result
// hello
// world
```

Note:

- The execution order of `defer` is last-in-first-out.
- `defer` executing before return means you can use defer to get the final result of variables before return.

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

// Result:
// 7
```

:::

### **go**

`go` is used to create a coroutine (goroutine) and perform actions in the background of the program.

::: details Example

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

// Result:
// start goroutine
// no.1
// no.2

```

:::