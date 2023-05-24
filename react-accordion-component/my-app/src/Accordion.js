import { useState } from 'react';

/**
 * Accordion updates the index of data that's passed as a prop
 * @param topics - data as array
 * @return subcomponent that renders the data
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
 * RenderTopics renders the data that is set as the active index by Accordion (parent)
 * @param topics - data passed from Accordion (parent) as prop
 * @param onClick - Accordion's function that sets index
 * @param currentIndex - selected index that needs to get rendered
 * @return jsx element of selected index
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

//Accordion()
// Accordion manages state of active index of the topics using activeIndex
// the handleClick function updates the activeIndex by setting setActiveIndex to the clicked index or removing it if it is already matching index
// the prop topics array is passed from parent (App()) to Accordion
// Accordion returns the RenderTopics component, passing to it topics, onClick, and currentIndex

//RenderTopics()
// RenderTopics receives list of topics , currentIndex, and click handler function as props (from Accordion -- parent) and renders the topics to be displayed
// topics uses the map method to transform the topics array
// onClick is passed from Accordion(parent) to handle when the user clicks on the title
// currentIndex to determine which content should be displayed by comparing the currentIndex with the index that was passed
// RenderTopics renders and returns jsx elements of the selected index
