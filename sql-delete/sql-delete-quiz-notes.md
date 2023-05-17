# sql-delete-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you delete rows from a database table?

  - delete from keyword

- How do you accidentally delete all rows from a table?
  - not inserting “where” clauses

## Notes

#### Basic Syntax and Example

An SQL delete statement is how rows get removed from tables. Consider the following "products" table:

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To delete from this table, we might execute the following command:

```
delete
  from "products";
```

💀💀💀💀 **WE JUST DELETED EVERYTHING FROM THE TABLE!** and there is no undo. 😢

| productId | name | description | price | category |
| --------- | ---- | ----------- | ----- | -------- |

Are you awake? 😈

You must be extremely careful when deleting things from a table as it cannot be undone. Let's try that again. We only want to delete the ShakeWeight because, well, it's ridiculous. We can target specific rows to delete by including a where clause. As with insert and update statements, we can include a returning clause if we want the affected row(s) returned to us. A returning clause is not mandatory though.

```
delete
  from "products"
  where "productId" = 24
  returning *;
```

Here's what's left:

| productId | name     | description                | price | category |
| --------- | -------- | -------------------------- | ----- | -------- |
| 85        | ShamWow  | Soaks up so much liquid!   | 20    | cleaning |
| 91        | OxyClean | A versatile stain remover! | 10    | cleaning |

#### Complex `where` Clauses With `and`

A `where` clause does not have to refer to only one column. In fact, multiple criteria can be specified using the `and` keyword.

Let's "reset" the example table...

| productId | name        | description                | price | category |
| --------- | ----------- | -------------------------- | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

If we wanted to delete all "products" in the 'cleaning' category that are cheaper than 20, we would:

```
delete
  from "products"
 where "category" = 'cleaning'
   and "price"    < 20
```

| productId | name        | description              | price | category |
| --------- | ----------- | ------------------------ | ----- | -------- |
| 85        | ShamWow     | Soaks up so much liquid! | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong! | 30    | fitness  |

You can use and just about anywhere that logically makes sense in SQL. If you want multiple things to be true to meet your criteria, simply list them out using `and`. The `or` and `not` operators are also available.
