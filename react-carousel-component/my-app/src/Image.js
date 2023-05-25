import { useState } from 'react';

export default function Image({ img }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    index === activeIndex ? setActiveIndex() : setActiveIndex(index);
  }

  const imgList = img.map((img) => (
    <img key={img.id} src={img.url} alt={img.alt} onClick={handleClick}></img>
  ));
  return <div className="imgs">{imgList}</div>;
}
