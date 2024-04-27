---
order: 5
title: "Map (集合)"
head:
  - - meta
    - name: keywords
      content: golang, map, 集合, 创建map, 遍历map, 删除map
---

## 创建 Map

`map` 是一种键值映射表，通过 `key` 获取对应的 `value`

`map` 的声明方式
```
map[KeyType]ValueType
```
`KeyType` 为 key 的数据类型 , `ValueType` 为 `value` 的数据类型

::: details 例子

```go
// 声明 map
var m map[string]int

// 使用 make 初始化 map
m = make(map[string]int)

// 使用 make 初始化 map, 并设置容量
// m = make(map[string]int, 10)

// 设置值
m["path"] = 66

// 输出值
fmt.Println(m["path"])
```

:::

## 遍历 Map

使用 range 遍历 map

::: details 例子

```go
package main

import "fmt"

func main() {
	// 初始化 Map
	var dataMap map[string]string
	dataMap = make(map[string]string)

    // 也可以这样初始化
	//dataMap := map[string]string{}


    // 添加键值
	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	fmt.Println("print key and value: ")

	// 使用 range 遍历 key value
	for key, val := range dataMap {
		fmt.Printf("key: %s  -  value: %s \n", key, val)
	}

	fmt.Println("print key: ")

	// 使用 range 遍历 key
	for key := range dataMap {
		fmt.Printf("key: %s \n", key)
	}

	fmt.Println("print value: ")

	// 使用 range 遍历 value
	for _, val := range dataMap {
		fmt.Printf("Value: %s \n", val)
	}
}

// 结果
// print key and value:
// key: third  -  value: third value
// key: first  -  value: first value
// key: second  -  value: second value
// print key:
// key: first
// key: second
// key: third
// print value:
// Value: first value
// Value: second value
// Value: third value
```

:::

## 删除键值

在字典中删除键值需要使用 `delete()` 方法

::: details 例子

```go
package main

import "fmt"

func main() {
	// 初始化 Map
	var dataMap map[string]string
	dataMap = make(map[string]string)

    // 也可以这样初始化
	//dataMap := map[string]string{}

	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	fmt.Println(dataMap)

    // 删除键值
	delete(dataMap, "first")

	fmt.Println(dataMap)
}

// 结果：
// map[first:first value second:second value third:third value]
// map[second:second value third:third value]

```

:::


## 判断 key 是否存在

::: details 例子

```go
package main

import "fmt"

func main() {
	// 初始化 Map
	var dataMap map[string]string
	dataMap = make(map[string]string)

	dataMap["first"] = "first value"
	dataMap["second"] = "second value"
	dataMap["third"] = "third value"

	// 判断 key 是否存在
	if val, ok := dataMap["first"]; ok {
		fmt.Println(val)
	} else {
		fmt.Println("key not exists")
	}

	if val, ok := dataMap["fourth"]; ok {
		fmt.Println(val)
	} else {
		fmt.Println("key not exists")
	}
}
```

:::


## 获取 Map 长度

使用 `len()` 获取 Map 的长度

```go
len(dataMap)
```


## 并发

在并发操作下 Map 不是线程安全的，可以使用官方的 `sync.Map{}` 解决

<!-- ::: tip 社区专属
[如何保证 Map 线程安全?]()
::: -->