# express-notes-api-notes

## Notes

- add try/catch(err) in each of endpoint (requests) in server.js
- do all the error handling before doing rest of the "happy path" stuff

Each note object has two properties: `id` and `content`

- `id` is a positive integer

- `content` is a string

---

For this exercise you are tasked with building a small Express server that performs Create, Read, Update, and Delete (CRUD) operations on a collection of notes.

The notes are stored in a JSON file (though in a real-world application you would most likely store them in a database). Each note object has two properties: `id` and `content`. `id` is a positive integer and `content` is a string. Processing this file should follow a similar approach to that taken in the `node-notes-cli` exercise.

To help you get started setting up a basic Express app, you have been given a `package.json` that already has `express` listed as a dependency. Additionally, the `nodemon` package has been added as a `devDependency`. You will need to create `server.js`, then configure and implement the Express endpoints.

To download the dependencies required by this project, simply run `npm install` without any additional arguments. `package.json` will be read by `npm` and the `dependencies` and `devDependencies` will be automatically downloaded into `node_modules`.

```
npm install
```

Examine the `"scripts"` property of `package.json`. A script has been added for you to start `server.js` and automatically restart it if any of your JavaScript files are changed. To launch the server in watch mode, use the following command:

```
npm run dev
```

You will be testing your server with the HTTPie command line client.

## **Each working feature should not cause any errors to be logged to the server terminal.**

Error Status (for error handling)

1. 200 OK: The request has succeeded and the server returns the requested data.
2. 400 Bad Request: The server cannot process the client's request due to invalid syntax or parameters.
3. 401 Unauthorized: The client must authenticate itself to access the requested resource.
4. 403 Forbidden: The server understands the request but refuses to authorize it, indicating insufficient permissions.
5. 404 Not Found: The requested resource could not be found on the server.
6. 500 Internal Server Error: A generic server error occurred, indicating an unexpected condition that prevented the server from fulfilling the request.
