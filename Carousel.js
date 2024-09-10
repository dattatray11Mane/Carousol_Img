
import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button prev">❮</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={goToNext} className="carousel-button next">❯</button>
    </div>
  );
};

export default Carousel;
