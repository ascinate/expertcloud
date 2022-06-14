import React, {useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";

function Register(){
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
      <div className="login-page register-page">
          <div className="container-fluid">
              <div className="row row-cols-1 row-cols-lg-2">
                      <div className="col">
                          <div className="login-left-part  d-none d-md-block">
                              <NavLink to="/" className="logo">
                                  <img src="images/logo-login.png" alt="logo"/>
                              </NavLink>
                              <div className="logo-in-div col-lg-7 mx-auto">
                                  <h1 className="text-left text-white  " data-aos="fade-down"> 
                                  Access a panel of experts spread across 70+ countries & 30+ industries</h1>
                              </div>

                              <div className="col-lg-7 mt-4 mx-auto">
                                  <div className="register-img" data-aos="fade-up">
                                      <figure>
                                        <img src="images/register-page-img-svg.svg" alt="register"/>
                                      </figure>
                                  </div>
                              </div>

                              
                          </div>
                      </div>

                      <div className="col position-relative">
                          <div className="comon-fild col-lg-8  regitser-page-div">
                              <NavLink className="logo d-block d-lg-none mb-3 active" to="/">
                              <img src="images/logo-main.svg" alt="logo"/>
                              </NavLink>
                                  <div className="inside-login">
                                      <h4> Sign Up </h4>
                                      <RegisterForm/>

                                      
                                  </div>


                                
                              
                          </div>
                      </div>
              </div>
          </div>
      </div>

      <div className="modal fade modal-success" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                     <div className="success-div text-center">
                         <figure>
                           <img src="images/right-s.svg" alt="svg"/>
                         </figure>
                        <h2> Your account has successfully been created </h2>
                        <p>Login to access our panel of experts</p>
                     </div>
                </div>
               
                </div>
            </div>
        </div>
      </>
  );
}

export default Register;
