# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?

  - it is the main way of interacting with relational databases
  - SQL is a declarative programming language in which you describe the results you want and the program runs on its own to return the result you want

- How do you retrieve specific columns from a database table?

  - select the fields using select statmenet before the field name

- How do you filter rows based on some specific criteria?

  - using 'where' clause

- What are the benefits of formatting your SQL?

  - more organized and you can access the data you want/need more easily
  - readibility, debugging

- What are four comparison operators that can be used in a `where` clause?

  - =, !=, <, >
  - can also use 'like' for strings... search partial strings... many more

- How do you limit the number of rows returned in a result set?

  - limit clause and a number

- How do you retrieve all columns from a database table?

  - - (asterisk)

- How do you control the sort order of a result set?
  - order by clause and keyword asc or desc

## Notes

Structured Query Language (SQL) is the primary way of interacting with relational databases. It is a powerful way of retrieving, creating, and manipulating data in a relational database.

SQL ('sequel') is a domain-specific language (DSL -- programming language specialized to a particular application domain) used in programming and designed for managing data in relational database management system (RDBMS)

- it is especially useful in handling structured data

- it can access many records with one single command

- it eliminates the need to specify how to reach a record

You may be familiar with **imperative** programming languages such as JavaScript, where you basically tell the JavaScript runtime what to do and how to do it.

- Store this value (variables)
- Make this choice (conditionals)
- Repeat these steps (loops)

SQL is different! SQL is a **declarative** programming language. In declarative languages, programmers describe the results they want and the programming environment comes up with its own plan for getting those results. Does this sound familiar? It should! Both HTML and CSS are declarative programming languages! The programmer simply "declares" their intent and the Web browser does its best to output the desired results according to a predefined set of rules. Relational databases interpret SQL and then dynamically generate a plan of action to perform the programmer's commands as efficiently as possible.

### Selecting Columns from a Table

For now, we'll talk about how to query data in a database. This lesson does not cover how to modify any data in the database. Instead, what is presented is how to read data from a database. Consider this table of "products" data and imagine if it were many products long:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

Querying a database typically takes the form of a select statement.

Here is an example select statement that gets the "name" and "price" of all "products".

```
select "name",
       "price"
  from "products";
```

The result set would look like this:

| name         | price |
| ------------ | ----- |
| Shake Weight | 30    |
| ShamWow      | 20    |
| OxyClean     | 10    |

Here are a few things to note about that example select statement. Look back at the example to confirm.

- The query starts with the select keyword.
- The select keyword is followed by a comma-separated list of column names.
  - Note: The case-sensitivity of table and column names in SQL depends on the database. In PostgreSQL it is safest to surround table and column names with " double quotes to ensure the case matches.
- The column names are followed by a from clause specifying which table to retrieve the data from.
- The query must end in a ; semicolon.
- SQL keywords such as select and from are not case-sensitive.
- SQL does not have to be indented, but you should do it anyway for consistent style and therefore readability.

### Selecting All the Things

It is possible to select all of the columns in a table by replacing the list of column names with an \* asterisk.

```select *
  from "products";
```

The result set might look like this:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |

Here are a few things to note about the above example select statement. Look back at the example to confirm.

- The order of the results is not predictable.
- The \* asterisk is not in quotes.

#### Sorting Results

As mentioned above, it should never be assumed that rows retrieved from a table will be returned in a specific, predictable order. However, it is possible to include an order by clause in the select statement to control the order of the result set.

```
select *
  from "products"
 order by "price";
```

The result set would look like this:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |

Here are a few things to note about the example select statement. Look back at the example to confirm.

- The order by clause comes after the from clause.
- The order by clause is followed by a column name (in PostgreSQL the column name is in " double quotes.
- The default sort order of the results is ascending order.

#### Filtering Results

Sometimes we want to get a subset of all rows in a table. Considering our original table of data, it is possible to specify which rows should be returned. This is done using a where clause.

```
select "productId",
       "name",
       "price"
  from "products"
 where "category" = 'cleaning';
```

The result set would look like this:

| productId | name     | price |
| --------- | -------- | ----- |
| 85        | ShamWow  | 20    |
| 91        | OxyClean | 10    |

Here are a few things to note about the above example. Look back at the example to confirm.

- Any rows that do not have a "category" of 'cleaning' have been left out.
- The where clause comes after the from clause.
- The where clause is checking the "category" of each row in the table.
- Text values, such as 'cleaning' are wrapped in ' single quotes; not double quotes!
- The value of the "category" column is being compared using a single = equals sign. (Other comparisons like <, >, and != are available too).
- In PostgreSQL value comparisons are case-sensitive, so a row with a "category" value of 'Cleaning' would not be returned from the query.
- Don't forget: unless the select statement includes an order by clause, the order of the result set is not guaranteed.

#### Getting Fewer Results

Database tables in large systems can contain millions of rows. As humans we cannot really understand that much information all at once. Plus, the types of problems that we are solving usually involve a few pieces of data at a time. SQL provides us with the ability to limit the number of rows included in a result set.

Before you look at the example results for this select statement, try to predict what the results will be! Here is a reminder of the initial table data we're working with:

| productId | name                                 | description              | price    | category |
| --------- | ------------------------------------ | ------------------------ | -------- | -------- |
| 85        | ShamWow                              | Soaks up so much liquid! | 20       | cleaning |
| 24        | ShakeWeight Makes you really strong! | 30                       | fitness  |
| 91        | OxyClean A versatile stain remover!  | 10                       | cleaning |

```
select "name",
       "description"
  from "products"
 order by "price" desc
 limit 1;
```

Before we look at the result set, here are some things to note about the example select statement:

- The limit clause comes last.
- The limit clause includes a literal integer number with no quotes to specify the maximum number of rows that should be returned.
- The sort order of the order by clause is switched to descending order with the desc keyword.

And here is the result set. We've selected the name and description of the most expensive product in the table.

| name        | description              |
| ----------- | ------------------------ |
| ShakeWeight | Makes you really strong! |
