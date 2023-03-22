# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to check our code to see warnings if we're printing errors;

- What is a method?
function within an object's property value;
<!-- function/method name would be the property/key; -->

- How is a method different from any other function?
methods can only be performed on objects;

- How do you remove the last element from an array?
.pop() method;

- How do you round a number down to the nearest integer?
Math.floor() method;

- How do you generate a random number?
Math.random() method;
<!-- if no parameter given, random number will generate anything between 0 - 1 (excluding 1); -->
- How do you delete an element from an array?
.shift() method to remove the first item;
.splice() method to remove/replace element at any index
  <!-- ex. arr.splice(n, 1, p3, p4, p5)
   n = index of element to remove
   1 = delete count
   p3,4,5 = items to be added/replaced -->

- How do you append an element to an array?
.unshift() method to add to beginning of array; returns new length of array;
.push() method to add to end of array; returns new length of array;

- How do you break a string up into an array?
.split() method
<!-- parameters = (separator, limit) -->

- Do string methods change the original string? How would you check if you weren't sure?
no, string methods return a new value and do not change the original string;
console log the original variable that the string was assigned to;
- Roughly how many string methods are there according to the MDN Web docs?
50;

- Is the return value of a function or method useful in every situation?
not always; .push() adds element to end of array and returns the new array length, but we may not always need to the new array length, we may just want the new element to be added to the array;

- Roughly how many array methods are there according to the MDN Web docs?
40;

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
MDN;

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
