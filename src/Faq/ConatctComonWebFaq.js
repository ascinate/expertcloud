import React from "react";
import { NavLink } from "react-router-dom";


function ConatctComonWebFaq(){
    
    return(
        <>
          <div className="contact-comn-web" data-aos="fade-up">
            <div className="container">
                <div className="subcribe-divs">
                    <h2 className="text-center"> Contact us, If you  <span className="d-block"> facing any problems </span>  </h2>
                    <p className="text-center text-white col-lg-6 my-4 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <NavLink to="/" className="btn conatct-btn-sub mx-auto d-table"> Contact Now </NavLink>
                
                </div>
            </div>
          </div>
        </>
    );
}
export default ConatctComonWebFaq;