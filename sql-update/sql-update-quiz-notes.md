# sql-update-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you update rows in a database table?

  - `update` keyword

- Why is it important to include a `where` clause in your `update` statements?
  - if you say “update” and don’t include “where” clause, then it’ll update every single row and you can’t undo it in the database

## Notes

#### Basic Syntax and Example

An SQL update statement is a means of updating rows in a database table. Consider the following "products" table:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To make an update we might execute the following command:

```
update "products"
   set "price" = 100;
```

**HOWEVER** there is a serious problem with this query as it would update every row in the table!

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 100   | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 100   | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 100   | cleaning |

Therefore, great care must be taken to include a where clause in your update statements to only target specific rows:

```
update "products"
   set "price" = 100
 where "productId" = 24;
```

If we were careful our data would now look like this:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | leaning  |
| 24        | ShakeWeight | Makes you really strong!   | 100   | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

#### Updating Multiple Columns

It is possible to update multiple columns of a row with a comma-separated list of assignments in the set clause.

```
update "products"
   set "price"       = 200,
       "name"        = 'Super ShakeWeight',
       "description" = 'Makes you ULTRA strong!'
 where "productId" = 24;
```

| productId | name              | description                | price | category |
| --------- | ----------------- | -------------------------- | ----- | -------- |
| 85        | ShamWow           | Soaks up so much liquid!   | 20    | cleaning |
| 24        | Super ShakeWeight | Makes you ULTRA strong!    | 200   | fitness  |
| 91        | OxyClean          | A versatile stain remover! | 10    | cleaning |
