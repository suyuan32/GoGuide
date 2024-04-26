---
order: 1
title: Git
icon: bx:bx-git-branch
---

::: tip
As a competent programmer, mastering Git is a fundamental requirement.
:::

## Commonly Used Git Commands

| Description              | Command                                                                                                                                                               |
| :----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clone Repository**     | `git clone xxxx.git`                                                                                                                                                  |
| **Create Branch**        | `git branch dev` <br> `git checkout -b dev` <br> `git switch -c dev`                                                                                                  |
| **Switch Branch**        | `git checkout dev` <br> `git switch dev`                                                                                                                              |
| **View Local Branches**  | `git branch`                                                                                                                                                          |
| **View Remote Branches** | `git branch -r`                                                                                                                                                       |
| **Delete Local Branch**  | `git branch -d dev`                                                                                                                                                   |
| **Delete Remote Branch** | `git push origin --delete dev`                                                                                                                                        |
| **Stage Changes**        | `git add .`                                                                                                                                                           |
| **Commit Changes**       | `git commit -m "feat: add new feature"`                                                                                                                               |
| **Push Changes**         | `git push origin dev` <br> `git push -f origin dev` (force push)                                                                                                      |
| **Pull Changes**         | `git pull origin dev`                                                                                                                                                 |
| **Merge Changes**        | `git merge dev`                                                                                                                                                       |
| **Check Status**         | `git status`                                                                                                                                                          |
| **View Commit History**  | `git log`                                                                                                                                                             |
| **View Differences**     | `git diff`                                                                                                                                                            |
| **View Remote URL**      | `git remote -v`                                                                                                                                                       |
| **Rollback Version**     | (Roll back to specific `commit_id`) <br> `git reset --hard commit_id` <br> (Roll back to previous version) <br> `git reset --soft HEAD^` or `git reset --soft HEAD~1` |
| **Undo Changes**         | `git revert commit_id`                                                                                                                                                |
| **Merge (rebase)**       | `git rebase dev`                                                                                                                                                      |

## Steps for Committing Code

@startuml

start

:git pull;
:git add;
:git commit;
:git push;

stop
@enduml