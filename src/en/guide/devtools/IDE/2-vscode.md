---
order: 2
title: VsCode
icon: akar-icons:vscode-fill
head:
  - - meta
    - name: keywords
      content: VsCode, Go, Plugin
---

## VsCode

VsCode is an open-source code editor launched by Microsoft. It supports multiple languages and provides a wealth of plugins to help developers improve their efficiency.

For cloud development, **VsCode** is recommended. Click here to download

## Recommended Plugins

- **Go**

Go is a very useful Go language plugin that supports code hints, code formatting, code jumping, and other functions.

::: info
- Name: Go
- Id: golang.go
- Description: Rich Go language support for Visual Studio Code
- Version: 0.41.4
- Publisher: Go Team at Google
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=golang.Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
:::

- **indent-rainbow**
  A bracket hint plugin that makes it easier for you to see the indentation level of the code.

::: info
- Name: indent-rainbow
- Id: oderwat.indent-rainbow
- Description: Makes indentation easier to read
- Version: 8.3.1
- Publisher: oderwat
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
:::

- **GitLens**

GitLens is a very useful Git plugin that can help you better manage code versions.

::: info
- Name: GitLens — Git supercharged
- Id: eamodio.gitlens
- Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
- Version: 14.9.1
- Publisher: GitKraken
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
:::

- **Remote Explorer**

Remote Explorer is a very useful remote development plugin that can help you better manage remote code.

::: info
- Name: Remote Explorer
- Id: ms-vscode.remote-explorer
- Description: View remote machines for SSH and Tunnels.
- Version: 0.4.3
- Publisher: Microsoft
- VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)
:::

## `launch.json` Configuration Guide

In Visual Studio Code (VSCode), `launch.json` is a crucial configuration file that helps you debug your code effectively. Within `launch.json`, you define the debugger's settings, such as the debugger type, program entry point, program arguments, and more. This flexibility simplifies the process of debugging your programs.

Using `launch.json`, you can achieve the following:

| Feature                           | Description                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Local and Remote Debugging        | Configure both local and remote debugging for your code.                                                |
| Multi-Language Debugging Support  | Configure debugging for various programming languages, such as Java, Python, Go, etc.                   |
| Debugging Parameter Configuration | Customize debugging parameters, including environment variables, working directories, and target files. |
| Setting Breakpoints               | Set breakpoints to pause execution, view code at specific points, and inspect the call stack.           |

### Configuration Fields

**Example for Golang in `launch.json`**

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

**Field Descriptions**

| Field Name             | Description                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| version                | Configuration file version (currently supports only "0.2.0").                                                    |
| configurations         | An array of configurations, each represented as an object.                                                       |
| name                   | Configuration name displayed in the debugger.                                                                    |
| type                   | Debugger type (e.g., go, python, java).                                                                          |
| request                | Request type: "launch" starts the debugger, "attach" connects to a running program.                              |
| mode                   | Debugging mode (e.g., test, exec, debug).                                                                        |
| program                | Program entry file (can be a file path or directory).                                                            |
| args                   | Program arguments (can be an array or a string).                                                                 |
| cwd                    | Working directory where the program runs.                                                                        |
| env                    | Environment variables provided as an object.                                                                     |
| stopOnEntry            | If true, stops at the entry point after startup, waiting for debugger connection.                                |
| preLaunchTask          | Specifies a task to run before debugging starts (usually a compilation task).                                    |
| postDebugTask          | Specifies a task to run after debugging ends (e.g., cleanup tasks).                                              |
| outFiles               | Output file paths for mapping source code to compiled files.                                                     |
| sourceMaps             | Controls whether to enable source code mapping ("inline," "both," or "false").                                   |
| sourceMapPathOverrides | Adjusts file paths based on source code mappings.                                                                |
| externalConsole        | If true, runs the program in an external console.                                                                |
| internalConsoleOptions | Controls how the internal console is displayed: "neverOpen," "openOnSessionStart," or "openOnFirstSessionStart." |
| showAsyncStacks        | If true, displays information about asynchronous calls in stack traces.                                          |
| stopOnError            | If true, pauses debugging on errors.                                                                             |
| smartStep              | If true, skips unnecessary code during debugging.                                                                |
| skipFiles              | Specifies files or folders to exclude from debugging.                                                            |
| justMyCode             | If true, only debugs your own code.                                                                              |

::: details Example

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