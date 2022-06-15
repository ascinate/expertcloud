import React from "react";

function LandingBannerForm(){
    return(
        <>
        <div className="form-sec-ban">
                <h2 className="text-center mb-4 mb-lg-5" > Get Nextyn Trial version <span className="d-block">
                to find experts </span> </h2>
                <div className="form-group">
                <label> Full Name </label>
                <input type="text" className="form-control" placeholder="Dhruv123#"/>
                </div>
                <div className="form-group">
                <label> Email Address </label>
                <input type="text" className="form-control" placeholder="Dhruv@Nextyn.com"/>
                </div>
                <div className="form-group">
                <input type="submit" className="btn submit" value="Get Started"/>
                </div>
        </div>
        </>
    );
}
export default LandingBannerForm;