---
order: 1
title: Ent
icon: material-symbols:database-outline
---

## Ent 介绍

::: info Ent 中文文档
[中文文档](https://ent.ryansu.tech/#/)
:::

[Ent](https://entgo.io) 是一个简单而强大的 **Go** 实体框架，它使得构建和维护具有大型数据模型的应用程序变得轻松，并遵循以下原则：

1. **以图结构建模数据库模式**。
2. **将模式定义为 Go 代码**。
3. **基于代码生成的静态类型**。
4. **编写数据库查询和图遍历变得简单**。
5. **使用 Go 模板轻松扩展和自定义**。

::: tip 优缺点
**优点**：
- **简单**：Ent通过代码生成生成了大量 API 方便开发者调用查询
- **类型安全**：Ent通过代码生成所有类型都是静态类型，且不使用反射，不会出现数据类型无法转换的情况
- **易扩展**：Ent 提供了模板功能，使得扩展 API 非常简单
- **性能**：Ent 生成的代码不使用反射，有着不错的性能
- **支持多种数据库**：Ent 支持多种数据库，如 MySQL、PostgreSQL、SQLite、Gremlin 等
- **灵活**: Ent 提供钩子和拦截器，使得构建复杂查询变得简单
- **图遍历**: Ent 将数据表之间的关系用图的方式表示，使得图遍历变得非常简单

**缺点**：
- **学习成本**：Ent 有一定的学习成本，需要了解 Ent 的设计思想和 API
- **占用空间**：Ent 生成的代码比较多，会占用一定的空间，导致构建的二进制文件变大
:::

## Ent 的使用示例

### 创建数据

```go
client.Dictionary.Create().
	SetTitle(in.Title).
	SetName(in.Name).
	SetStatus(uint8(in.Status)).
	SetDesc(in.Desc).
	Exec(l.ctx)
```

### 更新数据

```go
Client.Dictionary.UpdateOneID(in.Id).SetStatus(uint8(in.Status)).Exec(l.ctx)
```

### 查询数据

```go
data, err := client.Dictionary.Query().Where(dictionary.
	NameContains("animal")).
	All(l.ctx)

details, err := client.Dictionary.Query().Where(dictionary.
	NameEQ(in.Name)).
	QueryDictionaryDetails().
	All(l.ctx)
```

### 删除数据

```go
client.Dictionary.DeleteOneID(in.Id).Exec(l.ctx)
```