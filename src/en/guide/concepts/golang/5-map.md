---
order: 5
title: "Map"
---

## Creating a Map

`map` is a key-value mapping table, where you can get the corresponding `value` by using the `key`.

The declaration of `map` is as follows:
```
map[KeyType]ValueType
```
`KeyType` is the data type of the key, and `ValueType` is the data type of the `value`.

::: details Example

```go
// Declare a map
var m map[string]int

// Initialize the map using make
m = make(map[string]int)

//  Initialize the map using make and set capacity
// m = make(map[string]int, 10)

// Set the value
m["path"] = 66

// Print the value
fmt.Println(m["path"])
```

:::

## Traversing a Map

Use `range` to traverse a map.

::: details Example

```go
package main

import "fmt"

func main() {
	// Initialize the map
	var dataMap map[string]string
	dataMap = make(map[string]string)

	// Alternatively, you can initialize like this
	//dataMap := map[string]string{}

    // Add key-value pairs
	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	fmt.Println("print key and value: ")

	// Use range to traverse key-value pairs
	for key, val := range dataMap {
		fmt.Printf("key: %s  -  value: %s \n", key, val)
	}

	fmt.Println("print key: ")

	// Use range to traverse keys
	for key := range dataMap {
		fmt.Printf("key: %s \n", key)
	}

	fmt.Println("print value: ")

	// Use range to traverse values
	for _, val := range dataMap {
		fmt.Printf("Value: %s \n", val)
	}
}

// Result
// print key and value:
// key: third  -  value: third value
// key: first  -  value: first value
// key: second  -  value: second value
// print key:
// key: first
// key: second
// key: third
// print value:
// Value: first value
// Value: second value
// Value: third value
```

:::

## Deleting Key-Value Pairs

To delete a key-value pair in a map, use the `delete()` method.

::: details Example

```go
package main

import "fmt"

func main() {
	// Initialize the map
	var dataMap map[string]string
	dataMap = make(map[string]string)

    // Alternatively, you can initialize like this
	//dataMap := map[string]string{}

	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	fmt.Println(dataMap)

    // Delete a key-value pair
	delete(dataMap, "first")

	fmt.Println(dataMap)
}

// Result:
// map[first:first value second:second value third:third value]
// map[second:second value third:third value]

```

:::


## Check if a key exists

::: details Example

```go
package main

import "fmt"

func main() {
	// Initialize Map
	var dataMap map[string]string
	dataMap = make(map[string]string)

	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	// Check if a key exists
	if val, ok := dataMap["first"]; ok {
		fmt.Println(val)
	} else {
		fmt.Println("key not exists")
	}

	if val, ok := dataMap["fourth"]; ok {
		fmt.Println(val)
	} else {
		fmt.Println("key not exists")
	}
}
```

:::


## Get the length of a Map

Use `len()` to get the length of a Map

```go
len(dataMap)
```


## Concurrency

Maps are not thread-safe in concurrent operations. You can use the official `sync.Map{}` to solve this problem.

<!-- ::: tip Community Exclusive
[How to ensure Map thread safety?]()
::: -->