import React from "react";
import {NavLink } from "react-router-dom";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import Notification from "./Notification";
import { FaBars, FaSearch, FaRegBell } from "react-icons/fa";


function ExpertTopMenu(){
    return(
        <>
        <div className="d-block col-lg-12">
                
            <div className="right-menu-sec">
                    <div className="d-block ms-3 d-lg-none">
                           <NavLink to="/" className="mboile-logo"> <img src="images/mobile-icon-logo.svg" alt="svg"/>  </NavLink>
                    </div>
                    
            
                    <ul className="list-unstyled m-0 d-flex">
                        
                        <li className="nav-item dropdown">
                        <a className="nav-link bel-icon" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaRegBell/>
                        </a>
                        <ul className="dropdown-menu cart-dropdown-ne notificaion-dp shadow" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <div className="d-flex pt-2 px-3 justify-content-between align-content-center">
                                    <h4 className="mb-0"> Notificaions </h4>
                                    <a id="#" className="clear-bnt"> Clear All </a>
                                </div> 
                                
                                <hr/>
                            <Notification/>
                                <NavLink to="/notification" className="ms-auto btn allnoti-btn text-center d-table">
                                    See All
                                </NavLink>
                            </li>
                        </ul>
                        </li>
                        
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#"  role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="user-div-top d-flex align-items-center">
                            
                                <figure className="m-0 ms-2">
                                    <img src="images/profile-pic.svg"/>
                                </figure>
                            </div>

                            </a>
                            <ul className="dropdown-menu account-div ex-log-dp shadow" aria-labelledby="dropdownMenuButton1">
                                
                                <li>
                                   <div className="user-acunt d-flex ">
                                       <figure className="m-0">
                                          <img src="images/dropdown1-use.svg" alt="svn"/>
                                       </figure>
                                       <p> Dhruv Upadhyay 
                                         <NavLink to="/" className="d-block">View Profile</NavLink>
                                       </p>
                                       
                                   </div>
                                </li>
                                <li>
                                  <hr/>
                                </li>
                                <li>
                                    <a className="dropdown-item">
                                    <span> <img src="images/lock-i.svg" alt="svb"/> </span> Change Password
                                       
                                    </a>
                                </li>
                            
                                <li>
                                    <a className="dropdown-item">
                                    <span> <img src="images/logout-i.svg" alt="svb"/> </span>   Logout
                                        
                                    </a>
                                </li>
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                           <a className="btn search-mobile-s" data-bs-toggle="offcanvas" href="#offcanvasmenu" role="button" aria-controls="offcanvasExample">
                               <img src="images/bar-menu.svg" alt="svg"/>
                           </a>
                        </li>
                        
                    </ul>
                    
            </div>

        </div>
        </>
    );
}

export default ExpertTopMenu;