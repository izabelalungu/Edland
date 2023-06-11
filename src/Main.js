import React from 'react';
import './Main.css';
import { useState, useEffect } from 'react';
// import Gallery from './components/Gallery';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from "./images/5.jpg";
import slide2 from "./images/8.jpg";
import slide3 from "./images/23.jpg";
import designfull from "./images/design_site_full.png";
import circleimg from "./images/poza_cerc_fullb.png";

import image1 from './images/Galerie/CABIN_S02/CABIN S02/1.jpg';
import image2 from './images/Galerie/CABIN_S02/CABIN S02/2.jpg';
import image3 from './images/Galerie/CABIN_A01/CABIN A01/1.png';
import image4 from './images/Galerie/CABIN_A01/CABIN A01/2.png';
import image5 from './images/Galerie/CABIN_A02/CABIN A02/1.jpg';
import image6 from './images/Galerie/CABIN_A02/CABIN A02/2.jpg';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      images: [image3,image4],
      description: 'This is the description for Project 1.'
    },
    {
      id: 2,
      title: 'Project 2',
      images: [image5,image6],
      description: 'This is the description for Project 2.'
    },
    {
      id: 3,
      title: 'Project 3',
      images: [image1, image2],
      description: 'This is the description for Project 3.'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <h3>{project.title}</h3>
            <Carousel>
              {project.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const AboutUs = () => {
  return (
    <div className="container-panels">
      <div className="justify-content-evenly align-items-center display-md-devices-aboutus">
        <div className="container-box">First</div>
        <div className="container-box-middle">Middle</div>
        <div className="container-box">Third</div>
      </div>
    </div>
  );
};

function Main() {
  return (
    <main className="main">
      <SlideshowBackground />
      <AboutUs/>

      <div className="imagine_mare_container">
        <img src={designfull} alt="About us" className="imagine_mare_style" />
      </div>
      <div className="text_under_bigimg_container">
        <p>aici vine un text despre servicii si despre about us</p>
      </div>

      <div className="prices_panel_container">
        <div className="row justify-content-center align-items-center rectangle">
          <div className="col-1 dotted-line"></div>
        </div>
      </div>

      <div class="bbl_img_container">
        <div class="imageContainer">
          <img src={circleimg} alt=""/>
        </div> 
        <div class="text_leftbbl">
          <p></p>
        </div>
      </div>

      <Gallery/>
    </main>
  );
}

export default Main;
