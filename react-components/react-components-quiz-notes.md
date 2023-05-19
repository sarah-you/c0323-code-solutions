# react-components-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React component?

  - reusable UI elements for web app

- How do you define a component in React?

  - create a JS function and inside the code block, JSX code

- How is a component "rendered" (made visible on the browser page)?
  - React converts JSX into HTML elements so that the browser can understand and display in the specified location in the DOM
  - when there's changes, React efficiently updates only the necessary parts of DOM to reflect the changes

## Notes

Components https://react.dev/learn/your-first-component

Importing/Exporting Components https://react.dev/learn/importing-and-exporting-components

many of your designs can be composed by reusing components you already wrote, speeding up your development

Components are regular JavaScript functions, so you can keep multiple components in the same file

React puts interactivity first while still using the same technology: **a React component is a JavaScript function that you can _sprinkle_ with _markup_**

JSX code in React is made up of elements, attributes, and expressions. Let's break down each component:

- Elements: JSX elements resemble HTML tags and represent the structure of the user interface. They can be written in a self-closing format (`<div />`) or with opening and closing tags (`<div></div>`). Examples of elements include `<div>`, `<p>`, `<h1>`, or custom components like `<MyComponent />`.

- Attributes: JSX elements can have attributes similar to HTML elements. Attributes provide additional information or configuration to the elements. They are defined using HTML-like syntax, such as className, onClick, src, or style. For example: `<button className="my-button" onClick={handleClick}>Click Me!</button>`.

- Expressions: JSX allows you to embed JavaScript expressions within curly braces `{}`. These expressions are evaluated and the results are inserted into the JSX code. Expressions can include variables, function calls, or any valid JavaScript code. For example: `<h1>{title}</h1>` or `<p>{2 + 2}</p>`.

### How to build a component

#### Step 1: Export the component

- Make a new JS file to put the components in
- Export your function component from that file (using either default or named exports)
- Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports) (ex. app.js)

##### Gallery.js (export file)

```JavaScript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

##### App.js (import file)

```JavaScript
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

Here both Profile and Gallery have been moved out of App.js into a new file called Gallery.js. Now you can change App.js to import Gallery from Gallery.js

Notice how this example is broken down into two component files now:

1. Gallery.js:

- Defines the Profile component which is only used within the same file and is not exported.
- Exports the Gallery component as a default export.

2. App.js:

- Imports Gallery as a default import from Gallery.js.
- Exports the root App component as a default export.

#### NOTE

You may encounter files that leave off the `.js` file extension like so:

```JavaScript
import Gallery from './Gallery';
```

Either `'./Gallery.js'` or `'./Gallery'` will work with React, though the former is closer to how native ES Modules work.

#### Step 2: Define the function

With `function Profile() { }` you define a JavaScript function with the name `Profile`

#### NOTE

React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

#### Step 3: Add markup

The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.

Return statements can be written all on one line, as in this component:

```JavaScript
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:

```JavaScript
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

Without parentheses, any code on the lines after return will be ignored!

### Using a component

Now that you’ve defined your Profile component, you can nest it inside other components.

For example, you can export a Gallery component that uses multiple Profile components:

```JavaScript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

#### What the browser sees

Notice the difference in casing:

- `<section>` is lowercase, so React knows we refer to an HTML tag.
- `<Profile />` starts with a capital P, so React knows that we want to use our component called Profile.

And Profile contains even more HTML: `<img />`. In the end, this is what the browser sees:

```HTML
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

Because the `Profile` components are rendered inside `Gallery`—even several times!—we can say that `Gallery` is a parent component, rendering each `Profile` as a “child”.

This is part of the magic of React: you can define a component once, and then use it in as many places and as many times as you like.

#### NOTE:

Components can render other components, but NEVER nest their definitions, meaning do not define a component inside another component!

Instead, define every component at the top level

When a child component needs some data from a parent, pass it by props instead of nesting definitions
