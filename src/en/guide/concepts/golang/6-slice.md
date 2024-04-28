---
order: 6
title: "Slices"
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content:  golang, slice, create slice, slice slicing, length and capacity
---

## Creating Slices

There are three ways to create slices.

```go
package main

import "fmt"

func main() {
	// First way: Declare directly
	var dataSlice []string

	// Second way: Initialize directly
	dataSlice1 := []string{}

	// Third way: Use make
	dataSlice2 := make([]string, 10)

	fmt.Println(dataSlice, dataSlice1, dataSlice2)
}
```

You can initialize data directly when creating it.

```go
dataSlice1 := []string{"Jack", "Mike"}
```

## Slicing Slices

`arr[beginIndex:endIndex]` can slice the slice, including the data of the beginIndex and excluding the data of the endIndex.

```go
data := []int{0,1,2,3,4,5}

fmt.Println(data[2:4])

// Result
// [2 3]
```

## Length and Capacity

Use `len()` to get the length of the slice and `cap()` to get the capacity of the slice.

::: details Example

```go
package main

import "fmt"

func main() {
	// Create a slice with a length of 5 and a capacity of 9
	data := make([]int, 5, 9)

	fmt.Println(data, len(data), cap(data))
}

// Result:
// [0 0 0 0 0] 5 9
```

:::

## Appending Data

Use the `append()` function to append data.

::: details Example

```go
package main

import "fmt"

func main() {
	data := []int{0,1,2}

	// Append one piece of data
	data1 := append(data, 3)

	// Append multiple pieces of data
	data2 := append(data, 4, 5, 6)

	fmt.Println(data)
	fmt.Println(data1)
	fmt.Println(data2)
}

// Result:
// [0 1 2]
// [0 1 2 3]
// [0 1 2 4 5 6]

```

:::

## Cloning Slices

We know that slices are reference types. If you assign a slice to another variable, the data sharing the same memory address is actually shared. If you want to create two slices with the same data, you can use the `copy()` method.

::: details Example

```go
package main

import "fmt"

func main() {
	data := []int{0,1,2}

	// Create a slice with the same length
	data1 := make([]int, len(data))

	// Copy data to data1
	copy(data1, data)

	// Add data to data1
	data1 = append(data1, 3, 4, 5)

	fmt.Println(data)
	fmt.Println(data1)
	
	// You will find that data has not been changed.
}

// Result:
// [0 1 2]
// [0 1 2 3 4 5]
```

:::