# express-post-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `express.json()` middleware do and when would you need it?

  - it parses request to json; you would need it to convert http requests that contain JSON data

## Notes

### express.json([options]) -- JSON parsing middleware

This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.

Here's an example of how to use `express.json()` in an Express.js application:

```javascript
const express = require('express');

const app = express();

// parse JSON payloads
app.use(express.json());

app.post('/api/users', (req, res) => {
  const user = req.body;
  console.log(user);
  // do something with the user data
  res.send('User created successfully!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

In this example, the `express.json()` middleware is used to parse JSON payloads in POST requests to the `/api/users` endpoint. The request handler function can then access the JSON data from `req.body` and process it as needed.

#### body-parser

`body-parser` is a middleware module for Node.js that allows you to parse the incoming request bodies in a middleware before your handlers, available under the `req.body` property.

When a client sends an HTTP POST request to a server, the request may include a body that contains data that the server needs to process. The `body-parser` middleware parses the incoming request body and populates the `req.body` object with the parsed data. This makes it easy for developers to work with the data sent in the request body.

`body-parser` supports various request body formats, including JSON, URL-encoded, and raw. It is widely used in Express.js, a popular web framework for Node.js.

Here's an example of how to use `body-parser` in an Express.js application to parse JSON requests:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const user = req.body;
  console.log(user);
  // do something with the user data
  res.send('User created successfully!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

In this example, `body-parser` is used to parse JSON requests. When a POST request is made to `/api/users` with a JSON payload in the request body, the middleware parses the request body and sets `req.body` to the parsed JSON object. The handler function can then access the user data from `req.body` and process it as needed.
