import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  function handleClickPrev() {
    setCurrent((current - 1 + items.length) % items.length);
  }

  function handleClickNext() {
    setCurrent((current + 1) % items.length);
  }

  function handleClick(index) {
    setCurrent(index);
  }

  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <CustomButton text="Prev" onClick={handleClickPrev} />
        <Indicators count={items.length} onClick={handleClick} />
        <CustomButton text="Next" onClick={handleClickNext} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, onClick, backgroundColor }) {
  return (
    <button onClick={onClick} style={{ backgroundColor }}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, current, onClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === current ? 'lightblue' : undefined}
      />
    );
  }
  return <div>{buttons}</div>;
}
