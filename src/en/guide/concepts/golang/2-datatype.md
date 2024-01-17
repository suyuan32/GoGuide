---
order: 2
title: 'Data Type'
---

## Integers (int)

Integers come in two types:

| Type              | Range       | Description                                           |
| ----------------- | ----------- | ----------------------------------------------------- |
| Signed integers   | `-∞` ~ `+∞` | Signed integers include positive and negative numbers |
| Unsigned integers | `0` ~ `+∞`  | Unsigned integers include 0 and all positive numbers  |

> In Golang, types starting with `int` are signed integers, and those starting with `uint` are unsigned integers.

Integer types in Golang:

| Bits                                    | Type             |
| --------------------------------------- | ---------------- |
| 8                                       | `int8` `uint8`   |
| 16                                      | `int16` `uint16` |
| 32                                      | `int32` `uint32` |
| 64                                      | `int64` `uint64` |
| 32 or 64 (based on system architecture) | `int` `uint`     |

There are also two equivalent types:

- `rune`: equivalent to `int32` , used to store `Unicode` characters
- `byte`: equivalent to `uint8` , used to store `ASCII` characters

## Floating-point Numbers (float)

Floating-point numbers are numbers that contain a decimal point.

| Bits | Type      |
| ---- | --------- |
| 32   | `float32` |
| 64   | `float64` |

## Complex Numbers (complex)

Complex numbers contain imaginary and real numbers, with the real part being a floating-point number.

| Bits                     | Type         |
| ------------------------ | ------------ |
| 32-bit float + imaginary | `complex64`  |
| 64-bit float + imaginary | `complex128` |

<details>
<summary>Example</summary>

```go
// Initialize a complex number
var complexData complex64 = complex(5, 3) // Equals: 5 + 3i

// Another way to initialize
complexData2 := 5 + 3i
```

</details>

## Strings (string)

Strings are composed of a sequence of characters, and the type name is `string`.

**Once a string is created, it cannot be modified.**

<details>
<summary>Example</summary>

```go
package main
import "fmt"

func main() {
  var str string := "Hi! Jack"
  
  // Cannot modify, the following commented code will cause an error
  // str[2] = 'c'

  fmt.Printf("%s",str)
}
```

</details>

## Booleans (bool)

The boolean type values are `true` or `false`, and the type name is `bool`.

<details>
<summary>Example</summary>

```go
var isNumber bool

isNumber = true
isNumber = false
```

</details>

## Arrays (array)

Arrays are composed of a series of data, which can be accessed by index.

**The capacity of an array cannot be modified once created.**

<details>
<summary>Example</summary>

```go
data := [5]int{1, 2, 3, 4, 5}
```

</details>

## Slices (slices)

Slices are dynamic arrays that can automatically adjust their capacity size based on the data.

<details>
<summary>Example</summary>

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

// Result
// [0 1 2 3 4 5 6 7 8 9]

```

</details>

## Map (map)

A `map` is a key-value mapping table, where you can get the corresponding `value` through the `key`.

The declaration of a `map` is as follows:
```
map[KeyType]ValueType
```
`KeyType` is the data type of the key, and `ValueType` is the data type of the value.

<details>
<summary>Example</summary>

```go
// Declare a map
var m map[string]int

// Initialize the map using make
m = make(map[string]int)

// Set the value
m["path"] = 66

// Output the value
fmt.Println(m["path"])
```

</details>

## Structures (struct)

Structures are composed of a series of custom fields, which can be accessed using `.`.

<details>
<summary>Example</summary>

```go
type Animal struct {
    Name string
}

a := Animal{
    Name: "Lucky"
}

fmt.Println(a.Name)
```

</details>

## Pointers (pointer)

Pointers store the memory address of a variable. Use `*` in front of a variable to define it as a pointer, and `&` to get the variable's address. Pointers allow you to modify data outside of a function within the function.

<details>
<summary>Example</summary>

```go
var num *int

n := 10

num = &n
```

</details>