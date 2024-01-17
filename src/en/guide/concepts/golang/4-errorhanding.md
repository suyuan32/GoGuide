---
order: 4
title: 'Error Handling'
---

## Interface

Golang provides an interface type `error`:

```go
type error interface {
    Error() string
}
```

Any structure that implements the `Error()` method belongs to the `error` type.

## Creating Errors

Golang provides several ways to create an `error`.

We can use `errors.New()` or `fmt.Errorf()` to create errors.

<details>
<summary>Example</summary>

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
    // Create error using New
	err1 := errors.New("first error")

    // Create error using fmt
	err2 := fmt.Errorf("second %s", "error")

	fmt.Println(err1, err2)
}

```

</details>

## errors.Join

In Go 1.20, `errors.Join` was introduced to combine multiple `error`s into one array.

<details>
<summary>Example</summary>

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	// Create error using New
	err1 := errors.New("first error")

	// Create error using fmt
	err2 := fmt.Errorf("second %s", "error")

	// Use join to combine multiple errors
	err3 := errors.Join(err1, err2)

	fmt.Println(err1, err2) 
	// Output: first error second error
	
	fmt.Println(err3) 
	// Output: 
	// first error
	// second error
}
```

</details>

## errors.Is

We can use `errors.Is()` to determine whether the current `error` contains the target type of `error`.

<details>
<summary>Example</summary>

```go
package main

import (
	"errors"
	"fmt"
)

func main() {
	// Create error using New
	err1 := errors.New("first error")

	// Create error using fmt
	err2 := fmt.Errorf("second %s", "error")

	// Use join to combine multiple errors
	err3 := errors.Join(err1, err2)

	fmt.Println(err1, err2) 
	// Output: first error second error
	
	fmt.Println(err3) 
	// Output: 
	// first error
	// second error

	// Use errors.Is() to determine whether the error is the target error. Since err3 contains err1, it is true.
	fmt.Println(errors.Is(err1, err2))
	// Output: false
	fmt.Println(errors.Is(err3, err1))
	// Output: true
}
```

</details>

## errors.As

We can use `errors.As()` to assign the first error in the error that matches the target type to the target object.

<details>
<summary>Example</summary>

```go
package main

import (
	"errors"
	"fmt"
)

type NormalErr struct {
	e string
}

func (t NormalErr) Error() string {
	return t.e
}

func main() {
	// Create error using New
	err1 := errors.New("first error")

	// Create T
	err2 := NormalErr{"second error"}

	// Use join to combine multiple errors
	err3 := errors.Join(err1, err2)

	var err4 NormalErr

	errors.As(err3, &err4)

	fmt.Println(err4)
	// Output： second error
}
```

</details>