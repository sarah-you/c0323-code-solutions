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
