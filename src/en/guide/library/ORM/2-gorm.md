---
order: 2
title: GORM
icon: material-symbols:database-outline
head:
  - - meta
    - name: keywords
      content: golang, orm, gorm, database, sql
---

## Introduction to GORM

[GORM](https://gorm.io) is a powerful ORM library that is highly popular. It offers a wide range of features, including chainable queries, preloading, transactions, and model associations.

- Full-featured ORM
- Associations (Has One, Has Many, Belongs To, Many To Many, Polymorphism, Single Table Inheritance)
- Hooks for Create, Save, Update, Delete, and Find operations
- Support for preloading with Preload and Joins
- Transactions, nested transactions, Save Points, and Rollback To Saved Point
- Context, precompiled mode, and DryRun mode
- Batch inserts, FindInBatches, Find/Create with Map, CRUD using SQL expressions and Context Valuer
- SQL builder, Upsert, database locks, Optimizer/Index/Comment Hint, named parameters, subqueries
- Composite primary keys, indexes, constraints
- Automatic migrations
- Custom logger
- Flexible and extensible plugin API: Database Resolver (for multiple databases and read-write separation), Prometheus, and more
- Rigorously tested for each feature
- Developer-friendly

::: tip Pros and Cons
**Pros**:
- **Powerful Features**: GORM provides extensive functionality, such as chainable queries, preloading, transactions, and model associations.
- **Ease of Use**: GORM's API design is very developer-friendly, allowing developers to quickly get started.
- **Flexibility**: GORM offers numerous configuration options to tailor it to specific needs.

**Cons**:
- **Performance**: Due to heavy use of reflection, GORM's performance can be lower.
- **Not as Convenient**: GORM's API, while similar to writing raw SQL, doesn't significantly reduce the workload. Queries and updates still require struct definitions, and handling null values can be cumbersome.
:::

## Examples of Using GORM

### Creating Data

```go
db.Create(&User{Name: "Jinzhu", Age: 18})
```

### Updating Data

```go
db.Model(&user).Update("Age", 20)
```

### Querying Data

```go
db.First(&user, 1) // Retrieve user with ID 1
```

### Deleting Data

```go
db.Delete(&user)
```