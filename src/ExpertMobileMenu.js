import React from "react";
import {NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
function ExpertMobileMenu(){
    return(
        <>
            <div className="offcanvas offcanvas-start mobile-canvas" tabindex="-1" id="offcanvasmenu" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    
                <div className="inside0div">
                <div className="logo-admin mb-3">
                  <NavLink to="/" >
                  <img src="images/logo-main.svg" alt="logo"/>
                     
                  </NavLink>
                 
                </div>
                
                <div className="main-menu">
                        
                    <ul className="list-unstyled">
                        <li data-bs-dismiss="offcanvas" aria-label="Close">
                        
                        <NavLink to="/expertdashboard" activeClassName="menu_active"> 
                        <span className="menu-icon-new"> 
                            <img src="images/dashboard-icon.svg" alt="sr"/>
                        </span> <span className="menu-text"> Dashborad </span>  </NavLink>
                        <NavLink to="/expertcallhistory" activeClassName="menu_active"> <span className="menu-icon-new">
                        <img src="images/icn.png" alt="sr"/> 
                        </span> <span className="menu-text"> Call History </span> </NavLink>


                        <NavLink to="/expertpayment" activeClassName="menu_active"> <span className="menu-icon-new">
                        <img src="images/doller.svg" className="doller" alt="sr"/> 
                            </span> <span className="menu-text"> Payment </span> </NavLink>

                        <NavLink to="/expertcompliance" activeClassName="menu_active"> <span className="menu-icon-new">
                            <img src="images/complains-icon.svg" alt="sr"/> 
                            </span> <span className="menu-text"> Compliance </span> </NavLink>

                        
                        
                        </li>

                    

                    </ul>

                    
                </div>

            </div>
                
                </div>
            </div>
        </>
    );
}
export default ExpertMobileMenu;