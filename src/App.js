import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./App.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="text-center">
        <h3>1</h3>
      </div>
      <div className="text-center">
        <h3>2</h3>
      </div>
      <div className="text-center">
        <h3>3</h3>
      </div>
      <div className="text-center">
        <h3>4</h3>
      </div>
      <div className="text-center">
        <h3>5</h3>
      </div>
      <div className="text-center">
        <h3>6</h3>
      </div>
    </Slider>
  );
}
