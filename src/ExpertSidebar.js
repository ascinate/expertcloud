import React from "react";
import {NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";


function ExpertSidebar(){
    return(
        <>
        <div className="inside0div">
            <div className="logo-admin mb-3">
              <NavLink to="/" >
              <img src="images/logo-main.svg" alt="logo"/>
                 
              </NavLink>
             
            </div>
            
            <div className="main-menu d-none d-lg-block">
               <ul className="list-unstyled">
                 <li>
                    
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



        
        </>
    );
}
export default ExpertSidebar;