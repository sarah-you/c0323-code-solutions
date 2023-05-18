# sgt-back-end-notes

Building a simple JSON API, backed by a relational database.

Essentially, I'm creating a backend server for the web user (client) to interact with the web and access data they need.

#### Big picture framework for Express.js server

- Import modules (express, packages, etc.)
- Express app
- Connection pool
- middleware: app.use(express.json())
- Reusable functions:
  - error handling function for the app
  - check `parameter id` (/api/products/123 -- "123" is the parameter ID) (req.param.id)
  - check `request body` for valid user inputs (req.body)
- Routes using HTTP request methods on `app` object
  - `app.get()` get data (+ `id` param)
  - `app.post()` submit data (with new `id` inside function)
  - `app.put()` update existing data (only `id` param)
  - `app.delete()` delete data (only `id` param)
- app.listen() to start server

#### sample code outline of Basic Express Server

```JavaScript
// This code sets up a basic Express server that listens for incoming requests on port 3000.
//When a GET request is made to the root path ('/'), the server responds with the message "Hello, world!".

import express from 'express';
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

## Notes

### Command Lines

Create new database

```
createdb database-name
```

Import `schema.sql` to the database

```
psql -d database-name -f schema.sql
```

Import `data.sql` to the database

```
psql -d database-name -f data.sql
```

- `touch` to create new files
- `npm init` to create package.json
- `mpn install express` to install express
  - confirm package.json for express under "dependencies"
- `npm install pg` to install node-postgres (npm module)
  - allows Node.js developers to interact with a PostgreSQL database by providing an easy-to-use API for executing SQL queries and managing database connections
  - the node-postgres library allows you to use JavaScript code to execute SQL queries and manage connections to a PostgreSQL database
- `sudo service postgresql start` to start the postgreSQL server
- `pgweb` to get a visualization of the database on `localhost:8081`

- when using `pg` package, you need to create a database connect object (only need to create this ONCE at the top of file)
  - You need the `pg` package in your Node.js application if you want to connect to a PostgreSQL database and interact with it using SQL commands
  - Using the `pg` package, you can write Node.js code that interacts with a PostgreSQL database just like you would with any other programming language
  - connecting node-postgres https://node-postgres.com/features/connecting
  - new Pool https://node-postgres.com/apis/pool
    - `pg.Pool` allows multiple clients to share database connections
    - client can request connection from the pool, use it to run the query, and release the connection back to the pool
  ```JavaScript
  import pg from 'pg';
  // only create ONE pool for your whole server
  const db = new pg.Pool({
    connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
  });
  ```
  - how to send SQL queries to PostgreSQL and receive results https://node-postgres.com/features/queries

#### Using `app.use(express.JSON())`

When you build a web application using Node.js and Express.js, your application will receive requests from clients (e.g. web browsers or mobile apps) that include data in the form of JSON (JavaScript Object Notation). This data may include things like login credentials, form data, or other information that the application needs to process.

`app.use(express.json())` is a middleware that tells your Express.js application to expect JSON data in incoming requests and to parse that data into a JavaScript object that can be easily accessed by your application.

Think of it like this: if your application is a chef cooking in a kitchen, `app.use(express.json())` is like a food processor that takes raw ingredients (JSON data in the request body) and turns them into a form that the chef can easily use (a JavaScript object).

#### Example route for `GET`ing a `grade` by its `gradeId`

```JavaScript
app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    // validate the "inputs" FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      // there is no way that a matching grade could be found
      // so we immediately respond to the client and STOP the code
      // with a return statement
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    // Ok, the input is reasonable, time to query the database.
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    // 👆 We are NOT putting the user input directly into our query
    const params = [gradeId];
    // 👆 instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const result = await db.query(sql, params);
    // The query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (grade) {
      // the specific grade was found in the database, yay!
      res.json(grade);
    } else {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    // the query failed for some reason
    // possibly due to a syntax error in the SQL statement
    // print the error to STDERR (the terminal) for debugging purposes
    console.error(err);
    // respond to the client with a generic 500 error message
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});
```

#### Example of parameterized query

```JavaScript
const username = req.body.username;
const password = req.body.password;
const sql = 'SELECT * FROM users WHERE username=$1 AND password=$2';
const values = [username, password];
pool.query(sql, values, (err, result) => {
  // handle query results
});
```

#### use appropriate status codes with useful error messages in failure scenarios

The error message should clearly communicate what went wrong.

Imagine that you are trying to help the client do the right thing. See the example above.

- `GET /api/grades` returns all rows from the "grades" table. The client should receive an array of objects. If there happens to be no rows, an empty array is ok.

  The result could be a `200` or a `500`.

  - `200` because the query may succeed
  - `500` because the query may fail

- `POST /api/grades` inserts a new grade into the `"grades"` table and returns the created grade. The client should receive an object, not an array. The result could be a `201`, `400`, or `500`.

  - `201` because the grade was successfully inserted
  - `400` because the client may supply an invalid grade, including a missing `name`, `course`, or `score`. Or the score isn't an integer from `0` to `100`
  - `500` or the query may fail

- `PUT /api/grades/:gradeId` updates a grade in the `"grades"` table and returns the updated grade. The client should receive an object, not an array. Your code should require that the client includes the `name`, `course`, and `score` in the request body.

  The result could be a `200`, `400`, `404`, or `500`.

  - `200` because the grade may be successfully updated,
  - `400` because the client may supply an invalid gradeId or invalid/missing name, course, or score
  - `404` because the target grade may not exist in the database
  - `500` or there may be an error querying the database

- `DELETE /api/grades/:gradeId` deletes a grade from the "grades" table.

  The result could be a `204`, `400`, `404`, or `500`.

  - `204` because the grade may be successfully deleted
  - `400` because the client may supply an invalid gradeId
  - `404` because the target grade may not exist in the database
  - `500` or there may be an error querying the database.
