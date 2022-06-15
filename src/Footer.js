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
                   <p className="col-lg-8 mt-lg-4 mt-3 mt-lg-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
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
                             <li> <NavLink to="/privacypolicy"> Privacy Policy </NavLink> </li>
                             <li> <NavLink to="/"> Terms of use </NavLink> </li>
                             <li> <NavLink to="/compliance"> Compliance  </NavLink> </li>
                           </ul>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comon-footer">
                           <h5> Support </h5>
                           <ul className="list-unstyled">
                             <li> <NavLink to="/contact"> Contact Us </NavLink> </li>
                             <li> <NavLink to="/faq"> FAQ </NavLink> </li>
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


    <div className="offcanvas offcanvas-start mobile-menu-div" tabindex="-1" id="mobile-menu" aria-labelledby="offcanvasExampleLabel">
         <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
             <div className="comon-mob-menu">
               <div data-bs-dismiss="offcanvas">
               <NavLink to="/">
                 <img src="images/web-logo.svg" alt="logo"/>
               </NavLink>
               </div>
               <ul className="list-unstyled mt-4">
                 <li data-bs-dismiss="offcanvas">
                   <NavLink to="/contact">Contact Us </NavLink>
                 </li>
                 <li  data-bs-dismiss="offcanvas">
                   <NavLink to="/">Login </NavLink>
                 </li>
                 <li data-bs-dismiss="offcanvas">
                   <NavLink to="/">Register </NavLink>
                 </li>
               </ul>
             </div>
         </div>
    </div>
     </>
  );
}


 export default Footer;