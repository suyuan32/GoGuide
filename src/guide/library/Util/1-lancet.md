---
order: 1
title: Lancet
head:
  - - meta
    - name: keywords
      content: Lancet, golang, tools, utility
---

## 介绍

**Lancet** 是一个 Go 语言编写的工具库，提供了一些常用的工具函数和工具方法，方便开发者进行开发。Lancet 的设计目标是提供一些常用的工具函数和工具方法，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在工具函数和工具方法的开发上。

Lancet 的作用和 Java 中的 Hutool 类似，提供了大量可以直接使用的函数，可以方便地调用，减少重复造轮子。

## 主要功能

| **功能模块**  | **描述**                                                             |
| ------------- | -------------------------------------------------------------------- |
| Algorithm     | 提供了一些常用的算法函数。                                           |
| Compare       | 用于比较数据的函数，例如比较两个值的大小。                           |
| Concurrency   | 处理并发操作的工具函数，包括协程、锁等。                             |
| Condition     | 用于条件判断的函数，例如判断某个值是否满足某个条件。                 |
| Convertor     | 数据类型转换的工具函数，例如将字符串转换为整数。                     |
| Cryptor       | 加密和解密相关的函数。                                               |
| Datetime      | 处理日期和时间的函数，例如格式化日期、计算时间差等。                 |
| Datastructure | 提供了一些常用的数据结构，例如栈、队列、链表等。                     |
| Fileutil      | 文件操作的工具函数，例如读写文件、创建目录等。                       |
| Formatter     | 格式化字符串的函数，例如填充字符串、截断字符串等。                   |
| Function      | 与函数相关的工具函数，例如函数的柯里化、反柯里化等。                 |
| Maputil       | 处理 map 的工具函数，例如合并 map、遍历 map 等。                     |
| Mathutil      | 数学计算相关的函数，例如取绝对值、求平方根等。                       |
| Netutil       | 处理网络和 HTTP 请求的工具函数，例如发送 HTTP 请求、解析 URL 等。    |
| Pointer       | 操作指针的函数，例如获取指针的值、创建指针等。                       |
| Random        | 生成随机数的函数。                                                   |
| Retry         | 实现重试机制的函数，例如在网络请求失败时进行重试。                   |
| Slice         | 处理切片的工具函数，例如切片的截取、合并等。                         |
| Stream        | 提供了类似流式处理的函数，例如 map、filter、reduce 等。              |
| Structs       | 处理结构体的工具函数，例如获取结构体字段的值、判断结构体是否为空等。 |
| Strutil       | 处理字符串的工具函数，例如字符串的拼接、截取、替换等。               |
| System        | 系统相关的函数，例如获取环境变量、执行系统命令等。                   |
| Tuple         | 处理元组的工具函数，例如创建元组、获取元组的值等。                   |
| Validator     | 数据验证的函数，例如验证邮箱、手机号等。                             |
| Xerror        | 错误处理相关的函数，例如创建错误、判断错误类型等。                   |

## 例子

冒泡排序

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/algorithm"
)

type intComparator struct{}

func (c *intComparator) Compare(v1 any, v2 any) int {
    val1, _ := v1.(int)
    val2, _ := v2.(int)

    //ascending order
    if val1 < val2 {
        return -1
    } else if val1 > val2 {
        return 1
    }
    return 0
}

func main() {
    numbers := []int{2, 1, 5, 3, 6, 4}
    comparator := &intComparator{}

    algorithm.BubbleSort(numbers, comparator)

    fmt.Println(numbers)

    // Output:
    // [1 2 3 4 5 6]
}
```