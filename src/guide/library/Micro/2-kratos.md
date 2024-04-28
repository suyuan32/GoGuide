---
order: 2
title: Kratos
head:
  - - meta
    - name: keywords
      content: Kratos, golang, microservice
---

## 介绍

**Kratos** 是一个 Go 语言编写的微服务框架，由 Bilibili 开源。Kratos 提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护上。

::: tip 优缺点
**优点**：
- **简单易用**：Kratos 提供了一站式的微服务开发解决方案，让开发者可以专注于业务逻辑的实现
- **高效可靠**：Kratos 的设计目标是提供一种简单、高效、可靠的微服务开发框架
- **功能丰富**：Kratos 集成了各种工程实践，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能
- **文档完善**：Kratos 的文档完善，提供了详细的使用说明和示例代码

**缺点**：
- **生态相对不完善**：Kratos 的生态相对不完善，插件和工具相对较少
- **社区相对小**：Kratos 的社区相对小，可能会遇到一些问题无法解决

:::

## Kratos 的使用

要使用 Kratos, 首先要安装命令行工具 kratos。kratos 是 Kratos 的命令行工具，提供了接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。

### 安装 kratos

```bash
GO111MODULE=on go get -u github.com/go-kratos/kratos/cmd/kratos/v2@latest
```

### 创建一个简单的微服务

```bash
kratos new kratos-demo
```