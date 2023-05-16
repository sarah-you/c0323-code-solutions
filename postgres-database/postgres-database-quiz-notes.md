# postgres-database-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a database schema?

  - description of how the tables relate to each other
  - schema holds the logic and rules that structure the database (how data should be organized, what types of data are allowed, and how the data are related)

- What is a table?

  - spreadsheet with its columns and headers
  - collection of related data organized in rows and columns;
  - rows: single record/instance of data
  - column: specific attribute of that record

- What is a row?

  - rows: single record/instance of data
  - one set of data with same attributes

- What is an attribute and what other names are used to describe them?
  - its the characteristic of the data/category that defines the data's organization
  - aka: columns, fields, properties;

## Notes

#### Creating a Database (postgresql documentation: https://www.postgresql.org/docs/current/tutorial-createdb.html)

Relational databases store data in relations, commonly referred to as tables. A table is a list of rows each having the same set of attributes. For example, all students in a "students" table could have "firstName", "lastName", and "dateOfBirth" attributes. Attributes are commonly referred to as columns. You might visualize a database table as a sort of spreadsheet where each row is a record in that spreadsheet.

A collection of tables is called a schema. A schema defines how the data in a relational database should be organized. In relational databases, you typically have to define your schema up front and the database server will make sure that any data being written to the database conforms to that schema.

Tables are used to store and organize data in a way that is easy to query and analyze. They provide a structured and consistent way to represent data and enforce data integrity through constraints and relationships with other tables.

### command lines to interact with databases

`psql -c '\l'`

list of databases

`createdb database-name`

creates new database

`psql -c '\l' > list-of-databases.txt`

creates txt file of the list of databases

`psql -d database-name -f schema.sql`

imports the schema into PostgreSQL; sets up the logic and requirements in the created database. (there will be a lot of output in the terminal, but none should be errors)

`psql -d database-name -f data.sql`

imports all the sample data into the new database. (lots of output, but should be no errors)

`psql -d database-name -c '\dt' > list-of-relations.txt`

lists all the tables in the new database and adds it to a text file

(dt is a shortcut for "describe table". The \dt command is used in PostgreSQL's interactive terminal interface (psql) to list all tables in the current database, along with information about each table's schema (i.e. column names and data types).

In this case, the -c option is used to specify that the \dt command should be executed immediately, and the output is redirected to a file called list-of-relations.txt.)
