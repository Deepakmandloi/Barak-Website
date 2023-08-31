import React from "react";
import Slider from "react-slick";
import aboutusstyles from './About.module.css'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Aboutcarousel() {
  const settings = {
    dots: true,
    focusOnSelect:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      // {
      //   breakpoint: 1408,
      //   settings: {
      //       dots: true,
      //       infinite: true,
      //       speed: 500,
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //       autoplay: true,
      //   }
      // },
        {
            breakpoint: 1244,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 780,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
    ]
  };
  return (
    <div className={aboutusstyles.container}>
      <Slider {...settings}>
        <div className={aboutusstyles.aboutimgcontainerone}></div>
        <div className={aboutusstyles.aboutimgcontainertwo}></div >
        <div className={aboutusstyles.aboutimgcontainerthree}></div>
        <div className={aboutusstyles.aboutimgcontainerfour}></div>
      </Slider>
    </div>
  );
}
