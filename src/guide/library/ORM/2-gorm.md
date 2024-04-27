---
order: 2
title: GORM
icon: material-symbols:database-outline
head:
  - - meta
    - name: keywords
      content: golang, gorm, orm, 数据库, 数据库操作
---

## GORM 介绍

[GORM](https://gorm.io) 是一个强大的 ORM 库， 非常受欢迎，它提供了大量的功能，如链式查询、预加载、事务、模型关联等。

- 全功能 ORM
- 关联 (Has One，Has Many，Belongs To，Many To Many，多态，单表继承)
- Create，Save，Update，Delete，Find 中钩子方法
- 支持 Preload、Joins 的预加载
- 事务，嵌套事务，Save Point，Rollback To Saved Point
- Context、预编译模式、DryRun 模式
- 批量插入，FindInBatches，Find/Create with Map，使用 SQL 表达式、Context Valuer 进行 CRUD
- SQL 构建器，Upsert，数据库锁，Optimizer/Index/Comment Hint，命名参数，子查询
- 复合主键，索引，约束
- 自动迁移
- 自定义 Logger
- 灵活的可扩展插件 API：Database Resolver（多数据库，读写分离）、Prometheus…
- 每个特性都经过了测试的重重考验
- 开发者友好

::: tip 优缺点
**优点**：
- **功能强大**：GORM 提供了大量的功能，如链式查询、预加载、事务、模型关联等
- **易用**：GORM 的 API 设计非常友好，开发者可以很快上手
- **灵活**：GORM 提供了大量的配置选项，可以根据需求进行配置

**缺点**：
- **性能**：由于大量使用反射，导致 GORM 的性能较低
- **不太便捷**: GORM 的 API 在使用时与直接写原生 SQL 相似，并没有减少太多工作量, 且查询和更新都需要结构体，更新空值也比较麻烦
:::

## GORM 的使用示例

### 创建数据

```go
db.Create(&User{Name: "Jinzhu", Age: 18})
```

### 更新数据

```go
db.Model(&user).Update("Age", 20)
```

### 查询数据

```go
db.First(&user, 1) // 查询id为1的user
```

### 删除数据

```go
db.Delete(&user)
```
