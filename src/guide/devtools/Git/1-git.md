---
order: 1
title: Git
icon: bx:bx-git-branch
head:
  - - meta
    - name: keywords
      content: git, git命令, git常用命令, git基础, 提交代码
---

::: tip
作为一名合格的程序员，熟练掌握 Git 是基本要求
:::

## Git 必须掌握的常用命令


|          描述           | 命令                                                                                                                                               |
| :---------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **克隆代码**       | `git clone xxxx.git`                                                                                                                               |
|      **创建分支**       | `git branch dev` <br> `git checkout -b dev` <br> `git switch -c dev`                                                                               |
|      **切换分支**       | `git checkout dev` <br> `git switch dev`                                                                                                           |
|  **查看所有本地分支**   | `git branch`                                                                                                                                       |
|  **查看所有远程分支**   | `git branch -r`                                                                                                                                    |
|    **删除本地分支**     | `git branch -d dev`                                                                                                                                |
|    **删除远程分支**     | `git push origin --delete dev`                                                                                                                     |
|      **暂存代码**       | `git add .`                                                                                                                                        |
|      **提交代码**       | `git commit -m "feat: add new feature"`                                                                                                            |
| **推送代码** (强制推送) | `git push origin dev` <br> `git push -f origin dev`  (强制推送)                                                                                    |
|      **拉取代码**       | `git pull origin dev`                                                                                                                              |
|      **合并代码**       | `git merge dev`                                                                                                                                    |
|      **查看状态**       | `git status`                                                                                                                                       |
|    **查看提交记录**     | `git log`                                                                                                                                          |
|      **查看差异**       | `git diff`                                                                                                                                         |
|  **查看远程仓库地址**   | `git remote -v`                                                                                                                                    |
|      **回退版本**       | (回退指定 commit_id 版本) <br> `git reset --hard commit_id` <br> (回退上一个版本) <br> `git reset --soft HEAD^` <br>  或 `git reset --soft HEAD~1` |
|      **撤销代码**       | `git revert commit_id`                                                                                                                             |
|  **合并代码 (rebase)**  | `git rebase dev`                                                                                                                                   |

## 提交代码步骤

::: center
@startuml

start

:git pull;
:git add;
:git commit;
:git push;

stop
@enduml
:::