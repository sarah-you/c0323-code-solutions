# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- ## What are _hooks_ in React?

- ## What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

- ## What is the purpose of state in React?

- ## Why can't we just maintain state in a local variable?

- What two actions happen when you call a `state setter` function?

  -

- ## When does the local `state variable` get updated with the new value?

## Notes

State https://react.dev/learn/state-a-components-memory

State as a Snapshot https://react.dev/learn/state-as-a-snapshot

### State: A Component's Memory

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart.

Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

- Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
- Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

To update a component with new data, two things need to happen:

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

The `useState` Hook provides those two things:

1. A state variable to retain the data between renders.
1. A state setter function to update the variable and trigger React to render the component again.

### Adding a state variable

To add a state variable, import `useState` from React at the top of the file:

```JavaScript
import { useState } from 'react';
```

Then, replace this line:

```JavaScript
let index = 0;
with

const [index, setIndex] = useState(0);
```

`index` is a state variable and `setIndex` is the setter function

- `index` stores the current value of the state
- `state` refers to a piece of data that can be stored and accessed within React component and can be updated over time using associated state setter function (in this case, `setIndex`)
- `setIndex` is a function used to upfate the value of index
- `useState(0)` initializes the state `index` with an initial value of 0

```
The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.
```

`handleClick` example:

```JavaScript
function handleClick() {
  setIndex(index + 1);
}
```

### Hook

In React, `useState`, as well as any other function starting with ”`use`”, is called a Hook

_Hooks_ are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.

- only available while React is rendering, meaning: Hooks are specific to React and designed to be used within functional components to enhance their capabilities and manage various aspects of the component's behavior. They are not intended for use outside of React components.

#### NOTE!

**Hooks—functions starting with `use`—can only be called at the top level (outermost scope/entrypoint/global scope) of your components or your own Hooks.** You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

### Anatomy of `useState`

When you call useState, you are telling React that you want this component to remember something:

```JavaScript
const [index, setIndex] = useState(0);
```

In this case, you want React to remember index.

The convention is to name this pair like `const [something, setSomething]`. You could name it anything you like, but conventions make things easier to understand across projects.

The only argument to `useState` is the initial value of your state variable. In this example, the `index`’s initial value is set to `0` with `useState(0)`.

Every time your component renders, `useState` gives you an array containing two values:

1. The state variable (`index`) with the value you stored.
2. The state setter function (`setIndex`) which can update the state variable and trigger React to render the component again.

How that happens in action:

```JavaScript
const [index, setIndex] = useState(0);
```

1. **Your component renders the first time.** Because you passed `0` to `useState` as the initial value for `index`, it will return `[0, setIndex]`. React remembers `0` is the latest state value.
2. **You update the state.** When a user clicks the button, it calls `setIndex(index + 1)`. `index` is `0`, so it’s `setIndex(1)`. This tells React to remember `index` is `1` now and triggers another render.
3. **Your component’s second render.** React still sees `useState(0)`, but because React _remembers_ that you set `index` to `1`, it returns `[1, setIndex]` instead.
4. And so on!

### Giving a component multiple state variables

You can have as many state variables of as many types as you like in one component. This component has two state variables, a number `index` and a boolean `showMore` that’s toggled when you click “Show details”:

```JavaScript
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
```

It is a good idea to have multiple state variables if their state is unrelated, like `index` and `showMore` in this example.

But if you find that you often change two state variables together, it might be easier to combine them into one. For example, if you have a form with many fields, it’s more convenient to have a single state variable that holds an object than state variable per field. Read Choosing the State Structure for more tips.

- Choosing the State Structure https://react.dev/learn/choosing-the-state-structure

### State is isolated and private

State is local to a component instance on the screen.

In other words, **if you render the same component twice, each copy will have completely isolated state!** Changing one of them will not affect the other.

This is what makes state different from regular variables that you might declare at the top of your module. State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen.

Unlike props, **state is fully private to the component declaring it**.
The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

What if you wanted both galleries to keep their states in sync? The right way to do it in React is to _remove_ state from child components and add it to their closest shared parent.

---
