import React from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

function ConsultLanding(){
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
                <h2> Consult.  </h2>
               
                <ul className="list-unstyled">
                    <li>
                      <BsFillCircleFill/> 
                      <span>  Consult shortlisted experts at your convenience </span>

                    </li>

                    <li>
                       <BsFillCircleFill/> 
                       <span> Pay as you go, only for successful consultations </span>

                    </li>

                    <li>
                      <BsFillCircleFill/>
                      <span> Consulting rates starting at <b> $350/hr </b> </span> 

                    </li>

                    <li>
                      <BsFillCircleFill/> 
                      <span>  Credit worthy compliance procedures, to ensure a
                       seamless consulting experience </span>

                    </li>
                    
                    
                </ul>
               

                <NavLink to="/" className="btn get-start-btn"> Get Started  <FaAngleRight/> </NavLink>


                </div>
            </div>

         </div>
         </>
    );
}

export default ConsultLanding;