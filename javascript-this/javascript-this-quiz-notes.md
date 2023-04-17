# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
the calling object; implicit parameter of all JS functions;

- What does it mean to say that `this` is an "implicit parameter"?
it is available within a function's code block even if it was not defined as a parameter or declared as a variable;

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
call time;

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
in theory, we don't know until the method is called;

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
"It's-a-me, Mario!"; because the left of the greet function's dot notation has the character object, so "this" would be referencing the character object;

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
"It's a-me, undefined" because hello is not part of the character object so "this" will not have the character object as a reference, it'll reference the window object and window object doesn't have greet property;

- How can you tell what the value of `this` will be for a particular function or method **definition**?
you won't know when it is defined;

- How can you tell what the value of `this` is for a particular function or method **call**?
find where the function is called and look for object to the left of the dot;

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
