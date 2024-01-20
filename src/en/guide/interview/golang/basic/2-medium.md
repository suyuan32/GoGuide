---
order: 2
title: "Medium"
---

## Have you used `context`? What are the use cases for `context`?

<details>
<summary>Click to expand</summary>

| Scenario            | Introduction                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Timeout handling    | By using `context`, you can easily set a timeout, and the coroutine will automatically terminate after the timeout |
| Terminate coroutine | By using the `cancel()` method, coroutines can be easily terminated                                                |
| Data transfer       | We can write data into `context` to transfer data between different coroutines                                     |

</details>

## Is `channel` thread-safe?

<details>
<summary>Click to expand</summary>

`channel` is thread-safe, the reason is that `channel` has implemented a lock mechanism internally,

</details>