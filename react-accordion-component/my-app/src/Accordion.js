import { useState } from 'react';

/**
 * Accordion manages state of active index of the topics using activeIndex
 * the handleClick function updates the activeIndex by setting setActiveIndex to the clicked index or removing it if it is already matching index
 * @param {}topics topics array is passed from parent (App()) to Accordion
 * @returns RenderTopics component, passing to it topics, onClick, and currentIndex
 */
export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState();
  function handleClick(index) {
    index === activeIndex ? setActiveIndex() : setActiveIndex(index);
  }
  return (
    <RenderTopics
      topics={topics}
      onClick={handleClick}
      currentIndex={activeIndex}
    />
  );
}

/**
 * RenderTopics receives list of topics , currentIndex, and click handler function as props (from Accordion -- parent) and renders the topics to be displayed
 * @param {}topics uses the map method to transform the topics array
 * @returns jsx elements to be rendered
 * @param {}onClick is passed from Accordion(parent) to handle when the user clicks on the title
 * @returns the index of the clicked topic
 * @param {}currentIndex to determine which content should be displayed by comparing the currentIndex with the index that was passed
 * @returns the text associated with the topic
 */
function RenderTopics({ topics, onClick, currentIndex }) {
  const topicsList = topics.map((topics, index) => (
    <div key={index} className="topics-wrap">
      <h1 onClick={() => onClick(index)}>{topics.title}</h1>
      {currentIndex === index && <p>{topics.text}</p>}
    </div>
  ));
  return <div>{topicsList}</div>;
}
