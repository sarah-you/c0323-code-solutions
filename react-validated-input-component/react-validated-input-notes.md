# react-validated-input-notes

## Notes

FormControlled

```JavaScript
import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`username: ${username}, password: ${password}`);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit} novalidate>
        <label>
          Username{''}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

list of commonly used "on" attributes in React for event handling:

- onClick: Triggered when a mouse click event occurs.
- onSubmit: Triggered when a form is submitted.
- onChange: Triggered when the value of an input element changes.
- onMouseOver: Triggered when the mouse cursor moves over an element.
- onMouseOut: Triggered when the mouse cursor moves out of an element.
- onKeyDown: Triggered when a keyboard key is pressed down.
- onKeyUp: Triggered when a keyboard key is released.
- onFocus: Triggered when an element gains focus.
- onBlur: Triggered when an element loses focus.
- onScroll: Triggered when scrolling occurs on an element.

Regular expresssions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
