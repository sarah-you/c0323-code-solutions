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

**Each working feature should not cause any errors to be logged to the server terminal.**

### Clients can `GET` a list of notes.

If the client issues a GET request to the /api/notes route, then they should receive a 200 response containing a JSON array of note objects. If there are no notes, then they should simply receive an empty array.

#### Example Request

```
GET /api/notes HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 454
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 15:51:25 GMT
ETag: W/"1c6-Ruf2xq+mrx8uslNSjLWfMJJ7TaE"
X-Powered-By: Express

[
    {
        "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
        "id": 1
    },
    {
        "content": "Prototypal inheritance is how JavaScript objects delegate behavior.",
        "id": 2
    },
    {
        "content": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined.",
        "id": 3
    },
    {
        "content": "A closure is formed when a function retains access to variables in its lexical scope.",
        "id": 4
    }
]
```

### Clients can `GET` a single note by `id`.

If a client sends a `GET` request to the `/api/notes/:id` route, then there are three possible outcomes:

1. If the client uses an `id` that is not a positive integer, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
2. If there exists a note with the specified `id`, then they should receive a `200` response containing a JSON **object** representing the note with that `id`. **The client should not receive an array as they were not requesting a list.**
3. If there is no note with the specified id, then they should receive a 404 response containing a JSON object with an error property detailing the problem.

#### Example Request (Bad Request)

```
GET /api/notes/trollololo HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Bad Request)

```
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:18:26 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}
```

#### Example Request (Successful)

```
GET /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Successful)

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 135
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:12:43 GMT
ETag: W/"87-OBEaImm3bglwhKUYK2TeSqzdsXY"
X-Powered-By: Express

{
    "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.",
    "id": 1
}
```

#### Example Request (Not Found)

```
GET /api/notes/13 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Not Found)

```
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:20:02 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}
```

### Clients can `POST` a new note.

If a client sends a `POST` request to `/api/notes`, then there are three possible outcomes:

1. If the client does not include a `content` property in the request body, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
2. If the client includes a `content` property in the request body and the note is successfully recorded, then they should receive a `201` response including the created note (with `id`) as a JSON object in the response body.
3. If the client includes a `content` property in the request body and the note is not successfully recorded (i.e an error occurred while writing to `data.json`), then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`. You can "test" this error handling by trying to write the data to a file in a directory that doesn't exist e.g. `derp/data.json`. **Your server code should pass the err object to console.error() instead of throwing it, then send the 500 response to the client.**

#### Example Request (Bad Request)

```
POST /api/notes HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Bad Request)

```
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:50:49 GMT
ETag: W/"27-cK7mvB9kT4Lx7BEn4O9wg8dqUD4"
X-Powered-By: Express

{
    "error": "content is a required field"
}
```

#### Example Request (Success)

```
POST /api/notes HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 47
Content-Type: application/json
Host: localhost:8080
User-Agent: HTTPie/0.9.8

{
    "content": "Inertia is a property of matter."
}
```

#### Example Response (Success)

```
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 53
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 16:51:38 GMT
ETag: W/"35-q9pGWahDdxpuhc3OE2rDwt5FbyQ"
X-Powered-By: Express

{
    "content": "Inertia is a property of matter.",
    "id": 5
}
```

### Clients can `DELETE` a note by `id`.

If a client sends a `DELETE` request to the `/api/notes/:id` route, then there are four possible outcomes:

1. If the client does not specify a valid `id` (a positive integer), then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
2. If the client specified a valid `id`, but the matching note does not exist, then they should receive a `404` response containing a JSON object with an `error` property detailing the problem.
3. If the client specified a valid `id`, but an error occurred while writing to `data.json`, then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`. You can "test" this error handling by trying to write the data to a file in a directory that doesn't exist e.g. `derp/data.json`. **Your server code should pass the err object to console.error() instead of throwing it, then send the 500 response to the client.**
4. If the client specified a valid id and the note was successfully deleted, then they should receive a 204 response with an empty response body.

#### Example Request (Bad Request)

```
DELETE /api/notes/trollolololol HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Bad Request)

```
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:00:03 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}
```

#### Example Request (Not Found)

```
DELETE /api/notes/13 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Not Found)

```
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:01:39 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}
```

#### Example Request (Success)

```
DELETE /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Success)

```
HTTP/1.1 204 No Content
Connection: keep-alive
Date: Mon, 23 Dec 2019 17:04:56 GMT
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
X-Powered-By: Express
```

### Clients can replace a note (`PUT`) by `id`.

If a client sends a `PUT` request to the `/api/notes/:id` route, then there are four possible outcomes:

1. If the client does not specify a valid `id` (a positive integer) **OR** they do not include a `content` property in the request body, then they should receive a `400` response containing a JSON object with an `error` property detailing the problem.
2. If the client specified a valid `id` and `content`, but the matching note does not exist, then they should receive a `404` response containing a JSON object with an `error` property detailing the problem.
3. If the client specified a valid `id` and `content`, but an error occurred while writing to data.json, then they should receive a `500` response containing a JSON object. The JSON object should have an `error` property that states a generic error message: `{ "error": "An unexpected error occurred." }`. You can "test" this error handling by trying to write the data to a file in a directory that doesn't exist e.g. `derp/data.json`. **Your server code should pass the err object to console.error() instead of throwing it, then send the 500 response to the client.**
4. If the client specified a valid `id` and `content`, and the note was successfully updated, then they should receive a `200` response containing a JSON object of the updated note.

#### Example Request (Bad id)

```
PUT /api/notes/trollololo HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 23
Content-Type: application/json
Host: localhost:8080
User-Agent: HTTPie/0.9.8

{
    "content": "hahahaha"
}
```

#### Example Response (Bad id)

```
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:12:50 GMT
ETag: W/"29-eiZTR092ClXGPeHi/BDwiytO0ew"
X-Powered-By: Express

{
    "error": "id must be a positive integer"
}
```

#### Example Request (Missing content)

```
PUT /api/notes/1 HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 0
Host: localhost:8080
User-Agent: HTTPie/0.9.8
```

#### Example Response (Missing content)

```
HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:14:48 GMT
ETag: W/"27-cK7mvB9kT4Lx7BEn4O9wg8dqUD4"
X-Powered-By: Express

{
    "error": "content is a required field"
}
```

#### Example Request (Not Found)

```
PUT /api/notes/13 HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 44
Content-Type: application/json
Host: localhost:8080
User-Agent: HTTPie/0.9.8

{
    "content": "I think there is a note here."
}
```

#### Example Response (Not Found)

```
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 39
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:19:16 GMT
ETag: W/"27-sxbLjUzM6mGLQb3PuNzyrpH9EXU"
X-Powered-By: Express

{
    "error": "cannot find note with id 13"
}
```

#### Example Request (Success)

```
PUT /api/notes/2 HTTP/1.1
Accept: application/json, */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 103
Content-Type: application/json
Host: localhost:8080
User-Agent: HTTPie/0.9.8

{
    "content": "The event loop, this, closures, and prototypal inheritance are special about JavaScript."
}
```

#### Example Response (Success)

```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 109
Content-Type: application/json; charset=utf-8
Date: Mon, 23 Dec 2019 17:22:30 GMT
ETag: W/"6d-cex2kTo8T2hYUpgOEZeoT4y+M2k"
X-Powered-By: Express

{
    "content": "The event loop, this, closures, and prototypal inheritance are special about JavaScript.",
    "id": 2
}
```
