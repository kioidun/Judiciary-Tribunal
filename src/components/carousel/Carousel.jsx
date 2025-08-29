import { useState, useEffect, useRef } from "react";
import './carousel.css';

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOut = useRef(null);

  useEffect(() => {
    if (autoPlay) {
      timeOut.current = setTimeout(() => {
        slideRight();
      }, 2500);
    }
    return () => clearTimeout(timeOut.current); // Cleanup the timeout on unmount or change
  }, [autoPlay, current]);

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut.current);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${index === current ? 'carousel_card-active' : ''}`}
          >
            <img className="card_image" src={image.image} alt="carousel image" />
            <div className="card_overlay">
              {/* <h2 className="card_title">{image.title}</h2> */}
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${index === current ? 'pagination_dot-active' : ''}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
