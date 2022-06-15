import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";



function Header(){
 
    document.title ="Expert Cloud -  Landing"
   


  return(
     <>
    <header>
      <div className="top-part">
       
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                      <img src="images/web-logo.svg" alt="logo"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#mobile-menu" role="button" aria-controls="offcanvasExample">
                    <img src="images/bar-menu.svg" alt="svg"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link contact-btn-web" >Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link login-web-btn" to="/">Login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link register-login-btn" to="/">Register</NavLink>
                            </li>
                      
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
         
      </div>
    </header>
     </>
  );
}


 export default Header;