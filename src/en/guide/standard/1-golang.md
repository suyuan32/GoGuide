---
order: 1
title: Golang Dev Specifications
head:
  - - meta
    - name: keywords
      content: golang, development, specifications
---


::: info Source
These guidelines are based on [uber-go](https://github.com/xxjwxc/uber_go_guide_cn).
:::

## Basic Guidelines

### Limit Line Length

Go code lines should be limited to 80 characters. This helps improve readability in both smaller and larger windows.

### Group Related Declarations, Avoid Unrelated Ones

Group related declarations together, such as imports, constants, variables, types, and functions. Separate unrelated declarations with an empty line.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
import "a"
import "b"
```

</td><td>

```go
import (
  "a"
  "b"
)
```

</td></tr>

<tr><td>

```go
const a = 1
const b = 2

var a = 1
var b = 2

type Area float64
type Volume float64
```

</td><td>

```go
const (
  a = 1
  b = 2
)

var (
  a = 1
  b = 2
)

type (
  Area float64
  Volume float64
)
```

</td></tr>

<tr><td>

`EnvVar` is not related to `iota`.

```go
type Operation int

const (
  Add Operation = iota + 1
  Subtract
  Multiply
  EnvVar = "MY_ENV"
)
```

</td><td>

```go
type Operation int

const (
  Add Operation = iota + 1
  Subtract
  Multiply
)

const EnvVar = "MY_ENV"
```

</td></tr>

<tr><td>

```go
func f() string {
  red := color.New(0xff0000)
  green := color.New(0x00ff00)
  blue := color.New(0x0000ff)

  ...
}
```

</td><td>

Grouping within a function is also acceptable:

```go
func f() string {
  var (
    red   = color.New(0xff0000)
    green = color.New(0x00ff00)
    blue  = color.New(0x0000ff)
  )

  ...
}
```
</td></tr>

<tr><td>

```go
func (c *client) request() {
  caller := c.name
  format := "json"
  timeout := 5*time.Second
  var err error // Separate var declaration is not recommended
  // ...
}
```

</td><td>


```go
func (c *client) request() {
  var (
    caller  = c.name
    format  = "json"
    timeout = 5*time.Second
    err error
  )
  // ...
}
```

</td></tr>

</tbody></table>

### Single Variable Declarations

For single variable assignments, prefer using `:=`. However, for slices, it's recommended to use `var` declarations.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
var s = "foo"
```

</td><td>

```go
s := "foo"
```

</td></tr>

<tr><td>

```go
func f(list []int) {
  filtered := []int{}
  for _, v := range list {
    if v > 10 {
      filtered = append(filtered, v)
    }
  }
}
```

</td><td>

```go
func f(list []int) {
  var filtered []int
  for _, v := range list {
    if v > 10 {
      filtered = append(filtered, v)
    }
  }
}
```

</td></tr>

</tbody></table>

### Import Grouping

Group imported packages, separating each group with an empty line, and sort them alphabetically within each group.

::: tip Common Grouping Patterns

Two common grouping patterns:

1. Standard library vs. third-party libraries.
2. Standard library vs. third-party libraries vs. local/private libraries.

:::

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
import (
  "fmt"
  "os"
  "go.uber.org/atomic"
  "golang.org/x/sync/errgroup"
)
```

</td><td>

```go
import (
  "fmt"
  "os"

  "go.uber.org/atomic"
  "golang.org/x/sync/errgroup"
)
```

</td></tr>
</tbody></table>

Certainly! Here's the translation of your Go code snippets into English:

### Import Aliases

When the package name you're importing doesn't match the last word in the import path, it's recommended to use an alias. You can also use an alias if the package name is too long. However, in most cases, it's best to avoid aliases unless there's a package name conflict.

```go
import (
  "net/http"

  client "example.com/client-go"
  trace "example.com/trace/v2"
)
```

### Package Names

When defining package names, follow these guidelines:

- Use all lowercase letters; avoid uppercase or special characters.
- In most cases, you don't need to rename packages when using named imports.
- Choose simple yet meaningful package names for easy recall and reference.
- Avoid using plurals; for example, use `net/url` instead of `net/urls`.
- Refrain from using generic names like "common," "util," "shared," or "lib."

### Function Names

- Use camel case for function names; avoid underscores to separate words (except for some test functions).
- Function names should describe their purpose as clearly as possible; avoid using meaningless names.

### Function Ordering

Follow these rules for function ordering:

- Arrange function definitions in the order of their expected invocation.
- Within the same file, place functions after `struct`, `const`, and `var` declarations.
- For receiver functions, those starting with `new` or `New` should come before others.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
func (s *something) Cost() {
  return calcCost(s.weights)
}

type something struct{ ... }

func calcCost(n []int) int {...}

func (s *something) Stop() {...}

func newSomething() *something {
    return &something{}
}
```

</td><td>

```go
type something struct{ ... }

func newSomething() *something {
    return &something{}
}

func (s *something) Cost() {
  return calcCost(s.weights)
}

func (s *something) Stop() {...}

func calcCost(n []int) int {...}
```

</td></tr>
</tbody></table>

### Reduce Nesting

Code should handle errors or special cases and return early rather than nesting code blocks. This approach leads to more straightforward and concise code.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
for _, v := range data {
  if v.F1 == 1 {
    v = process(v)
    if err := v.Call(); err == nil {
      v.Send()
    } else {
      return err
    }
  } else {
    log.Printf("Invalid v: %v", v)
  }
}
```

</td><td>

```go
for _, v := range data {
  if v.F1 != 1 {
    log.Printf("Invalid v: %v", v)
    continue
  }

  v = process(v)
  if err := v.Call(); err != nil {
    return err
  }
  v.Send()
}
```

</td></tr>
</tbody></table>

### Minimize Unnecessary `else` Blocks

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
var a int
if b {
  a = 100
} else {
  a = 10
}
```

</td><td>

```go
a := 10
if b {
  a = 100
}
```

</td></tr>
</tbody></table>

### Top-Level Variable Declarations

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
var _s string = F()

func F() string { return "A" }
```

</td><td>

```go
var _s = F()
// Since F already explicitly returns a string type,
// we don't need to specify the type of _s explicitly.

func F() string { return "A" }
```

</td></tr>

<tr><td>

If we want `_e` to be of type `error`, the following definition is incorrect; `_e` would be defined as the `myError` type.

```go
type myError struct{}

func (myError) Error() string { return "error" }

func F() myError { return myError{} }

var _e = F() 
```

</td><td>

```go
type myError struct{}

func (myError) Error() string { return "error" }

func F() myError { return myError{} }

var _e error = F()
```

</td></tr>

</tbody></table>

### Use `_` as a Prefix for Unexported Top-Level Constants and Variables

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
// foo.go

const (
  defaultPort = 8080
  defaultUser = "user"
)
```

</td><td>

```go
// foo.go

const (
  _defaultPort = 8080
  _defaultUser = "user"
)
```

</td></tr>
</tbody></table>

### Separate Embedded Types in Structs with an Empty Line

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
type Client struct {
  version int
  http.Client
}
```

</td><td>

```go
type Client struct {
  http.Client

  version int
}
```

</td></tr>
</tbody></table>

::: warning Pros and Cons of Embedded Types

Pros:

- Concise code
- Direct access to methods and fields of embedded types
- Ability to implement interfaces

Cons:

- May expose unexported fields and methods to external packages
- Imports the special zero value of embedded methods
- Exposes all fields and methods of the embedded type, which may not be desired
- Can lead to method call ambiguity if the embedded type has the same method names
- Assigning values to fields of embedded types can be cumbersome, as they mix with other embedded types

:::

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
type A struct {
    // Bad: A.Lock() and A.Unlock() are now available,
    // providing no functional benefit and allowing 
    // users to control internal details of A.
    sync.Mutex
}
```

</td><td>

```go
type countingWriteCloser struct {
    // Good: Write() is provided at the outer level for a specific purpose,
    // and the work is delegated to the Write() of the inner type.
    io.WriteCloser
    count int
}
func (w *countingWriteCloser) Write(bs []byte) (int, error) {
    w.count += len(bs)
    return w.WriteCloser.Write(bs)
}
```

</td></tr>
<tr><td>

```go
type Book struct {
    // Bad: Pointers change the usefulness of zero values
    io.ReadWriter
    // other fields
}
// later
var b Book
b.Read(...)  // panic: nil pointer
b.String()   // panic: nil pointer
b.Write(...) // panic: nil pointer
```

</td><td>

```go
type Book struct {
    // Good: Useful zero value
    bytes.Buffer
    // other fields
}
// later
var b Book
b.Read(...)  // ok
b.String()   // ok
b.Write(...) // ok
```

</td></tr>
<tr><td>

```go
type Client struct {
    sync.Mutex
    sync.WaitGroup
    bytes.Buffer
    url.URL
}
```

</td><td>

```go
type Client struct {
    mtx sync.Mutex
    wg  sync.WaitGroup
    buf bytes.Buffer
    url url.URL
}
```

</td></tr>
</tbody></table>

Certainly! Here's the translation of your Go code snippets into English:

### `nil` Is a Valid Slice

When a slice is `nil`, it represents a slice with a length of 0.

- When returning an empty slice, it's better to return `nil` instead of an empty slice.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
if x == "" {
    return []int{}
}
```

</td><td>

```go
if x == "" {
    return nil
}
```

</td></tr>
</tbody></table>

- Use `len(s) == 0` to check for emptiness rather than `s != nil`.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
func isEmpty(s []string) bool {
    return s == nil
}
```

</td><td>

```go
func isEmpty(s []string) bool {
    return len(s) == 0
}
```

</td></tr>
</tbody></table>

- Zero-value slices (declared using `var`) can be used immediately without calling `make()`.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
nums := []int{}
// or, nums := make([]int)

if add1 {
    nums = append(nums, 1)
}

if add2 {
    nums = append(nums, 2)
}
```

</td><td>

```go
var nums []int

if add1 {
    nums = append(nums, 1)
}

if add2 {
    nums = append(nums, 2)
}
```

</td></tr>
</tbody></table>

### Reduce Variable Scope

Minimize variable scope unless the variable is used elsewhere.

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
err := os.WriteFile(name, data, 0644)
if err != nil {
    return err
}
```

</td><td>

```go
if err := os.WriteFile(name, data, 0644); err != nil {
    return err
}
```

</td></tr>

<tr><td>

```go
if data, err := os.ReadFile(name); err == nil {
    err = cfg.Decode(data)
    if err != nil {
        return err
    }

    fmt.Println(cfg)
    return nil
} else {
    return err
}
```

</td><td>

By declaring the `err` variable within the `if` statement, its scope is limited to the `if` block. This avoids using the same variable name in the `else` statement.

```go
data, err := os.ReadFile(name)
if err != nil {
    return err
}

if err := cfg.Decode(data); err != nil {
    return err
}

fmt.Println(cfg)
return nil
```

</td></tr>

</tbody></table>

### Use Raw Strings Instead of Escaped Strings

When a string contains escape characters, prefer wrapping it in backticks (`==`), indicating that it's a raw string and doesn't require escaping.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
wantError := "unknown name:\"test\""
```

</td><td>

```go
wantError := `unknown error:"test"`
```

</td></tr>
</tbody></table>

### Struct Initialization

#### Initialize Structs Using Field Names

When initializing a struct, it's better to include field names to avoid errors due to changes in the struct's fields.

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
k := User{"John", "Doe", true}
```

</td><td>

```go
k := User{
    FirstName: "John",
    LastName:  "Doe",
    Admin:     true,
}
```

</td></tr>
</tbody></table>

#### Omit Fields with Zero Values

If the fields being initialized have default zero values, you can omit the field names.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
user := User{
    FirstName:  "John",
    LastName:   "Doe",
    MiddleName: "",
    Admin:      false,
}
```

</td><td>

```go
user := User{
    FirstName: "John",
    LastName:  "Doe",
}
```

</td></tr>
</tbody></table>

#### If Initializing a Struct Variable with All Zero Values, Use `var`

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
user := User{}
```

</td><td>

```go
var user User
```

</td></tr>
</tbody></table>

#### Initialize Struct Pointers

When initializing a struct pointer, use the `&` symbol instead of `new()`.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
sptr := new(T)
sptr.Name = "bar"
```

</td><td>

```go
sptr := &T{Name: "bar"}
```

</td></tr>
</tbody></table>

#### Use `make()` to Initialize Maps

When initializing a map, if it has initial values, use `:=` instead of `make()`. If there are no initial values, use `make()`, and consider estimating the map's size by setting an initial capacity.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
m := make(map[T1]T2, 3)
m[k1] = v1
m[k2] = v2
m[k3] = v3
```

</td><td>

```go
m := map[T1]T2{
  k1: v1,
  k2: v2,
  k3: v3,
}
```

</td></tr>

<tr><td>

```go
m := make(map[T1]T2)
```

</td><td>

```go
m := make(map[T1]T2, 3)
```

</td></tr>

</tbody></table>

### If Defining a Format String Outside Printf, Use `const`

When defining a format string outside of `Printf`, it's recommended to use a `const` constant. This avoids duplicate format string definitions and helps `go vet` perform static analysis.

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
msg := "unexpected values %v, %v\n"
fmt.Printf(msg, 1, 2)
```

</td><td>

```go
const msg = "unexpected values %v, %v\n"
fmt.Printf(msg, 1, 2)
```

</td></tr>
</tbody></table>

## Development Principles

### Error Handling

#### Types of Errors

There are typically two types of errors:

1. **Static Errors**: These are errors created using `errors.New()`. They are often used for predefined errors where the error message remains constant.
2. **Dynamic Errors**: These are errors created using `fmt.Errorf()` or custom error types. They are suitable for cases where the error message needs to be dynamic.

::: tip Error Matching
When checking error types, avoid using `==` for comparison. Instead, use `errors.Is()` or `errors.As()` for comparison. Also, create top-level error variables for better handling.

```go
// package foo
var ErrCouldNotOpen = errors.New("could not open")

func Open() error {
  return ErrCouldNotOpen
}

// package bar

if err := foo.Open(); err != nil {
  if errors.Is(err, foo.ErrCouldNotOpen) {
    // handle the error
  } else {
    panic("unknown error")
  }
}
```
:::

#### Error Wrapping

We can wrap errors using `fmt.Errorf()` or `errors.Wrap()` to preserve the original error information while adding additional context.

::: warning
Starting from Go 1.13, you can use `%w` as a formatting verb with `fmt.Errorf()`. This allows proper error type matching using `errors.Is()` and `errors.As()`. Avoid using `%v` as it loses error type information.
:::

```go
s, err := store.New()
if err != nil {
    return fmt.Errorf(
        "new store: %w", err)
}
```

#### Error Naming

For regular error variables, use names starting with `Err`, followed by a description of the error using camel case:

```go
var (
  // Export these errors so users of this package can match them with errors.Is.
  ErrBrokenLink = errors.New("link is broken")
  ErrCouldNotOpen = errors.New("could not open")

  // This error is not exported to avoid making it part of our public API.
  errNotFound = errors.New("not found")
)
```

For custom error types, consider using `Error` as a suffix:

```go
// Similarly, export this error so users of this package can match it with errors.As.
type NotFoundError struct {
  File string
}

func (e *NotFoundError) Error() string {
  return fmt.Sprintf("file %q not found", e.File)
}

// This error is not exported to avoid making it part of our public API.
type resolveError struct {
  Path string
}

func (e *resolveError) Error() string {
  return fmt.Sprintf("resolve %q", e.Path)
}
```

#### Sequential Error Handling

When handling errors, use `errors.Is()` and `errors.As()` to determine the error type. Handle different error types differently, and if an error cannot be handled, explicitly return it to allow higher-level handling.

<table>
<thead><tr><th>Description</th><th>Code Example</th></tr></thead>
<tbody>
<tr><td>

**Not Recommended**: Log and return the error

This approach may clutter application logs with similar error messages, but it doesn't provide significant benefits.

</td><td>

```go
u, err := getUser(id)
if err != nil {
  // BAD: See description
  log.Printf("Could not get user %q: %v", id, err)
  return err
}
```

</td></tr>
<tr><td>

**Recommended**: Wrap the error and return it

Higher-level callers in the stack will handle this error. Using `%w` ensures that they can match the error using `errors.Is()` or `errors.As()`.

</td><td>

```go
u, err := getUser(id)
if err != nil {
  return fmt.Errorf("get user %q: %w", id, err)
}
```

</td></tr>
<tr><td>

**Recommended**: Log the error and gracefully degrade

If the operation is not absolutely critical, we can provide a degraded but uninterrupted experience by recovering from it.

</td><td>

```go
if err := emitMetrics(); err != nil {
  // Failure to write metrics should not
  // break the application.
  log.Printf("Could not emit metrics: %v", err)
}
```

</td></tr>
<tr><td>

**Recommended**: Match the error and gracefully degrade

If the callee defines a specific error in its contract and the failure is recoverable, match that error case and degrade gracefully. For all other cases, wrap the error and return it.

Higher-level callers in the stack will handle other error cases.

</td><td>

```go
tz, err := getUserTimeZone(id)
if err != nil {
  if errors.Is(err, ErrUserNotFound) {
    // User doesn't exist. Use UTC.
    tz = time.UTC
  } else {
    return fmt.Errorf("get user %q: %w", id, err)
  }
}
```

</td></tr>
</tbody></table>


### Type Assertions

When performing type assertions, always use the `ok` return value to avoid causing a panic.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
t := i.(string) // May cause panic
```

</td><td>

```go
t, ok := i.(string)
if !ok {
  // Handle the error gracefully
}
```

</td></tr>
</tbody></table>

### Minimize the Use of `panic`

In production code, it's best to avoid using `panic`. `panic` is a major contributor to cascading failures. If you must use `panic`, make sure to handle it using `recover()`.

### Use Atomic Operations

In concurrent programming, use the atomic operations provided by the `atomic` package to ensure thread safety. These operations guarantee that basic types like `int32` and `int64` can only be accessed by one goroutine at a time.

For other types, consider using channels or sync locks for control.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
type foo struct {
  running int32  // atomic
}

func (f* foo) start() {
  if atomic.SwapInt32(&f.running, 1) == 1 {
     // already running…
     return
  }
  // start the Foo
}

func (f *foo) isRunning() bool {
  return f.running == 1  // race!
}
```

</td><td>

```go
type foo struct {
  running atomic.Bool
}

func (f *foo) start() {
  if f.running.Swap(true) {
     // already running…
     return
  }
  // start the Foo
}

func (f *foo) isRunning() bool {
  return f.running.Load()
}
```

</td></tr>
</tbody></table>


### Avoid Embedding Types in Public Structures

Avoid embedding types in public structures. When multiple types are embedded, it can lead to a mix of exposed interfaces and variables, making management and configuration difficult. Additionally, conflicts may arise between identical variables and functions. There's no guarantee that future versions won't introduce conflicts.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
// ConcreteList represents an entity list.
type ConcreteList struct {
  *AbstractList
}
```

</td><td>

```go
// ConcreteList represents an entity list.
type ConcreteList struct {
  list *AbstractList
}
// Add adds an entity to the list.
func (l *ConcreteList) Add(e Entity) {
  l.list.Add(e)
}
// Remove removes an entity from the list.
func (l *ConcreteList) Remove(e Entity) {
  l.list.Remove(e)
}
```

</td></tr>
</tbody></table>


### Avoid Using Built-in Names

When declaring variables, avoid using built-in names such as `len`, `cap`, `append`, `copy`, `new`, `make`, `close`, `delete`, `complex`, `real`, `imag`, `panic`, `recover`, `print`, `println`, `error`, `string`, `int`, `uint`, `uintptr`, `byte`, `rune`, `float32`, `float64`, `bool`, `true`, `false`, `iota`, `nil`, `true`, `false`, `iota`, `nil`, `append`, `cap`, `close`, `complex`, `copy`, `delete`, `imag`, `len`, `make`, `new`, `panic`, `print`, `println`, `real`, `recover`, `string`, `uint`, `uintptr`, `byte`, `rune`, `float32`, `float64`, `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `uintptr`, `bool`, etc.

### Avoid Using `init` Functions

The `init` function is automatically executed when a package is imported. However, since the order of execution of `init` functions is not guaranteed, initializing variables within an `init` function can lead to unpredictable results. Therefore, it's best to avoid using `init` functions.

::: info When to Use `init()`
- When the assignment process during package import is complex and cannot be done with a single variable assignment
- When using pluggable hook functions (e.g., `database/sql`)
- For optimizing precomputed methods
:::

### Preallocate Slice Capacity

If you can know the approximate amount of data in advance, you should configure capacity for `slice` in advance to reduce the number of `slice` expansions and improve performance.

<table>
<thead><tr><th>Not Recommended</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
for n := 0; n < b.N; n++ {
  data := make([]int, 0)
  for k := 0; k < size; k++{
    data = append(data, k)
  }
}
```

</td><td>

```go
for n := 0; n < b.N; n++ {
  data := make([]int, 0, size)
  for k := 0; k < size; k++{
    data = append(data, k)
  }
}
```

</td></tr>
<tr><td>

```
BenchmarkBad-4    100000000    2.48s
```

</td><td>

```
BenchmarkGood-4   100000000    0.21s
```

</td></tr>
</tbody></table>

### Exiting the Main Program Using `Exit` or `Fatal`

In the main program, if an error occurs, it's preferable to use `os.Exit` or `log.Fatal` to exit the program rather than using `panic`. While `panic` can cause the program to crash, `os.Exit` or `log.Fatal` will allow the program to exit gracefully. Additionally, errors should be propagated to the ultimate caller rather than handling fatal errors in every function.

::: info 
It's best to call either `os.Exit` or `log.Fatal*` **only in** `main()`. All other functions should return errors to the `main` program.

Reasons:
- Allowing too many functions to call `Fatal` can make it difficult to control the program flow.
- `Fatal` errors may prevent all tests from running.
- `Fatal` errors may prevent `defer` from executing.
:::

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
func main() {
  body := readFile(path)
  fmt.Println(body)
}
func readFile(path string) string {
  f, err := os.Open(path)
  if err != nil {
    log.Fatal(err)
  }
  b, err := os.ReadAll(f)
  if err != nil {
    log.Fatal(err)
  }
  return string(b)
}
```

</td><td>

```go
func main() {
  body, err := readFile(path)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(body)
}
func readFile(path string) (string, error) {
  f, err := os.Open(path)
  if err != nil {
    return "", err
  }
  b, err := os.ReadAll(f)
  if err != nil {
    return "", err
  }
  return string(b), nil
}
```

</td></tr>
</tbody></table>

### Declaring Tags in Serialized Structs

In serialized structs, it's essential to declare tags (such as `json` or `xml`) to ensure correct parsing during serialization and deserialization.

<table>
<thead><tr><th>Recommended</th><th>Not Recommended</th></tr></thead>
<tbody>
<tr><td>

```go
type Stock struct {
  Price int
  Name  string
}
bytes, err := json.Marshal(Stock{
  Price: 137,
  Name:  "UBER",
})
```

</td><td>

```go
type Stock struct {
  Price int    `json:"price"`
  Name  string `json:"name"`
  // Safe to rename Name to Symbol.
}
bytes, err := json.Marshal(Stock{
  Price: 137,
  Name:  "UBER",
})
```

</td></tr>
</tbody></table>

### Pay Attention to Goroutine Usage

::: warning
When using goroutines, consider the following:
- Limit the number of goroutines to avoid unbounded creation.
- Ensure goroutines have predictable termination times.
- Provide a method for stopping goroutines.
:::

<table>
<thead><tr><th>Bad</th><th>Good</th></tr></thead>
<tbody>
<tr><td>

```go
go func() {
  for {
    flush()
    time.Sleep(delay)
  }
}()
```

</td><td>

```go
var (
  stop = make(chan struct{}) // Signal to stop the goroutine
  done = make(chan struct{}) // Signal that our goroutine has exited
)
go func() {
  defer close(done)
  ticker := time.NewTicker(delay)
  defer ticker.Stop()
  for {
    select {
    case <-tick.C:
      flush()
    case <-stop:
      return
    }
  }
}()
// Other code...
close(stop)  // Signal the goroutine to stop
<-done       // Wait for it to exit
```

</td></tr>
<tr><td>

This goroutine cannot be stopped. It will keep running until the application exits.

</td><td>

This goroutine can be stopped using `close(stop)`, and we can wait for it to exit using `<-done`.

</td></tr>
</tbody></table>

#### Waiting for Goroutines to Exit

When a goroutine is executing, use a mechanism to ensure that the main program doesn't exit prematurely. Otherwise, it might terminate the goroutine.

Two common approaches are:

1. Use `sync.WaitGroup`:
   If you need to wait for multiple goroutines, use this approach.

    ```go
    var wg sync.WaitGroup
    for i := 0; i < N; i++ {
      wg.Add(1)
      go func() {
        defer wg.Done()
        // ...
      }()
    }
    
    // To wait for all to finish:
    wg.Wait()
    ```

2. Add another `chan struct{}` that the goroutine closes when it's done.
   If you have only one goroutine, use this approach.

    ```go
    done := make(chan struct{})
    go func() {
      defer close(done)
      // ...
    }()
    
    // To wait for the goroutine to finish:
    <-done
    ```

### Avoid Using Goroutines in `init()`

Using goroutines in `init()` functions can complicate program initialization. Since `init()` functions execute when the program starts, and goroutines run asynchronously, the initialization order may become unpredictable.

## Performance Optimization

### Prefer `strconv` Over `fmt`

When converting strings, prefer using the `strconv` package over `fmt`. The `fmt` package is heavier, while `strconv` is lighter. `strconv` provides faster conversion and requires fewer resources.

### Specify Map and Slice Capacities

If you know the approximate capacity in advance, preallocate it to avoid unnecessary memory allocation and automatic resizing.