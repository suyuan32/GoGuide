---
order: 1
title: '保留关键字'
---

##  保留关键字

golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。

| 类型     | 关键字                                                                                                        | 介绍                                 |
| -------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 声明     | `const`  `func` `import`  `package`  `type` `var`                                                             | 这些关键字用于声明代码中的各种元素   |
| 复合类型 | `chan` `interface` `map` `struct`                                                                             | 这些关键字用于声明一些特殊的复合类型 |
| 流程控制 | `break` `case` `continue` `default` `else` `fallthrough` `for` `goto` `if` `range` `return` `select` `switch` | 这些关键字用于控制程序运行流程       |
| 功能修饰 | `defer` `go`                                                                                                  | 用于修饰特殊的 function              |


## 声明类型关键字

### **const**

const 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。

<details>
<summary>例子</summary>

```go
const identifier T = value  // T 为数据类型，可以省略，编译器会自己推断。
const identifier1, identifier2 = value1, value2 // 声明多个，如 const a, b, c = "hello", 100, true

const (
    FeMale = 0
    Male = 1
) // 枚举

const (
    a = iota
    b
    c
) // iota
```
</details>
