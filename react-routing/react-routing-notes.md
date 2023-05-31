# NOTES

There are several conventions for where to put components. The approach used here is to put components that cover the whole page (and are the target of "routes") in the `pages` directory, while components shared across multiple pages are in the `components` directory.

Components used by a single page often remain in the component file or in the `pages` directory, but as that directory grows, each page and its private components might become its own directory.

An `<Outlet>` renders whatever child route is currently active,
so you can think about this `<Outlet>` as a placeholder for
the child routes we defined above.

# react-routing-notes

React Router https://reactrouter.com/en/main/start/overview

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

Client side routing is enabled by creating a `Router` and linking/submitting to pages with `Link` and `<Form>`:

```JavaScript
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([                // create 'Router"
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>            // link to pages with link
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />                // link pages with form
);
```

#### Basic Example of React-router

https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx

(Note that the example uses Vite instead of Create React App, so there are minor differences.)

---

#### Step 1: Wrap the `App` component in a `BrowserRouter` (inside index.js)

https://reactrouter.com/en/main/routers/create-browser-router

#### Step 2: Add routes to your App component (inside App.js)

- index = "/" path

#### Step 3:
