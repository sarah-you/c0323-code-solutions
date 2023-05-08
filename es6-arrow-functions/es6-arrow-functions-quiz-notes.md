# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
(param) => expression;
(param) => {
  return statements
};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
only single expression is specified, meaning the return statement is assumed to be the expression on the right side of the arrow function;

- When using _concise body syntax_, how do you return an object literal?
wrap the object literal in parentheses;

- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
() => 42;

  - How many arguments does the arrow function take?
0;

  - What value does it return?
42;

  - How many arguments are passed to the function `foo`?
1;

  - What type of argument is passed to the function `foo`?
arrow function;

- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
    - Identify the arrow function
(y) => {
      console.log(`4y = ${4 * y}`);
    }

  - How many arguments does the arrow function take?
1;

  - What value does it return?
undefined;

  - How many arguments are passed to the function `bar`?
1;

  - What type of argument is passed to the function `bar`?
arrow function;

  - When does the arrow function's code get executed?
when bar function is called with an argument;

- How does the value of `this` differ between standard functions and arrow functions?
standard function will reference the closest obj and arrow function will reference the global obj;


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
