import React from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import AppenDiv from "./AppendDiv";

function StepThree(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
    return(
        <>
        <div className="totoal-re-div">
           <h1 className="comon-re-texts">
           Participate in <span className="d-block"> Online Surveys </span>
           </h1>
        
           <NavLink className="logo  re-spi-logo d-block d-lg-none mb-5 active" to="/">
             <img src="images/logo-main.svg" alt="logo"/>
          </NavLink>

          <div className="main-re-from-divs col-lg-8 mx-auto">

          
            

             <h5> EXPERT REGISTRATION </h5>
             <h2> Step 3 : Contact Information </h2>
             
             <div className="row mt-5">
               
                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Email* </label>
                    
                    <input type="text" className="form-control" placeholder="Dhruv@nextyn.com"/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Phone Number* </label>
                    
                       <div className="d-flex justify-content-between">
                          <div className="in-code">
                             <input type="text" className="form-control" placeholder="+91"/>
                          </div>
                          <div className="full-number">
                             <input type="text" className="form-control" placeholder="9876543210"/>
                          </div>
                       </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label> Password* </label>
                    
                        <input type="text" className="form-control" placeholder="Enter Password"/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label> Verify Password* </label>
                    
                        <input type="text" className="form-control" placeholder="Enter Password"/>
                    </div>
                </div>


                <div className="col-lg-12">
                    <div className="form-group">
                        <label> Linkedin URL </label>
                    
                        <input type="text" className="form-control" placeholder="enter URL"/>
                    </div>
                </div>

               

             </div>

             
          </div>
        </div>
        </>
    );
}
export default StepThree;