---
order: 1
title: "Basic"
---

## Relationship Keys

**Relationship keys are used to identify each row in a data table or to identify relationships with other tables**

| Relationship Key         | Description                                                                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary Key (Unique Key) | The primary key is the field used to uniquely identify in the data column, cannot be null, and a table can only have one primary key                                                                |
| Super Key                | The super key is all attribute sets that can uniquely identify the data column, i.e., if any single or multiple fields can also uniquely identify the data column, they all belong to the super key |
| Candidate Key            | The candidate key is a subset of the super key, the candidate key is the super key without redundant fields, and any field removed from the candidate key does not belong to the super key          |
| Foreign Key              | The foreign key is used to establish relationships between tables, such as if the primary key of table A is a field of table B, then the primary key field of table A in table B is a foreign key   |

::: warning
The difference between the primary key and the unique key:

- A table can only have one primary key, but can have multiple unique keys
- The primary key cannot be null, the unique key can be null
:::

::: details Example

Assume there are two tables

| student                   | teacher |
| ------------------------- | ------- |
| id                        | id      |
| name                      | name    |
| age                       | age     |
| identify_card (ID number) |         |
| teacher_id                |         |

- Primary Key: `student.id`  `teacher.id`
- Super Key: For example, in the student table: (`student.id`, `student.name`),(`student.id`, `student.name`, `student.age`) ... Any combination with the primary key and ID number is a super key
- Candidate Key: For example, in the `student` table: `student.id` `student.identify_card`
- Foreign Key: `student.teacher_id`

:::

## Table Join

To learn about table join, you first need to understand **Cartesian Product**

::: info Cartesian Product
The Cartesian product refers to the set of all elements in X, Y where all elements in X are multiplied by all elements in Y, also known as **direct product**

For example, `X={a,b}` `Y={1,2}` then the Cartesian product of X and Y is

 `Z={(a,1),(a,2),(b,1),(b,2)}`
:::

**Table join is the result of filtering the Cartesian product between two tables through conditions**

### Table Join Diagram

![sql-join](/assets/image/article/concept/sql-join.png)

::: info Sample Table

::: details Sample Table

The following queries are all around this sample table:

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
Generally, we call the first table the driving table and the second table the driven table. In the example, `student` is the **driving table** and `course` is the **driven table**.
:::

### Inner Join

The inner join `inner join` is equivalent to `join`, used to return only matching rows.

The following three methods are the same

```sql
select * from a,b;

select * from a join b;

select * from a inner join b;
```

::: details Example

```sql
select * from student s inner join course c on s.course_id=c.id;
```

Result

| id  | name           | age | course_id | id(1) | title     |
| --- | -------------- | --- | --------- | ----- | --------- |
| 5   | Clifford Reyes | 10  | 1         | 1     | Math      |
| 6   | Francisco Cook | 12  | 2         | 2     | Art       |
| 3   | Connie Murphy  | 11  | 2         | 2     | Art       |
| 8   | Tony Garcia    | 12  | 3         | 3     | Music     |
| 1   | Elaine Morris  | 12  | 3         | 3     | Music     |
| 11  | Glenn Griffin  | 12  | 4         | 4     | Geography |
| 2   | Beverly Turner | 11  | 4         | 4     | Geography |

**You can see that only the data columns that satisfy `s.course_id=c.id` are returned**

:::

### Outer Join

#### Left Join

```sql
select * from student s left join course c on s.course_id=c.id;
```

Result

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
**You can see that not only the data columns that satisfy `s.course_id=c.id` are returned, but also other unmatched data from the driving table are returned**
:::

#### Right Join

```sql
select * from student s right join course c on s.course_id=c.id;
```

Result

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
**You can see that not only the data columns that satisfy `s.course_id=c.id` are returned, but also other unmatched data from the driven table are returned**
:::

#### Full Outer Join

```sql
select * from student s full outer join course c on s.course_id=c.id;
```

Result

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
**You can see that not only the data columns that satisfy `s.course_id=c.id` are returned, but also other unmatched data are returned**
:::

::: tip Query Condition

After using the join, two filtering conditions are supported:

> where

Using the where clause will only return columns that meet the where condition

> on

When using on, in the inner join query, the effect of on and where is consistent. In the outer join, such as **left join**, the unmatched data of the driving table will be returned

:::

::: warning
If there are multiple table joins such as `a inner join b inner join c`, `a inner join b` will be executed first, and then the result will be `inner join c`
:::

::: important
Using indexes when `join` can reduce the number of table returns
:::