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

// function handleClick() {
// console.log('value of isClicked before calling setter: ', isClicked);
//   setIsClicked(!isClicked)
// setter is updated cache to new value and tells react to re-render
// console.log('value of isClicked after calling setter: ', isClicked);
// }

// const bkgColor = isClicked ? color : 'white';
// console.log('value returned by useState: ', isClicked);
// return (
//   <button onClick={handleClick} style={{ backgroundColor : color}}>{text}</button>
// );
// }

//useState gets used only once; when it is mounted
// remainder of the time, it will get its value from the cache;
