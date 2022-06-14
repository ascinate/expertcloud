import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./ExpertSeachApi";

function SearchHistory(){

    return(
        <>
        {Data.ExpertSerachAll.map((item, index) => {

            return(
                <>
                <div className="comon-history-expert">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-hisroty-expert">
                                <figure>
                                    <img src="images/expert-user-img.svg" alt="svn"/>
                                </figure>
                                <div className="detsils-secch-comon">
                                    <NavLink to={item.link} className="titels-new"> {item.titel} </NavLink>
                                    <ul className="list-unstyled d-xl-flex align-items-center">
                                        <li> <span> <img src="images/expet-m.svg" alt="sv"/> </span> 
                                      <span>  {item.email} </span> </li>
        
                                        <li> <span> <img src="images/expert-i.svg" alt="sv" /> </span> 
                                        <span> {item.socal} </span> </li>
        
                                        <li> <span> <img src="images/expert-c.svg" alt="sv" /> </span> 
                                        <span>  {item.call} </span> </li>
        
                                    </ul>
        
                                    <ul className="list-unstyled d-xl-flex align-items-center">
                                        <li>
                                            <span> <img src="images/expert-l.svg" alt="sv"/> </span>
                                            <span> {item.location} </span>
                                        </li>
        
                                        <li>
                                            <span> <img src="images/expert-h.svg" alt="sv"/> </span>
                                            <span> {item.company} </span>
                                        </li>
        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="serhisiroy-right d-xl-flex align-items-center">
                                    <h5> {item.price} <span> /hour </span> </h5>
                                    <NavLink to="/" className="btn edite-bnt">
                                    <span> <img src="images/expert-e.svg" alt="sv"/> </span> Edit Profile </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            );
          
        })}
        </>
    );
}
export default SearchHistory;