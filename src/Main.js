import React from 'react';
import './Main.css';
import { useState, useEffect } from 'react';
import slide1 from "./images/5.jpg";
import slide2 from "./images/8.jpg";
import slide3 from "./images/23.jpg";

const SlideshowBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div id="slideshow" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item${activeIndex === 0 ? ' active' : ''}`}>
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption">
            <h3>Creaza-ti casa visurilor tale</h3>
            <p>Descopera lumea caselor modulare personalizabile</p>
          </div>
        </div>
        <div className={`carousel-item${activeIndex === 1 ? ' active' : ''}`}>
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption">
            <h3>Noi inovam, nu doar construim</h3>
            <p>Case modulare durabile si eficiente energetic</p>
          </div>
        </div>
        <div className={`carousel-item${activeIndex === 2 ? ' active' : ''}`}>
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption">
            <h3>Designul intalneste flexibilitatea</h3>
            <p> Case modulare moderne, adaptabile oricarei nevoi</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slideshow"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slideshow"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

function Main() {
  return (
    <main className="main">
      <SlideshowBackground />
    </main>
  );
}

export default Main;
