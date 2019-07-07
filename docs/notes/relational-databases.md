---
title: Relational Databases (PSQL)
date: 01-01-2019
---

# Terminology

Rows = records

Columns = fields

Primary key: a special field that serves as an identifier for a record. Oftentimes this is the ID

Foreign key: a field in a table that is used to link it to another table through its primary key.

Projection: extract a column

# Data Extraction Operations

Two types: **set** and **relational**

Set: takes in records as input from two tables to create new set of records as output

Relational operations: Operations unique to relational databases and includes methods like projection, selection, join, and division

## Set Operations

Union

- Combines all records from two tables. Duplicate records are each included.

Difference

- Extracts all records from one table not included in the second

Intersection

- Includes all records that are common to both tables

Cartesian

- Combines every record in one table with every record of another table. This in effect multiplies the records of two tables.

## Relational Operations

Projection

- Select a table column

Selection

- Select a table row

Join

- Combine a selection of records from two tables through a primary-foreign key relationship.

Division

- Returns columns that don't exist in the second table. Select only records whose values match in both tables.