# fetch-in-react-practice-notes

## Notes

PostgreSQL

```
sudo service postgresql start // status
```

```
sudo service postgresql stop
```

### Full Stack Infrastructure

This is a full stack web application, with code for all **3 layers: client, server, database**.

The `client` is a `React app` in the `client` directory. It has its own `package.json`, `src`, and `node_modules` folders, created by Create React App. In development, Create React App requires its own server, which is started using the `start` script in `client/package.json`. The Create React App server runs on port 3000. In production, the React app is a collection of static files that are deployed without a separate server.

The `server` is a `Node server` running Express and is found in the `server` directory. It has its own `package.json` and `node_modules` folders. It uses a `.env` file to store environment-specific variables (more info below). In development, the server is started using the `dev` script in `server/package.json`, which uses `nodemon` to monitor changes to the code in the `server` directory and restart the server when it changes. The development server runs on port 8080. In production, the server is started using the start script.

The `database` is the `PostgreSQL database server`. In development, you can use `pgweb` to directly examine and interact with the database. **pgweb runs on port 8081**. Your Express code uses the `pg` package to send SQL to the PostgreSQL server.

The LFZ exercise environment provides several **`npm` scripts** to simplify managing these servers. These allow all shell commands to be executed from the exercise solution directory. The scripts you will interact with the most are:

- `db:import` creates the exercise database schema and loads initial test data
- `install` installs the npm dependencies for both the `client` and the `server` into the respective `node_modules` folder, and creates the server `.env` file by copying `server/.env.example` to `server/.env`
- `dev` runs all 3 servers (Create React App, Express, and `pgweb`) in a single terminal; log messages from each server are prefixed with the name of the process (`dev:client`, `dev:server`, or `dev:db`)

When you finish working on an exercise, you can **stop all development servers** at the same time by typing `Ctrl-C` in the terminal where they are running.

Occasionally, you may run into a situation where a server is still running and is attached to a port. This will keep `npm run dev` from successfully starting up all the servers, giving the error that an address or port is already in use. You can recover from this using the following commands, for each port used by the development servers (3000, 8080, and 8081):

- Determine which process is using the port (replace `<PORT>` with the port number that is still in use):

```
lsof -i :<PORT>
```

- Note: If `lsof` is not installed on your system (`lsof` returns "command not found"), you can install it with the following:

```
sudo apt update
sudo apt install lsof
```

- The output will list the process that is using the port. The COMMAND column indicates the name of the command that started the process. The PID column gives the Process ID of the running process.
- Kill the process using the Process ID (replace `<PID>` with the PID listed by the `lsof` command):

```
kill -9 <PID>
```

### A Note on .env Files

Applications often need to use constants that vary from environment to environment; for example, host names and port numbers. By convention, these are kept in a file named `.env`. This file will often hold constants that differ depending on the environment or that contain secrets, such as passwords and encryption keys. For this reason, `.env` is usually _not_ stored in GitHub.

There is no simple, standard way to manage `.env` files, so each development team typically creates a custom solution. In Node applications, the `.env` file is typically read using the `dotenv` `npm` package. Create React App applications have a similar but **custom solution**.

dotenv https://github.com/motdotla/dotenv

custom solution https://create-react-app.dev/docs/adding-custom-environment-variables/

In these exercises, we will use `dotenv` in the Node server. A sample `.env` file is provided in the `server` directory, named `.env.example`. It will be copied to .`env` by the `npm install` scripts.

### A Note on CORS

As a security feature, modern browsers implement **Cross-Origin Resource Sharing (CORS) controls**. The purpose of these controls is to allow a server to restrict which clients can access it. In particular, the browser compares the domain ("origin") that served the current page with the domain that is specified in a `fetch` request. If they differ in scheme (e.g., 'http'), hostname (e.g., 'google.com' or 'localhost'), or port (e.g., `:3000`) the browser will reject the `fetch` request unless the server response has specifically allowed requests from that origin.

React is served from `http://localhost:3000` and the API server is at `http://localhost:8080`, so the two differ (the ports are different). Therefore, the browser will reject `fetch` requests to the API server unless the API server is configured to allow requests from `http://localhost:3000`. Create React App has a `feature` to address this in development that also allows for a deployment to use the same server for both serving React files and API requests. This is a common deployment configuration and is the one used by LearningFuze for student final project deployments.

The solution used by Create React App is to add the property `"proxy": "http://localhost:8080"` to `package.json`.

In development the Create React App server will serve requests for React files directly, but will forward API requests to the server specified in the `proxy` property. In this exercise, the `proxy` property has been added for you. In future exercises, you may need to add it manually after creating your React app.

feature -- Proxying API Requests in Development https://create-react-app.dev/docs/proxying-api-requests-in-development/

In the context of networking and web development, a `proxy` is an intermediary server that acts as a mediator between client and server, forwarding client requests and handling responses on their behalf.

### API Documentation

`GET /api/todos`
Returns a JSON Array of all `todo` objects from the server.

```
GET /api/todos HTTP/1.1
Host: localhost:8080
Accept: */*
```

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "todoId": 1,
    "task": "learn http",
    "isCompleted": true,
    "createdAt": "2020-12-13T21:06:03.736Z",
    "updatedAt": "2020-12-13T22:37:03.736Z"
  },
  {
    "todoId": 2,
    "task": "learn fetch",
    "isCompleted": false,
    "createdAt": "2020-12-13T22:37:03.736Z",
    "updatedAt": "2020-12-13T22:37:03.736Z"
  }
]
```

`POST /api/todos`
Creates a new `todo` object from the request body and returns the created `todo`, including an auto-generated `todoId` property and timestamps.

```
POST /api/todos HTTP/1.1
Host: localhost:8080
Accept: */*,
```

```
Content-Type: application/json

{
  "task": "do a barrel roll",
  "isCompleted": false
}
HTTP/1.1 201 Created
Content-Type: application/json

{
  "todoId": 3,
  "task": "do a barrel roll",
  "isCompleted": false,
  "createdAt": "2020-12-13T22:37:03.736Z",
  "updatedAt": "2020-12-13T22:37:03.736Z"
}
```

`PATCH /api/todos/${todoId}`
Applies a partial update to the `todo` object identified by its `todoId` in the URL. The `todoId` of the target `todo` object should be in the **request target**, while the `isCompleted` property of the `todo` should be in the **request body**. The whole updated `todo` is returned in the response body.

```
PATCH /api/todos/2
Host: localhost:8080
Accept: */*
Content-Type: application/json

{
  "isCompleted": true
}
```

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "todoId": 2,
  "task": "learn fetch",
  "isCompleted": true,
  "createdAt": "2020-12-13T22:37:03.736Z"
  "updatedAt": "2020-12-13T22:39:08.276Z"
}
```

### Set up the database

1. Make sure `postgresql` is running

```
sudo service postgresql start
```

2. Create a new database for this exercise named `fetchInReactPractice`.

```
createdb fetchInReactPractice
```

3. Import the database schema and data with the provided `"db:import"` script.

```
npm run db:import
```

### Start the development servers

1. Start all the development servers with the "dev" script:

```
npm run dev
```

2. Verify that the React app displays in the browser at `localhost:3000.`
3. Examine the `fetchInReactPractice` database with pgweb at `localhost:8081`.
