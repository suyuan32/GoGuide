---
order: 2
title: 查询
---

## SELECT 选择

Select 命令主要用于限制返回结果

### 返回所有字段

```sql
SELECT * FROM 表名;
```

### 返回指定字段

```sql
SELECT 字段1,字段2 FROM 表名;
```

### 结果去重

```sql
SELECT DISTINCT 字段 FROM 表名;
```

## ORDER 排序

```sql
SELECT * FROM 表名 ORDER BY 字段名 [ASC|DESC];
```

## LIMIT 限制返回数量

```sql
SELECT * FROM 表名 LIMIT 开始，数量;
```

若只有数量则默认从第 0 行开始

```sql
SELECT * FROM 表名 LIMIT 7;
```

表示第 0-6 行数据

```sql
// mysql
SELECT * FROM 表名 LIMIT 10, 6;

// postgresql
SELECT * FROM 表名 LIMIT 6 OFFSET 10;
```
表示第 10 - 15 行数据


## WHERE 条件

我们使用 Where 进行数据筛选

| 运算符  | 描述               |
| ------- | ------------------ |
| =       | 等于               |
| <>      | 不等于             |
| >       | 大于               |
| <       | 小于               |
| >=      | 大于等于           |
| <=      | 小于等于           |
| BETWEEN | 在某个范围内       |
| LIKE    | 符合模式定义的数据 |
| IN      | 指定多个可能值     |

```sql
// 姓名等于 Jack
SELECT * FROM users WHERE name = "Jack";

// 年龄大于 12
SELECT * FROM users WHERE age > 12;

// 年龄在 12 - 18 之间
SELECT * FROM users WHERE age BETWEEN 12 AND 18;

// 姓名以 J 开头
SELECT * FROM users WHERE name LIKE "J%";

// 年龄为 12, 15 或 18
SELECT * FROM users WHERE age IN (12,15,18);
```

::: info
LIKE 支持两个通配符，`%` 表示任意个字符串, `_` 表示任意单个字符

```sql
// 名字以 J 开头，如 Jack, Jacky, Jim
SELECT * FROM users WHERE name LIKE "J%";

// 单个字符, 如 JA, Jc
SELECT * FROM users WHERE name LIKE "J_";
```
:::

### AND, OR, NOT

```sql
// 年龄为 12 或 18
SELECT * FROM users WHERE age = 12 OR age = 18;

// 姓名为 Jack 且年龄为 12
SELECT * FROM users WHERE name = "Jack" OR age = 12;

// 年龄不为 12
SELECT * FROM users WHERE not age = 12;
```

## GROUP BY 分组

GROUP BY 通常和聚合函数 （COUNT, AVG ...） 等搭配使用，使用 HAVING 做额外查询

```sql
// 查询对应年龄用户的数量, 且数量需大于 10
SELECT age, COUNT(age) FROM users GROUP BY age HAVING COUNT(age) > 10;
```

## EXISTS 存在

EXISTS 主要用于查询是否满足子查询返回的数据

```sql
SELECT age FROM users WHERE EXISTS (SELECT age FROM users WHERE age > 2 );
```