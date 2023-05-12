# express-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express useful for?
  creating web applications;

- How does Express fit into a full-stack web application?
  builds web application framework (helps build web apps with servies, resources, and APIs) and manages servers;

- How do you add `express` to your package dependencies?
  npm install express --save

- What Express application method starts the server and binds it to a network `PORT`?
  listen method;

## Notes

The app.listen() method returns an http.Server object and (for HTTP) is a convenience method for the following:

app.listen = function () {
var server = http.createServer(this)
return server.listen.apply(server, arguments)
}

http.Server object: makes your computer behave as an HTTP server;
