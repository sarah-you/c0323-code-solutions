# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to make sure the code loads properly & check for bugs;

- What is a "model"?
the DOM tree which is a representation (of a webpage);

- Which "document" is being referred to in the phrase Document Object Model?
the HTML page in browser window;

- What is the word "object" referring to in the phrase Document Object Model?
each node/piece of content of webpage;

- What is a DOM Tree?
a model of web page, designed in a tree structure and made of nodes;

- Give two examples of `document` methods that retrieve a single element from the DOM.
getElementById(); -- via ID attribute
querySelector(); -- via first matching CSS selector

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
getElementsbyClassName();
getElementsbyTagName();
querySelectorAll();

<!-- multiple elements = Nodelist; -->

- Why might you want to assign the return value of a DOM query to a variable?
to access that element again without having to search for it in the DOM tree repeatedly;

- What `console` method allows you to inspect the properties of a DOM element object?
console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
the browser needs to analyze HTML content before JS can access it;

- What does `document.querySelector()` take as its argument and what does it return?
takes string form of CSS Selector and returns the first matching element;

- What does `document.querySelectorAll()` take as its argument and what does it return?
takes string form of CSS Selector and returns all matching elements;

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
