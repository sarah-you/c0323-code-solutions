# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to check our code to make sure it's functioning correctly and for bugs;

- What is the purpose of events and event handling?
to make the page feel more interactive; (by responding to user interaction)

- Are all possible parameters required to use a JavaScript method or function?


- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListner method;

- What is a callback function?
a function that is passed as an argument for another function;

- What object is passed into an event listener callback when the event fires?
 function;

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
target property of event; console.log event and go through its list of property;

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
first one calls the function handleClick as is, while the second one handleClick() assumes no parameter, but parameter event is required for this function;

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
