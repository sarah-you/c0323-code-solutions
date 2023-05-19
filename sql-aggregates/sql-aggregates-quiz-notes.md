# sql-aggregates-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are some examples of aggregate functions?

  - max(), avg(), count()

- What is the purpose of a `group by` clause?
  - to separate rows into groups to perform aggregate functions on those selected groups

## Notes

#### Clauses

`select`: columns for the data table

`as`(inline with select): the name you're giving for that column

`from`: where you're getting the data from for the `select`

`join`: the data table you're adding data from using the foreign key (the primary key that is shared with other data table) -- join each table to access the final result you need

`group by`: result is set based on this group

### Basic Syntax and Examples

Sometimes it's useful to answer a question about a set of rows in a table or result set. Take our example `"products"` table (imagine there were many, many products in the table).

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

We may want to know the highest price in the entire table. We'd use the max() aggregate function. It's not strictly required that you alias an aggregate (with as), but it's good practice because it produces a more usable column name and communicates your intent more clearly.

```
select max("price") as "highestPrice"
from "products";
```

## |highestPrice|

|30|

If we wanted to know the average price, there's an avg() aggregate function for that:

```
select avg("price") as "averagePrice"
from "products";
```

## |averagePrice|

|20|

Or maybe we just want to know the number of rows in the "products" table. We'd use the count() aggregate function:

```
select count(\*) as "totalProducts"
from "products";
```

## |totalProducts|

3

There are many aggregate functions available to you in SQL, including min(), sum(), and every().

### Grouping Rows in Aggregate

With aggregate functions, SQL becomes an incredibly powerful reporting language. But sometimes you don't want to ask a question about every row in a table altogether. Instead, you want to separate rows into groups and perform aggregate functions on those groups of rows. This is done with a group by clause.

For example, if we wanted to know the average price of each product "category", we'd do:

```
select "category",
avg("price") as "averagePrice"
from "products"
group by "category";
```

| category | averagePrice |
| -------- | ------------ |
| fitness  | 30           |
| cleaning | 15           |

Here we've shown that, on average, our `'fitness'` products are more expensive than our `'cleaning'` products.

We can even `count()` the number of products per category:

```
select "category",
count(\*) as "totalProducts"
from "products"
group by "category";
```

| category | totalProducts |
| -------- | ------------- |
| fitness  | 1             |
| cleaning | 2             |

It's even possible to aggregate across joins. Suppose we had a table of "suppliers" and also wanted to know how many of their products were in the "products" table:

`products`

| productId | name        | description                | price | category | supplierId |
| --------- | ----------- | -------------------------- | ----- | -------- | ---------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning | 1          |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  | 2          |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning | 1          |

`suppliers`

| supplierId | name     | city          | state      |
| ---------- | -------- | ------------- | ---------- |
| 1          | ScrubHub | Springfield   | Kentucky   |
| 2          | Fidnezz  | Newport Beach | California |
| 3          | Jitters  | Seattle       | Washington |

```
select "s"."name" as "supplier",
count(\*) as "totalProducts"
from "suppliers" as "s"
join "products" as "p" using ("supplierId")
group by "s"."supplierId";
```

| supplier | totalProducts |
| -------- | ------------- |
| Fidnezz  | 1             |
| ScrubHub | 2             |
