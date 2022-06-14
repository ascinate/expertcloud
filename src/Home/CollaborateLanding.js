import React from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

function CollaborateLanding(){
    return(
         <>
         <div className="row row-cols-1 row-cols-lg-2 align-items-center cosulting-page-d1">
            <div className="col" data-aos="fade-left">
                <figure className="m-0">
                <img src="images/landing-consult.svg" alt="svg1"/>
                </figure>
            </div>
            <div className="col" data-aos="fade-right">
                <div className="comon-section-landing col-lg-10">
                <h2> Collaborate  </h2>
                
                <ul className="list-unstyled">
                    <li>
                      <BsFillCircleFill/> 
                      <span>  Access call recordings for completed consultations </span>

                    </li>

                    <li>
                       <BsFillCircleFill/> 
                       <span> Automated call transcription for all completed consultations </span>

                    </li>

                    <li>
                      <BsFillCircleFill/>
                      <span> All interactions history accessible at one location, forever </span> 

                    </li>

                    <li>
                      <BsFillCircleFill/> 
                      <span> Share, comment, collaborate with team members internally </span>

                    </li>
                    
                    
                </ul>
               

                <NavLink to="/" className="btn get-start-btn"> Get Started  <FaAngleRight/> </NavLink>


                </div>
            </div>

         </div>
         </>
    );
}

export default CollaborateLanding;