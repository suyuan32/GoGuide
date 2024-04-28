---
order: 1
title: "Basic"
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, basic, data types, variables, constants, pointers, interview questions, interview
---

## Pointer

### What is a pointer and a pointer variable?
::: details Answer
Ordinary variables store data, while pointer variables store the address of the data.

- Learning about pointers mainly involves two operators `&` and `*`.

- `&`: Address operator, used to get the address from a variable

```go
// Define an ordinary variable and print it
num := 99
fmt.Println(num) //output: 99

ptr := &num
fmt.Println(ptr) //output: for example: 0xc000086020
```

- `*`: Dereference operator, used to get data from an address

```go
tamp := *ptr
fmt.Println(tamp) //output: 99
```
:::

### Why use pointers?
::: details Answer

**Significance One: Easy Coding**

Pointers play an important role in data structures. Through pointers, we can create complex data structures such as linked lists, trees, and graphs. Pointers can easily access and manipulate relationships between nodes in data structures, thereby achieving efficient data storage and retrieval.

Pointers can pass references of data between functions, instead of copying the entire data. This can save memory space and improve the execution efficiency of the program. By passing pointers, functions can directly modify the original data without needing to return a value.


**Significance Two: Save Memory**

Pointers can directly access and modify data in memory. Through pointers, we can dynamically allocate memory at runtime to meet the needs of the program, and release memory when it is not needed, avoiding memory leaks.

Pointers can dynamically allocate memory during program execution. Through dynamic memory allocation, we can allocate and release memory as needed, thereby improving the flexibility and efficiency of the program.
:::

### Which objects can be addressed and which cannot?

::: details Answer

The following objects can be addressed using `&` to obtain their memory addresses:

- Variables
- Pointers
- Arrays, slices, and their internal data
- Struct pointers
- Map

The following objects cannot be addressed:

- Structs
- Constants
- Literals
- Functions
- Non-pointer elements of maps
- Array literals

:::

## Literal

### What does literal mean?
::: details Answer
- The text of these basic type values below is a basic type literal.

| Basic Type   | Collection                                                                               |
| ------------ | ---------------------------------------------------------------------------------------- |
| Boolean Type | `bool`                                                                                   |
| String Type  | `string`                                                                                 |
| Complex Type | `complex64` `complex128`                                                                 |
| Float Type   | `float32` `float64`                                                                      |
| Integer Type | `int8` `uint8` `int16` `uint16` `int32` `uint32` `int64` `uint64` `int` `uint` `uintptr` |


For example:

```go
s := "hello world" // "hello world" is the literal value
n := 10 // 10 is the literal value
```


- An unnamed constant is a special kind of constant that doesn't have a specific name. This kind of constant only has a value, and there is no variable name associated with it.
  The following strings are string literals, which are **unnamed constants**.

```
"hello，world"   "123"
```
:::

### Can different literals have the same value?
::: details Answer

- A value can be represented by multiple literals. For example, the decimal value 21 can be represented by three different literals

| Decimal | Octal | Binary      | Hexadecimal |
| ------- | ----- | ----------- | ----------- |
| 21      | 0o25  | 0b0001 0101 | 0x15        |

```go
import "fmt"

func main() {
	fmt.Println(21 == 0o25)     
	fmt.Println(21 == 0x15 )    
	fmt.Println(21 == 0b0001 0101)  
}// The result of the run shows that they are equal
```
:::

### What is the difference between a literal and a variable?
::: details Answer

- A literal is an unnamed constant, just like a constant, it is not addressable.

- For example

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
- If you do not use a variable name to hold it, the text value of a string returned by a function, which is a string literal,
and this kind of literal is not addressable, an error will occur. To use `&` to address, you must use a variable name to hold it.

- But the following is correct
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

### What is a composite literal?
::: details Answer

- A composite literal is a way to define and initialize an object together. In other words, a composite literal is used to construct values for structures, arrays, slices, and maps, and each time a new value is created. They are followed by the type of the literal, curly braces, and a list of elements. Each element can optionally be preceded by a related key.

- Using composite literals can be simpler, and the composite literal methods for structures, arrays, slices, and maps are as follows.

- Structures use composite literals to define and initialize
```go
type man struct {
	nationality string
	height int
}
func main() {
	// Declare and assign properties
	su := man{
		nationality:   "China",
		height:    180,
	}
}
```

- Structures use the cumbersome conventional method as follows
  
```go
type man struct {
	nationality string
	height int
}

func main() {
	// Declare object
	var su man
	// Assign properties
	su.nationality = "China"
	su.height = 180
}
```

- Map uses composite literal method for definition and initialization as follows

```go
m := map[string]int {
	"math": 96,
	"Chinese": 90,
}
```

- Similarly, arrays use composite literal method for definition and initialization as follows
```go
colours := [3]string{"black", "red", "white"}
```

- Slices use composite literal method as follows
```go
s := []string{"red", "black"} 
// The capacity and length of the slice will be automatically filled in
```
:::


## Others
### What is the difference between `rune` and `byte` in Go?
::: details Answer

In Go language, `byte` and `rune` are both types used to represent characters, but there are some differences between them:

#### Different types:
-   byte: byte, is an alias type of uint8
-   rune: character, is an alias type of int32

#### Different stored characters:
```go
//byte is used to represent ASCII code characters, can only store characters within the range of 0-255.
var a byte = 'Y'  // ASCII code character

//rune is used to represent Unicode characters, can store any Unicode character.
var b rune = '酥'  // Unicode character
```

#### Different byte sizes occupied: byte occupies 1 byte, rune occupies 4 bytes.

```go
import "unsafe"
var a byte = 'Y'
var b rune = '酥'
fmt.Printf("a occupies %d bytes\nb occupies %d bytes", unsafe.Sizeof(a), unsafe.Sizeof(b))
// Output: a occupies 1 byte b occupies 4 bytes
```

#### Different character ranges represented:
Since the value that the byte type can represent is limited, there are only 2^8=256. So if you want to represent Chinese, you can only use the rune type.

:::

Here is the English translation of your text:

### What are deep copy and shallow copy in golang?
::: details Answer

- What is copying?

The simplest form of copying is as follows
```go
a := 648
b := a    //copy a to b
```

- So what are deep copy and shallow copy?

Deep and shallow copying also depend on the type.

| Type           | Details                                           |
| -------------- | ------------------------------------------------- |
| Reference type | `Slice` `Map` `Channels` `Interfaces` `Functions` |
| Value type     | `String` `Array` `Int` `Struct` `Float` `Bool`    |

The effects of copying two types are different. Let's first talk about the value type that we are more familiar with. As can be seen from the question of what is copying, if it is a value type, a new space will be allocated to store the value every time it is copied, and the two copied value types are independent and do not affect each other.

- Take the reference type slice as an example to talk about deep copy and shallow copy

| Type         | Example              |
| ------------ | -------------------- |
| Deep copy    | copy(slice1, slice2) |
| Shallow copy | slice1 = slice2      |

`Shallow copy` only changes the pointer, as follows

```go
package main
import "fmt"

func main() {
	var slice1 = []int{7, 8, 9}     
	var slice2 = make([]int, 3)  //slice initialization
	slice2 = slice1    //shallow copy changes the pointer of slice2
	fmt.Println(slice1) 
	slice2[0] = 648  // change slice2[0], slice1[0] also changes
	fmt.Println(slice2) 
	fmt.Println(slice1) 
}
```
The output is as follows

```go
[7 8 9]
[648 8 9]
[648 8 9]
```

- So for slices, `shallow copy` changes its address.

- And `deep copy` will change the array value in the memory of the address, as follows

```go
package main
import "fmt"

func main() {
	var slice1 = []int{7, 8, 9}     
	var slice2 = make([]int, 3) //slice initialization
	copy(slice2, slice1)  //deep copy will change the array value in the memory of the address
	fmt.Println(slice2) 
	slice2[0] = 648  // change slice2[0], slice1[0] remains unchanged
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

### What's the difference between `make` and `new`?

::: details Answer

`new` is used to allocate memory for any type and return a pointer to that type, initializing the value to zero.

> `new` is not commonly used

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

`make` is mainly used for initializing `slices`, `map`, and `channel`.

```go
package main

import "fmt"

func main() {
	m := make(map[string]int, 10)

	fmt.Println(m) // map[]

}
```

:::

### What's the difference between arrays and slices?

::: details Answer

- The length of an array is fixed, determined at creation, and cannot be changed. The length of a slice is dynamic and will automatically expand based on the data added.
- When passing parameters in functions, data is passed by value, while slices are passed by reference.
- Slices have a capacity (capacity) parameter, arrays do not.

:::

### If `for range` adds data at the same time, will `for range` execute indefinitely?

::: details Answer

No, when executing `for range`, what is actually traversed is a copy of the variable, so changing the traversed variable will not have an impact.

```go
package main

import "fmt"

func main() {
	n := []int{1, 2, 3}

	for  _, v := range n {
		n = append(n, v)
	}

	fmt.Println(n) // Result: [1 2 3 1 2 3]
}
```

:::

### What is the execution order of multiple defers?

::: details Answer

The execution order is similar to a stack, first in, last out.

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

// Result:
// 3
// 2
// 1

```

:::

### What is data overflow?

::: details Answer

When using numeric types, if the data reaches the maximum value, the next data will overflow, such as `uint` will start from 0 after overflow, `int` will become negative after overflow.

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

How to avoid?

- Use uint for positive numbers first, the range is larger
- Add judgment code to determine whether it overflows 

:::

### Should function parameters use value or pointer?

::: details Answer

- Value transfer

Generally speaking, value transfer can be used for common types. The advantage of value transfer is that modifications to the value within the function will not affect the original variable and will not cause concurrency problems. The disadvantage is that value transfer will copy a copy of the corresponding variable, which will occupy more memory. If the input structure is very large, it is not suitable to use value transfer.

- Pointer and reference transfer

The advantage of using pointer transfer is that it directly transfers the address of the variable, without the need for extra space. The disadvantage is that data modification during concurrent operations will affect the original data. Passing in a slice is actually passing the pointer of the slice to avoid repeated copying. If an array is passed in, it is value transfer, and a copy will be made.

:::


## Map

### Can an uninitialized Map read a key?

::: details Answer

Yes, an uninitialized `map` that hasn't undergone `make` initialization will return the zero value of the current type for any `key` read.

```go
package main

import "fmt"

func main() {
	var m map[int]int

	fmt.Println(m[1])
}

// Output:
// 0
```
:::

### What happens if you assign a value to an uninitialized Map?

::: details Answer

It will trigger a `panic` exception error.

```go
package main

func main() {
	var m map[int]int

	m[1] = 1
}

// Output:
// panic: assignment to entry in nil map
```

:::

### What happens if you delete a key from an uninitialized Map?

::: details Answer

In earlier versions, performing a `delete` operation on an uninitialized `map` would throw a `panic` error. In current versions, performing a `delete` operation on an uninitialized `map` will not cause an error.

```go
package main

func main() {
	var m map[int]int

	delete(m, 1)
}

// Output:
// 
```

:::