import React, {useState} from "react";
import { FaAngleLeft } from "react-icons/fa";
import {NavLink } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import ScopeTeamall from "./ScopeTeamsApi";

function ScopeTeamsli(){
    const [ workData , setworkData] =useState(ScopeTeamall);
    console.log(workData);
    return(
        <>
        <div className="client-teams-ul-li mt-4">
            <ul className="list-unstyled">
                
                {
                    workData.map((curElem) => {
                        const{ id, img, name, email } = curElem;
                        return(
                            <>
                              <li>
                                    <div className="teams-li">
                                        <figure>
                                        <img src={img} alt="tems1"/>
                                        </figure>
                                        <h5 className="m-0"> {name}
                                        <span className="d-block">{email}</span>
                                        </h5>
                
                                    </div>
                
                                    
                                    <div className="dropdown">
                                        <button className="btn p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/li-dots.jpg" className="sp-dots1" alt="dts"/>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">View </a></li>
                                        <li><a className="dropdown-item" href="#">Delete</a></li>
                                        
                                        </ul>
                                    </div>
                               </li>
                             </>
                        );
                    })
                }
                </ul>
            </div>
        </>
    );
}
export default ScopeTeamsli;