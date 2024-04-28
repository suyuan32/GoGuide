---
order: 1
title: Go Zero
icon: carbon:microservices-1
head:
  - - meta
    - name: keywords
      content: Go Zero, golang, microservice
---

## Introduction

**Go Zero** is a microservices framework that integrates various engineering practices. It offers an all-in-one solution for microservice development, including interface definition, error code generation, client code generation, server code generation, and API documentation generation. Go Zero aims to provide a simple, efficient, and reliable framework for microservices development, allowing developers to focus on implementing business logic without spending excessive effort on microservice development and maintenance.

::: tip Pros and Cons
**Pros**:
- **Ease of Use**: Go Zero provides an all-in-one solution for microservices development, allowing developers to focus on business logic implementation.
- **Efficiency and Reliability**: Go Zero is designed to be a simple, efficient, and reliable microservices framework.
- **Rich Features**: Go Zero integrates various engineering practices, including interface definition, error code generation, client code generation, server code generation, and API documentation generation.
- **Robust Ecosystem**: Go Zero has a robust ecosystem, offering a variety of plugins and tools for quickly building microservices applications.
- **Active Community**: Go Zero has an active community, with many developers using it and contributing plugins and tools.
- **Excellent Performance**: Go Zero performs well, with fast execution and low memory usage.

**Cons**:
- **Learning Curve**: Due to its integration of various engineering practices, Go Zero has a higher learning curve.
- **Complex Features**: Go Zero's feature set can be relatively complex, requiring time to become familiar with and master.
- **Dependency Overhead**: Go Zero's integration of multiple practices introduces additional dependencies.
- **Incomplete Documentation**: Go Zero's documentation may be lacking in some areas, necessitating manual exploration of source code and documentation.
- **Smaller Community**: Go Zero's community is relatively small, which may lead to challenges in resolving certain issues.

:::

## Using Go Zero

To use Go Zero, you'll first need to install the command-line tool called `goctl`. Goctl is Go Zero's command-line utility, providing features such as interface definition, error code generation, client code generation, server code generation, and API documentation generation.

### Installing goctl

```bash
GO111MODULE=on go install github.com/zeromicro/go-zero/tools/goctl@latest
```

### Creating a Simple Microservice

```bash
goctl api new greet
```

Feel free to explore Go Zero for your microservices development needs! 🚀
