# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?

  - functions that act as the middle man for request and response;

- What is Express middleware useful for?

  - parsing requested data, monitoring the application's process (using console.log), catch errors during request process (returning status responses)

- How do you mount a middleware with an Express application?

  - providing a matching path with the request

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

  - the request obj

## Notes

mount (in express): registers the specified middleware function(s) at the specified path;

The idea is that you have a middleware function and you want to add it to your Express server it so you use app.use() to tell Express about it so that it will add it to the chain of middleware that it will consider for each incoming request.

Internally, Express has an array of middleware functions and an optional path for each one. When a new request comes in, it starts at the beginning of the array and calls the first middleware function whose path matches the incoming request. If that middleware calls next(), then Express looks for the next one to match and calls it and so on...

The "mounts" in your statement is adding a middleware function and optional path to this array so it can be matched against incoming requests.

// An Express application can use the following types of middleware:

Application-level middleware https://expressjs.com/en/guide/using-middleware.html#middleware.application

Router-level middleware https://expressjs.com/en/guide/using-middleware.html#middleware.router

Error-handling middleware https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling

Built-in middleware https://expressjs.com/en/guide/using-middleware.html#middleware.built-in

Third-party middleware https://expressjs.com/en/guide/using-middleware.html#middleware.third-party

You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

Application-level middleware

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

```const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
```

This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

```
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
```

// app.use([path], callback, [callback...]) https://expressjs.com/en/4x/api.html#app.use
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app.
For example, this middleware function will be executed for every request to the app:

```
app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})
```

Middleware functions are executed sequentially, therefore the order of middleware inclusion is important.

Error-handling middleware

Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors. For details about error-handling middleware, see: https://expressjs.com/en/guide/error-handling.html

Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

```
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

valid path values for mounting middleware

ex) Path: this will match paths starting with /abcd

```
app.use('/abcd', function (req, res, next) {
  next()
})
```

// req.method

Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.

// res.send([body])

Sends the HTTP response.

This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field (unless previously defined) and provides automatic HEAD and HTTP cache freshness support.

The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:

```
res.send(Buffer.from('whoop'))
res.send({ some: 'json' })
res.send('<p>some html</p>')
res.status(404).send('Sorry, we cannot find that!')
res.status(500).send({ error: 'something blew up' })
```
