import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


function CareerSection(){
    
    return(
        <>
           <div className="career-sec">
              <div className="container">
                 <figure className="mx-auto d-table my-0">
                    <img src="images/expert-img-bg.svg" alt="svg"/>
                 </figure>
                 <div className="career-infomations text-center">
                    <h2 className="text-white">  Build real relationships.  
                    <span>    Create opportunities. </span> </h2>
                    <NavLink to="/" className="btn get-st-btn"> Get started <FaAngleRight/> </NavLink>
                 </div>
              </div>
           </div>
        </>
    );
}
export default CareerSection;