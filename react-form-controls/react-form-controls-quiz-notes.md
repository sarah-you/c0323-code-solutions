# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?

  - controlled is handled by state, uncontrolled is handled by browser

- What are some advantages of using uncontrolled components?

  - simpler

- What are some advantages of using controlled components?

  - to customize/modify forms, error handling

- Which style do you prefer?
  -depends on what form I'm working on

- What two props must you pass to an input for it to be "controlled"?

  - onChange, value

- What are some popular npm packages for creating forms in React?
  - React Hook, Formik, React Final Form

## Notes

In React, there are two styles of managing form input fields: **"controlled"** and **"uncontrolled"**.

Note that if an app uses a lot of forms or has complex forms, it is often more convenient to use an npm package designed specifically for building forms.

The 3 most popular packages are:

- React Hook Form https://react-hook-form.com/
  - React Hook Form is lightweight, performant, and easy to use, but it requires a version of React that supports hooks (v16.8 or higher)
  - Since React hooks are fairly ubiquitous at this point, React Hook Form is an excellent choice
- Formik https://formik.org/
  - Formik handles complex forms well but is large and complex to use
- React Final Form https://final-form.org/react

The article The Best React Form Library To Use has a good overview of each of the packages
https://frontend-digest.com/the-best-react-form-library-to-use-in-2020-11e93c267e4

---

`<select>` https://react.dev/reference/react-dom/components/select
`<textarea>` https://react.dev/reference/react-dom/components/textarea

### `<input>`

built-in broswer component that lets you render different kinds of form inputs

```JavaScript
<input />
```

check React documentation for common props list for `<input>`
https://react.dev/reference/react-dom/components/input

#### Controlled Components:

- The value of the input is controlled by React state.
- You explicitly set and update the input value through state and event handlers, providing a predictable and controlled way to manage the input.

Ex) A form where the input value is controlled by React state, allowing validation and error handling before submitting the form.

#### Uncontrolled Components:

- The value of the input is managed by the browser's DOM.
- You rely on the browser to handle and store the input value, accessing it through DOM querying or refs, which requires less code but offers less control and predictability.

Ex) A search bar where the input value is directly accessed from the DOM, without the need for additional state management, and the search is triggered by clicking a button or hitting the Enter key.

In summary, controlled components give you more control over the input value through React state, while uncontrolled components rely on the browser's default behavior for handling input values. Controlled components provide predictability and are suitable for scenarios where you need to perform specific actions based on the input value, while uncontrolled components offer simplicity and are useful in cases where you don't need fine-grained control over the input value.

#### NOTE

- Checkboxes need checked (or defaultChecked), not value (or defaultValue).
- If a text input receives a string value prop, it will be treated as controlled.
- If a checkbox or a radio button receives a boolean checked prop, it will be treated as controlled.
- An input can’t be both controlled and uncontrolled at the same time.
- An input cannot switch between being controlled or uncontrolled over its lifetime.
- Every controlled input needs an onChange event handler that synchronously updates its backing value.

#### Displaying inputs of different types

To display an input, render an `<input>` component. By default, it will be a text input.

You can pass `type="checkbox"` for a checkbox, `type="radio"` for a radio button, or one of the other input types.

```JavaScript
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

#### Providing a label for an input

Typically, you will place every `<input>` inside a `<label>` tag. This tells the browser that this label is associated with that input. When the user clicks the label, the browser will automatically focus the input. It’s also essential for accessibility: a screen reader will announce the label caption when the user focuses the associated input.

If you can’t nest `<input>` into a `<label>`, associate them by passing the same ID to `<input id>` and `<label htmlFor>`. To avoid conflicts between multiple instances of one component, generate such an ID with `useId`.

- `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

```JavaScript
import { useId } from 'react';

export default function Form() {
  const ageInputId = useId();
  return (
    <>
      <label>
        Your first name:
        <input name="firstName" />
      </label>
      <hr />
      <label htmlFor={ageInputId}>Your age:</label>
      <input id={ageInputId} name="age" type="number" />
    </>
  );
}
```

#### NOTE

The `name` attribute in an HTML input element is like a label that identifies the input field when the form is submitted. It helps the server understand which piece of data corresponds to which input field, allowing proper handling and processing of the form data on the server side.

Give a name to every `<input>`, for example `<input name="firstName" defaultValue="Taylor" />`. The name you specified will be used as a key in the form data, for example `{ firstName: "Taylor" }`.

#### Providing an initial value for an input

You can optionally specify the initial value for any input. Pass it as the `defaultValue` string for text inputs. Checkboxes and radio buttons should specify the initial value with the `defaultChecked` boolean instead.

```JavaScript
// option 2 is set to default
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true}
          />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

#### Reading the input values when submitting a form

Add a `<form>` around your inputs with a `<button type="submit">` inside. It will call your `<form onSubmit>` event handler. By default, the browser will send the form data to the current URL and refresh the page. You can override that behavior by calling `e.preventDefault()`. Read the form data with `new FormData(e.target)`.

```JavaScript
export default function MyForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}
```

#### NOTE:

By default, any `<button>` inside a `<form>` will submit it. This can be surprising! If you have your own custom Button React component, consider returning `<button type="button">` instead of `<button>`. Then, to be explicit, use `<button type="submit">` for buttons that are supposed to submit the form.

#### Controlling an input with a state variable

An input like `<input />` is uncontrolled. Even if you pass an initial value like `<input defaultValue="Initial text" />`, your JSX only specifies the initial value. It does not control what the value should be right now.An input like `<input />` is uncontrolled. Even if you pass an initial value like `<input defaultValue="Initial text" />`, your JSX only specifies the initial value. It does not control what the value should be right now.

**To render a _controlled_ input, pass the `value` prop to it (or `checked` for checkboxes and radios**). React will force the input to always have the `value` you passed. Usually, you would do this by declaring a state variable:

```JavaScript
function Form() {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  // ...
  return (
    <input
      value={firstName} // ...force the input's value to match the state variable...
      onChange={e => setFirstName(e.target.value)} // ... and update the state variable on any edits!
    />
  );
}
```

A controlled input makes sense if you needed state anyway—for example, to re-render your UI on every edit:

```JavaScript
function Form() {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <label>
        First name:
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      {firstName !== '' && <p>Your name is {firstName}.</p>}
      ...
```

It’s also useful if you want to offer multiple ways to adjust the input state (for example, by clicking a button):

```JavaScript
function Form() {
  // ...
  const [age, setAge] = useState('');
  const ageAsNumber = Number(age);
  return (
    <>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </button>
```

The value you pass to controlled components should not be `undefined` or `null`. If you need the initial value to be empty (such as with the `firstName` field below), initialize your state variable to an empty string (`''`).

#### NOTE

If you pass `value` without `onChange`, it will be impossible to type into the input. When you control an input by passing some `value` to it, you force it to always have the value you passed. So if you pass a state variable as a `value` but forget to update that state variable synchronously during the `onChange` event handler, React will revert the input after every keystroke back to the `value` that you specified.

You need to read `e.target.checked` rather than `e.target.value` for checkboxes.
