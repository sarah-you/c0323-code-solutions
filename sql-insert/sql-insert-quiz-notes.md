# sql-insert-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you add a row to a SQL table?

  - "insert into" command

- What is a tuple?

  - list of values
  - use it to do a single insert;

- How do you add multiple rows to a SQL table at once?

  - by specifying more than one tuple of values (separated by commas)

- How do you get back the row being inserted into a table without a separate `select` statement?
  - 'returning \*;'

## Notes

To start the `pgweb` GUI tool for PostreSQL, use this command in a separate terminal from postgreSQL server & visit http://localhost:8081

```
pgweb --db=database-name
```

#### Basic Syntax and Example

An SQL insert statement is a means of adding rows to a table. Consider the following "products" table:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To add a row to this table, we would likely execute the following command:

```
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care');
```

Selecting all of the data from the "products" table would now include the inserted row:

```
select *
  from "products";
```

| productId | name           | description                | price | category  |
| --------- | -------------- | -------------------------- | ----- | --------- |
| 85        | ShamWow        | Soaks up so much liquid!   | 20    | cleaning  |
| 24        | ShakeWeight    | Makes you really strong!   | 30    | fitness   |
| 91        | OxyClean       | A versatile stain remover! | 10    | cleaning  |
| 102       | Ostrich Pillow | Feel comfy and cozy!       | 99    | self care |

Here are a few things to notice about the example insert statement. Look back at the example to confirm.

- The statement begins with the insert keyword.
- In PostgreSQL, the table to insert into is specified in " double quotes.
- The list of columns being inserted is wrapped in () parenthesis.
- The values being inserted are also wrapped in () in parenthesis in the same order as the columns they belong to. In SQL, a list of values is referred to as a tuple.
- Text values are wrapped in ' single quotes.
- Numeric values are represented with literal numbers (or decimals if applicable).
- In this particular statement, the "productId" was left out. This is because tables are often configured to auto-generate identifier attributes to avoid accidental duplicates.

#### Returning Auto-Generated Attributes

In PostgreSQL it's possible to get the full inserted row back from the database, including its auto-generated attribute(s), like a productId. This is done with a returning clause. Otherwise, it would be necessary to make a separate query to the database just to get the auto-generated attributes.

```
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care')
returning *;
```

And the output result might look like this:

| productId | name           | description          | price | category  |
| --------- | -------------- | -------------------- | ----- | --------- |
| 102       | Ostrich Pillow | Feel comfy and cozy! | 99    | self care |

If you only want specific values back, you can use a comma-separated list of column names instead of an \* asterisk.

#### Adding Multiple Rows

Data rows can be batch inserted into a database table by specifying more than one tuple of values, separated by commas. Below we are inserting two new rows into the "products" table.

```
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
       ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
returning *;
```

And because of the returning clause, they'd both be included in the statement's output:

| productId | name           | description          | price | category  |
| --------- | -------------- | -------------------- | ----- | --------- |
| 102       | Ostrich Pillow | Feel comfy and cozy! | 99    | self care |
| 103       | Tater Mitts    | Scrub some taters!   | 6     | cooking   |
