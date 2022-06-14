import React from "react";
import { NavLink } from "react-router-dom";

function RegisterForm(){
    return(
        <>
        <div className="form-group">
            <label> Name  </label>
            <input type="text" className="form-control" placeholder="Dhruv"/>
        </div>

        <div className="form-group">
            <label> Company Name  </label>
            <input type="text" className="form-control" placeholder="Nextyn"/>
        </div>

        <div className="form-group">
            <label> Contact Number  </label>
            <div className="d-flex sp-input justify-content-between align-items-center">
            <div >
                <input type="text" className="form-control" placeholder="+91"/>
            </div>
            <div >
                <input type="text" className="form-control" placeholder="987654321"/>
            </div>
            </div>
        
        </div>


        <div className="form-group">
            <label> Business Email  </label>
            <input type="text" className="form-control" placeholder="Dhruv@Nextyn.com"/>
        </div>


        <div className="form-group">
            <label> Password </label>
            <div className="lable-input">
                <input name="password" id="password-field" type="Password" className="form-control" placeholder="**********" />
                <span toggle="#password-field" className="fa fa-fw fa-eye-slash  field-icon toggle-password"> </span>
            </div> 
        </div>

        <div className="form-group">
            <label> Password </label>
            <div className="lable-input">
                <input name="password" id="password-field2" type="Password" className="form-control" placeholder="**********" />
                <span toggle2="#password-field" className="fa fa-fw fa-eye-slash  field-icon toggle-password2"> </span>
            </div> 
        </div>

        
        <div className="form-group">

        <input type='submit' value="Get Started" className="btn login-btn" data-bs-toggle="modal" data-bs-target="#successModal"/>
        </div>

        <div className="form-group">
           <p className="text-center">  Already have an account? <NavLink to="/" className="login-btn1"> Login Now </NavLink>  </p> 
        </div>
        </>
    );
}
export default RegisterForm;