import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";



function Footer(){
 
    document.title ="Expert Cloud -  Landing"
   


  return(
     <>
    <footer>
      <div className="footer-part">
        <div className="container">
          <div className="row">
             <div className="col-lg-6">
                <div className="logo-sec-ft">
                   <NavLink to="/"> 
                      <img src="images/footer-logo.svg" alt="fl"/>
                   </NavLink>
                   <p className="col-lg-8 mt-lg-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
             </div>
             <div className="col-lg-6">
                <div className="row row-cols-2 row-cols-md-3 right-footer">
                    <div className="col">
                       <div className="comon-footer">
                           <h5> Account </h5>
                           <ul className="list-unstyled">
                             <li> <NavLink to="/"> Login </NavLink> </li>
                             <li> <NavLink to="/"> Signup </NavLink> </li>
                           </ul>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comon-footer">
                           <h5> Company </h5>
                           <ul className="list-unstyled">
                             <li> <NavLink to="/"> Privacy Policy </NavLink> </li>
                             <li> <NavLink to="/"> Terms of use </NavLink> </li>
                             <li> <NavLink to="/"> Compliance  </NavLink> </li>
                           </ul>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comon-footer">
                           <h5> Support </h5>
                           <ul className="list-unstyled">
                             <li> <NavLink to="/"> Contact Us </NavLink> </li>
                             <li> <NavLink to="/"> FAQ </NavLink> </li>
                           </ul>
                       </div>
                    </div>
                </div>
             </div>
          </div>
          <hr/>
          <p className="text-center copy-ft"> Copyright © 2022 by Nextyn </p>
        </div>
      </div>
    </footer>
     </>
  );
}


 export default Footer;