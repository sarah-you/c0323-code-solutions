# express-get-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an API endpoint?

  - the location where specific data is stored & accessed;

- What is the appropriate `Content-Type` header for HTTP messages that contain JSON in their bodies?

  - application/json;
  - 'res.json()' method automatically sets the Content-Type header to application/json and converts the user array to a JSON string before sending it in the response body

## Notes

### Basic routing https://expressjs.com/en/starter/basic-routing.html

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```
app.METHOD(PATH, HANDLER)
```

#### Where:

- app is an instance of express.

- METHOD is an HTTP request method, in lowercase (get, post, etc.)

- PATH is a path on the server.

- HANDLER is the function executed when the route is matched.

### Handler functions

allow you to define the behavior of your application in response to incoming HTTP requests, and give you fine-grained control over how your application responds to user input.

In Express.js, a handler function (also called a "route handler" or "request handler") is a function that is executed when an HTTP request is made to a specific route in your application.

When you define a route in your Express application, you specify a HTTP method (such as GET or POST) and a URL path (such as /users or /posts). You also provide a handler function that will be executed when a request is made to that route.

Here's an example of a simple Express route with a handler function:

```
app.get('/users', (req, res) => {
  // Handler function code goes here
});
```

In this example, we are defining a route with the HTTP method GET and the URL path /users. We are also providing a handler function that takes two arguments: req, which represents the incoming HTTP request, and res, which represents the outgoing HTTP response.

The code inside the handler function can do anything you want it to do, such as querying a database, rendering a template, or sending a JSON response. The handler function has access to the request and response objects, as well as any middleware functions that have been applied to the route.

### res.json([body])

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.

```
res.json(null)
res.json({ user: 'tobi' })
res.status(500).json({ error: 'message' })
```
