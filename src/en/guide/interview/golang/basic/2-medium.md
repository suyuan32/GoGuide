---
order: 2
title: "Medium"
head:
  - - meta
    - name: keywords
      content: golang, medium, interview, interview questions
---

### Have you used `context`? What are the use cases for `context`?

::: details Answer

| Scenario            | Introduction                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Timeout handling    | By using `context`, you can easily set a timeout, and the coroutine will automatically terminate after the timeout |
| Terminate coroutine | By using the `cancel()` method, coroutines can be easily terminated                                                |
| Data transfer       | We can write data into `context` to transfer data between different coroutines                                     |

:::

### Is `channel` thread-safe?

::: details Answer

`channel` is thread-safe, the reason is that `channel` has implemented a lock mechanism internally,

:::


### Is the traversal of a Map using range ordered or unordered?

::: details Answer

**Unordered**

Internally, Map uses a hash algorithm to place elements. When it automatically expands, it recalculates the hash values, so the addresses of the elements keep changing. To prevent users from thinking that the arrangement of Map elements is ordered, it directly returns in a random order, so the traversal is unordered.

:::

### Is Map concurrency-safe?

::: details Answer

**Map cannot guarantee concurrency safety**

To ensure concurrency safety, use the following methods:

- Manually add read-write locks
- Use `sync.Map`

:::

### Will the memory of a key be released after the key is deleted from the Map?

::: details Answer

If the value of the map is 

- **Value type** (`int` `uint` `float32` `string` `struct{}`...), then the value will not be garbage collected after the key is deleted
- **Reference type** (`map` `slices` `chan` ...), then the value will be garbage collected after the key is deleted

> If we want to force garbage collection, how do we operate?

- Set the map to nil
- Place the values that need to be retained in a new map and assign it to the current map

::: tip Exclusive for members
[Code combat analysis](https://articles.zsxq.com/id_4w1a11i6xrw0.html)
:::