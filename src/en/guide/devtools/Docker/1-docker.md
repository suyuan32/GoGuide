---
order: 1
title: Docker
icon: mdi:docker
head:
  - - meta
    - name: keywords
      content: docker, container, image, dockerfile, docker-compose
---

## Introduction to Docker

Docker is an open-source application container engine based on Go language and released under the Apache 2.0 license. It allows developers to package their applications and dependencies into a portable container, which can then be deployed on any popular Linux machine or used for virtualization. Containers operate within a sandbox mechanism, isolating them from each other. Similar to virtual machines, containers consume fewer resources. While a typical host can run only dozens of virtual machines, it can simultaneously handle hundreds or thousands of containers.

::: info What is a Container?
A container packages an application along with its dependencies into a single filesystem. It includes everything needed to run, such as code, runtime, system tools, and libraries. Containers ensure that applications can run consistently across any environment. They are platform-independent and can operate in development, testing, and production environments.
:::

### Why Use Docker?

Before containers, developers wrote code in the development environment, deployed it to the testing environment, and finally to production. This approach had issues like inconsistent environments, deployment complexities, and discrepancies between development and production setups. Docker addresses these problems, ensuring consistency across development, testing, and production environments, thereby enhancing development efficiency.

::: info Advantages of Docker

- **Rapid Delivery**: Docker enables quick deployment, allowing containers to start or stop within seconds or tens of seconds.
- **Consistent Runtime Environment**: Docker ensures consistency across development, testing, and production environments.
- **Efficient Resource Utilization**: Multiple containers can run on a single host, improving resource utilization.
- **Lightweight**: Docker shares the host kernel, avoiding the need for a full operating system, making it lighter than virtual machines.
- **Ease of Maintenance**: Docker facilitates rapid deployment, startup, and shutdown, resulting in lower maintenance costs.
- **Portability**: Docker runs on any platform.
- **Open Source**: Docker is open source, with an active community and a wealth of available images.
- **Security**: Docker uses sandboxing, enhancing security by isolating containers.
- **Rich Ecosystem**: Docker has a rich ecosystem with numerous tools.
- **Continuous Integration**: Docker integrates well with continuous integration tools.
- **Scalability**: Docker can quickly scale up or down based on demand.

:::

### Common Docker Commands

| Description            | Command                                  |
| :--------------------- | ---------------------------------------- |
| View Docker Version    | `docker --version`                       |
| View Docker Info       | `docker info`                            |
| View Docker Images     | `docker images`                          |
| View Docker Containers | `docker ps` or `docker ps -a`            |
| Pull Image             | `docker pull image_name`                 |
| Run Container          | `docker run -it image_name`              |
| Start Container        | `docker start container_id`              |
| Stop Container         | `docker stop container_id`               |
| Restart Container      | `docker restart container_id`            |
| Enter Container        | `docker exec -it container_id /bin/bash` |
| Remove Container       | `docker rm container_id`                 |
| Remove Image           | `docker rmi image_id`                    |
| View Container Logs    | `docker logs -f container_id`            |
