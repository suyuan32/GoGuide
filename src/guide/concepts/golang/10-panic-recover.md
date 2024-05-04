---
order: 10
title: Panic & Recover
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: golang, panic, recover, 异常处理
---

## Panic & Recover | 异常处理

在 Golang 中，`panic` 和 `recover` 是用于处理异常的两个关键字，`panic` 用于引发异常，`recover` 用于捕获异常。

::: tip

| 函数                    | 描述                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `panic(interface{})`    | 引发异常，停止当前 `Goroutine` 的执行, 并递归执行当前 `Goroutine` 中的 `defer` 方法   |
| `recover() interface{}` | 捕获异常，返回异常信息，用于处理异常，防止异常导致的程序崩溃，仅可以在 `defer` 中调用 |

:::

### Panic 的数据结构

`panic` 的数据结构位于 `runtime._panic` 结构体中，其定义如下：

```go
// _panic 保存有关活动 panic 的信息。
//
// _panic 值只能存在于堆栈上。
//
// argp 和 link 字段是堆栈指针，但在堆栈增长期间不需要特殊处理：
// 因为它们是指针类型，而 _panic 值仅存在于堆栈上，所以常规的堆栈指针调整会处理它们。
type _panic struct {
	argp unsafe.Pointer // 指向在 panic 期间运行的延迟调用的参数；不能移动 - 已知于 liblink
	arg  any            // panic 的参数
	link *_panic        // 指向先前 panic 的链接

	// startPC 和 startSP 跟踪 _panic.start 被调用的位置。
	startPC uintptr
	startSP unsafe.Pointer

	// 我们正在运行延迟调用的当前堆栈帧。
	sp unsafe.Pointer
	lr uintptr
	fp unsafe.Pointer

	// 如果最后由 _panic.next() 返回的函数恢复了 panic，retpc 存储 panic 应该跳回的 PC。
	retpc uintptr

	// 用于处理内联 defer 的额外状态。
	deferBitsPtr *uint8
	slotsPtr     unsafe.Pointer

	recovered   bool // 此 panic 是否已被恢复
	goexit      bool
	deferreturn bool
}
```

- `_panic` 结构体用于保存有关活动 panic 的信息。
- `_panic` 值只能存在于堆栈上，不会分配到堆上。
- `argp` 和 `link` 字段是堆栈指针，但在堆栈增长期间不需要特殊处理。因为它们是指针类型，而 `_panic` 值仅存在于堆栈上，所以常规的堆栈指针调整会处理它们。
- `startPC` 和 `startSP` 跟踪 `_panic.start` 被调用的位置。
- `sp` 是当前运行延迟调用的堆栈帧的指针。
- `retpc` 存储 panic 应该跳回的 PC，如果最后由 `_panic.next()` 返回的函数恢复了 panic。
- `recovered` 表示此 panic 是否已被恢复。

::: important 作用范围
- `panic` 只会触发当前 `Goroutine` 的 `defer`。

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

// 结果
// test panic:  0
// recover panic:  1
// test panic:  3
// test panic:  2
```

- `recover` 用于捕获异常，返回异常信息，用于处理异常，防止异常导致的程序崩溃，仅在 `defer` 中调用有效，其他地方调用只会返回 `nil`。
- `panic` 也可以在 `defer` 中被调用

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

// 结果
//	test panic:  3
//	test panic:  0
//	test panic:  2
//	recover panic:  1
//	panic: panic 1 [recovered]
//	panic: panic in defer
```

:::

### Panic 的执行流程


![Panic 执行流程](/assets/image/article/concept/panic-call.png)

::: info 执行流程

1. 编译器将 `panic` 转换成 `runtime` 包中的 `gopanic` 函数并调用
2. 将 `Gorountine` 的 `defer` 链表逆序执行
3. 如果 `defer` 中没有 `recover`，则执行 `defer` 中的代码
4. 如果 `defer` 中有 `recover`，则会调用 `runtime.gorecover`, 将 `panic` 中的 `recovered` 置为 `true`，然后从 `runtime._defer` 中取出程序计数器 `pc` 和栈指针 `sp`，并执行 `runtime.recovery` 恢复程序，最后调用 `runtime.deferproc` 返回 `1`，表示 `recover` 成功。
5. `panic` 的 `deferreturn` 字段置为 `true`，表示 `defer` 已经执行完毕
6. 如果所有 `defer` 中都没有 `recover()`， 则程序会执行 `runtime.fatalpanic` 终止运行

::: details 例子

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


// 结果
//	func 3
//	recover
//	func 2
//	func 1
```

:::

### 异常捕获

::: warning 难以捕获的异常类型, 无法通过 recover 捕获

- **内存溢出**： 当预分配空间过大导致内存溢出时，会返回 `runtime: out of memory`, 无法通过 `recover` 捕获恢复
- **map 并发读写**: 当 map 并发读写时，会返回 `concurrent map read and map write`, 无法通过 `recover` 捕获恢复
- **栈内存耗尽**: 当栈内存耗尽时，会返回 `runtime: goroutine stack exceeds 1000000000-byte limit`, 无法通过 `recover` 捕获恢复
- **Goroutine运行空函数**: 当 Goroutine 运行空函数时，会返回 `runtime: goroutine running on NULL machine`, 无法通过 `recover` 捕获恢复
- **全部Goroutine休眠**: 当全部 Goroutine 休眠时，会返回 `all goroutines are asleep - deadlock!`, 无法通过 `recover` 捕获恢复

:::

::: tip 可以捕获的异常

- **数组越界**: 当数组越界时，会返回 `panic: runtime error: index out of range`, 可以通过 `recover` 捕获恢复
- **空指针引用**: 当空指针引用时，会返回 `panic: runtime error: invalid memory address or nil pointer dereference`, 可以通过 `recover` 捕获恢复
- **类型断言失败**: 当类型断言失败时，会返回 `panic: interface conversion: interface {} is nil, not int`, 可以通过 `recover` 捕获恢复
- **除数为0**: 当除数为0时，会返回 `panic: runtime error: integer divide by zero`, 可以通过 `recover` 捕获恢复
- **调用不存在的方法**: 当调用不存在的方法时，会返回 `panic: runtime error: invalid memory address or nil pointer dereference`, 可以通过 `recover` 捕获恢复

:::