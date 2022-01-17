import React from 'react';
import "./ImgSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='imgSlider'> 
            <Slider {...settings} className='slider'>
            <div className='imgSlider_imgDiv'>
            <img src='./images/slider-badag.jpg' 
            alt='logo'/>
          </div>
          <div className='imgSlider_imgDiv'>
            <img src='./images/slider-badging.jpg' 
            alt='logo'/>
          </div>
          <div className='imgSlider_imgDiv'>
            <img src='./images/slider-scale.jpg' 
            alt='logo'/>
          </div>
          <div className='imgSlider_imgDiv'>
            <img src='./images/slider-scales.jpg' 
            alt='logo'/>
          </div>
            </Slider>
        </div>
    )
}

export default ImgSlider;
