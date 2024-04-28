---
order: 1
title: Go Zero
icon: carbon:microservices-1
head:
  - - meta
    - name: keywords
      content: Go Zero, golang, microservice
---

## 介绍

**Go Zero** 是一个集成了各种工程实践的微服务框架。它提供了一站式的微服务开发解决方案，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。Go Zero 的设计目标是提供一种简单、高效、可靠的微服务开发框架，让开发者可以专注于业务逻辑的实现，而不用花费过多精力在微服务的开发和维护上。

::: tip 优缺点
**优点**：
- **简单易用**：Go Zero 提供了一站式的微服务开发解决方案，让开发者可以专注于业务逻辑的实现
- **高效可靠**：Go Zero 的设计目标是提供一种简单、高效、可靠的微服务开发框架
- **功能丰富**：Go Zero 集成了各种工程实践，包括接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能
- **生态完善**：Go Zero 的生态完善，提供了丰富的插件和工具，可以快速构建微服务应用程序
- **社区活跃**：Go Zero 的社区活跃，有很多开发者在使用 Go Zero，并且有很多插件和工具可以使用
- **性能优秀**：Go Zero 的性能优秀，速度快，内存占用低

**缺点**：
- **学习成本**：Go Zero 集成了很多工程实践，学习成本较高
- **功能相对复杂**：Go Zero 的功能相对复杂，需要一定的时间来熟悉和掌握
- **依赖较多**：Go Zero 集成了很多工程实践，依赖较多
- **文档不够完善**：Go Zero 的文档相对不够完善，需要自己查阅源码和文档
- **社区相对小**：Go Zero 的社区相对小，可能会遇到一些问题无法解决

:::

## Go Zero 的使用

要使用 Go Zero, 首先要安装命令行工具 goctl。goctl 是 Go Zero 的命令行工具，提供了接口定义、错误码生成、客户端代码生成、服务端代码生成、API 文档生成等功能。

### 安装 goctl

```bash
GO111MODULE=on go install github.com/zeromicro/go-zero/tools/goctl@latest
```

### 创建一个简单的微服务

```bash
goctl api new greet
```

