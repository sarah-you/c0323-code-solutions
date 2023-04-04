# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
class attribute of the specified element in string form + space if there's more than 1 class for element;

- How do you update the CSS class attribute of an element using JavaScript?
first assign a variable to query the DOM for the class attribute;
then assign that variable.className as the updated class, in string format;

- What is the `textContent` property of element objects?
the text enclosed in an element;

- How do you update the text within an element using JavaScript?
first assign a varaible to query the DOM for the element that the text is in;
then assign that variable.textContent as the updated text, in string format;

- Is the `event` parameter of an event listener callback always useful?
no, you don't always need it, but when you are trying to locate a specific event, it is best to provide that parameter in the function to know exaclty where the event happened;

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
it would be more complicated since we wouldn't have a placeholder for a changing number;

- Why is storing information about a program in variables better than only storing it in the DOM?
save browswer storage  & easier to reference;

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
