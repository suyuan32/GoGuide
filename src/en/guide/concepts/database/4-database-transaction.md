---
order: 4
title: Transaction
---

## Isolation Levels

::: info Glossary
| Term                    | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dirty Read**          | A dirty read refers to reading data from another transaction that has not yet been committed. Uncommitted means that this data may be rolled back, which means it may not ultimately be stored in the database, i.e., it does not exist. Reading data that may not ultimately exist is a dirty read.                                                                                                                                                                                                                                                             |
| **Repeatable Read**     | Repeatable read means that within a transaction, the data read at the beginning and at any time before the end of the transaction are consistent. This mainly ensures the accuracy of data updates.                                                                                                                                                                                                                                                                                                                                                              |
| **Non-repeatable Read** | In contrast to repeatable read, non-repeatable read means that within the same transaction, the same batch of data read at different times may be different and may be affected by other transactions, such as other transactions modifying this batch of data and committing it. Non-repeatable reads often occur during data updates.                                                                                                                                                                                                                          |
| **Phantom Read**        | Suppose transaction A changes the content of some rows, but has not yet committed. At this time, transaction B inserts a record row that is the same as the record before transaction A's change, and commits before transaction A. At this time, when querying in transaction A, it seems that the recent change has not taken effect for some data, but in fact, it was just inserted by transaction B, which makes the user feel very magical and feels like a hallucination. This is called a phantom read. Phantom reads often occur during data insertion. |
:::


| Isolation Level  | Dirty Read | Non-repeatable Read | Phantom Read | Description                                                                                                                                                                              |
| ---------------- | ---------- | ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| READ-UNCOMMITTED | √          | √                   | √            | Allows reading of uncommitted data changes, meaning that changes to intermediate data will also be read. Uncommitted data may also be rolled back, leading to reading non-existent data. |
| READ-COMMITTED   | ×          | √                   | √            | Allows reading of data that concurrent transactions have committed                                                                                                                       |
| REPEATABLE-READ  | ×          | ×                   | √            | The results of multiple reads of the same field are consistent, unless the data is modified by the transaction itself                                                                    |
| SERIALIZABLE     | ×          | ×                   | ×            | Serialization, the highest isolation level, all transactions are executed in sequence without interference                                                                               |


::: warning
The default isolation level of the database is `REPEATABLE-READ`, which cannot prevent phantom reads

In MySQL, **MVCC** (Multi-Version Concurrency Control) is mainly used to implement isolation levels. MVCC is implemented by saving a snapshot of the data at a certain point in time, so that the data seen by the transaction during execution is consistent. You can also use **locks** (Next-key lock) to implement isolation levels, but locks can cause performance problems, so MySQL chose MVCC.
:::