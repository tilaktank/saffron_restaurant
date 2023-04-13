import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ImageCarousel.css";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";


function ImageCarousel() {
  return (
    <Carousel className="imagecenter my-5">
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bolder">Pani puri</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bolder">South Indian</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={carousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bolder">Italian</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
