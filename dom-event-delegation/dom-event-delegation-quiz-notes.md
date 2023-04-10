# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
the element that triggered the event;

- Why is it possible to listen for events on one element that actually happen its descendent elements?
bc of event flow, the event bubbling

- What DOM element property tells you what type of element it is?
target.tagName;

- What does the `element.closest()` method take as its argument and what does it return?
takes in selector as argument and returns closest ancestor element/itself that matches the selectors (if not null);

- How can you remove an element from the DOM?
.remove();

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
through event delegation -- adding in the event listener function using the parent element;

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
