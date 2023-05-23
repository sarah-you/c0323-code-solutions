# react-sharing-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are two ways React components can interact?

  - passing props from parent to child component (for info to move downward)
  - responding to Events from child components (only way to pass upward is through function)

- How can multiple React components share state?
  - parent component holds the state and specifies the props for its children

## Notes

React makes it easy to build components that can be reused in multiple places. This makes creating applications far more efficient than writing a component specific to each usage. However, there are many times we want multiple components to interact and coordinate their activities.

One example of coordinating components is in an Accordion where you want only one panel to be open at a time. Another is in a Carousel where you want buttons to both cause the images to rotate and to indicate which images is currently being displayed.

There are several ways React components can interact. The two most common are passing properties from a parent component to children components, and responding to Events from children components.

In React, properties can only be passed from a parent to its direct children. They cannot be passed from a child to its parent or from one child to another. Yet state often needs to be "passed around" or "shared" between components, as in the examples above. React offers several mechanisms for sharing state between components. The most used ones are:

- The parent passes its state to its children through component props
- The parent receives state from its children through Events
- React Context (which we will study later) maintains state that can be shared among multiple components

To receive state from a child through events, the child component declares a custom event handler prop and passes properties to the event handler as function arguments. The parent registers an event handler function with the child's event handler prop and receives the properties when the handler function is called. This exercise explores how to do this.

### Sharing state between components

https://react.dev/learn/managing-state#sharing-state-between-components

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code.

In this example, only one panel should be active at a time. To achieve this, instead of keeping the active state inside each individual panel, the parent component holds the state and specifies the props for its children.

```JavaScript
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
```

notice how the "active" state is managed in the parent `(Accordion)` and passed to the child `(Panel)`. Also notice how the child `(Panel)` tells its parent when the "Show" button is clicked using an event handler prop `(onShow)`.
