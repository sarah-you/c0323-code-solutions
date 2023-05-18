# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

  - JS library made of UI components that makes it efficient to render web pages

- What is a React component?

  - reusable code that states the structure, actions to take, and appearance of the webpage

- How do you mount a React app (root component) to the DOM?

  - root.render

- What are some other popular frontend frameworks?
  - Angular, Vue, Next.js, Svelte

## Notes

React Quick Start

https://react.dev/learn

Thinking in React

https://react.dev/learn/thinking-in-react

---

- React component names must always start with a capital letter, while HTML tags must be lowercase.

- JSX (JavaScript XML) is an extension to the JavaScript language syntax used in frameworks like React. It allows developers to write HTML-like code directly in JavaScript files. JSX combines the power of JavaScript with the expressiveness of HTML, making it easier to create and manipulate the structure of user interfaces in a more declarative and intuitive way. JSX code is later transpiled into plain JavaScript code that can be executed by the browser or a JavaScript runtime environment.

- JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.

Note that CRA launches a development server to serve the React application, running on port 3000. This is not the server you would run for your backend API. That will be a different Node Express server, running on your local computer in a different terminal using a different port. As with other terminal processes, you can use Ctrl + C to exit the CRA development server.
