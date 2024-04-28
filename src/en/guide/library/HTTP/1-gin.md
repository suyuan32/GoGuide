---
order: 1
title: Gin
head:
  - - meta
    - name: keywords
      content: HTTP, golang, gin
---

---

## Introduction

**Gin** is a web framework written in **Go**. It is known for its fast performance and low memory usage. The Gin API is straightforward and easy to use, and it provides a variety of middleware options for quickly building web applications. Gin is a highly popular web framework, widely used in production environments, and boasts over **70k+ stars** on GitHub.

::: tip Pros and Cons
**Pros**:
- **Performance**: Gin offers excellent performance, with fast execution and minimal memory overhead.
- **Simplicity**: The Gin API is simple and user-friendly, making it easy to learn.
- **Middleware Support**: Gin provides a rich set of middleware, allowing rapid development of web applications.
- **Lightweight**: As a lightweight web framework, Gin avoids excessive dependencies and complex features.

**Cons**:
- **Relatively Simple Features**: Gin's feature set is relatively basic compared to other web frameworks like Beego or Iris.
- **No Websocket Support**: Gin lacks built-in Websocket support; developers need to implement it themselves.
- **No Template Engine**: Gin does not include a template engine; developers must choose one separately.
- **No Session Support**: Gin does not handle sessions out of the box; developers need to implement session management.
- **No Automated API Documentation**: Gin does not automatically generate API documentation; developers must create it manually.

:::

## Example of Using Gin

### Creating a Simple Web Service

```go
package main

import (
  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()
  r.GET("/ping", func(c *gin.Context) {
    c.JSON(200, gin.H{
      "message": "pong",
    })
  })
  r.Run()
}
```
