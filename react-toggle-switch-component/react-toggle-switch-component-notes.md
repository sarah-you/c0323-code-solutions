# react-toggle-switch-component-notes

## Notes

### component.js

```JavaScript
import { useState } from 'react';

export default function HotButton({ text }) {
  const [isClicked, setIsClicked] = useState(0);

  function handleClick() {
    setIsClicked(isClicked + 1);
  }

  let btnClassName;
  if (isClicked <= 3) {
    btnClassName = 'btn-color-three';
  } else if (isClicked <= 6) {
    btnClassName = 'btn-color-six';
  } else if (isClicked <= 9) {
    btnClassName = 'btn-color-nine';
  } else if (isClicked <= 12) {
    btnClassName = 'btn-color-twelve';
  } else if (isClicked <= 15) {
    btnClassName = 'btn-color-fifteen';
  } else if (isClicked <= 18) {
    btnClassName = 'btn-color-eighteen';
  } else {
    btnClassName = 'btn-color-max';
    text = 'Max Limit Reached';
  }

  return (
    <button onClick={handleClick} className={btnClassName}>
      {text}
    </button>
  );
}
```

### App.js

```JavaScript
import HotButton from './HotButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="button-wrap">
        <HotButton text="Hot Button" />
      </div>
    </div>
  );
}

export default App;
```

ToggleButton Icon

```JavaScript
/// imports fontAwesome from react icon library
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
```

#### On

```JavaScript
<FaToggleOn size="10rem" style={{ color: '#6aa74f' }} />
```

#### Off

```JavaScript
<FaToggleOff size="10rem" style={{ color: '#e2e2e2' }} />
```
