# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && operator is true only if all operands are true, otherwise false;
  || operator is true even if one of the operands are true;
  they can be used in short-circuit evaluation;

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  it's when the expression stops being evaluated once one result is determined from the first operand;
  for &&, if one operand turns out to be false, then we already know it's false, because all operands of && must be true;
  for ||, if we're looking for expressions to be true and first operand turns out to be true, then we already know the expression is true;

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? returns right side operand if left side of operand is null/defined (or else returns the left side);
  it differs from || in that nullish coalescing operator specifically compares values of null/undefined while logical or compares any falsy values;

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  operator that takes a condition, then an expression to execute if condition is truthy and final expression if condition is falsy;
  for if/else, the conditional expression must be exact match of "true/false", but ternary operator will execute the final expression if the condition is falsy;

- What is the `?.` (optional chaining) operator? When would you use it?
  accesses object's property or calls a function, but if obj's property is null/undefined, the operator returns undefined, rather than giving an error;
  you would use this when you want to check that the obj's property is not null/undefined before accessing a nested property;

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  array, strings, or objects that can be iterated;
  can be used when elements from object or arry need to be added into new array or object;

- What data types can be spread into an array? Into an object?
  array into array;
  properties of object into objects;

- How does spread syntax differ from rest syntax?
  spread syntax "expands" an array into its elements and rest syntax "condenses" them into single element;

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
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
