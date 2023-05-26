# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

  - during the initial render

- What is a React Effect?

  - a side effect caused by rendering

- When should you use an Effect and when should you not use an Effect?

  - when you need to synchronize your components with an external system (ex. a video from an outside source)

- When do Effects run?

  - after the page is rendered

- What function is used to declare an Effect?
  - useEffect arrow function

```JavaScript
  useEffect(() => {
    //code block
  })
```

- What are Effect dependencies and how do you declare them?

  - code inside of the Effect function code block that depends on the prop to decide what to do
  - you can declare them by adding the prop in the dependency array at the end of the function

- Why would you want to clean up from an Effect?

  - to disconnect from server when component unmounts because by default it won't

- How do you clean up from an Effect?

  - add a return clean up function inside the Effect code block

- When does the cleanup function run?
  - each time before Effect runs again and one final time when component is unmounted (removed)

## Notes

### Render and Commit

https://react.dev/learn/render-and-commit

Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:

1. Triggering a render (delivering the guest’s order to the kitchen)
2. Rendering the component (preparing the order in the kitchen)
3. Committing to the DOM (placing the order on the table)

#### Step 1: Trigger a render

There are two reasons for a component to render:

1. It’s the component’s initial render.
2. The component’s (or one of its ancestors’) state has been updated.

#### Initial render

When your app starts, you need to trigger the initial render.

In React, creating a root element is necessary as it provides a target DOM node where the React component hierarchy can be rendered and attached, serving as the entry point for the application's UI.

- it allows you to specify the exact location in the HTML document where the React components should be rendered and updated.
- It serves as a reference point for React to interact with the DOM.

it’s done by calling `createRoot` with the target DOM node, and then calling its `render` method with your component:

```JavaScript
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```

#### Re-renders when state updates

Once the component has been initially rendered, you can trigger further renders by updating its state with the `set` function. Updating your component’s state automatically queues a render.

(You can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)

### Step 2: React renders your components

After you trigger a render, React calls your components to figure out what to display on screen.

**“Rendering” is React calling your components.**

- **On initial render**, React will call the root component.
- **For subsequent renders**, React will call the function component whose state update triggered the render.

This process is recursive: if the updated component returns some other component, React will render _that_ component next, and if that component also returns something, it will render _that_ component next, and so on.

The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

- **During the initial render**, React will create the DOM nodes for `<section>`, `<h1>`, and three `<img>` tags.
- **During a re-render**, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.

#### NOTE

Rendering must always be a **pure calculation**:

- Same inputs, same output. Given the same inputs, a component should always return the same JSX. (When someone orders a salad with tomatoes, they should not receive a salad with onions!)
- It minds its own business. It should not change any objects or variables that existed before rendering. (One order should not change anyone else’s order.)

This ensures predictable and consistent rendering behavior, facilitating easier debugging and optimization. Otherwise, you can encounter confusing bugs and unpredictable behavior as your codebase grows in complexity.

When developing in “Strict Mode”, React calls each component’s function twice, which can help surface mistakes caused by impure functions.

### Step 3: React commits changes to the DOM

After rendering (calling) your components, React will modify the DOM.

- For the initial render, React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
- For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

**React only changes the DOM nodes if there’s a difference between renders.**
For example, here is a component that re-renders with different props passed from its parent every second.
Notice how you can add some text into the `<input>`, updating its value, but the text doesn’t disappear when the component re-renders:

```JavaScript
// clock.js
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

This works because during this last step, React only updates the content of `<h1>` with the new `time`. It sees that the `<input>` appears in the JSX in the same place as last time, so React doesn’t touch the `<input>`—or its `value`!

After rendering is done and React updated the DOM, the browser will repaint the screen

---

### Synchronizing with Effects

https://react.dev/learn/synchronizing-with-effects

Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen.

Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

two types of logic inside React components:

- **Rendering code** (introduced in Describing the UI) lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen. Rendering code must be pure. Like a math formula, it should only calculate the result, but not do anything else.

- **Event handlers** (introduced in Adding Interactivity) are nested functions inside your components that do things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event handlers contain “side effects” (they change the program’s state) caused by a specific user action (for example, a button click or typing).

pure calculation (calculate like a math formula) vs. side effect (change the program's state)

Sometimes this isn’t enough. Consider a ChatRoom component that must connect to the chat server whenever it’s visible on the screen. Connecting to a server is not a pure calculation (it’s a side effect) so it can’t happen during rendering. However, there is no single particular event like a click that causes ChatRoom to be displayed.

**Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.** Sending a message in the chat is an _event_ because it is directly caused by the user clicking a specific button(Send).

However, setting up a server connection is an _Effect_ because it should happen no matter which interaction caused the component to appear. Effects run at the end of a **commit** after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).

### How to write an Effect

To write an Effect, follow these three steps:

1. **Declare an Effect.** By default, your Effect will run after every render.
2. **Specify the Effect dependencies.** Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying _dependencies_.
3. **Add cleanup if needed.** Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a _cleanup function_.

### Step 1: Declare an Effect

To declare an Effect in your component, import the `useEffect` **Hook** from React:

```JavaScript
import { useEffect } from 'react';
```

Then, call it at the top level of your component and put some code inside your Effect:

```JavaScript
function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

Every time your component renders, React will update the screen and _then_ run the code inside `useEffect`.

In other words, **`useEffect` “delays” a piece of code from running until that render is reflected on the screen.**

- need to synchronize the value of a prop that tells what the component should do, with call methods on the DOM element

In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

In order to work around it, wrap the side effect with useEffect to move it out of the rendering calculation

By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.

```JavaScript
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

```

In this example, the “external system” you synchronized to React state was the browser media API. You can use a similar approach to wrap legacy non-React code (like jQuery plugins) into declarative React components.

#### NOTE

By default, Effects run after every render. This is why code like this will produce an infinite loop:

```JavaScript
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);
});
```

Effects run as a result of rendering. Setting state triggers rendering. Setting state immediately in an Effect is like plugging a power outlet into itself. The Effect runs, it sets the state, which causes a re-render, which causes the Effect to run, it sets the state again, this causes another re-render, and so on.

Effects should usually synchronize your components with an external system. If there’s no external system and you only want to adjust some state based on other state, you might not need an Effect.

### Step 2: Specify the Effect dependencies

By default, Effects run after every render. Often, this is not what you want:

- Sometimes, it’s slow. Synchronizing with an external system is not always instant, so you might want to skip doing it unless it’s necessary. For example, you don’t want to reconnect to the chat server on every keystroke.
- Sometimes, it’s wrong. For example, you don’t want to trigger a component fade-in animation on every keystroke. The animation should only play once when the component appears for the first time.

You can tell React to skip unnecessarily re-running the Effect by specifying an array of _dependencies_ as the second argument to the `useEffect` call.

```JavaScript
 useEffect(() => {
    if (isPlaying) { // It's used here...
      // ...
    } else {
      // ...
    }
  }, [isPlaying]); // ...so it must be declared here!
```

Specifying `[isPlaying]` as the dependency array tells React that it should skip re-running your Effect if `isPlaying` is the same as it was during the previous render.

If the code **inside** the Effect does not use any props or state, so your dependency array is `[]` (empty). This tells React to only run this code when the component “mounts”, i.e. appears on the screen for the first time.

The dependency array can contain multiple dependencies. React will only skip re-running the Effect if _all_ of the dependencies you specify have exactly the same values as they had during the previous render.

React compares the dependency values using the `Object.i`s comparison. See the **useEffect reference** for details.

**Notice that you can’t “choose” your dependencies.** You will get a lint error if the dependencies you specified don’t match what React expects based on the code inside your Effect. This helps catch many bugs in your code. If you don’t want some code to re-run, _edit the Effect code itself to not “need” that dependency._

#### NOTE

The behaviors without the dependency array and with an empty [] dependency array are different:

```JavaScript
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

### Step 3: Add cleanup if needed

Cleanup code is necessary because component can mount and then unmount when user navigates elsewhere on the page, but the connection to server was never destroyed -- this would result in connection getting piled up and cause bugs.

To help you spot them quickly, in development React remounts every component once immediately after its initial mount.

To fix the issue, return a _cleanup_ function from your Effect:

```JavaScript
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    //return cleanup
    return () => {
      connection.disconnect();
    };
    //
  }, []);
```

React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed).

When you implement the cleanup well, there should be no user-visible difference between running the Effect once vs running it, cleaning it up, and running it again.

NOTE: Remounting components only happens in development (mode) to help you find Effects that need cleanup

#### How to handle the Effect firing twice in development?

React intentionally remounts your components in development to find bugs. So how to fix my Effect so that it works after remounting?

Usually, the answer is to implement the cleanup function. The cleanup function should stop or undo whatever the Effect was doing. The rule of thumb is that the user shouldn’t be able to distinguish between the Effect running once (as in production) and a _setup → cleanup → setup_ sequence (as you’d see in development).

#### Controlling non-React widgets

https://react.dev/learn/synchronizing-with-effects#controlling-non-react-widgets

#### Subscribing to events

https://react.dev/learn/synchronizing-with-effects#subscribing-to-events

#### Triggering animations

https://react.dev/learn/synchronizing-with-effects#triggering-animations

#### Fetching data

https://react.dev/learn/synchronizing-with-effects#fetching-data

#### Sending analytics

https://react.dev/learn/synchronizing-with-effects#sending-analytics

#### Not an Effect: Initializing the application

https://react.dev/learn/synchronizing-with-effects#not-an-effect-initializing-the-application

#### Not an Effect: Buying a product

https://react.dev/learn/synchronizing-with-effects#not-an-effect-buying-a-product

---

### useEffect

https://react.dev/reference/react/useEffect

```JavaScript
useEffect(setup, dependencies?)
```

In practice:

```JavaScript
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
// the code block below useEffect is the setup parameter
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
  //serverUrl, roomId are the dependencies parameter
}
```
