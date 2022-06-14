import React from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import AppenDiv from "./AppendDiv";

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
           Get remunerated per your chosen consulting rate
           </h1>

           <NavLink className="logo re-spi-logo d-block d-lg-none mb-5 active" to="/">
               <img src="images/logo-main.svg" alt="logo"/>
          </NavLink>
        
          <div className="main-re-from-divs col-lg-8 mx-auto">

          
             

             <h5> EXPERT REGISTRATION </h5>
             <h2> Step 2 : Professional Background </h2>
             

             <p> Your detailed professional backgroud will help our proprietary technology 
             match you to relevant consulting projects. </p>

             <div className="row mt-5">
               
                <div className="col-lg-6">
                    <div className="form-group">
                    <label> Current Employment Status </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                    <label> Highest Education </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="form-group">
                    <label> Highest Professional Level </label>
                    
                       <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                    <label> Current Designation  </label>
                    
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
                    <label> Current Designation  </label>
                    
                       <textarea className="form-control sp-narea"></textarea>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Are you associated with a publicly traded company   </label>
                    
                       <textarea className="form-control sp-narea"></textarea>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    <label> Past Career Experience  </label>
                    <input class="form-control" placeholder="Title" />
                       
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                        <label> Company </label>
                        <input class="form-control" placeholder="Comopany name" />
                        
                    </div>
                </div>

                <div className="col-lg-12">
                     
                     
                       <AppenDiv/>
                    
                </div>

                <div className="col-lg-12">

                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                        Present
                        </label>
                    </div>

                </div>

                <div className="col-lg-12">
                   <p> Do you have any agreements that can restrict you from providing consultations or being an expert on our platform? For Example, (NDAs, Employment Contracts, Severance Packages, etc.). If yes, please carefully read our confidentiality 
                   terms and conditions before registering as a part of the network.</p>
                </div>

                <div className="col-lg-12">
                    <div className="form-group">
                    
                       <textarea className="form-control sp-narea"></textarea>
                    </div>
                </div>

             </div>

             
          </div>
        </div>
        </>
    );
}
export default StepOne;