# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?

  - data you pass to JSX tag to customize its behavior/content

- How do you declare and access props in a component?

  - declare as function parameters in the components definition and access using dot notation or destructing

- How do you pass props to a component?

  - in the JSX component set it as attribute and state the data/values needed to access it within the component

- How do you write JavaScript expressions in JSX?
  - {} curly braces;

Here are some further questions that should help solidify the syntax and technique for passing props. Answers are at the bottom of the exercise.

1. How many parameters does the following function have?

- 1

```JavaScript
function FooBar(props) {
  const { name, rank, serialNo } = props;
  // ...
}
```

2. Describe the parameter(s).

- object with fields: name, rank, serialNo

3. How many parameters does the following function have? //

- 1

```JavaScript
function FooBar({ name, rank, serialNo }) {
  // ...
}
```

4. Describe the parameter(s).

- 1 object that has 3 properties

5. What is the difference between the above two functions?

- top one is destructured which allows each parts of the props to stand on its ownand be accessed, whereas the bottom function is still contained inside 1 object

6. How do you call the `FooBar` function?

- FooBar();

7. What is another way to call the `FooBar` function?

- put it in JSX and call it using JSX

8. How do you call the `FooBar` function using JSX?

- inside {}

9. In React, what would we call `FooBar` (assuming it returns JSX)?

- a React component

10. In React, what would we call `name`, `rank`, and `serialNo`?

- props

11. How can you tell what properties a component expects?

- you look at the parameter

12. Declare a component, `Baz`, that has 2 properties, `foo` and `bar`.
13. Call `Baz` using JSX.

## Notes

Passing Props to a Component
https://react.dev/learn/passing-props-to-a-component

React components use props to communicate with each other.

Every parent component can pass some information to its child components by giving them props

Props are the information that you pass to a JSX tag.

For example: `<img>`

props: `className`, `src`, `alt`, `width`, and `height`

```JavaScript
// Parent component
function ParentComponent() {
  const name = "John Doe";
  const age = 25;

  return (
    <ChildComponent name={name} age={age} />
  );
}

// Child component
function ChildComponent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

In this example, the `ParentComponent` renders the `ChildComponent` and passes two props: `name` and `age`. The `ChildComponent` receives these `props` as the props object and uses them to display the name and age dynamically within its JSX markup.

### Pass Props to the child component

First, pass some props to Avatar. For example, let’s pass two props: `person` (an object), and `size` (a number):

```JavaScript
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

### Read Props inside the child component

You can read these props by listing their names `person, size` separated by the commas inside `({` and `})` directly after `function Avatar`. This lets you use them inside the `Avatar` code, like you would with a variable.

```JavaScript
function Avatar({ person, size }) {
  // person and size are available here
}
```

Add some logic to Avatar that uses the person and size props for rendering, and you’re done.

Now you can configure Avatar to render in many different ways with different props.
