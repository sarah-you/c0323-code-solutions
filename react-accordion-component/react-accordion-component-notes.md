# react-accordion-component-notes

**Hypertext Markup Language**

Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

**Cascading Style Sheets**

Cascading Style Sheets (CSS) is a style sheet language used for describing a presentation of a document written in a markup language with HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.

**JavaScript**

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.JavaScript has curly. bracket syntax, dynamic typing, prototype-based obiect-orientation.and first-class functions.

### Sharing State Example

```JavaScript
import React from 'react';
import { useState } from 'react';

export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  function handleClickPrev() {
    setCurrent((current - 1 + items.length) % items.length);
  }

  function handleClickNext() {
    setCurrent((current + 1) % items.length);
  }

  function handleClick(index) {
    setCurrent(index);
  }

  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <CustomButton text="Prev" onClick={handleClickPrev} />
        <Indicators count={items.length} onClick={handleClick} />
        <CustomButton text="Next" onClick={handleClickNext} />
      </div>
    </div>
  );
}

function CustomButton({ text, onClick, backgroundColor }) {
  return (
    <button onClick={onClick} style={{ backgroundColor }}>
      {text}
    </button>
  );
}

function Indicators({ count, current, onClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'lightblue' : undefined}
      />
    );
  }
  return <div>{buttons}</div>;
}
```

### Accordion.js Notes

explanation of the code line by line:

1. The code imports the `useState` function from the 'react' library.
2. The code exports a React component named `Accordion` as the default export.
3. The `Accordion` component receives a prop named `topics`.
4. Inside the `Accordion` component, a state variable named `activeIndex` and a function to update it, `setActiveIndex`, are created using the `useState` hook.
5. The `handleClick` function is defined, which takes an `index` parameter and updates the `activeIndex` state based on the comparison of the `index` with the current `activeIndex`.
6. The `Accordion` component returns another component called `RenderTopics`, passing the `topics` prop, `handleClick` function, and `activeIndex` state as props.
7. The `RenderTopics` component is defined, which receives props `topics`, `onClick`, and `currentIndex`.
8. Inside the `RenderTopics` component, a new array called `topicsList` is created using the `map` function on the `topics` prop.
9. For each element in `topics`, a `<div>` element is created with a unique `key` attribute, a class name of "topics-wrap," and an `<h1>` element with an `onClick` event that triggers the `onClick` function with the corresponding index as a parameter.
10. Inside the `<h1>` element, the `topics.title` is displayed as text.
11. An `<p>` element is conditionally rendered only if `currentIndex` is equal to the current index, and it displays the `topics.text` value.
12. The `topicsList` array is wrapped in a `<div>`.
13. The `RenderTopics` component returns the wrapper `<div>` containing the `topicsList`.
14. The `Accordion` component and `RenderTopics` component are exported as the default exports of the module.

The code implements an accordion component in React that allows for displaying and hiding content sections based on user interaction. When a topic is clicked, it expands or collapses to show or hide the corresponding content.

The `Accordion` component manages the state of the active topic index using the `activeIndex` state variable. The `handleClick` function updates the active index when a topic is clicked, either setting it to the clicked index or clearing it if the clicked index is already active.

The `RenderTopics` component receives the list of topics and the click handler function as props. It generates a list of topic elements, where each topic has a title and corresponding text content. The `currentIndex` prop determines whether the content of a topic should be displayed or not based on the active index.

The rendered list of topics in the `RenderTopics` component utilizes the `onClick` function to handle user clicks. When a topic title is clicked, the `onClick` function is triggered, passing the index of the clicked topic. If the clicked index matches the `currentIndex`, the content associated with that topic is displayed.

Overall, the code provides a reusable accordion component that can be used to display and hide content sections in a dynamic manner, allowing users to interact with the topics and control their visibility.
