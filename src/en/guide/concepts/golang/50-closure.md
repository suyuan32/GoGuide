---
order: 50
title: Closure
icon: line-md:sun-rising-twotone-loop
head:
  - - meta
    - name: keywords
      content: Go, Golang, closure, function factory, iterator
---

## What Is a Closure?

::: info What Is a Closure?
A closure is an entity composed of a function and the associated referencing environment. In simple terms, a closure is a function that references variables outside its own scope. The lifetime of this function can extend beyond the scope in which it was created.

Example

```go
package main

import "fmt"

func main() {
	count := func() func() int {
		i := 0 // Initialize a local variable within the function
		return func() int {
			i++ // Increment the local variable
			return i
		}
	}()

	fmt.Println(count())
	fmt.Println(count())
}

// Output
// 1
// 2
```

Notice that `i` is a local variable within the `count` function. Executing the function twice might lead one to expect the output to be `1` both times. However, the actual output is `1` followed by `2`. The reason is that when assigning the closure to a variable (`count`), it retains a pointer to `i`. As a result, `i` is preserved beyond the function's execution due to escape analysis. **If the function is not assigned to a variable, executing it multiple times will yield consistent results.**
:::

## Use Cases

### Middleware

When defining web middleware, we often encounter code like the following:

```go
func makeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        m := validPath.FindStringSubmatch(r.URL.Path)
        if m == nil {
            http.NotFound(w, r)
            return
        }
        fn(w, r, m[2]) // If no issues, continue executing fn
    }
}
```

In this example, we return an `http.HandlerFunc` that calls the `fn` function. This allows us to achieve chainable operations—executing middleware code while still continuing with the main function.

## State Sharing

Closures can be used to share state across multiple invocations of a function. A common example is an iterator:

```go
package main

import "fmt"

func main() {
	num := []int{1, 2, 3, 4}

	iterator := func(arr []int) func([]int) (int, bool) {
		i := -1
		return func(arr []int) (int, bool) {
			i++
			if i < len(arr) {
				return arr[i], true
			}
			return 0, false
		}
	}

	iter := iterator(num)

	for {
		value, ok := iter(num)
		if !ok {
			return
		}

		fmt.Println(value)
	}
}

// Output
// 1
// 2
// 3
// 4
```

## Callback Functions

We can also pass callback functions as parameters:

```go
func GetData(data int, callback func(int)) {
	go func() {
		result := data + 2
		callback(result)
	}()
}
```

In the above example, after passing in `data`, the `callback` can access `result` for additional callback operations.

## Function Factories

Closures allow us to create function factories by returning functions based on input parameters:

```go
func CalculationFactory(operation string) func(int, int) int {
	switch operation {
	case "add":
		return func(a, b int) int {
			return a + b
		}
	case "subtract":
		return func(a, b int) int {
			return a - b
		}
	case "multiply":
		return func(a, b int) int {
			return a * b
		}
	case "divide":
		return func(a, b int) int {
			if b != 0 {
				return a / b
			}
			return 0
		}
	default:
		return nil
	}
}
```

By passing in `"add"`, you can obtain an addition function, and by passing in `"divide"`, you can obtain a division function.