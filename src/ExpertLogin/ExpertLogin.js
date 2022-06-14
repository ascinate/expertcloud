import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillCircleFill } from "react-icons/bs";


function ExpertLogin(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

      document.title ="Expert Cloud - Login"

    return(
        <>

        <div className="login-page register-page expert-login-page">
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
                    
                                <div className="main-re-from-divs landing-sec-rg col-lg-8 mx-auto">
                                <NavLink className="logo d-block d-lg-none mb-3 active" to="/">
                                    <img src="images/logo-main.svg" alt="logo"/>
                                </NavLink>
                    
                                   
                                   <div className="login-fm-div">
                                     <h2 className="mt-lg-3 mb-4"> Login </h2>
                                      <div className="form-group">
                                         <label> Business Email</label>
                                         <input type="text" className="form-control" placeholder="Dhruv@Nextyn.com"/>
                                      </div>
                                      <div className="form-group">
                                            <label> Password </label>
                                            <div className="lable-input">
                                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="**********" />
                                            <div className="input-group-btn">
                                            <button className="btn" onClick={togglePassword}>
                                            { passwordType==="password"? <i className="fa fa-fw fa-eye-slash"></i> :<i class="fa fa-fw fa-eye"></i> }
                                            </button>
                                            </div>
                                            </div> 
                                        </div>


                                          
                                        <div className="form-group">
                                
                                            <NavLink to="/expertdashboard" className="btn login-btn" > Get Started </NavLink>
                                        </div>

                                        <div className="or-sec my-4">
                                            <hr/> 
                                            <span>or</span>
                                        </div>

                                        <button type="button" className="btn in-btn1 mb-3"> <span> <img src="images/rg-ic.svg" alt="sv"/> </span>
                                        Sign up with Linkedin</button>

                                        <div className="form-group">
                                            <p className="text-center">  Don’t have an account? <NavLink to="/landingregister" className="register-btn"> Register Now </NavLink>  </p> 
                                        </div>

                                        <div className="form-group">
                                            <p className="text-center"> Client Login?   <NavLink to="/" className="register-btn"> Click Here </NavLink></p>
                                        </div>

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
export default ExpertLogin;