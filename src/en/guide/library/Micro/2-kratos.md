---
order: 2
title: Kratos
icon: carbon:microservices-1
head:
  - - meta
    - name: keywords
      content: Kratos, golang, microservice
---

## Introduction

**Kratos** is a microservice framework written in **Go** and open-sourced by **Bilibili**. It provides an all-in-one solution for microservice development, including interface definition, error code generation, client code generation, server code generation, and API documentation generation. Kratos aims to offer a simple, efficient, and reliable framework for building microservices, allowing developers to focus on business logic implementation without spending excessive effort on microservice development and maintenance.

::: tip Pros and Cons
**Pros**:
- **Ease of Use**: Kratos provides an all-in-one solution for microservice development, allowing developers to focus on business logic implementation.
- **Efficiency and Reliability**: Kratos is designed to be a simple, efficient, and reliable microservice framework.
- **Rich Features**: Kratos integrates various engineering practices, including interface definition, error code generation, client code generation, server code generation, and API documentation generation.
- **Comprehensive Documentation**: Kratos has thorough documentation, offering detailed usage instructions and example code.

**Cons**:
- **Relatively Incomplete Ecosystem**: Kratos' ecosystem is relatively incomplete, with fewer plugins and tools.
- **Small Community**: Kratos has a smaller community, which may result in some issues being harder to resolve.

:::

## Using Kratos

To use Kratos, you'll need to install the command-line tool called **kratos**. Kratos provides features such as interface definition, error code generation, client code generation, server code generation, and API documentation generation.

### Installing Kratos

```bash
GO111MODULE=on go get -u github.com/go-kratos/kratos/cmd/kratos/v2@latest
```

### Creating a Simple Microservice

```bash
kratos new kratos-demo
```