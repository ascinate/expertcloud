import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import TopIndustryAll from "./TopIndustryApi";
import IndustryList from "./IndustryList";
import FactoryInduxtry from "./FactoryInduxtry";

function TopIndustry (){
    const [ workData , setworkData] =useState(TopIndustryAll);
    console.log(workData);
    return(
       <>

       {
        workData.map((curElem) => {
            const{ id, icon, titel, location,price,time,link, companyname} = curElem;
            return(
                <>
                <div className="comon-divs-re d-md-flex align-items-center justify-content-between ">
                    <div className="col-lg-10">
                         <NavLink className="ps-titel" to={link}> {titel}
                        </NavLink>
                        <ul className="tp-list1 d-flex align-items-center list-unsyled">
                            <li> <span>
                            <img src="images/sl-location.svg" alt="sv"/>
                        </span>
                            {location} </li>

                            <li> <span>
                            <img src="images/company-icon.svg" alt="sv"/>
                        </span>
                        {companyname} </li>

                        </ul>


                        <div className="d-flex next-list mt-3 align-items-xl-center">
                                <span className="me-2">
                                <img src="images/bag-icon.svg" alt="sv"/>
                                </span>
                                <IndustryList/>
                                
                        </div>

                        <div className="d-flex next-list mt-3 align-items-xl-center">
                                <span className="me-2">
                                <img src="images/induc-icon.png" alt="sv"/>
                                </span>
                                
                                <FactoryInduxtry/>
                        </div>

                    </div>

                    <div className="col-lg-2">
                        <div className="right-divs-2 mt-5 mt-md-0 text-center pe-3">
                            <h5> {price} <span> /{time} </span>  </h5>
                            <NavLink to={link} className="btn new-reguest"> Request  </NavLink>
                        </div>
                    </div>
                </div>
                </>
            );
        })
    }
       
       </>
    );
}
export default TopIndustry;