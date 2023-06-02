# react-file-uploads-notes

Many web apps offer users the ability to upload a file. There is a way to do this in a React app interacting with a Node/Express server.

Note that this is not the only way to provide this capability. For example, if the files are large, they may be stored on the **AWS S3** service, which offers convenient, inexpensive file storage. Many storage services (including `S3`) offer the ability to upload files directly from the client. This is much more efficient than sending the file to the server and having the server upload the file to the storage service.

The technique for uploading files to these various services varies from service to service, but on the frontend they usually follow a pattern similar to the one used in this exercise.

in React we use a form that lets the user select the file to upload. The file is sent to the server using the `multipart/form-data` encoding. This is an efficient way to send large data (such as image files) to a server. In Express we use the **multer** package to extract the file. multer adds the `file` to the request in a property named file and also adds any non-file fields in the form to the request in a property named `body`.

multer -- npm package
https://github.com/expressjs/multer

file api that `multer` adds to `req` object at `req.file`
https://github.com/expressjs/multer#api

### Set Up

Install all dependencies with `npm install`

Set up Database

`sudo service postgresql start`

Create new database

```
createdb databaseName
```

Import database schema and data with provided `"db:import"` script

```
npm run db:import
```

Start dev servers with `"dev"` script

```
npm run dev
```

Verify that React app displays in browser at `localhost:3000`

Examine the database created with `pgweb` at `localhost:8081`

### Exercise Code

- server.js file
- UploadForm.js file
