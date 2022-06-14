import React from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillCircleFill } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";




function StepOne(){
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
           Join a panel of over 100,000 industry thought leaders
           </h1>

           <NavLink className="logo re-spi-logo d-block d-lg-none mb-5 active" to="/">
           <img src="images/logo-main.svg" alt="logo"/>
           </NavLink>

           <NavLink to="/landingregister" className="back-new-fun"> <FaAngleLeft/> Back </NavLink>
        
          <div className="main-re-from-divs col-lg-8 mx-auto">

          
            

             <h5> EXPERT REGISTRATION </h5>
             <h2> Step 1 : Registration Process </h2>
             <button type="button" className="btn in-btn1"> <span> <img src="images/rg-ic.svg" alt="sv"/> </span>
             Sign up with Linkedin</button>

             <div className="or-sec my-5">
               <hr/> 
               <span>or</span>
             </div>
             
             <div className="row">
                <div className="col-lg-6">
                    <div className="form-group cm-fild1">
                    <label> First Name </label>
                    <input type="text" className="form-control" placeholder="Dhruv"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group cm-fild1">
                    <label> Last Name  </label>
                    <input type="text" className="form-control" placeholder="Upadhyay"/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Company Name </label>
                    <input type="text" className="form-control" placeholder="Nextyn"/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Years of Experience* </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Industry* </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Sub Industry* </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

             </div>

             
          </div>
        </div>
        </>
    );
}
export default StepOne;