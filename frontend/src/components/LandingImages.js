import React from "react";
import { Carousel } from "react-bootstrap";
import SignInButton from './SignInButton';

const LandingImages = () => {
  const carCaption = (
    <>
      <h1>SuperStore</h1>
      <h3>The smart way to run your business</h3>
      <SignInButton />
    </>
  );

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://antiguavidanueva.com/wp-content/uploads/2020/08/IMG-20190622-WA0022-e1605718134281-1024x428.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://duralcor.es/wp-content/uploads/2021/04/almacen-de-materiales-de-construccion-en-madrid-1-1024x428.jpg"
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingImages;
