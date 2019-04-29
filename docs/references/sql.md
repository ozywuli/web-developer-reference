---
title: SQL
date: 12-30-2018
---

## Structure of a SQL command
- clause
- table
- parameters
- values


## Commands

Create table

```sql
CREATE TABLE <table_name>;
```

Insert

```sql
INSERT INTO TABLE <table_name> (id)
VALUES (1);
```

SELECT

```sql
SELECT * FROM <table_name>;

SELECT name FROM <table_name>;

SELECT name AS 'Title'
FROM movies;

SELECT DISTINCT tools
FROM inventory;

SELECT *
FROM movies
WHERE name LIKE 'Se_en';

SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';

SELECT *
FROM movies
WHERE year > 2024
OR genre = 'action';
```

Add or remove columns from a table

```sql
ALTER TABLE <table_name>
ADD COLUMN age INTEGER;
```

Update a row in a table

```sql
UPDATE <table_name>
SET name = 'oscar'
WHERE id = 1;
```


Delete one or more table rows

```sql
DELETE FROM <table_name>
WHERE name IS NULL;
```

## Constraints

- Reject data if they do not match a certain restriction
- types of restrictions
  - `PRIMARY KEY`
  - `UNIQUE`:
  - `NOT NULL`: must have a value
  - `DEFAULT`:

## Comparison

Make comparisons with the `WHERE` clause

`=`
`!=`
`>`
`<`
`>=`
`<=`

`IS NULL`
`IS NOT NULL`

## Like
case insensitive

`_` wildcard
`%` matches 0 or more letters

## Range

`BETWEEN` for letters is not inclusive of the 2nd latter
but for numbers is inclusive

## Sort

`ORDER`
`DESC` - high to low
`ASC` - low to high

## Limit

`LIMIT`

```sql
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```

## Case

Handles if-else logic

```sql
SELECT name,
    CASE
        WHEN imdb_rating > 8 THEN 'Fantastic'
        WHEN imdb_rating > 6 THEN 'Poorly received'
    ELSE 'Avoid at all costs'
    END
FROM movies;
```

# Calculation

`COUNT()`

- pass in * to get all results

`SUM()`
`MAX()`
`MIN()`
`AVG()`
`ROUND()`

## Grouping

`GROUP BY`

```sql
SELECT category, SUM(downloads)
FROM fake_app
GROUP BY category;

-- "1" refers to the first column
SELECT ROUND(imdb_rating), COUNT(name)
FROM movies
GROUP BY 1
GROUP BY 1;
```

use `HAVING` to filter groups

# Join

```sql
SELECT *
FROM orders
JOIN subscriptions
ON orders.subscription_id = subscriptions.subscription_id;
```

## Inner Join

Joins two table and returns only rows that match

## Left Join

Joins two tables and returns all results from rows of the left table,
even those that don't match


```sql
SELECT *
FROM newspaper
LEFT JOIN online
ON newspaper.id = online.id
WHERE online.id IS NULL;
```

## Cross Join

Join all rows of both tables


```sql
SELECT month, COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month
GROUP BY 1;
```

## Union

- Stack one table on top of another
- tables must have the same number of columns and data types in the same order

## With

Use the results of a calculation as a table to be combined for another table

```sql
WITH previous_query AS (
  SELECT customer_id, COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions
FROM previous_query
JOIN customers
ON customers.customer_id = previous_query.customer_id;
```


# References

[https://www.codecademy.com/courses/learn-sql/lessons/multiple-tables/exercises/with?action=resume_content_item](https://www.codecademy.com/courses/learn-sql/lessons/multiple-tables/exercises/with?action=resume_content_item)