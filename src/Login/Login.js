import React, {useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";



function Login(){

    Aos.init({
      offset: 100,
      easing: 'ease',
      delay: 0,
      once: true,
      duration: 800,
    
    });

    document.title ="Expert Cloud - Login"
    return(
         <>
         <div className="login-page">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col d-none d-md-block">
                            <div className="login-left-part">
                                  <NavLink to="/" className="logo">
                                    <img src="images/logo-login.png" alt="logo"/>
                                  </NavLink>
                                  <div className="logo-in-div col-lg-7 mx-auto">
                                    <h1 className="text-left text-white  " data-aos="fade-down"> 
                                    Consulting experts is <br/> as easy as a click of a button.</h1>
                                  </div>

                                  <div className="col-lg-7 mx-auto">
                                    <div className="img-box-1">
                                        <figure className="img1" data-aos="fade-up">
                                        <img src="images/logo-pic1.png" className="up-down" alt="logo"/>
                                        </figure>
                                        <figure className="img2" data-aos="fade-down">
                                        <img src="images/logo-pic2.png" className="up-down" alt="logo"/>
                                        </figure>

                                        <figure className="img3" data-aos="fade-up">
                                        <img src="images/logo-pic3.png" className="up-down" alt="logo"/>
                                        </figure>

                                        <figure className="img4" data-aos="fade-up">
                                        <img src="images/logo-pic4.png" className="up-down" alt="logo"/>
                                        </figure>
                                        <figure className="img5" data-aos="fade-down">
                                        <img src="images/logo-pic5.png" className="up-down" alt="logo"/>
                                        </figure>
                                    </div>
                                  </div>

                                  
                            </div>
                        </div>

                        <div className="col position-relative">
                              
                            <div className="comon-fild col-lg-8 login-page-div">
                                     <NavLink to="/" className="logo d-block d-lg-none mb-3">
                                           <img src="images/logo-main.svg" alt="logo"/>
                                     </NavLink>
                                    <div className="inside-login">
                                        
                                        <h4> Login</h4>
                                        <LoginForm/>
                                        
                                    </div>


                                  
                                
                            </div>
                        </div>
                </div>
            </div>
         </div>
         </>
    );
}
export default Login;
