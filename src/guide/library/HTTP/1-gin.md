---
order: 1
title: Gin
icon: streamline:web
head:
  - - meta
    - name: keywords
      content: HTTP, 框架, gin
---

## 介绍

Gin 是一个用 Go 语言编写的 Web 框架。它具有速度快、内存占用低的特点。Gin 的 API 简单易用，提供了诸多中间件，可以快速构建 Web 应用程序。Gin 是一个非常热门的 Web 框架，被广泛应用于生产环境中，在
Github 上有 70k+ 的 Star。

::: tip 优缺点
**优点**：
- **性能**：Gin 的性能非常好，速度快，内存占用低
- **简单**：Gin 的 API 简单易用，学习成本低
- **中间件**：Gin 提供了丰富的中间件，可以快速构建 Web 应用程序
- **轻量级**：Gin 是一个轻量级的 Web 框架，不会引入过多的依赖, 不提供太多复杂的功能

**缺点**：
- **功能相对简单**：Gin 的功能相对简单，不如 Beego、Iris 等 Web 框架功能丰富
- **不支持 Websocket**：Gin 不支持 Websocket，如果需要使用 Websocket，需要自己实现
- **不支持模板引擎**：Gin 不支持模板引擎，需要自己选择模板引擎
- **不支持 Session**：Gin 不支持 Session，需要自己实现
- **不支持自动化文档**：Gin 不支持自动生成 API 文档，需要自己实现

:::

## Gin 的使用示例

### 创建一个简单的 Web 服务

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
