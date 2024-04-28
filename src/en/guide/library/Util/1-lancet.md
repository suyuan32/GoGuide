---
order: 1
title: Lancet
head:
  - - meta
    - name: keywords
      content: Lancet, golang, tools, utility
---

## Introduction

**Lancet** is a Go library that provides a collection of commonly used utility functions and methods. It aims to simplify development for developers by offering these tools, allowing them to focus on implementing business logic without spending excessive effort on writing utility functions.

Lancet serves a similar purpose to Java's Hutool library, providing a wealth of readily usable functions to reduce the need for reinventing the wheel.

## Main Features

| **Module**    | **Description**                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Algorithm     | Provides commonly used algorithmic functions.                                                    |
| Compare       | Functions for data comparison, such as comparing two values.                                     |
| Concurrency   | Tools for handling concurrency, including goroutines and locks.                                  |
| Condition     | Functions for conditional checks, e.g., verifying a value meets a condition.                     |
| Convertor     | Utility functions for data type conversion, like converting strings to integers.                 |
| Cryptor       | Functions related to encryption and decryption.                                                  |
| Datetime      | Handles date and time operations, such as formatting dates and calculating time differences.     |
| Datastructure | Offers common data structures like stacks, queues, and linked lists.                             |
| Fileutil      | Utility functions for file operations, including reading/writing files and creating directories. |
| Formatter     | Functions for string formatting, like padding and truncating strings.                            |
| Function      | Related to function manipulation, such as currying and uncurrying.                               |
| Maputil       | Tools for working with maps, like merging maps and iterating over them.                          |
| Mathutil      | Functions for mathematical calculations, such as absolute value and square root.                 |
| Netutil       | Handles networking and HTTP requests, e.g., sending HTTP requests and parsing URLs.              |
| Pointer       | Functions for pointer manipulation, like retrieving pointer values and creating pointers.        |
| Random        | Generates random numbers.                                                                        |
| Retry         | Implements retry mechanisms, useful for retrying failed network requests.                        |
| Slice         | Utility functions for working with slices, like slicing and merging.                             |
| Stream        | Provides stream-like processing functions, including map, filter, and reduce.                    |
| Structs       | Functions for working with structs, like retrieving field values and checking for emptiness.     |
| Strutil       | Handles string operations, such as concatenation, substring extraction, and replacement.         |
| System        | System-related functions, like retrieving environment variables and executing system commands.   |
| Tuple         | Utility functions for working with tuples, like creating tuples and accessing values.            |
| Validator     | Functions for data validation, e.g., validating email addresses and phone numbers.               |
| Xerror        | Error-handling functions, including creating errors and checking error types.                    |

## Example

Bubble Sort

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/algorithm"
)

type intComparator struct{}

func (c *intComparator) Compare(v1 any, v2 any) int {
    val1, _ := v1.(int)
    val2, _ := v2.(int)

    //ascending order
    if val1 < val2 {
        return -1
    } else if val1 > val2 {
        return 1
    }
    return 0
}

func main() {
    numbers := []int{2, 1, 5, 3, 6, 4}
    comparator := &intComparator{}

    algorithm.BubbleSort(numbers, comparator)

    fmt.Println(numbers)

    // Output:
    // [1 2 3 4 5 6]
}
```