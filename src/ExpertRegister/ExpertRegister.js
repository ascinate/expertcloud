import React from "react";
import RegisterSetps from "./RegisterSetps";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function ExpertRegister(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
      document.title ="Expert Cloud - Register"

    return(
        <>

        <div className="login-page register-page new-register-page">
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
                         
                                      
                                      <RegisterSetps/>

                      </div>


              </div>
          </div>
        </div>
        
        </>
    );
}
export default ExpertRegister;