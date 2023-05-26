# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?

  - to add images into application on demand when the broswer needs them
  - since this allows broswer to request code and image at the same time, it also speeds up startup time

- What does `express.static()` return?

  - returns a middleware function that serves static files from a specified directory

- What are several examples of static files?

  - index.html, styles.css, main. js, jpg images in 'public'

- What is a good way to serve application images using Express?
  - using express.static() middleware

## Notes

### Set up basic Express `app`

**MAKE SURE!!** cd into the directory (`cd directory-name`)

add `package.json` (make sure the entry point (the "main" field) is server.js and the package type (the "type" field) is module):

```
npm init
```

Use `npm install` to add `nodemon` as a devDependency

```
npm install nodemon
```

install express:

```
npm install express
```

Check `pakcakge.json`:

- dependency: express
- devDependency: nodemon

Add two scripts to `package.json` to start the server and to run it in development mode:

```
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

create `server.js` file:

```JavaScript
import express from 'express';

const app = express();

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
```

in index.html, link the css, js

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
    <title>express static</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

start your server:

```
(in terminal): npm run dev
```

---

#### Express static middleware

https://expressjs.com/en/4x/api.html#express.static

```JavaScript
 const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// ... other routes and middleware ...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, the `express.static()` function is used as middleware by calling `app.use()` with the function as an argument. It specifies the directory name (`'public'` in this case) from which to serve static files. The returned middleware function then handles the request to serve the static files located in the specified directory.

#### Serving static files in Express

https://expressjs.com/en/starter/static-files.html

The function signature is:

```JavaScript
express.static(root, [options])
```

use the following code to serve images, CSS files, and JavaScript files in a directory named public:

```JavaScript
app.use(express.static('public'))
```

---

#### Serving Application Images

Most applications have static images for backgrounds, icons, etc. One way to put these into an application is to import them into your source files

Problematic approach:

```JavaScript
import bgImage from './images/bg.jpg';

// later
  <img src={bgImage} />
```

The problem with this approach is that the image binary will be embedded in the source code that is delivered to the browser. This means that every static image must be downloaded before the application can be rendered, even if it isn't used on the initial page. This can make initial downloads lengthy and application startup time long.

A better approach is to use `Express Static` to serve these images on demand, when the browser needs them. This also lets the browser request both the code and images at the same time, which also speeds up startup time.

Typically, images would be placed in the directory served by Express Static, in a directory named `images`. The following exercise steps show how to set this up.

1. Download some images from the internet and put them in your `public` directory in a directory named `images`. Using HTTPie verify that your server serves them.
2. Create several img tags in `public/index.html` with `src` set to `/images/_image_file_name`. Verify that they load.

```HTML
<body>
    <img src="/images/express-static-cat.jpg" />
</body>
```
