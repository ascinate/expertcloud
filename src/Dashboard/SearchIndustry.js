import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import SearchDetailsAll from "./SearchDetailsApi";
import SearchInducstyList from "./SearchInducstyList";
import SearchFactoryList from "./SearchFactoryList";

function SearchIndustry (){
    const [ workData , setworkData] =useState(SearchDetailsAll);
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
                        <h5> {titel}
                        </h5>
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
                                <SearchInducstyList/>
                                
                        </div>

                        <div className="d-flex next-list mt-3 align-items-xl-center">
                                <span className="me-2">
                                <img src="images/induc-icon.png" alt="sv"/>
                                </span>
                                
                                <SearchFactoryList/>
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
export default SearchIndustry;