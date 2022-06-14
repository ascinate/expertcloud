import React from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillCircleFill } from "react-icons/bs";



function LandingRegister(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
    return(
        <>

        <div className="login-page register-page landing-page-d1">
          <div className="container-fluid">
              <div className="row row-cols-1 row-cols-lg-2">
                      <div className="col">
                          <div className="login-left-part  d-none d-lg-block">
                              <NavLink to="/" className="logo">
                                  <img src="images/logo-login.png" alt="logo"/>
                              </NavLink>
                              

                          </div>
                      </div>

                      <div className="col">
                            <div className="totoal-re-div">
                                <h1 className="comon-re-texts">
                                    Consult clients in over 30 countries
                                </h1>

                                <NavLink className="logo d-block d-lg-none mb-5 active" to="/">
                                <img src="images/logo-main.svg" alt="logo"/>
                            </NavLink>
                   
                                <div className="main-re-from-divs landing-sec-rg col-lg-8 mx-auto">
                               
                    
                                    <h5> EXPERT REGISTRATION </h5>
                                    <h2 className="mt-3 mb-3"> Introduction </h2>
                                    <p> Welcome to the induction process of the Nextyn professional network.</p>
                    
                                    <p> This process is mandatory for all professionals who wish to be registered as a part of the Network.
                                    
                                    </p>
                                    
                                    <p> The process has the following three steps: </p>
                    
                                    <ul className="list-unstyled my-4">
                                    <li> <span> <BsFillCircleFill/> </span> Step 1: Register with Linkedin/Email </li>
                                    <li> <span> <BsFillCircleFill/> </span> Step 2: Contact Information </li>
                                    <li> <span> <BsFillCircleFill/> </span> Step 3: Nextyn Agreement  </li>
                                    </ul>
                    
                                    <p> Please note, the process must be completed in a single sitting and cannot be saved 
                                    as a draft for completion in the future.</p>
                                
                                
                                <div className="form-check my-4">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                    By proceeding, you confirm that the information you will be sharing is true, accurate and not misleading.
                                    </label>
                                </div>
                    
                                
                    
                                
                    
                                
                                <div className="form-group">
                    
                                <NavLink to="/expertregister" className="btn login-btn" > Begin Process </NavLink>
                                </div>
                    
                               
                                </div>
                            </div>
                      </div>


              </div>
          </div>
        </div>
        
        </>
    );
}
export default LandingRegister;