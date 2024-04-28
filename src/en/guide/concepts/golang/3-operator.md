---
order: 3
title: 'Operators'
icon: line-md:star-filled
head:
  - - meta
    - name: keywords
      content: operators, golang, arithmetic operators, relational operators, logical operators, bitwise operators, assignment operators, other operators
---

## Arithmetic Operators

| A   | B   |
| --- | --- |
| 50  | 20  |

| Operator | Operation | Result | Description    |
| -------- | --------- | ------ | -------------- |
| +        | A + B     | 70     | Addition       |
| -        | A - B     | 30     | Subtraction    |
| *        | A * B     | 1000   | Multiplication |
| /        | A / B     | 2      | Division       |
| %        | A % B     | 10     | Modulus        |
| ++       | A++       | 51     | Increment      |
| --       | A--       | 49     | Decrement      |

## Relational Operators

| A   | B   |
| --- | --- |
| 50  | 20  |

| Operator | Operation | Result | Description                                                                                  |
| -------- | --------- | ------ | -------------------------------------------------------------------------------------------- |
| ==       | A == B    | false  | Check if two numbers are equal, if yes then true, otherwise false                            |
| !=       | A != B    | true   | Check if two numbers are not equal, if yes then true, otherwise false                        |
| >        | A > B     | true   | Check if left side is greater than right side, if yes then true, otherwise false             |
| <        | A < B     | false  | Check if left side is less than right side, if yes then true, otherwise false                |
| >=       | A >= B    | true   | Check if left side is greater than or equal to right side, if yes then true, otherwise false |
| <=       | A <= B    | false  | Check if left side is less than or equal to right side, if yes then true, otherwise false    |

## Logical Operators

| A    | B     |
| ---- | ----- |
| true | false |

| Operator | Operation | Result | Description                                                            |
| -------- | --------- | ------ | ---------------------------------------------------------------------- |
| &&       | A && B    | false  | If both sides are true, then true, otherwise false                     |
| !=       | A != B    | true   | If either side is true, then true, if both sides are false, then false |
| !        | !A        | false  | If the condition is true, then false, otherwise true                   |

## Bitwise Operators

Truth Table

| **p** | **q** | **p & q** | **p \| q** | **p ^ q** |
| ----- | ----- | --------- | ---------- | --------- |
| 0     | 0     | 0         | 0          | 0         |
| 0     | 1     | 0         | 1          | 1         |
| 1     | 1     | 1         | 1          | 0         |
| 1     | 0     | 0         | 1          | 1         |

Assuming

| Variable | Value     |
| -------- | --------- |
| A        | 0110 1000 |
| B        | 0111 0011 |

| Operator | Operation | Result    | Description                          |
| -------- | --------- | --------- | ------------------------------------ |
| &        | A & B     | 0110 0000 | Bitwise AND                          |
| \|       | A \| B    | 0111 1011 | Bitwise OR                           |
| ^        | A ^ B     | 0001 1011 | Bitwise XOR                          |
| <<       | A << 2    | 1010 0000 | Left shift by 2 bits, padded with 0  |
| >>       | A >> 2    | 0001 1010 | Right shift by 2 bits, padded with 0 |


## Assignment Operators

We can use `=` to assign the result on the right to the left, such as `C = A + B`


| Operator | Operation | Equivalent to |
| -------- | --------- | ------------- |
| +=       | A += B    | A = A + B     |
| -=       | A -= B    | A = A - B     |
| *=       | A *= B    | A = A * B     |
| /=       | A /= B    | A = A / B     |
| %=       | A %= B    | A = A % B     |
| <<=      | A <<= 2   | A = A << 2    |
| >>=      | A >>= 2   | A = A >> 2    |
| &=       | A &= 2    | A = A & 2     |
| \|=      | A \|= 2   | A = A \| 2    |
| ^=       | A ^= 2    | A = A ^ 2     |

## Other Symbols

| Operator | Description |
| -------- | ----------- |
| &        | Address of  |
| *        | Pointer     |

## Symbol Precedence

From high to low:

| Precedence | Operator         |
| ---------- | ---------------- |
| 5          | * / % << >> & &^ |
| 4          | + - \| ^         |
| 3          | == != < <= > >=  |
| 2          | &&               |
| 1          | \|\|             |

**Parentheses can be used to increase precedence**