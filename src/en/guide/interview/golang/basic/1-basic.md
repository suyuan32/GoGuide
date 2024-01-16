---
order: 1
title: "Basic"
---

## Pointer

### What is a pointer and a pointer variable?
<details> <summary>Click to expand</summary>
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
</details>

### Why use pointers?
<details> <summary>Click to expand</summary>

**Significance One: Easy Coding**

Pointers play an important role in data structures. Through pointers, we can create complex data structures such as linked lists, trees, and graphs. Pointers can easily access and manipulate relationships between nodes in data structures, thereby achieving efficient data storage and retrieval.

Pointers can pass references of data between functions, instead of copying the entire data. This can save memory space and improve the execution efficiency of the program. By passing pointers, functions can directly modify the original data without needing to return a value.


**Significance Two: Save Memory**

Pointers can directly access and modify data in memory. Through pointers, we can dynamically allocate memory at runtime to meet the needs of the program, and release memory when it is not needed, avoiding memory leaks.

Pointers can dynamically allocate memory during program execution. Through dynamic memory allocation, we can allocate and release memory as needed, thereby improving the flexibility and efficiency of the program.
</details>

### How to use object selectors for automatic dereferencing?
<details> <summary>Click to expand</summary>

To get a value from a struct instance object, you can use `.`. This symbol is a **selector**.

- This method can save the `*` operation, the selector `.` will directly dereference, as shown in the example below

```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
	fmt.Println(p1.Name)  
}
```
- It used to be like this
```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
  fmt.Println((*p1).Name)  
}
```

- Also, you can save the `*` operation, the selector `.` will directly dereference, as shown in the example below

```go
type animal struct {
	Name string
}

func main() {
	p1 := &animal{"yikesu"}
	fmt.Println(p1.Name)  
}
```

- And it can be like this
```go
type animal struct {
	name string
}

func (p *animal) Say() {
	fmt.Println(p.name)
}
```

- Instead of like this
```go
type animal struct {
	name string
}

func (p *animal) Say() {
	fmt.Println((*p).name)
}
```
</details>

## Literal

### What does literal mean?
<details> <summary>Click to expand</summary>
- The text of these basic type values below is a basic type literal.

| Basic Type   | Collection                                                                               |
| ------------ | ---------------------------------------------------------------------------------------- |
| Boolean Type | `bool`                                                                                   |
| String Type  | `string`                                                                                 |
| Complex Type | `complex64` `complex128`                                                                 |
| Float Type   | `float32` `float64`                                                                      |
| Integer Type | `int8` `uint8` `int16` `uint16` `int32` `uint32` `int64` `uint64` `int` `uint` `uintptr` |



- An unnamed constant is a special kind of constant that doesn't have a specific name. This kind of constant only has a value, and there is no variable name associated with it.
  The following strings are string literals, which are **unnamed constants**.
```
"hello，world"   "123"
```
</details>

### Can different literals have the same value?
<details> <summary>Click to expand</summary>

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
</details>

### What is the difference between a literal and a variable?
<details> <summary>Click to expand</summary>

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
</details>

Translate to English:

### What is a composite literal?
<details> <summary>Click to expand</summary>

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
</details>


## Others
### What is the difference between `rune` and `byte` in Go?
<details> <summary>Click to expand</summary>

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

String representation: In Go, strings are encoded in UTF-8, English letters occupy one byte, while Chinese letters occupy 3 bytes. For example:

```go
var world string = "world,世界"
fmt.Println(len(world))  // Output 12
var a byte = 'G'
var b rune = 'O'
fmt.Printf("a occupies %d bytes\n", unsafe.Sizeof(a))
fmt.Printf("b occupies %d bytes\n",unsafe.Sizeof(b))
// output
a occupies 1 byte
b occupies 4 bytes
```
</details>