# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

  - to pass data deeply without using props

- What values can be stored in context?

  - any JS datatype

- How do you create context and make it available to the components?

  - `createContext()` and wrap component with `Context.Provider`

- ## How do you access the context values?

- When would you use context? (in addition to the best answer: "rarely")

## Notes

### UseContext

https://react.dev/reference/react/useContext

### Passing Data Deeply with Context

https://react.dev/learn/passing-data-deeply-with-context

Context lets a parent component provide data to the entire tree below it.

This would require some way for a child to “ask” for data from somewhere above in the tree.

You can’t do it with props alone. This is where context comes into play. You will do it in three steps:

1. Create a context. (You can call it `LevelContext`, since it’s for the heading level.)
2. Use that context from the component that needs the data. (`Heading` will use `LevelContext`.)
3. Provide that context from the component that specifies the data. (`Section` will provide `LevelContext`.)

Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

#### Create the context

Export it from a file so your components can use it

```JavaScript
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

The only argument to `createContext` is the _default_ value. Here, `1` refers to the biggest heading level, but you could pass any kind of value (even an object).

#### Use the context

Import the `useContext` Hook from React and your context:

```JavaScript
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';
```

Remove the `level` prop and read the value from the context that's imported, `LevelContext`:

```JavaScript
// Before: the Heading component reads level from props
export default function Heading({ level, children }) {
  // ...
}

// After
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}
```

`useContext` is a Hook. Just like `useState` and `useReducer`, you can only call a Hook immediately inside a React component (not inside loops or conditions).

**`useContext` tells React that the `Heading` component wants to read the LevelContext**.

Now that the `Heading` component doesn’t have a `level` prop, you don’t need to pass the level prop to `Heading` in your JSX like this anymore:

```JavaScript
// updated jsx so that Section receives it instead
<Section level={4}>
  <Heading>Sub-sub-heading</Heading>
  <Heading>Sub-sub-heading</Heading>
  <Heading>Sub-sub-heading</Heading>
</Section>
```

As of now, all the headings have the same size because **even though you’re using the context, you have not provided it yet**. React doesn’t know where to get it!

If you don’t provide the context, React will use the default value you’ve specified in the previous step.
In this example, you specified `1` as the argument to `createContext`, so `useContext(LevelContext)` returns `1`, setting all those headings to `<h1>`. Let’s fix this problem by having each `Section` provide its own context.

#### Provide the context

The `Section` component currently renders its children. Wrap them with a context provider to provide the `LevelContext` to them:

```JavaScript
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}> // here
        {children}
      </LevelContext.Provider>              // here
    </section>
  );
}

```

This tells React: “if any component inside this `<Section>` asks for `LevelContext`, give them this `level`.”

The component will use the value of the nearest `<LevelContext.Provider> `in the UI tree above it.

(Refer to Example at the bottom of this section, with 4 files https://react.dev/learn/passing-data-deeply-with-context#step-3-provide-the-context)

1. You pass a `level` prop to the `<Section>`.
2. `Section` wraps its children into `<LevelContext.Provider value={level}>`.
3. `Heading` asks the closest value of `LevelContext` above with `useContext(LevelContext)`.

#### Using and providing context from the same component

https://react.dev/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component

#### Context passes through intermediate components

https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components

---

Certainly! Here's an example code snippet that demonstrates how to create a context, provide its value using `Context.Provider`, and access the context value using the `useContext` hook:

```jsx
import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Provide the context value using Context.Provider
const App = () => {
  const contextValue = 'Hello, World';

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Step 3: Access the context value using useContext
const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
};

export default App;
```

In this example, we create a context using `createContext()` and assign it to `MyContext`. Inside the `App` component, we provide the context value using `MyContext.Provider` and wrap the `ChildComponent` component within it, passing the value as a prop.

In the `ChildComponent`, we use the `useContext` hook to access the current value of `MyContext`. The value is then rendered in a `div` element.

Note that the `useContext` hook is used within a functional component to access the context value.
