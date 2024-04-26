---
order: 2
title: Query
---


## SELECT Statement

The SELECT command is mainly used to limit the returned results.

### Return All Fields

```sql
SELECT * FROM table_name;
```

### Return Specific Fields

```sql
SELECT field1, field2 FROM table_name;
```

### Remove Duplicates

```sql
SELECT DISTINCT field FROM table_name;
```

## ORDER BY Statement

```sql
SELECT * FROM table_name ORDER BY field_name [ASC|DESC];
```

## LIMIT Statement

```sql
SELECT * FROM table_name LIMIT start, quantity;
```

If only quantity is specified, it defaults to start from row 0.

```sql
SELECT * FROM table_name LIMIT 7;
```

This represents rows 0-6.

```sql
// mysql
SELECT * FROM table_name LIMIT 10, 6;

// postgresql
SELECT * FROM table_name LIMIT 6 OFFSET 10;
```
This represents rows 10-15.

## WHERE Clause

We use WHERE for data filtering.

| Operator | Description                        |
| -------- | ---------------------------------- |
| =        | Equal to                           |
| <>       | Not equal to                       |
| >        | Greater than                       |
| <        | Less than                          |
| >=       | Greater than or equal to           |
| <=       | Less than or equal to              |
| BETWEEN  | Within a certain range             |
| LIKE     | Matches pattern-defined data       |
| IN       | Specifies multiple possible values |

```sql
// Name is Jack
SELECT * FROM users WHERE name = "Jack";

// Age is greater than 12
SELECT * FROM users WHERE age > 12;

// Age is between 12 and 18
SELECT * FROM users WHERE age BETWEEN 12 AND 18;

// Name starts with J
SELECT * FROM users WHERE name LIKE "J%";

// Age is 12, 15, or 18
SELECT * FROM users WHERE age IN (12,15,18);
```

::: info
LIKE supports two wildcards, `%` represents any number of characters, `_` represents any single character.

```sql
// Name starts with J, such as Jack, Jacky, Jim
SELECT * FROM users WHERE name LIKE "J%";

// Single character, such as JA, Jc
SELECT * FROM users WHERE name LIKE "J_";
```
:::

### AND, OR, NOT

```sql
// Age is 12 or 18
SELECT * FROM users WHERE age = 12 OR age = 18;

// Name is Jack and age is 12
SELECT * FROM users WHERE name = "Jack" OR age = 12;

// Age is not 12
SELECT * FROM users WHERE not age = 12;
```

## GROUP BY Statement

GROUP BY is often used with aggregate functions (COUNT, AVG ...) and uses HAVING for additional queries.

```sql
// Query the number of users of the corresponding age, and the number must be greater than 10
SELECT age, COUNT(age) FROM users GROUP BY age HAVING COUNT(age) > 10;
```

## EXISTS Statement

EXISTS is mainly used to query whether it meets the data returned by the subquery.

```sql
SELECT age FROM users WHERE EXISTS (SELECT age FROM users WHERE age > 2 );
```

## Common Aggregate Functions

| Function    | Description   | Remarks                                                                 |
| ----------- | ------------- | ----------------------------------------------------------------------- |
| **count()** | Count         | Only counts non-empty rows                                              |
| **sum()**   | Sum           | Only counts non-empty rows, True is treated as 1, False is treated as 0 |
| **max()**   | Maximum Value | For time fields, it represents the most recent date                     |
| **min()**   | Minimum Value | For time fields, it represents the earliest date                        |
| **avg()**   | Average       | Only counts non-empty rows                                              |