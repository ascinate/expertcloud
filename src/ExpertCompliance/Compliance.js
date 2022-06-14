import React from "react";
import {NavLink } from "react-router-dom";
import Data from "./AllComplianceApi";

function Compliance(){

    return(
        <>

        {Data.AllComplainceDetails.map((item, index) => {
            return(
             
                <div className="comon-cplens">
                    <h5> {item.joindate} </h5>
                    <p> {item.paragraph} </p>
                    <div className="d-md-flex justify-content-between align-items-center">
                        <NavLink to={item.link}> Expert Terms & Conditions - Signed (Download) </NavLink>
                        <h6> {item.signdate} </h6>
                    </div>
                </div>
              
            )
          })}
           
        </>
    );
}
export default Compliance;