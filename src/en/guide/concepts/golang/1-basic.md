---
order: 1
title: 'Keywords'
---

## Keywords

Golang has 25 reserved keywords that cannot be used as program identifiers.

| Type               | Keywords                                                                                                      | Introduction                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Declaration        | `const`  `func` `import`  `package`  `type` `var`                                                             | These keywords are used to declare various elements in the code.  |
| Compound Types     | `chan` `interface` `map` `struct`                                                                             | These keywords are used to declare some special compound types.   |
| Flow Control       | `break` `case` `continue` `default` `else` `fallthrough` `for` `goto` `if` `range` `return` `select` `switch` | These keywords are used to control the flow of program execution. |
| Function Modifiers | `defer` `go`                                                                                                  | Used to modify special functions.                                 |

## Declaration Type Keywords

### **const**

`const` is used to declare constants, which once declared cannot be changed, and must specify an initial value when declaring a constant.

<details>
<summary>Example</summary>

```go
const identifier T = value  // T is the data type, which can be omitted, and the compiler will infer it.
const identifier1, identifier2 = value1, value2 // Declare multiple, such as const a, b, c = "hello", 100, true

const (
    FeMale = 0
    Male = 1
) // Enumeration

const (
    a = iota
    b
    c
) // iota
```
</details>