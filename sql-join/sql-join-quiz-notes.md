# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?

  - a reference for 2 or more tables can use to share its data rather than listing everything in each of the table
  - it's a reference to a primary key of another table

- How do you join two SQL tables?

  - keyword join (data table)/using (foreign key -- if columns have the same name)

- How do you temporarily rename columns or tables in a SQL statement?
  - aliasing column names using 'as'

## Notes

#### Foreign Keys Between Tables

An SQL `join` clause is a way of combining data from two different database tables into one result set. Consider the following two tables:

`products`

| productId | name     | description                | price | category | supplierId |
| --------- | -------- | -------------------------- | ----- | -------- | ---------- |
| 85        | ShamWow  | Soaks up so much liquid!   | 20    | cleaning | 1          |
| 24        | OxyClean | A versatile stain remover! | 10    | cleaning | 1          |

`suppliers`

| supplierId | name     | city          | state      |
| ---------- | -------- | ------------- | ---------- |
| 1          | ScrubHub | Springfield   | Kentucky   |
| 2          | Fidnezz  | Newport Beach | California |
| 3          | Jitters  | Seattle       | Washington |

The data in this fictitious database has been split into two tables. One table is responsible for storing products, while the other stores information about suppliers of those products. This helps keep data organized so that updates can be made independently to either table. It also ensures that each piece of data is stored in only one table, which simplifies updating that data. This organization, where each piece of data is in exactly one table, is called normal form. In general, splitting out database data into different tables and maintaining normal form is a good thing.

Notice how each row in the `"products"` table has a `"supplierId"` column. That column specifically refers to values in the `"supplierId"` column of the `"suppliers"` table. This is known as a **foreign key**. Instead of putting all of the supplier information for a product into the product row itself, there is instead just one column that links the `"products"` table to the `"suppliers"` table.

This arrangement, with a foreign key in one table pointing to a primary key in another table, creates a **one-to-many** relationship between the two tables. In this example database, a `supplier` can provide many `products` but each product can only be provided by one single `supplier`. The `supplier` of a `product` is indicated by the `supplierId` column in the `products` table. All `products` provided by a `supplier` is found by selecting all `products` where `product.supplierId` is the desired `supplierId`.

**Many-to-many** relationships can be modeled by introducing a 3rd "join table" that contains a foreign key to one of the tables and another foreign key to the other table. For example, suppose the products could be provided by any number of suppliers (as might be the case if the supplier were middlemen). That would be modeled by removing `supplierId` from the `products` table and introducing a third table, say, `productSuppliers` as follows;

`productSuppliers`

| supplierId | productId |
| ---------- | --------- |
| 1          | 85        |
| 1          | 24        |
| 3          | 24        |

In this table, `supplier` 1 provides two `products`, 85 and 24, while `product` 24 is provided by two different `suppliers`, 1 and 3.

#### Joining Tables

It's possible to combine the data from the products and suppliers tables into one mega result set:

```
select *
  from "products"
  join "suppliers" using ("supplierId");
```

Before we look at the example result, here are a few things to note about the above select statement:

- We are selecting all columns from both the "products" table and the "suppliers" table.
- The join clause follows the from clause.
- The join clause is instructing the database server to link the two tables by their `"supplierId"` column.
- This form of the `join` clause requires that the primary key and foreign key have exactly the same name. If that is not the case, an alternate form of the `join` clause can be used: `join "suppliers" on "products"."supplierId" = "suppliers"."supplierId"`.

| productId | name        | description                | price | category | supplierId | name     | city          | state      |
| --------- | ----------- | -------------------------- | ----- | -------- | ---------- | -------- | ------------- | ---------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning | 1          | ScrubHub | Springfield   | Kentucky   |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  | 2          | Fidnezz  | Newport Beach | California |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning | 1          | ScrubHub | Springfield   | Kentucky   |

That is a lot of information! 🤔 And there's some weird stuff in here too. There are two "name" columns. What does that even mean? It's not common to use database tables this way. The result set is kind of confusing. Typically we pick and choose which columns should be included in the results.

#### Column and Table Aliasing

Sometimes, a column's original name doesn't make sense for a desired result set. This can be for one of two reasons:

1. The column has the same name as another column in the joined results.
2. The column name doesn't really communicate enough information about the data in the column outside of the context of the table.

In order to address either of these scenarios, we can **alias** column names. For example, if we want the product `"name"` and the supplier `"name"` to both appear in the same result set, we can do this:

```
select "products"."name" as "product",
       "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");
```

In this example we're selecting the `"name"` column from both the `"products"` table and the `"suppliers"` table, but then renaming them just for the result set using the as keyword. The column names are not changed in the tables themselves.

| product     | supplier |
| ----------- | -------- |
| ShamWow     | ScrubHub |
| ShakeWeight | Fidnezz  |
| OxyClean    | ScrubHub |

It's also common for table names to be aliased in the from and join clauses of the statement. Sometimes, we need to select more than just a couple of columns and re-typing the table names can get tedious.

```
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId");
```

| product     | category | supplier | state      |
| ----------- | -------- | -------- | ---------- |
| ShamWow     | cleaning | ScrubHub | Kentucky   |
| ShakeWeight | fitness  | Fidnezz  | California |
| OxyClean    | cleaning | ScrubHub | Kentucky   |

It's possible to filter a joined result set with a where clause too:

```
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId")
 where "p"."category" = 'cleaning'
   and "p"."price"    < 20;
```

| product  | category | supplier | state    |
| -------- | -------- | -------- | -------- |
| OxyClean | cleaning | ScrubHub | Kentucky |
