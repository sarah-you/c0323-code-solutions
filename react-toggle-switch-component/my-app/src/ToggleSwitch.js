import { useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div onClick={handleClick}>
      {isClicked ? (
        <FaToggleOn size="10rem" style={{ color: '#6aa74f' }} />
      ) : (
        <FaToggleOff size="10rem" style={{ color: '#e2e2e2' }} />
      )}
    </div>
  );
}
