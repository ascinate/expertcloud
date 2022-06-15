import React from "react";
import { NavLink } from "react-router-dom";
import NewsBlogSlider from "./NewsBlogSlider";
import { FaAngleRight } from "react-icons/fa";





function NewsBlogs(){
    
    return(
        <>
          <div className="news-blogs">
            <div className="container">
               
                    <h2  data-aos="fade-right">News & Insights </h2>
                    <p className="sub-text-news mb-5 mb-lg-0" data-aos="fade-down"> Hear more on </p>
                    
                    
                  
               <NewsBlogSlider/>
            </div>
          </div>
        </>
    );
}
export default NewsBlogs;