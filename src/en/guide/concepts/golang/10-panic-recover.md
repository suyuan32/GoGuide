---
order: 10
title: Panic & Recover
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, panic, recover, 异常处理
---

---

## Panic & Recover | Exception Handling

In Golang, `panic` and `recover` are two keywords used for exception handling. `panic` is used to raise an exception, while `recover` is used to catch exceptions.

::: tip

| Function                | Description                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `panic(interface{})`    | Raises an exception, stops the execution of the current Goroutine, and recursively executes the `defer` methods within the current Goroutine.                                          |
| `recover() interface{}` | Catches an exception, returns the exception information, and is used to handle exceptions, preventing program crashes due to exceptions. It can only be called within a `defer` block. |

:::

### Panic Data Structure

The data structure for `panic` is defined in the `runtime._panic` struct:

```go
// _panic stores information about an active panic.
//
// _panic values can only exist on the stack.
//
// argp and link fields are stack pointers, but they do not need special handling during stack growth:
// because they are pointer types and _panic values only exist on the stack, regular stack pointer adjustments handle them.
type _panic struct {
	argp unsafe.Pointer // Points to the arguments of deferred calls that ran during the panic; cannot move - known to liblink
	arg  any            // The argument to panic
	link *_panic        // Points to the link of the previous panic

// startPC and startSP track where _panic.start was called.
	startPC uintptr
	startSP unsafe.Pointer

// We're running the current stack frame of a deferred call.
	sp unsafe.Pointer
	lr uintptr
	fp unsafe.Pointer

// If the function returned by _panic.next() recovers the panic, retpc stores the PC to jump back to.
	retpc uintptr

// Additional state for handling inlined defers.
	deferBitsPtr *uint8
	slotsPtr     unsafe.Pointer

	recovered   bool // Whether this panic has been recovered
	goexit      bool
	deferreturn bool
}
```

- The `_panic` struct is used to store information about an active panic.
- `_panic` values can only exist on the stack and are not allocated on the heap.
- The `argp` and `link` fields are stack pointers, but they do not require special handling during stack growth. Because they are pointer types and `_panic` values only exist on the stack, regular stack pointer adjustments handle them.
- `startPC` and `startSP` track where `_panic.start` was called.
- `sp` points to the current stack frame of a deferred call.
- `retpc` stores the PC to jump back to if the function returned by `_panic.next()` recovers the panic.
- `recovered` indicates whether this panic has been recovered.

::: important Scope of `panic`
- `panic` only triggers the `defer` within the current Goroutine.
---

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	for i := range 4 {
		go testPanic(i)
	}


	time.Sleep(time.Second)
}

func testPanic(i int) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("recover panic: ", i)
		}
	}()

	if i == 1 {
		panic(fmt.Sprintf("panic %d", i))
	}

	fmt.Println("test panic: ", i)
}

// Result
// test panic:  0
// recover panic:  1
// test panic:  3
// test panic:  2
```

- `recover` is used to capture exceptions, return exception information, and handle exceptions to prevent program crashes caused by exceptions. It is only valid when called in `defer`, and calling elsewhere will only return `nil`.
- `panic` can also be called in `defer`

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	for i := range 4 {
		go testPanic(i)
	}


	time.Sleep(time.Second)
}

func testPanic(i int) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("recover panic: ", i)
			panic("panic in defer")
		}
	}()

	if i == 1 {
		panic(fmt.Sprintf("panic %d", i))
	}

	fmt.Println("test panic: ", i)
}

// Result
//	test panic:  3
//	test panic:  0
//	test panic:  2
//	recover panic:  1
//	panic: panic 1 [recovered]
//	panic: panic in defer
```

:::


### Execution Flow of Panic


![Panic Execution Flow](/assets/image/article/concept/panic-call.png)

::: info Execution Flow

1. The compiler translates `panic` into a call to the `gopanic` function in the `runtime` package.
2. The `defer` chain for the Goroutine is executed in reverse order.
3. If there is no `recover` in the `defer`, the code within the `defer` is executed.
4. If there is a `recover` in the `defer`, the `runtime.gorecover` function is called. It sets the `recovered` field in the `panic` to `true`, retrieves the program counter (`pc`) and stack pointer (`sp`) from `runtime._defer`, executes `runtime.recovery` to recover the program, and finally calls `runtime.deferproc` with a return value of `1` to indicate successful recovery.
5. The `deferreturn` field of the `panic` is set to `true`, indicating that the `defer` has completed execution.
6. If none of the `defer` blocks contain a `recover()`, the program terminates by executing `runtime.fatalpanic`.

::: details Example

```go
package main

import (
	"fmt"
)

func main() {
	defer func() {
		fmt.Println("func 1")
	}()

	defer func() {
		fmt.Println("func 2")
	}()

	defer func() {
		fmt.Println("func 3")
		if r := recover(); r != nil {
			fmt.Println("recover")
		}
	}()

	panic("panic")
}

// Output:
//	func 3
//	recover
//	func 2
//	func 1
```

:::

### Exception Handling

::: warning Difficult-to-Catch Exception Types

The following exceptions cannot be caught using `recover`:

- **Out of Memory**: When pre-allocated memory space is too large and results in an out-of-memory condition, the error message will be `runtime: out of memory`.
- **Concurrent Map Read and Write**: Attempting concurrent read and write operations on a map will result in the error message `concurrent map read and map write`.
- **Stack Exhaustion**: When the stack memory is exhausted, the error message will be `runtime: goroutine stack exceeds 1000000000-byte limit`.
- **Goroutine Running on NULL Machine**: Running a Goroutine on a NULL machine will result in the error message `runtime: goroutine running on NULL machine`.
- **All Goroutines Asleep (Deadlock)**: When all Goroutines are asleep and the program is deadlocked, the error message will be `all goroutines are asleep - deadlock!`.

:::

::: tip Catchable Exceptions

The following exceptions can be caught using `recover`:

- **Array Index Out of Range**: When an array index is out of range, the error message will be `panic: runtime error: index out of range`.
- **Nil Pointer Dereference**: Attempting to dereference a nil pointer will result in the error message `panic: runtime error: invalid memory address or nil pointer dereference`.
- **Type Assertion Failure**: When a type assertion fails, the error message will be `panic: interface conversion: interface {} is nil, not int`.
- **Division by Zero**: Attempting to divide by zero will result in the error message `panic: runtime error: integer divide by zero`.
- **Calling an Undefined Method**: Calling a method that does not exist will result in the error message `panic: runtime error: invalid memory address or nil pointer dereference`.

:::