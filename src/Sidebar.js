import React from "react";
import {NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";


function Sidebar(){
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
                    <h5> Dashboard </h5>
                   <NavLink to="/findexpert" activeClassName="menu_active"> 
                   <span className="menu-icon-new"> 
                      <img src="images/search-icon.svg" alt="sr"/>
                   </span> <span className="menu-text"> Find Experts </span>  </NavLink>
                   <NavLink to="/projects" activeClassName="menu_active"> <span className="menu-icon-new">
                   <img src="images/side-icon2.svg" alt="sr"/> 
                    </span> <span className="menu-text"> Projects </span> </NavLink>

                    
                  
                 </li>

                 <li>
                        <h5> FOR YOU </h5>
                        <NavLink to="/collaborate" activeClassName="menu_active"> 
                        <span className="menu-icon-new"> 
                        <img src="images/side-icon3.svg" alt="sr"/>
                        </span> <span className="menu-text"> Collaborate </span>  </NavLink>

                        <NavLink to="/conversations" activeClassName="menu_active"> <span className="menu-icon-new">
                        
                        <img src="images/side-icon4.svg" alt="sr"/>
                        </span> <span className="menu-text"> Conversations</span> </NavLink>

                        <NavLink to="/expertcell" activeClassName="menu_active"> <span className="menu-icon-new">
                        
                        <img src="images/icn.png" alt="sr"/>
                        </span> <span className="menu-text"> Expert Calls  </span> </NavLink>

                        <NavLink to="/news" activeClassName="menu_active"> <span className="menu-icon-new">
                        
                        <img src="images/search-icon6.svg" alt="sr"/>
                        </span> <span className="menu-text"> News </span> </NavLink>


                 
               
                 </li>

                 <li>
                        <h5> GENERAL </h5>
                        <NavLink to="/usermangement" activeClassName="menu_active"> 
                        <span className="menu-icon-new"> 
                        <img src="images/search-icon7.svg" alt="sr"/>
                        </span> <span className="menu-text"> User Management </span>  </NavLink>

                        <NavLink to="/helpsupport" activeClassName="menu_active"> <span className="menu-icon-new">
                        
                        <img src="images/search-icon8.svg" alt="sr"/>
                        </span> <span className="menu-text"> Help & Support </span> </NavLink>

                        <NavLink to="/" activeClassName="menu_active"> <span className="menu-icon-new">
                        
                        <img src="images/search-icon9.svg" alt="sr"/>
                        </span> <span className="menu-text"> Privacy  </span> </NavLink>

                    


                 
               
                 </li>

               </ul>
            </div>
        </div>



        
        </>
    );
}
export default Sidebar;