import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Data from "./HomeBlogsApi";

function NewsBlogSlider(){
    const settings = {
        dots: true,
        infinite: false,
        margin:30,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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
        {Data.AllHomeBlogs.map((item, index) => {
            return(
                 <>
                 <NavLink to="/" className="comon-ads1">
                    <figure>
                        <img src="images/blog-img.svg" alt="bg"/>
                    </figure>
                    <h5> {item.titel} </h5>
                    <p> {item.description}</p>
                    <h3 to="/" className="tgs">{item.tags} </h3>
                    <h6> at {item.date} : {item.time} </h6>
                </NavLink>
                 </>
            );
         })}
            
            
        </Slider>
        </>
    );
}
export default NewsBlogSlider;