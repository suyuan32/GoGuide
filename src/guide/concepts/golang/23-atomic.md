---
order: 23
title: 原子操作
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: Go, Golang, atomic, 原子操作, sync
---

## 原子操作 (Atomic)

::: info 什么是原子操作?

原子操作是一种不可分割的操作，要么全部执行成功，要么全部执行失败。在针对内存中某个值的操作时，原子操作可以确保在并发环境下不会出现数据竞争，其他 goroutine 无法在操作进行中对该值进行读写。

:::

在 Golang 中， 针对原子操作，我们可以使用 `sync/atomic` 包提供的原子操作函数。这些函数可以确保在并发环境下对共享资源进行安全的读写。

::: warning

实际上，原子操作也可以通过加锁来实现，但是加锁操作涉及到**内核态**的上下文切换，会有比较大的性能消耗，而原子操作是在**用户态**完成的，性能更高，效率可能相差几倍。

**互斥锁和原子操作的区别**
- 互斥锁通常用于保护一段代码，只有一个 `goroutine` 可以访问这段代码，其他 `goroutine` 需要等待， 而原子操作通常用于保护一个变量，确保在并发环境下对变量的读写是安全的。
- 互斥锁是一种悲观锁，它认为并发访问是一种常态，所以会在访问前先加锁，而原子操作是一种乐观锁，它认为并发访问是一种特例，所以会先尝试进行操作，如果失败再进行重试。
- 互斥锁是一种重量级锁，它会涉及到内核态的上下文切换，性能消耗较大，而原子操作是一种轻量级锁，它是在用户态完成的，性能更高。
- 互斥锁有操作系统的调度器实现， 而原子操作则是有硬件提供的原子指令实现，无需加锁而实现并发安全。
:::

::: details 实现原理

原子操作的实现原理是通过 `CPU` 提供的原子指令来实现的，这些指令可以确保在执行过程中不会被中断，从而保证操作的原子性。由于大多数 `CPU` 的原子操作都是基于 `32` 位或 `64` 位的寄存器，所以 `Golang` 原子操作的范围也仅限于这两种类型。

**原子操作 AddInt32 的汇编代码**

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

可以看到，`AddInt32` 函数的实现是通过 `LOCK` 将 `XADDL` 转为原子操作，可以确保在执行过程中不会被中断。


:::

### 原子操作函数

| 操作       | 函数                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 读取       | `LoadInt32`, `LoadInt64`, `LoadUint32`, `LoadUint64`, `LoadPointer`, `LoadUintptr`                                                             |
| 写入       | `StoreInt32`, `StoreInt64`, `StoreUint32`, `StoreUint64`, `StorePointer`, `StoreUintptr`                                                       |
| 交换       | `SwapInt32`, `SwapInt64`, `SwapUint32`, `SwapUint64`, `SwapPointer`, `SwapUintptr`                                                             |
| 比较并交换 | `CompareAndSwapInt32`, `CompareAndSwapInt64`, `CompareAndSwapUint32`, `CompareAndSwapUint64`, `CompareAndSwapPointer`, `CompareAndSwapUintptr` |
| 增减       | `AddInt32`, `AddInt64`, `AddUint32`, `AddUint64`, `AddUintptr`                                                                                 |

::: tip 效率对比

我们以累加到 10000 为例，看下加锁和原子操作的效率对比

- **不加锁且不使用原子操作**

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
			count ++
			wg.Done()
		}()
	}

	wg.Wait()

	fmt.Printf("time cost: %v, count: %d", time.Since(start), count)
}

```

> [!important]
> time cost: 2.5907ms, count: 9663 \
> **可以看到，由于没有加锁，导致 count 的值并没有累加到 10000**

- **加锁**

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
> **可以看到时间消耗为 3.2373 毫秒，累加值为 10000**

- **原子操作**

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
> **可以看到时间消耗为 2.6217 毫秒，累加值为 10000**

:::

