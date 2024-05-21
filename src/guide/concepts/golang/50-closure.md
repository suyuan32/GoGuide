---
order: 50
title: 闭包
icon: line-md:sun-rising-twotone-loop
head:
  - - meta
    - name: keywords
      content: Go, Golang, closure, 闭包, 函数工厂, 迭代器, 中间件, 回调函数
---

## 什么是闭包?

::: info 什么是闭包?
闭包是由函数和与其相关的引用环境组合而成的实体。简单来说，闭包就是一个引用了作用域之外的变量的函数（Func），该函数的存在时间可以超过创建他的作用域。

例子

```go
package main

import "fmt"

func main() {
	count := func() func() int {
		i := 0 // 初始化函数内变量
		return func() int {
			i ++ // 函数内变量加 1
			return i
		}
	}()

	fmt.Println(count())
	fmt.Println(count())
}

// 结果
// 1
// 2
```

我们会注意到 `i` 是 `count` 的局部变量，执行两次函数感觉上应该是都输出 `1`， 实际上输出的是 `1， 2`， 原因是在赋值时 `count` 保留着对 `i` 的指针，因此 `i` 在逃逸分析后被保留，没有随着函数的执行完毕而结束。**如果函数没有赋值给变量，则执行多次结果会保持不变。**
:::

## 使用场景

### 中间件

我们在定义 web 中间件时经常会看到以下形式的代码:

```go
func makeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        m := validPath.FindStringSubmatch(r.URL.Path)
        if m == nil {
            http.NotFound(w, r)
            return
        }
        fn(w, r, m[2]) // 如果没问题则继续执行 fn
    }
}
```

可以看到, 我们返回了一个 `http.HandlerFunc`, 这个函数里面调用了 fn, 这样的话我们就可以实现链式操作，既执行了中间件代码，又可以继续执行函数，非常方便。

## 状态共享

闭包可以用来共享多次执行函数的状态， 常见的例子是迭代器:

```go
package main

import "fmt"

func main() {
	num := []int{1, 2, 3, 4}

	iterator := func(arr []int) func([]int) (int, bool) {
		i := -1
		return func(arr []int) (int, bool) {
			i ++
			if i < len(arr) {
				return arr[i], true
			}
			return 0, false
		}
	}

	iter := iterator(num)

	for {
		value, ok := iter(num)
		if !ok {
			return
		}

		fmt.Println(value)
	}
}

// 结果
//1
//2
//3
//4
```

## 回调函数

我们也可以通过传参，实现传入回调函数

```go
func GetData(data int, callback func(int)) {
    go func() {
        result := data + 2
        callback(result)
    }
}
```

上面的例子可以看到， 我们传入 `data` 后， `callback` 可以获取到 `result` 进行额外回调操作。

## 函数工厂

通过闭包我们还可以构造函数工厂，通过传入参数返回对应函数。

```go
func CalculationFactory(operation string) func(int, int) int {
    switch operation {
    case "add":
       return func(a, b int) int {
          return a + b
       }
    case "subtract":
       return func(a, b int) int {
          return a - b
       }
    case "multiply":
       return func(a, b int) int {
          return a * b
       }
    case "divide":
       return func(a, b int) int {
          if b != 0 {
             return a / b
          }
          return 0
       }
    default:
       return nil
    }
}
```

我们可以传入 `add` 获取加法函数，`divide` 获取除法函数。