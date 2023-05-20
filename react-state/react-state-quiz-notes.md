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

Conditional Rendering https://react.dev/learn/conditional-rendering

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

### State as a Snapshot

State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.

### Setting state triggers renders

You might think of your user interface as changing directly in response to the user event like a click. In React, it works a little differently from this mental model. On the previous page, you saw that setting state requests a re-render from React.

This means that for an interface to react to the event, you need to _update the state._

In this example, when you press “send”, `setIsSent(true)` tells React to re-render the UI:

```JavaScript
import { useState } from 'react';

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}
```

Here, the state update is happening for `setIsSent` updating from `false` to `true` when `message` is sent

Here's how the code execution flows:

1. When the `Form` component is rendered, it checks the value of the `isSent` state variable. Initially, it is set to `false`.

- `false`, indicating that the message has not been sent yet

2. If `isSent` is `false`, the code enters the `if` statement and returns the JSX element `<h1>Your message is on its way!</h1>`. This means that the rest of the code block below the `if` statement will not be executed.
3. If `isSent` is `true`, the code skips the `if` statement, proceeds to the rest of the code block, and returns the JSX form element.
4. The form element has an `onSubmit` event handler that triggers when the form is submitted. It prevents the default form submission behavior (page refresh) using `e.preventDefault()`.
5. It then sets `isSent` to `true` using `setIsSent(true)`, and calls the `sendMessage` function, passing the `message` state variable as an argument.
6. After the `return` statement, the execution of the `Form` function ends.

To summarize, if the `isSent` state variable is `false`, the code block inside the `if` statement will be executed, and the rest of the code block below it will not be executed. If `isSent` is `true`, the code block inside the `if` statement will be skipped, and the rest of the code block will be executed.

```
Here’s what happens when you click the button:

1. The `onSubmit` event handler executes.
2. `setIsSent(true)` sets `isSent` to `true` and queues a new render.
3. React re-renders the component according to the new `isSent` value.
    - When React re-renders the UI, it means that the components are being refreshed, and any changes to the data or state used by those components are reflected in the updated user interface
```

### Rendering takes a snapshot in time

**“Rendering”** means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated **using its state at the time of the render.**

Unlike a photograph or a movie frame, the UI “snapshot” you return is _interactive_. It includes logic like event handlers that specify what happens in response to inputs.

React updates the screen to match this snapshot and connects the event handlers. As a result, pressing a button will trigger the click handler from your JSX.

When React re-renders a component:

1. React calls your function again.
2. Your function returns a new JSX snapshot.
3. React then updates the screen to match the snapshot you’ve returned.

Here’s a little experiment to show you how this works. In this example, you might expect that clicking the “+3” button would increment the counter three times because it calls setNumber(number + 1) three times.

```JavaScript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

Notice that `number` only increments once per click!

**Setting state only changes it for the next render**. During the first render, `number` was `0`. This is why, in that render’s `onClick` handler, the value of `number` is still `0` even after `setNumber(number + 1)` was called:

```JavaScript
<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>
```

Here is what this button’s click handler tells React to do:

1. `setNumber(number + 1):` `number` is `0` so `setNumber(0 + 1)`.

- React prepares to change `number` to `1` on the next render.

2. . `setNumber(number + 1):` `number` is `0` so `setNumber(0 + 1)`.

- React prepares to change `number` to `1` on the next render.

3. `setNumber(number + 1):` `number` is `0` so `setNumber(0 + 1)`.

- React prepares to change `number` to `1` on the next render.

Even though you called `setNumber(number + 1)` three times, in _this render’s_ event handler `number` is always `0`, so you set the state to `1` three times. This is why, after your event handler finishes, React re-renders the component with `number` equal to `1` rather than `3`.

You can also visualize this by mentally substituting state variables with their values in your code. Since the `number` state variable is `0` for _this render_, its event handler looks like this:

```JavaScript
<button onClick={() => {
  setNumber(0 + 1);
  setNumber(0 + 1);
  setNumber(0 + 1);
}}>+3</button>
```

For the next render, number is 1, so that render’s click handler looks like this:

```JavaScript
<button onClick={() => {
  setNumber(1 + 1);
  setNumber(1 + 1);
  setNumber(1 + 1);
}}>+3</button>
```

This is why clicking the button again will set the counter to 2, then to 3 on the next click, and so on.

### State over time

```JavaScript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number);
      }}>+5</button>
    </>
  )
}
```

If you use the substitution method from before, you can guess that the alert shows “0”:

```JavaScript
setNumber(0 + 5);
alert(0);
```

But what if you put a timer on the alert, so it only fires _after_ the component re-rendered? Would it say “0” or “5”?

```JavaScript
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}
```

It still alerts `0`. If you use the substitution method, you can see the “snapshot” of the state passed to the alert.

```JavaScript
setNumber(0 + 5);
setTimeout(() => {
  alert(0);
}, 3000);
```

The state stored in React may have changed by the time the alert runs, but it was scheduled using a snapshot of the state at the time the user interacted with it!

**A state variable’s value never changes within a render**, even if its event handler’s code is asynchronous. Inside that _render’s_ `onClick`, the value of `number` continues to be `0` even after `setNumber(number + 5)` was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.

Here is an example of how that makes your event handlers less prone to timing mistakes. Below is a form that sends a message with a five-second delay. Imagine this scenario:

1. You press the “Send” button, sending “Hello” to Alice.
2. Before the five-second delay ends, you change the value of the “To” field to “Bob”.

What do you expect the `alert` to display? Would it display, “You said Hello to Alice”? Or would it display, “You said Hello to Bob”?

```JavaScript
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

**React keeps the state values “fixed” within one render’s event handlers**. You don’t need to worry whether the state has changed while the code is running.

#### Recap

- Setting state requests a new render.
- React stores state outside of your component, as if on a shelf.
- When you call `useState`, React gives you a snapshot of the state for _that render_.
- Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
- Every render (and functions inside it) will always “see” the snapshot of the state that React gave to _that_ render.
- You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
- Event handlers created in the past have the state values from the render in which they were created.

---

### Conditional Rendering

Conditional rendering in React allows you to selectively render components or elements based on certain conditions. It enables dynamic rendering of different content based on the state of the application or specific user interactions.

Here's an example of conditional rendering in React:

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

function App() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
```

In this example, the `Greeting` component receives a prop `isLoggedIn` which determines what message to display. If `isLoggedIn` is `true`, it renders "Welcome back!", otherwise it renders "Please log in.". The condition in the `Greeting` component determines which JSX element is returned based on the value of `isLoggedIn`.

Conditional rendering is a powerful technique in React that allows you to show different content or components based on specific conditions, making your UI more dynamic and responsive.
