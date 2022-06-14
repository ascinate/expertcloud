import React from "react";

function ScopeOverview(){
    return(
        <>
        <div className="d-flex align-items-center justify-content-between">
            <div className="progress col-10 mb-0">
                <div className="progress-bar w-50" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h5 className="my-0"> 70% </h5>
       </div>
       <hr/>
        <div className="d-flex align-items-center justify-content-between">
            <ul className="list-unstyled right-small-icons d-flex align-items-center justify-content-between w-100">
            <li>
                <span className="red-icon">
                    <img src="images/red-phone.png" alt="red-phone"/>
                </span>
                <span>
                20 
                <small className="d-block"> Expected <br/>
                calls </small>
                </span>
            </li>

            <li>
                <span className="red-icon">
                    <img src="images/red-file.png" alt="red-phone"/>
                </span>
                <span>
                    324
                <small className="d-block"> Profiles 
                <br/>
                Submitted  </small>
                </span>
            </li>


            <li>
                <span className="red-icon">
                    <img src="images/red-check.png" alt="red-phone"/>
                </span>
                <span>
                    10
                <small className="d-block"> Completed
                
                <br/>
                calls </small>
                </span>
            </li>


            </ul>
        </div>
 
        </>
    );
}
export default ScopeOverview;