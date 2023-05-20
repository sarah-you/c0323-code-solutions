import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      style={
        isClicked ? { backgroundColor: color } : { backgroundColor: 'white' }
      }
      onClick={() => {
        alert(`${text} is Clicked!`);
        setIsClicked(!isClicked);
      }}>
      {text}
    </button>
  );
}
