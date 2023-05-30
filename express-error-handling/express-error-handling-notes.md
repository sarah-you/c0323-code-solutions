# express-error-handling-notes

## Notes

React server: `localhost:3000`

Postgresql/pgweb database server: `localhost: 8081`

Express server: `localhost 8080`

#### HTTPie Requests

POST

```
 λ http -v post "localhost:8080/api/grades"  name="cera" course="JavaScript" score=90
```

PUT

```
λ http -v put "localhost:8080/api/grades/5" name="cera" course="JavaScript" score=90
```

#### Getting Started

Read through the `dependencies` and `devDependencies` listed in `package.json` and install everything with `npm install`.

Reminder: `npm install` reads the `package.json` and automatically downloads everything listed in its `dependencies` and `devDependencies` properties.

Make a copy of the provided `.env.example` file. Name your copy `.env`. These values will be loaded into your program by the `dotenv package`.
https://www.npmjs.com/package/dotenv

```
cp .env.example .env
```

#### Database Setup

Start `postgresql`

```
sudo service postgresql start
```

Create new database

```
createdb expressErrorHandling
```

Import database schema and test data using the provided `"db:import"` script in `package.json`

```
npm run db:import
```

Examine your `expressErrorHandling` database with the `pgweb` GUI tool for PostgreSQL. **Reminder**: `pgweb` can be seen at http://localhost:8081 once it's running.

```
pgweb --db=expressErrorHandling
```

#### Complete the Server

Start the Express server:

```
npm run dev
```

Express Error Handling
https://expressjs.com/en/guide/error-handling.html

#### Catching Errors

Express comes with a default error handler so you don’t need to write your own to get started.

It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

Errors that occur in synchronous code inside route handlers and middleware require no extra work. If synchronous code throws an error, then Express will catch and process it.

```
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
```

For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the `next()` function, where Express will catch and process them. For example:

```
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
```

Starting with **Express 5**, route handlers and middleware that return a Promise will call next(value) automatically when they reject or throw an error. This will make the `try/catch` block unnecessary. For example:

```
app.get('/user/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})
```

If `getUserById` throws an error or rejects, `next` will be called with either the thrown error or the rejected value. If no rejected value is provided, `next` will be called with a default Error object provided by the Express router.

If you pass anything to the `next()` function (except the string `'route'`), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

You must catch errors that occur in asynchronous code invoked by route handlers or middleware and pass them to Express for processing. For example:

```
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})
```

## Express will _crash_ if an exception propagates out of a route handler. The safest way to avoid this problem is to wrap the _entire_ function body in a `try/catch` block.

#### server.js file notes

line 8, `pg.pool` is a connection pool allowing connection to the postgreSQL server to handle requests for various users

**refactoring**: restructuring/modifying existing code (improving it)
