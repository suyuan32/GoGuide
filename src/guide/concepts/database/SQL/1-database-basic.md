---
order: 1
title: "基础"
head:
  - - meta
    - name: keywords
      content: 数据库, SQL, 基础, 关系型数据库, 非关系型数据库, 关系键, 主键, 超键, 候选键, 外键
---

## 关系键

**关系键用于标识数据表中的每一行或者标识与其他表的关系**

| 关系键                          | 介绍                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------- |
| 主键 (Primary key - Unique key) | 主键是数据列中用来唯一标识的字段，不允许为空，一个表只能有一个主键                             |
| 超键 (Super key)                | 超键是能唯一标识数据列的所有属性集, 即若任意单个或多个字段如果也能唯一标识数据列，则都属于超键 |
| 候选键 (Candidate key)          | 候选键是超键的子集，候选键是不包含多余字段的超键，候选键中删除任意字段都不属于超键             |
| 外键 (Foreign key)              | 外键用于建立表之间的关系，如 A 表的主键是 B 表的字段，这时候 B 表中的 A 表的主键字段就是外键   |

::: warning
主键和唯一键的区别：

- 一张表只能有一个主键，可以有多个唯一键
- 主键不能为空，唯一键可以为空
:::

::: details 例子

假设有两张表

| student                  | teacher |
| ------------------------ | ------- |
| id                       | id      |
| name                     | name    |
| age                      | age     |
| identify_card (身份证号) |         |
| teacher_id               |         |

- 主键： `student.id`  `teacher.id`
- 超键: 以 student 表为例: (`student.id`, `student.name`),(`student.id`, `student.name`, `student.age`) ... 任何和主键和身份证的组合都为超键
- 候选键： 以 `student` 表为例： `student.id` `student.identify_card`
- 外键： `student.teacher_id`

:::

## 表连接

要学习表连接，首先要了解**笛卡尔积**

::: info 笛卡尔积
笛卡尔积（Cartesian product）指的是两个集合 X, Y 中 X 的所有元素分别乘以 Y 中所有元素的集合，又称为**直积**

例如 `X={a,b}` `Y={1,2}` 则 X 和 Y 的笛卡尔积为

 `Z={(a,1),(a,2),(b,1),(b,2)}`
:::

**表连接是通过条件对两表之间的笛卡尔积进行筛选后的结果**

### 表连接示意图

![sql-join](/assets/image/article/concept/sql-join.png)



::: info 示例表

::: details 示例表

接下来的查询都是围绕该示例表

#### course

| id  | title     |
| --- | --------- |
| 1   | Math      |
| 2   | Art       |
| 3   | Music     |
| 4   | Geography |
| 15  | Sport     |

#### student

| id  | name           | age | course_id |
| --- | -------------- | --- | --------- |
| 1   | Elaine Morris  | 12  | 3         |
| 2   | Beverly Turner | 11  | 4         |
| 3   | Connie Murphy  | 11  | 2         |
| 4   | Jamie Romero   | 12  | 5         |
| 5   | Clifford Reyes | 10  | 1         |
| 6   | Francisco Cook | 12  | 2         |
| 7   | Alan Sanchez   | 11  | 9         |
| 8   | Tony Garcia    | 12  | 3         |
| 9   | Bobby Burns    | 12  | 8         |
| 10  | Glenn Adams    | 11  | 5         |
| 11  | Glenn Griffin  | 12  | 4         |
| 12  | Justin Rogers  | 13  | 8         |


:::

::: warning
一般我们称第一个表为驱动表，第二个表为被驱动表，在例子中 `student` 为**驱动表**， `course` 为**被驱动表**
:::

### 内连接 （inner Join）

内连接 `inner join` 等同于 `join`, 用于只返回匹配的行。

以下三种写法相同

```sql
select * from a,b;

select * from a join b;

select * from a inner join b;
```

::: details 例子

```sql
select * from student s inner join course c on s.course_id=c.id;
```

结果

| id  | name           | age | course_id | id(1) | title     |
| --- | -------------- | --- | --------- | ----- | --------- |
| 5   | Clifford Reyes | 10  | 1         | 1     | Math      |
| 6   | Francisco Cook | 12  | 2         | 2     | Art       |
| 3   | Connie Murphy  | 11  | 2         | 2     | Art       |
| 8   | Tony Garcia    | 12  | 3         | 3     | Music     |
| 1   | Elaine Morris  | 12  | 3         | 3     | Music     |
| 11  | Glenn Griffin  | 12  | 4         | 4     | Geography |
| 2   | Beverly Turner | 11  | 4         | 4     | Geography |

**可以看到只有满足 `s.course_id=c.id` 的数据列被返回了**

:::

### 外连接 (outer join)

#### 左连接 (left join)

```sql
select * from student s left join course c on s.course_id=c.id;
```

结果

| id  | name           | age | course_id | id(1) | title     |
| --- | -------------- | --- | --------- | ----- | --------- |
| 5   | Clifford Reyes | 10  | 1         | 1     | Math      |
| 6   | Francisco Cook | 12  | 2         | 2     | Art       |
| 3   | Connie Murphy  | 11  | 2         | 2     | Art       |
| 8   | Tony Garcia    | 12  | 3         | 3     | Music     |
| 1   | Elaine Morris  | 12  | 3         | 3     | Music     |
| 11  | Glenn Griffin  | 12  | 4         | 4     | Geography |
| 2   | Beverly Turner | 11  | 4         | 4     | Geography |
| 10  | Glenn Adams    | 11  | 5         |       |           |
| 4   | Jamie Romero   | 12  | 5         |       |           |
| 12  | Justin Rogers  | 13  | 8         |       |           |
| 9   | Bobby Burns    | 12  | 8         |       |           |
| 7   | Alan Sanchez   | 11  | 9         |       |           |

::: info
**可以看到不只有满足 `s.course_id=c.id` 的数据列被返回了，同时驱动表未匹配的其他数据也会返回**
:::

#### 右连接 (right join)

```sql
select * from student s right join course c on s.course_id=c.id;
```

结果

| id  | name           | age | course_id | id(1) | title     |
| --- | -------------- | --- | --------- | ----- | --------- |
| 5   | Clifford Reyes | 10  | 1         | 1     | Math      |
| 6   | Francisco Cook | 12  | 2         | 2     | Art       |
| 3   | Connie Murphy  | 11  | 2         | 2     | Art       |
| 8   | Tony Garcia    | 12  | 3         | 3     | Music     |
| 1   | Elaine Morris  | 12  | 3         | 3     | Music     |
| 11  | Glenn Griffin  | 12  | 4         | 4     | Geography |
| 2   | Beverly Turner | 11  | 4         | 4     | Geography |
|     |                |     |           | 15    | Sport     |

::: info
**可以看到不只有满足 `s.course_id=c.id` 的数据列被返回了，同时被驱动表未匹配的其他数据也会返回**
:::

#### 全外连接 (full outer join)

```sql
select * from student s full outer join course c on s.course_id=c.id;
```

结果

| id  | name           | age | course_id | id(1) | title     |
| --- | -------------- | --- | --------- | ----- | --------- |
| 5   | Clifford Reyes | 10  | 1         | 1     | Math      |
| 6   | Francisco Cook | 12  | 2         | 2     | Art       |
| 3   | Connie Murphy  | 11  | 2         | 2     | Art       |
| 8   | Tony Garcia    | 12  | 3         | 3     | Music     |
| 1   | Elaine Morris  | 12  | 3         | 3     | Music     |
| 11  | Glenn Griffin  | 12  | 4         | 4     | Geography |
| 2   | Beverly Turner | 11  | 4         | 4     | Geography |
|     |                |     |           | 15    | Sport     |
| 10  | Glenn Adams    | 11  | 5         |       |           |
| 4   | Jamie Romero   | 12  | 5         |       |           |
| 12  | Justin Rogers  | 13  | 8         |       |           |
| 9   | Bobby Burns    | 12  | 8         |       |           |
| 7   | Alan Sanchez   | 11  | 9         |       |           |

::: info
**可以看到不只有满足 `s.course_id=c.id` 的数据列被返回了，同时未匹配的其他数据也会返回**
:::

::: tip 查询条件

在使用连接后支持两种过滤条件：

> where

使用 where 子句只会返回满足 where 条件的列

> on

使用 on 时，在内连接的查询中 on 和 where 的效果是一致的，在外连接中如**左连接**会返回驱动表不匹配的数据

:::

::: warning
如果有多个表连接如 `a inner join b inner join c` 首先会执行 `a inner join b`, 然后将结果再 `inner join c`
:::

::: important
在 `join` 的时候利用索引可以减少回表次数
:::