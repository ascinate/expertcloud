import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./IndustryLogoApi";



function WorkIndustry(){
    
    return(
        <>
          <div className="industry-clients" data-aos="fade-up">
            <div className="container">
               
                    <h2 className="text-center"> We work with the best across industries </h2>
                    <div className="row row-cols-2 mt-5 row-cols-md-3 row-cols-lg-6">
                    {Data.AllIndustryLogo.map((item, index) => {
                        return(
                             <>
                             <div className="col">
                                <div className="clients-in">
                                    <img src={item.img} alt="svg"/>
                                </div>
                            </div>
                             </>
                        );
                    })}
                       
                    </div>
                    
                
               
            </div>
          </div>
        </>
    );
}
export default WorkIndustry;