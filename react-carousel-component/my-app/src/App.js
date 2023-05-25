import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './App.css';
import Image from './Image';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const img = [
  { id: 1, url: '/images/001.png', alt: 'Bulbasaur' },
  { id: 4, url: '/images/004.png', alt: 'Charmander' },
  { id: 7, url: '/images/007.png', alt: 'Squirtle' },
  { id: 25, url: '/images/025.png', alt: 'Pikachu' },
  { id: 39, url: '/images/039.png', alt: 'Jigglypuff' },
];

function App() {
  const [current, setCurrent] = useState(0);
  function handleClickPrev() {
    setCurrent((current - 1 + img.length) % img.length);
  }
  function handleClickNext() {
    setCurrent((current + 1) % img.length);
  }
  function handleClick(index) {
    setCurrent(index);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-full">
          <div className="carousel-wrap">
            <div className="l-arrow-wrap">
              <FaChevronLeft onClick={handleClickPrev} />
            </div>
            <div className="mid-col-wrap">
              <div className="img-wrap">
                <Image img={img} />
              </div>
              <div className="navBar">
                <ProgressBar
                  img={img}
                  count={img.length}
                  onClick={handleClick}
                  current={current}
                />
              </div>
            </div>
            <div className="r-arrow-wrap">
              <FaChevronRight onClick={handleClickNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
