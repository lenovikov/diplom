/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../image/slide-3.307efba.jpg'

const style = {
    backround:{
        height:'700px',
        width:'100%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false, 
  };
  return (
    <Slider {...settings}>
      <div>
        <h3 style={
            { 
                backgroundImage: `url(${image1})`,
                ...style.backround,
            }} >
        </h3>
      </div>
      <div>
        <h3 style={
            { 
                backgroundImage: `url(${image1})`,
                ...style.backround,
            }} ></h3>
      </div>
      <div>
        <h3 style={
            { 
                backgroundImage: `url(${image1})`,
                ...style.backround,
            }} ></h3>
      </div>
    </Slider>
  );
}