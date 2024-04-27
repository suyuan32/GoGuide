---
order: 2
title: VsCode
icon: akar-icons:vscode-fill
head:
  - - meta
    - name: keywords
      content: VsCode, IDE, Go, 插件
---

## VsCode

VsCode 是微软推出的开源代码编辑器，支持多种语言，提供了丰富的插件，可以帮助开发者提高开发效率。

如果是云端开发则推荐使用 **VsCode** ，[点击下载](https://code.visualstudio.com/)

## 推荐插件

- **Go**

Go 是一个非常好用的 Go 语言插件，支持代码提示、代码格式化、代码跳转等功能。

::: info
- Name: Go
- Id: golang.go
- Description: Rich Go language support for Visual Studio Code
- Version: 0.41.4
- Publisher: Go Team at Google
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=golang.Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
:::

- **indent-rainbow**
  括号提示插件，可以让你更容易地看到代码的缩进层级。

::: info
- Name: indent-rainbow
- Id: oderwat.indent-rainbow
- Description: Makes indentation easier to read
- Version: 8.3.1
- Publisher: oderwat
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
:::

- **GitLens**

GitLens 是一个非常好用的 Git 插件，可以帮助你更好地管理代码版本。

::: info
- Name: GitLens — Git supercharged
- Id: eamodio.gitlens
- Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
- Version: 14.9.1
- Publisher: GitKraken
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
:::

- **Remote Explorer**

Remote Explorer 是一个非常好用的远程开发插件，可以帮助你更好地管理远程代码。

::: info
- Name: Remote Explorer
- Id: ms-vscode.remote-explorer
- Description: View remote machines for SSH and Tunnels.
- Version: 0.4.3
- Publisher: Microsoft
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)
:::

## Launch.json 配置文件教程

在 VsCode 中，`launch.json` 是一个非常重要的配置文件，可以帮助你更好地调试代码。在 `lauch.json` 中定义了调试器的配置信息，比如调试器的类型、程序的入口文件、程序的参数等，使得调试程序简单灵活。

使用 `launch.json` 可以实现以下功能：

| 功能           | 描述                                                                 |
| -------------- | -------------------------------------------------------------------- |
| 本地和远程调试 | 通过配置可以实现本地和远程调试代码                                   |
| 多语言调试支持 | 通过配置可以实现调试各类编程语言，如 Java, Python, Go 等             |
| 调试参数配置   | 通过配置可以实现调试参数的配置，如环境变量，工作目录，调试目标文件等 |
| 设置断点       | 通过配置可以设置断点进行调试，显示执行到的代码，以及此时的堆栈信息   |

### 配置字段

**Golang launch.json 例子**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch test function",
      "type": "go",
      "request": "launch",
      "mode": "test",
      "program": "${workspaceFolder}",
      "args": [
        "-test.run",
      ],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

**字段说明**

| 字段名                 | 描述                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| version                | 配置文件版本号，目前只支持 "0.2.0"                                                                |
| configurations         | 配置数组，包含了多个配置项，每个配置项都是一个对象                                                |
| name                   | 配置名称，用于在调试器中显示                                                                      |
| type                   | 调试器类型，比如 go, python, java 等                                                              |
| request                | 请求类型，launch 表示启动调试器，attach 表示连接到已经运行的程序                                  |
| mode                   | 调试模式，比如 test, exec, debug 等                                                               |
| program                | 程序入口文件，可以是文件路径或者目录路径                                                          |
| args                   | 程序参数，可以是数组或者字符串                                                                    |
| cwd                    | 工作目录，程序运行的工作目录                                                                      |
| env                    | 以对象形式提供程序运行时的环境变量。                                                              |
| stopOnEntry            | 如果设置为 true，在启动后会在入口处停止，等待调试器连接。                                         |
| preLaunchTask          | 指定在启动调试前运行的任务，通常是一个编译任务。                                                  |
| postDebugTask          | 指定在调试结束后运行的任务，例如清理任务。                                                        |
| outFiles               | 设置输出文件的路径，用于映射源代码和编译后的文件。                                                |
| sourceMaps             | 控制是否启用源代码映射，可以是 "inline"、"both" 或 "false"。                                      |
| sourceMapPathOverrides | 用于根据源代码映射调整文件路径。                                                                  |
| externalConsole        | 如果设置为 true，将在外部控制台中运行程序。                                                       |
| internalConsoleOptions | 控制内部控制台的显示方式，可以是 "neverOpen"、"openOnSessionStart" 或 "openOnFirstSessionStart"。 |
| showAsyncStacks        | 如果设置为 true，在堆栈跟踪中显示异步调用的信息。                                                 |
| stopOnError            | 如果设置为 true，当发生错误时暂停调试。                                                           |
| smartStep              | 如果设置为 true，跳过无需调试的代码。                                                             |
| skipFiles              | 指定不需要调试的文件或文件夹。                                                                    |
| justMyCode             | 如果设置为 true，只调试自己的代码。                                                               |

::: details 例子

- Node.js

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Node.js Launch",
      "program": "${file}",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "node"
    }
  ]
}
```

- Python

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal"
    },
    "env": {
    	"PYTHONPATH": "",
    }
		"args":[]
  ]
}

```

- Java

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Java Debug",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "console": "internalConsole",
      "stopOnEntry": false,
      "mainClass": "${file}"
    }
  ]
}
```

- Go

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch test function",
      "type": "go",
      "request": "launch",
      "mode": "test",
      "program": "${workspaceFolder}",
      "args": [
        "-test.run",
      ],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

- C#

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": ".NET Core Launch (console)",
      "type": "coreclr",
      "request": "launch",
      "preLaunchTask": "build",
      "program": "${workspaceFolder}/bin/Debug/<target-framework>/<project-name.dll>",
      "args": [],
      "cwd": "${workspaceFolder}",
      "stopAtEntry": false,
      "console": "internalConsole"
    }
  ]
}
```

:::