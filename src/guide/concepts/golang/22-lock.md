---
order: 22
title: 锁
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: Go, Golang, 锁，Lock, 互斥锁，读写锁，sync
---


## 互斥锁 (Mutex)

互斥锁是一种最基本的锁，它的作用是保证在同一时刻只有一个 goroutine 可以访问共享资源。在 Go 语言中，互斥锁由 `sync` 包提供，使用 `syns.Mutex` 结构体来表示。

```go
// 初始化互斥锁
mu := sync.Mutex{}

// 上锁
mu.Lock()

// 解锁
mu.UnLock()
```

::: details 例子

由于 map 无法支持并发读写，我们可以添加互斥锁使其实现并发读写

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// SafeMap 可以并发安全地使用。
type SafeMap struct {
	mu sync.Mutex
	v  map[string]int
}

// Increase 增加给定键的计数器。
func (s *SafeMap) Increase(key string) {
	s.mu.Lock()
	// 锁定，以便一次只有一个 Goroutine 可以访问映射 s.v。
	s.v[key]++
	s.mu.Unlock()
}

// Value 返回给定键的计数器的当前值。
func (s *SafeMap) Value(key string) int {
	s.mu.Lock()
	// 锁定，以便一次只有一个 Goroutine 可以访问映射 s.v。
	defer s.mu.Unlock()
	return s.v[key]
}

func main() {
	s := SafeMap{v: make(map[string]int)}
	for i := 0; i < 1000; i++ {
		go s.Increase("test")
	}

	time.Sleep(time.Second)
	fmt.Println(s.Value("test"))
}


// 结果
// 1000
```

:::

::: warning

- `Lock()` 后如果再次执行 `Lock()` 第二个 `Lock()` 会阻塞，造成死锁，导致异常退出
- 如果没有 `Lock()` 却执行 `UnLock()` 则会触发 `panic` ，导致异常退出
- **互斥锁的性能开销较大，因为每次加锁和解锁都需要调用系统内核函数，所以在性能要求较高的场景下，可以考虑使用读写锁**

:::


## 读写锁 (RWMutex)

读写锁是一种特殊的锁，它分为读锁和写锁。读锁可以被多个 goroutine 同时持有，但是写锁只能被一个 goroutine 持有。在 Go 语言中，读写锁由 `sync` 包提供，使用 `sync.RWMutex` 结构体来表示。

```go
// 初始化读写锁
rw := sync.RWMutex{}

// 读锁
rw.RLock()

// 读解锁
rw.RUnlock()

// 写锁
rw.Lock()

// 写解锁
rw.Unlock()
```

::: tip 读者-写者问题

- **读者优先 （readers-preference）**
	- 读者优先指的是读的操作优先于写的操作，当有读操作时，写操作会被阻塞，但是读操作不会被阻塞。只有所有的读者都释放了读锁，写操作才能进行。
- **写者优先 （writers-preference）**
	- 写者优先指的是写的操作优先于读的操作，当有写操作时，当前的读者可以继续进行读操作，但是不允许新的读者进行读操作，当前读者完成读取操作后，写者会进行写入操作，只有写者完成写入操作后，新的读者才能进行读操作。

::: warning

- 读者优先在频繁读取的系统中会导致写者长时间阻塞导致**写饥饿**
- 写者优先在频繁写入的系统中会导致读者长时间阻塞导致**读饥饿**
- **Golang 的 `sync.RWMutex` 是写者优先的，优先处理写的操作**

:::

::: details 例子

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	lock := sync.RWMutex{}

	go Read(&lock)
	go Read(&lock)
	go Write(&lock)
	go Read(&lock)
	go Write(&lock)
	go Read(&lock)
	go Read(&lock)

	time.Sleep(20*time.Second)
}

func Read(lock *sync.RWMutex) {
	lock.RLock()
	fmt.Println("Read lock at", time.Now())
	time.Sleep(time.Second)
	fmt.Println("Read at ", time.Now())
	lock.RUnlock()
	fmt.Println("Read unlock at", time.Now())
	return
}

func Write(lock *sync.RWMutex) {
	lock.Lock()
	fmt.Println("Write lock at", time.Now())
	time.Sleep(time.Second)
	fmt.Println("Write at ", time.Now())
	lock.Unlock()
	fmt.Println("Write unlock at", time.Now())
	return
}

// 结果
// Read lock at 2024-05-05 09:27:15.045784 +0800 CST m=+0.001017301
// Read at  2024-05-05 09:27:16.0654976 +0800 CST m=+1.020730901
// Read unlock at 2024-05-05 09:27:16.0654976 +0800 CST m=+1.020730901
// Write lock at 2024-05-05 09:27:16.0654976 +0800 CST m=+1.020730901
// Write at  2024-05-05 09:27:17.0774968 +0800 CST m=+2.032730101
// Write unlock at 2024-05-05 09:27:17.0774968 +0800 CST m=+2.032730101
// Read lock at 2024-05-05 09:27:17.0774968 +0800 CST m=+2.032730101
// Read lock at 2024-05-05 09:27:17.0777343 +0800 CST m=+2.032967601
// Read lock at 2024-05-05 09:27:17.0777343 +0800 CST m=+2.032967601
// Read lock at 2024-05-05 09:27:17.0777343 +0800 CST m=+2.032967601
// Read at  2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read unlock at 2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read at  2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read unlock at 2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read at  2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read unlock at 2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read at  2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Read unlock at 2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Write lock at 2024-05-05 09:27:18.0778894 +0800 CST m=+3.033122701
// Write at  2024-05-05 09:27:19.087953 +0800 CST m=+4.043186301
// Write unlock at 2024-05-05 09:27:19.087953 +0800 CST m=+4.043186301
// Write lock at 2024-05-05 09:27:19.087953 +0800 CST m=+4.043186301
// Write at  2024-05-05 09:27:20.0995559 +0800 CST m=+5.054789201
// Write unlock at 2024-05-05 09:27:20.0995559 +0800 CST m=+5.054789201
```

可以看到写者优先的特性，写者优先处理写的操作，第一次 `Read` 读取后 `Write` 是第三个执行，却在第二个就执行，原因是第二个 `Read` 在获取读取锁时有写入锁的操作，优先处理了写入锁，因此第二个 `Read` 在第三个 `Write` 之后才执行。 我们还可以看到可以同时执行多个 `Read` 操作，但是只能同时执行一个 `Write` 操作。
:::

::: warning RWLock 使用注意

- `Lock` 和 `Unlock`, `RLock()`和`RUnlock()` 必须成对出现，否则会导致死锁
- `Lock` 不能同时执行两次，会导致死锁
- `RWLock` 在传参时必须使用指针传递，不能使用值传递副本
- `RWLock` 是不可重入锁 

:::