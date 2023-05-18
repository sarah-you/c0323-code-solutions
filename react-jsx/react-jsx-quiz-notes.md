# react-jsx-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSX?

  - it's a syntax extension for JS that lets you insert HTML into JS following certain rules
  - commonly used in React for components
  - JSX is like a special language that React understands to create and display the visual parts of your app

- How does React use JSX to render components?
  - you write JS code using JSX -> React interprets JSX code to JS function calls -> renders the components onto the DOM

## Notes

To create a new React application:

Inside the current directory (cd directory-name):

```
npx create-react-app my-app
cd my-app
npm start
```

### Writing Markup with JSX

https://react.dev/learn/writing-markup-with-jsx

- JSX lets you write HTML-like markup inside a JavaScript file
- in React, rendering logic and markup live together in the same place—components
  - this ensures that they stay in sync with each other on every edit
  - Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

- Note: JSX and React are two separate things. They’re often used together, but you can use them independently of each other
- JSX is a syntax extension, while React is a JavaScript library.

### JSX Rules

1. Return a single root element

- To return multiple elements from a component, wrap them with a single parent tag
  - For example, you can use a `<div>` or a fragment (`<> and </>`)
    - fragment lets you group things without leaving any trace in the browser HTML tree

2. Close all the tags

- JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`

3. camelCase all most of the things!

- JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.
  - For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the corresponding DOM property
  ```JavaScript
  <img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  className="photo"
  />
  ```

Common Components (documentation): https://react.dev/reference/react-dom/components/common

JSX Converter https://transform.tools/html-to-jsx

---

### JavaScript in JSX with Curly Braces

https://react.dev/learn/javascript-in-jsx-with-curly-braces

- Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript

#### Passing string with quotes

- When you want to pass a string attribute to JSX, you put it in single or double quotes
- if you want to dynamically specify the src or alt text: You could use a value from JavaScript by replacing `"` and with `{` and `}`

#### Using single/double quotes:

```JavaScript
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

#### Using Curly Braces:

```JavaScript
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

Notice the difference between className="avatar", which specifies an "avatar" CSS class name that makes the image round, and src={avatar} that reads the value of the JavaScript variable called avatar. That’s because curly braces let you work with JavaScript right there in your markup!

#### Where to use curly braces

You can only use curly braces in two ways inside JSX:

1. As text directly inside a JSX tag: `<h1>{name}'s To Do List</h1>` works, but `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.
2. As attributes immediately following the `=` sign: `src={avatar}` will read the `avatar` variable, but `src="{avatar}"` will pass the string `"{avatar}"`

#### Using “double curlies”: CSS and other objects in JSX

In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX

Objects are also denoted with curly braces, like `{ name: "Hedy Lamarr", inventions: 5 }`.

Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: `person={{ name: "Hedy Lamarr", inventions: 5 }}.`

But when you need an inline CSS style, you pass an object to the style attribute

```JavaScript
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

#### close up of the CSS style object

```JavaScript
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>
```

it’s nothing more than an object inside the JSX curlies!

#### Note!!

Inline style properties are written in camelCase.

For example, HTML `<ul style="background-color: black">`

would be written as

`<ul style={{ backgroundColor: 'black' }}>` in your component.
