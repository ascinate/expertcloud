import React from "react";

function ContactForm(){
    return(
        <>
            <div className="contact-from-ds">
                <div className="form-group">
                    <label> Name </label>
                    <input type="text" className="form-control" placeholder="Johnson Wills"/>
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input type="text" className="form-control" placeholder="Johnsonwills@gmail.com"/>
                </div>
                <div className="form-group">
                    <label> Description </label>
                    <textarea className="form-control" placeholder="Write...">
                    </textarea>
                    
                </div>
                <div className="form-group">
                    <input type="submit" className="conatct-sm btn" value="Submit"/>
                </div>
            </div>
        </>
    );
}
export default ContactForm;