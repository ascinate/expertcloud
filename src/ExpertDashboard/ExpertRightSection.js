import React from "react";

function ExpertRightSection(){
    return(
        <>
        <div className="right-section-div mt-5 mt-md-0">
            <h2 className="text-center"> $525 <span>/hour </span> </h2>


             <a data-bs-toggle="modal" data-bs-target="#editprofilemodal"className="btn requset-1btn">
             <span> <img src="images/edt-white.svg" alt="sb"/> </span> Edit </a>

             <h5 className="mt-4"> Expert info </h5>
            <ul className="mt-4 list-unstyled">
                <li>
                <figure className="l-icon">
                    <img src="images/expert-icon1.svg"/>
                </figure>
                <div className="text-ex">
                Since Mar 13, 2022
                </div>
                </li>

                <li>
                <figure className="l-icon">
                    <img src="images/expert-icon2.svg"/>
                </figure>
                <div className="text-ex">
                23 Recording
                </div>
                </li>

               
               
                <li>
                <figure className="l-icon">
                    <img src="images/expert-icon5.svg"/>
                </figure>
                <div className="text-ex list-btn3">
                    <a id="" className="btn"> ACC Limited </a>
                    <a id="" className="btn"> ACC Limited (LafargeHolcim) </a>
                    <a id="" className="btn"> Axel Kellermann </a>
                    <a id="" className="btn"> AVIZO - Business Manager </a>
                </div>
                </li>

                <li>
                <figure className="l-icon">
                    <img src="images/expert-icon6.svg"/>
                </figure>
                <div className="text-ex list-btn3">
                    <a id="" className="btn"> Project Management </a>
                    <a id="" className="btn"> Mobile Payments </a>
                    <a id="" className="btn"> Information Services, </a>
                    <a id="more-bn" className="monr-btn"> +2more </a>
                </div>
                </li>
                

            </ul>
        </div>
        </>
    );
}
export default ExpertRightSection;