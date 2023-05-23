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
  return (
    <div>
      <div>{items[0]}</div>
      <div>
        <CustomButton
          text="Prev"
          isActive={current === 0}
          onShow={() => setCurrent(0)}
        />
        <Indicators count={items.length} onSelect={() => setCurrent(0)} />
        <CustomButton
          text="Next"
          isActive={current === 1}
          onShow={() => setCurrent(1)}
        />
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
function CustomButton({ text, onShow, color }) {
  return (
    <button onClick={onShow} style={{ backgroundColor: (color = 'white') }}>
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
function Indicators({ count, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CustomButton key={i} text={i} />);
  }
  return <div onClick={onSelect}>{buttons}</div>;
}
