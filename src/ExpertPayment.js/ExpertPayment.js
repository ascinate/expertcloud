import React from "react";
import {NavLink } from "react-router-dom";
import ExpertSidebar from "../ExpertSidebar";
import ExpertTopMenu from "../ExpertTopMenu";
import ExpertMobileMenu from "../ExpertMobileMenu";
import PaymentMethord from "./PaymentMethord";
import PaymentDetails from "./PaymentDetails";





function ExpertPayment(){
    
   document.title ="Expert Cloud -  Payment"
   return(
         <>
         <ExpertMobileMenu/>
         <div className='page-wrapper chiller-theme toggled'>
         <div className="main-sec d-lg-flex">
           <div className="sidebar-menu" id="navAccordion">
              <ExpertSidebar/>
           </div>
         </div>
         <main className="body-total content-wrapper float-start w-100">
           <div className="container-fluid">
           
 
             <div className="d-block mobile-fill-width">
                   <div className="top-bar-menu float-start">
                      
                      <ExpertTopMenu/>
                   </div>
             </div>
              
              <div className="dasb-div bk-div float-start w-100">
               
                <div className="body-expart-div">

                    <PaymentDetails/>
                  
                    <PaymentMethord/>

                </div>
               
              </div>
           </div>
         </main>
         </div>



         <div className="modal fade projects-modal" id="expertmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog ">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
                 <div className="projects-modal-divs">
                     <div className="d-flex position-relative align-items-center">
                     
                     <h2 className="text-center mx-auto"> How many experts would you like to consult?</h2>
                     </div>
   
                     <div className="row mt-5">
                       <div className="col-lg-8 p-0 mx-auto d-flex justify-content-center">
                           <a id="#" className="one-ex-btn btn"> One Expert </a>
                           <a id="#" className="more-ex-btn btn"> More than one </a>
                       </div>
                       <hr className="col-lg-8 mt-4 mx-auto "/>
                      
                       <div className="notes col-lg-8 mx-auto p-0">
                      <span> NOTE: </span> <span> If your project requires multiple experts, please click on 
                       “More than one” and our consultants will reach out to you to 
                       assist with a custom recruitment. </span>
                       </div>
                     
                     </div>
                 </div>
             </div>
             
           </div>
         </div>
         </div>
         </>
   );

}

 export default ExpertPayment;