---
order: 23
title: Atomic Operations
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: Go, Golang, atomic, Atomic Operations, sync
---

## Atomic Operations

::: info What are Atomic Operations?

Atomic operations are indivisible operations that either succeed completely or fail completely. When performing operations on a value in memory, atomic operations ensure that there are no data races in a concurrent environment, preventing other goroutines from reading or writing to the value while the operation is in progress.

:::

In Go, for atomic operations, we can use the functions provided by the `sync/atomic` package. These functions guarantee safe read and write access to shared resources in a concurrent environment.

::: warning

In practice, atomic operations can also be implemented using locks. However, locking involves context switches in the **kernel mode**, resulting in significant performance overhead. Atomic operations, on the other hand, are performed in **user mode**, making them more efficient and potentially several times faster.

**Differences Between Mutex Locks and Atomic Operations**
- Mutex locks are typically used to protect a section of code, ensuring that only one goroutine can access that code at a time. In contrast, atomic operations are commonly used to protect a single variable, ensuring safe read and write access in a concurrent environment.
- Mutex locks are pessimistic; they assume that concurrent access is common and therefore lock before accessing. Atomic operations are optimistic; they assume that concurrent access is rare and attempt the operation first. If it fails, they retry.
- Mutex locks are heavyweight, involving kernel-level context switches. Atomic operations are lightweight, executed in user mode, resulting in better performance.
- Mutex locks rely on the operating system's scheduler, while atomic operations use hardware-provided atomic instructions, avoiding the need for locks.

:::

::: details Implementation Details

The implementation of atomic operations relies on the atomic instructions provided by the CPU. These instructions ensure that the operation cannot be interrupted during execution, guaranteeing atomicity. Since most CPUs support atomic operations on 32-bit or 64-bit registers, Go's atomic operations are limited to these types.

**Assembly Code for `AddInt32` Atomic Operation**

```asm
TEXT ·AddInt32(SB), NOSPLIT, $0-12
    MOVQ ptr+0(FP), AX
    MOVQ old+8(FP), BX
    MOVQ new+0(FP), CX
    LOCK
    XADDL CX, (AX)
    CMP CX, BX
    JNE fail
    MOVQ $1, AX
    RET
fail:
    MOVQ $0, AX
    RET
```

In this example, the `AddInt32` function converts `XADDL` into an atomic operation using the `LOCK` prefix, ensuring that it cannot be interrupted during execution.

:::


### Atomic Operations Functions

| Operation           | Functions                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Read                | `LoadInt32`, `LoadInt64`, `LoadUint32`, `LoadUint64`, `LoadPointer`, `LoadUintptr`                                                             |
| Write               | `StoreInt32`, `StoreInt64`, `StoreUint32`, `StoreUint64`, `StorePointer`, `StoreUintptr`                                                       |
| Swap                | `SwapInt32`, `SwapInt64`, `SwapUint32`, `SwapUint64`, `SwapPointer`, `SwapUintptr`                                                             |
| Compare and Swap    | `CompareAndSwapInt32`, `CompareAndSwapInt64`, `CompareAndSwapUint32`, `CompareAndSwapUint64`, `CompareAndSwapPointer`, `CompareAndSwapUintptr` |
| Increment/Decrement | `AddInt32`, `AddInt64`, `AddUint32`, `AddUint64`, `AddUintptr`                                                                                 |

::: tip Efficiency Comparison

Let's take the example of accumulating to 10,000 and compare the efficiency of locking and atomic operations.

- **Without Locking and Atomic Operations**

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

var count = 0

func main() {
	wg := sync.WaitGroup{}
	start := time.Now()
	for _ = range 10000 {
		wg.Add(1)
		go func() {
			count++
			wg.Done()
		}()
	}

	wg.Wait()

	fmt.Printf("time cost: %v, count: %d", time.Since(start), count)
}
```

> [!important]
> Time cost: 2.5907ms, count: 9663 \
> **As you can see, due to the lack of locking, the value of `count` did not accumulate to 10,000.**

- **With Locking**

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

var count = 0


func main() {
	wg := sync.WaitGroup{}
	lock := sync.Mutex{}
	start := time.Now()
	for _ = range 10000 {
		wg.Add(1)
		go func() {
			lock.Lock()
			count ++
			lock.Unlock()
			wg.Done()
		}()
	}

	wg.Wait()

	fmt.Printf("time cost: %v, count: %d", time.Since(start), count)
}
```

> [!important]
> time cost: 3.2373ms, count: 10000 \
> **You can see that the time consumption is 3.2373 milliseconds and the cumulative value is 10000**

- **Atomic Operations**

```go
package main

import (
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

var count int64 = 0

func main() {
	wg := sync.WaitGroup{}
	start := time.Now()
	for _ = range 10000 {
		wg.Add(1)
		go func() {
			atomic.AddInt64(&count, 1)
			wg.Done()
		}()
	}

	wg.Wait()

	fmt.Printf("time cost: %v, count: %d", time.Since(start), count)
}
```

> [!important]
> time cost: 2.6217ms, count: 10000 \
> **You can see that the time consumption is 2.6217 milliseconds and the cumulative value is 10000**

:::

