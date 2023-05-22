# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?

  - an action or occurence like a click that is detected and can be responded to

- What is an "event handler"? Which component declares the handler?

  - an event handler is a function responsible for handling a specific event and declared inside the component where the event occurs

- How do you pass an event handler to a React component?

  - assign function to the event handler prop (usually starts with "on")

- What is the naming convention for event handlers?

  - "handle" before the event name to indicate it's handling a specific event + camelCase

- What is an "event handler prop"? Which component declares the prop?

  - a prop used to pass an event handler function from a parent to a child component, allowing the child component to execute something when the event occurs
  - the component that fires the event (CustomButton.js in our file)
  - handler goes to the listening (App.js in our file)

- What are some custom event handler props a component may wish to define?

  - just any common things users do with mouse/keys

- What is the naming convention for custom event handler props?
  - "on" and use of camelCase

## Notes

Responding to events https://react.dev/learn/responding-to-events

Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

React lets you add event handlers to your JSX.

a common technique for building reusable components in React: the parent component passes props and event handlers to its children. The children display the props and call the event handlers when events happen.

### Adding event handlers

first define a function and then pass it as a prop to the appropriate JSX tag

#### Example: Button Click

You can make it show a message when a user clicks by following these three steps:

1. Declare a function called `handleClick` _inside_ your `Button` component.
2. Implement the logic inside that function (use `alert` to show the message).
3. Add `onClick={handleClick}` to the `<button>` JSX. (as if it were an HTML attribute, but here you're passing it as a prop)

```JavaScript
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

You defined the `handleClick` function and then passed it as a prop to `<button>`. `handleClick` is an **event handler**

Event handler functions:

- Are usually defined _inside_ your components
- Have names that start with `handle`, followed by the name of the event
  - Ex) `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`

In React, event handler props follow a naming convention where the event name is prefixed with `"on"` and written in **camelCase**. For example, `onClick` is used for handling `click` events, `onChange` is used for handling `change` events, and so on.

When you assign a function to the `onClick` prop of a button (or any other interactive element), that function will be called when the button is clicked.

It allows you to define the behavior or actions that should occur in response to the click event.

Alternatively, you can define an event handler inline in the JSX:

```JavaScript
<button onClick={function handleClick() {
  alert('You clicked me!');
}}>
```

**OR**

```JavaScript
<button onClick={() => {
  alert('You clicked me!');
}}>
```

All of these styles are equivalent. Inline event handlers are convenient for short functions.

Functions passed to event handlers must be passed, not called. For example:

### NOTE!!!

| passing a function (correct)     | calling a function (incorrect)     |
| -------------------------------- | ---------------------------------- |
| `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |

The difference is subtle. In the first example, the handleClick function is passed as an `onClick` event handler.

This tells React to remember it and only call your function when the user clicks the button.

In the second example, the `()` at the end of `handleClick()` fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX `{` and `}` executes right away.

When you write code inline, the same pitfall presents itself in a different way:

| passing a function (correct)            | calling a function (incorrect)    |
| --------------------------------------- | --------------------------------- |
| `<button onClick={() => alert('...')}>` | `<button onClick={alert('...')}>` |

Passing inline code like this won’t fire on click—it fires every time the component renders:

```JavaScript
// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')}>
```

If you want to define your event handler inline, wrap it in an anonymous function like so:

```JavaScript
<button onClick={() => alert('You clicked me!')}>
```

Rather than executing the code inside with every render, this creates a function to be called later.

In both cases, what you want to pass is a function:

- `<button onClick={handleClick}> `passes the handleClick function.
- `<button onClick={() => alert('...')}>` passes the `() => alert('...')` function.

### Reading props in event handlers

Because event handlers are declared inside of a component, they have access to the component’s props.
Here is a button that, when clicked, shows an alert with its message prop:

```JavaScript
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}
```

This lets these two buttons show different messages.

### Passing event handlers as props

Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.

To do this, pass a prop the component receives from its parent as the event handler like so:

```JavaScript
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}
// UploadButton component is using inline event handler in which the function is wrapped in anon function as a prop
function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
```

### Event propagation

Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

#### NOTE

All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to.

### Stopping propagation

Event handlers receive an event object as their only argument. By convention, it’s usually called `e`, which stands for “event”. You can use this object to read information about the event.

That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call `e.stopPropagation()` like this `Button` component does:

```JavaScript
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```

When you click on a button:

1. React calls the `onClick` handler passed to `<button>`.
2. That handler, defined in `Button`, does the following:

- Calls `e.stopPropagation()`, preventing the event from bubbling further.
- Calls the `onClick` function, which is a prop passed from the `Toolbar` component.

3. That function, defined in the `Toolbar` component, displays the button’s own alert.
4. Since the propagation was stopped, the parent `<div>`’s `onClick` handler does not run.

As a result of `e.stopPropagation()`, clicking on the buttons now only shows a single alert (from the `<button>`) rather than the two of them (from the `<button>` and the parent toolbar `<div>`). Clicking a button is not the same thing as clicking the surrounding toolbar, so stopping the propagation makes sense for this UI.

### Passing handlers as alternative to propagation

Notice how this click handler runs a line of code and then calls the onClick prop passed by the parent:

```JavaScript
function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}
```

You could add more code to this handler before calling the parent `onClick` event handler, too. This pattern provides an _alternative_ to propagation. It lets the child component handle the event, while also letting the parent component specify some additional behavior. Unlike propagation, it’s not automatic. But the benefit of this pattern is that you can clearly follow the whole chain of code that executes as a result of some event.

If you rely on propagation and it’s difficult to trace which handlers execute and why, try this approach instead.

### Preventing default behavior

Some browser events have default behavior associated with them.

For example, a `<form>` submit event, which happens when a button inside of it is clicked, will reload the whole page by default

You can call `e.preventDefault()` on the event object to stop this from happening

#### NOTE

Don’t confuse `e.stopPropagation()` and `e.preventDefault()`. They are both useful, but are unrelated:

- `e.stopPropagation()` stops the event handlers attached to the tags above from firing
- `e.preventDefault()` prevents the default browser behavior for the few events that have it
