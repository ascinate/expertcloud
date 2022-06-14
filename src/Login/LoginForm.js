import React, {useState} from "react";
import { NavLink } from "react-router-dom";
function LoginForm(){
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
    return(
        <>
        <div className="form-group">
            <label> Business Email </label>
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
             
        
        </div>
        <div className="form-group">
            <NavLink to="/findexpert" className="btn login-btn"> Get Started </NavLink>
        
        </div>

        <div className="form-group">
            <p className="text-center">  Don’t have an account? <NavLink to="/register" className="register-btn"> Register Now </NavLink>  </p> 
        </div>

        <div className="form-group">
           <p className="text-center"> Expert Web Login?   <NavLink to="/expertLogin" className="register-btn"> Click Here </NavLink></p>
        </div>

        <div className="form-group">
           <p className="text-center"> Click To view Website?   <NavLink to="/landing" className="register-btn"> Click Here </NavLink></p>
        </div>

        </>
    );
}
export default LoginForm;