---
order: 1
title: '保留关键字'
---

##  1. 保留关键字

golang 有 25 个保留的关键字，这些关键字不能用作程序标识符。

| 类型     | 关键字                                                                                                        | 介绍                                 |
| -------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 声明     | `const`  `func` `import`  `package`  `type` `var`                                                             | 这些关键字用于声明代码中的各种元素   |
| 复合类型 | `chan` `interface` `map` `struct`                                                                             | 这些关键字用于声明一些特殊的复合类型 |
| 流程控制 | `break` `case` `continue` `default` `else` `fallthrough` `for` `goto` `if` `range` `return` `select` `switch` | 这些关键字用于控制程序运行流程       |
| 功能修饰 | `defer` `go`                                                                                                  | 用于修饰特殊的 function              |


## 2. 声明类型关键字

### 2.1. **const**

`const` 用于声明常量，常量一经声明就不能被更改，声明常量必须指定初始值。

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

#### 2.1.1. **func**

`func` 用于声明函数，支持多个返回值，不支持默认参数。


<details>
<summary>例子</summary>

```go
// p 为参数， T 为类型
func Test(p T) {} 
func Test(p T) (T1, T2) {}
func Test (p T, p1, T1, list ...T3) (T4, T5) {}  // 不定参数
```

</details>

#### 2.1.2. **import**

`import` 用于导入包，使用其公开的标识符。

`import` 支持单行和多行导入。

```go
import "flag" // 单个导入

import (
    "flag"
	"fmt"
) // 多个导入
```

我们还可以使用  `.`, `_` 和别名修饰导入的包。

| 导入命令               | 使用方法 | 解析                                          |
| ---------------------- | -------- | --------------------------------------------- |
| `import   "lib/math"`  | math.Sin | 普通导入需要使用包名                          |
| `import m "lib/math"`  | m.Sin    | 可以在导入时设置别名                          |
| `import . "lib/math" ` | Sin      | 使用 `.` 导入本地可以直接使用函数，不需要包名 |

我们还可以使用 `_` 来修饰导入的包，这样只会执行导入包的初始化函数 `init()`
