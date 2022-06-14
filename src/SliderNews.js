import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderNews(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <>
        <Slider {...settings}>
          <div className="comon-ads1">
             <figure>
               1
             </figure>
          </div>
          <div className="comon-ads1">
             <figure>
                2
             </figure>
          </div>
          <div className="comon-ads1">
             <figure>
                2
             </figure>
          </div>

          <div className="comon-ads1">
             <figure>
                2
             </figure>
          </div>
        </Slider>
        </>
    );
}
export default SliderNews;