# express-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express useful for?
  creating web applications;

- How does Express fit into a full-stack web application?
  builds web application framework (helps build web apps with servies, resources, and APIs) and manages servers;

- How do you add `express` to your package dependencies?
  npm install

- What Express application method starts the server and binds it to a network `PORT`?
  listen method;

## Notes

The app.listen() method is used to bind and listen to the connections on the specified host and port.
It returns an http.Server object and (for HTTP) is a convenience method for the following:

app.listen = function () {
var server = http.createServer(this)
return server.listen.apply(server, arguments)
}

http.Server object: makes your computer behave as an HTTP server;

node is backend server for js, but doesn't work with http APIs, but express.js does it for you

we make requests from front end (via HTTP) and express lets us write the API to communicate with server
simplifies our end-points

Setting up Express App:

1. import express package
2. call it as function
3. returns as an app
4. call methods on it to configure your app (to tell it what endpoints to listen to)
   start listening to network (using a PORT)
   PORT -- list of PORT numbers with process listed next to the numbers which delegates the requests;
   (http PORT #s above 1000 are free to use) -- < 1000 are reserved
