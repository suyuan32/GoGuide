---
order: 1
title: Ent
icon: material-symbols:database-outline
head:
  - - meta
    - name: keywords
      content: ent, go, orm, database, graph, schema, code generation
---

## Introduction to Ent

::: info Ent Chinese Documentation
Chinese Documentation
:::

[Ent](https://entgo.io/) is a simple yet powerful **Go** entity framework. It makes building and maintaining applications with large data models easy, adhering to the following principles:

1. **Model database schema as a graph structure**.
2. **Define schema using Go code**.
3. **Statically typed with code generation**.
4. **Simplify database queries and graph traversals**.
5. **Easily extend and customize using Go templates**.

::: tip Pros and Cons
**Advantages**:
- **Simplicity**: Ent generates a significant amount of API through code generation, making it convenient for developers to query.
- **Type Safety**: All types in Ent are statically typed, avoiding issues with data type conversions.
- **Extensibility**: Ent provides template functionality, making API extension straightforward.
- **Performance**: The generated Ent code avoids reflection, resulting in good performance.
- **Multi-Database Support**: Ent supports various databases such as MySQL, PostgreSQL, SQLite, and Gremlin.
- **Flexibility**: Hooks and interceptors in Ent simplify complex queries.
- **Graph Traversal**: Ent represents relationships between data tables as graphs, making traversal easy.

**Disadvantages**:
- **Learning Curve**: Ent has some learning curve; understanding its design principles and API is necessary.
- **Space Overhead**: The generated Ent code can be substantial, increasing the size of binary files.
:::

## Examples of Using Ent

### Creating Data

```go
client.Dictionary.Create().
	SetTitle(in.Title).
	SetName(in.Name).
	SetStatus(uint8(in.Status)).
	SetDesc(in.Desc).
	Exec(l.ctx)
```

### Updating Data

```go
Client.Dictionary.UpdateOneID(in.Id).SetStatus(uint8(in.Status)).Exec(l.ctx)
```

### Querying Data

```go
data, err := client.Dictionary.Query().Where(dictionary.
	NameContains("animal")).
	All(l.ctx)

details, err := client.Dictionary.Query().Where(dictionary.
	NameEQ(in.Name)).
	QueryDictionaryDetails().
	All(l.ctx)
```

### Deleting Data

```go
client.Dictionary.DeleteOneID(in.Id).Exec(l.ctx)
```