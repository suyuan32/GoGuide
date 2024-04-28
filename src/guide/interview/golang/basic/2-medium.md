---
order: 2
title: "进阶"
icon: line-md:sunny-filled-loop-to-moon-filled-loop-transition
head:
  - - meta
    - name: keywords
      content: golang, 进阶, 协程, channel, context, 面试题, 面试
---

### 使用过 `context` 吗？ `context` 有哪些使用场景？

::: details 答案

| 场景     | 介绍                                                            |
| -------- | --------------------------------------------------------------- |
| 超时处理 | 通过使用 `context` 可以方便地设置超时时间，在超时后自动终止协程 |
| 终止协程 | 通过使用 `cancel()` 方法，协程可以很方便地终止                  |
| 传递数据 | 我们可以将数据写入 `context`, 在不同协程间传递数据              |


:::

### channel 是线程安全的吗？

::: details 答案

`channel` 是线程安全的，原因是 channel 内部实现了锁的机制，

:::

### Map 使用 range 遍历时是有序还是无序的？

::: details 答案

**无序的**

Map 在内部使用哈希算法放置元素，在自动扩容时又会重新计算哈希值，因此元素的地址会不断变化，官方为了避免用户认为 Map 元素排列是有序的，直接采用随机顺序返回，所以遍历是无序的。

:::

### Map 并发安全吗？

::: details 答案

**Map不能保证并发安全**

要保证并发安全，使用以下方式：

- 手动加读写锁
- 使用 `sync.Map`

:::

### Map 的 key 删除后 key 的内存会被释放吗？

::: details 答案

若 map 的 value 为 

- **值类型** (`int` `uint` `float32` `string` `struct{}`...), 则 key 被删除后 value 不会被内存回收
- **引用类型** (`map` `slices` `chan` ...), 则 key 被删除后 value 会被内存回收

> 如果我们想强制回收，如何操作？

- 将 map 设置为 nil
- 将 map 需要保留的值放置到一个新的 map 并赋值给当前的 map

::: tip 会员专属
[代码实战解析](https://articles.zsxq.com/id_4w1a11i6xrw0.html)
:::
