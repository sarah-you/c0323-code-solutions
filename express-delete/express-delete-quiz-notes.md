# express-delete-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the significance of an HTTP request's method?

  - based on what method it is and the URL path, server can handle the request and respond accordingly;

## Notes

### Route parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

```
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```

### app.delete()

In Express.js, a `DELETE` request is a type of HTTP request that is used to delete a resource on the server. It is one of the standard HTTP methods, along with `GET`, `POST`, `PUT`, and `PATCH`.

When a client sends a `DELETE` request to an endpoint on a server, the server should identify the resource to be deleted based on the request URL and any parameters or data in the request body. Once the resource is identified, the server should delete it and return a response indicating whether the deletion was successful.

In Express, you can handle `DELETE` requests using the `delete` method of the `app` object, which is similar to the `get`, `post`, `put`, and `patch` methods. Here's an example of how to handle a `DELETE` request in Express:

```
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete the user with the specified ID from the database
  // Return a response indicating whether the deletion was successful
});
```

In this example, we're defining a `DELETE` endpoint for deleting a user with a specific ID. The `:id` parameter in the endpoint URL represents the ID of the user to be deleted, which we can access using `req.params.id`. We would then delete the user from the database (or wherever the user data is stored), and return a response indicating whether the deletion was successful.

Note that `DELETE` requests should be used carefully, as they can have permanent and irreversible effects on the server and its resources. Make sure that the client has appropriate authorization to perform a `DELETE` request, and that the server takes appropriate measures to verify the validity and safety of `DELETE` requests before executing them.

### res.sendStatus(statusCode)

Sets the response HTTP status code to statusCode and sends the registered status message as the text response body. If an unknown status code is specified, the response body will just be the code number.

```
res.sendStatus(404)
```

### app.use() method vs. HTTP methods

app.use() is a method in Express.js that is used to mount middleware functions in a specified path. Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.

Middleware functions can be used to perform various tasks, such as logging, error handling, authentication, and more.

On the other hand, HTTP methods are a set of standard methods that are used to request different actions to be performed on a resource identified by a URL. The most common HTTP methods are:

GET: retrieves a resource from the server.
POST: submits an entity to the server.
PUT: updates an existing resource on the server.
DELETE: deletes a resource on the server.
When you define a route in Express.js using app.get(), app.post(), app.put(), app.delete(), or any other HTTP method, you are telling the server how to handle requests that use that method on a specific URL path.

For example, app.get('/users', (req, res) => { ... }) defines a route that will handle GET requests on the /users path, while app.post('/users', (req, res) => { ... }) defines a route that will handle POST requests on the same path.

app.use() is often used to define middleware functions that will be applied to all requests that match a specified path, while HTTP methods are used to define routes that handle specific HTTP requests on specific paths.

** app.use() NEEDS TO HAVE next() INSIDE CALLBACK FUNCTION **

If you don't call the next() function in your middleware function, the request-response cycle will be left hanging and the client will never receive a response. So it's important to always call next() at the end of your middleware function to pass control to the next middleware function in the stack.
