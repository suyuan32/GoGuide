---
order: 22
title: 锁
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: Go, Golang, 锁，Lock, 互斥锁，读写锁，sync
---


## Mutex

A mutex (short for "mutual exclusion") is a fundamental type of lock that ensures that only one goroutine can access a shared resource at any given time. In Go, mutexes are provided by the `sync` package, and they are represented using the `sync.Mutex` structure.

```go
// Initialize a mutex
mu := sync.Mutex{}

// Lock the mutex
mu.Lock()

// Unlock the mutex
mu.Unlock()
```

::: details Example

Since maps do not inherently support concurrent read and write operations, we can use a mutex to achieve concurrent access.

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// SafeMap can be used safely in concurrent scenarios.
type SafeMap struct {
	mu sync.Mutex
	v  map[string]int
}

// Increase increments the counter for the given key.
func (s *SafeMap) Increase(key string) {
	s.mu.Lock()
	// Lock to ensure that only one Goroutine can access the map s.v at a time.
	s.v[key]++
	s.mu.Unlock()
}

// Value returns the current value of the counter for the given key.
func (s *SafeMap) Value(key string) int {
	s.mu.Lock()
	// Lock to ensure that only one Goroutine can access the map s.v at a time.
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

// Output
// 1000
```

:::

::: warning

- If you call `Lock()` twice consecutively, the second call will block, resulting in a deadlock and causing an exception.
- If you call `Unlock()` without a preceding `Lock()`, it will trigger a panic and lead to an abnormal exit.
- **Mutexes have significant performance overhead because each lock and unlock operation involves a system kernel call. For scenarios with high performance requirements, consider using read-write locks.**

:::

Certainly! Here's the translation of the given Markdown document into English:

## Read-Write Lock (RWMutex)

A read-write lock is a special type of lock that is divided into read locks and write locks. Multiple goroutines can hold read locks simultaneously, but only one goroutine can hold a write lock at a time. In Go, read-write locks are provided by the `sync` package, and they are represented using the `sync.RWMutex` structure.

```go
// Initialize a read-write lock
rw := sync.RWMutex{}

// Read lock
rw.RLock()

// Read unlock
rw.RUnlock()

// Write lock
rw.Lock()

// Write unlock
rw.Unlock()
```

::: tip Reader-Writer Problem

- **Readers-Preference**
	- Readers-preference means that read operations take precedence over write operations. When there are read operations, write operations are blocked, but read operations are not. Only when all readers release their read locks can write operations proceed.
- **Writers-Preference**
	- Writers-preference means that write operations take precedence over read operations. When there is a write operation, existing readers can continue reading, but new readers are not allowed to start reading. After the current readers complete their read operations, the writer performs the write operation. Only after the writer completes the write operation can new readers start reading.

::: warning

- Readers-preference can lead to **write starvation** in systems with frequent reads.
- Writers-preference can lead to **read starvation** in systems with frequent writes.
- **In Golang, `sync.RWMutex` follows writers-preference, prioritizing write operations.**

:::

::: details Example


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

// Result
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

The example demonstrates the writers-preference behavior. The first `Read` operation is followed by the third `Write` operation, even though the second `Read` operation occurs before the second `Write`. This is because the second `Read` acquires a read lock with an ongoing write lock, which prioritizes the write lock. Additionally, note that multiple `Read` operations can execute concurrently, but only one `Write` operation can execute at a time.
:::

::: warning Considerations for Using RWLock

- `Lock` and `Unlock`, `RLock()` and `RUnlock()` must be paired to avoid deadlocks.
- Calling `Lock` twice consecutively will result in a deadlock.
- When passing parameters to an `RWLock`, use pointers rather than value copies.
- `RWLock` is not reentrant.

:::