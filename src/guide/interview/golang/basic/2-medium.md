---
order: 2
title: "进阶"
---

## 使用过 `context` 吗？ `context` 有哪些使用场景？

<details>
<summary>展开查看</summary>

| 场景     | 介绍                                                            |
| -------- | --------------------------------------------------------------- |
| 超时处理 | 通过使用 `context` 可以方便地设置超时时间，在超时后自动终止协程 |
| 终止协程 | 通过使用 `cancel()` 方法，协程可以很方便地终止                  |
| 传递数据 | 我们可以将数据写入 `context`, 在不同协程间传递数据              |


</details>

## channel 是线程安全的吗？

<details>
<summary>展开查看</summary>

`channel` 是线程安全的，原因是 channel 内部实现了锁的机制，

</details>