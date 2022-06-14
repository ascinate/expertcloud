import React from "react";
import {NavLink } from "react-router-dom";
function MobileDashboradTable(){
    return(
        <>

        <div className="comon-table-divs mbile-divs-table mt-2">
            <div className="cm-titels">
                <NavLink to="/expertdashboard" className="comon-table-td"> 
                    <span className="d-block"> Business analyst for developing my idea and make it live to users
                     </span>
                    <span className="d-flex align-items-center mt-3 ">
                    <figure className="m-0 me-2">
                    <img src="images/expert-icon1.svg" alt="sn"/>
                    </figure>  mar 13, 2022
                    </span>
                </NavLink>

                

            </div>
            <hr/>
            
            <div className="div-pogress">
              <h4> Rate(USD) </h4>
              <h5> <span> $560</span>    /hour </h5>

               
            </div>
            <hr/>
            
            <div className="date">
               <h4> Payment Status </h4>
               <h5>  $ Processed </h5>
            </div>
            <hr/>
            <div className="nubers-div1">
               <h4> Payment Date </h4>
               <h5> Apr 22, 2022</h5>
            </div>
            


        </div>





        </>
    );
}
export default MobileDashboradTable;