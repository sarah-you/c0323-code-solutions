import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by useState: ', isClicked);
  return (
    <button
      style={
        isClicked ? { backgroundColor: color } : { backgroundColor: 'white' }
      }
      onClick={() => {
        alert(`${text} is Clicked!`);
        console.log('value of isClicked before calling setter: ', isClicked);
        setIsClicked(!isClicked);
        console.log('value of isClicked after calling setter: ', isClicked);
      }}>
      {text}
    </button>
  );
}
