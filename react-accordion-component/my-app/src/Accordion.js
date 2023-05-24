import { useState } from 'react';

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

function RenderTopics({ topics, onClick, currentIndex }) {
  const topicsList = topics.map((topics, index) => (
    <div key={index} className="topics-wrap">
      <h1 onClick={() => onClick(index)}>{topics.title}</h1>
      {currentIndex === index && <p>{topics.text}</p>}
    </div>
  ));
  return <div>{topicsList}</div>;
}
