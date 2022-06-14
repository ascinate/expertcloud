import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import TopIndustry from "./TopIndustry";
import MobileMenu from "../MobileMenu";
import TopSelectOption from "./TopSelectOptions";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";



function FindExpert(){
   document.title ="Expert Cloud -  Find Experts"
   return(
         <>
         <MobileMenu/>
         <div className='page-wrapper chiller-theme toggled'>
         <div className="main-sec d-lg-flex">
           <div className="sidebar-menu" id="navAccordion">
              <Sidebar/>
           </div>
         </div>
         <main className="body-total content-wrapper float-start w-100">
           <div className="container-fluid">
           
 
             <div className="d-block mobile-fill-width">
                   <div className="top-bar-menu float-start">
                      
                      <TopMenu/>
                   </div>
             </div>
              
              <div className="dasb-div bk-div float-start w-100">
                <div className="d-block d-lg-none  position-relative align-items-center">
                    <div className="mobile-serch-sec-div">      
                      <input type="text" className="form-control" placeholder="Search.."/>
                      <NavLink to="/search">   <BsSearch/> </NavLink>
                    </div>  
                </div>
                <TopSelectOption/>

                 <hr className="sp-hr"/>
                 <div className="body-expart-div">
                    <h2> Explore Popular Experts </h2>
                    <h6> Browse top rated experts across a range of diversified industries </h6>
                    <h5> Top Industries  </h5>

                    <ul className="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" 
                      data-bs-toggle="pill" data-bs-target="#pills-home" 
                      type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                      Business Information technology</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" 
                      data-bs-target="#pills-profile" type="button" role="tab"
                       aria-controls="pills-profile" aria-selected="false">Information Services,</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" 
                      type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mobile Payments</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" 
                      type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Project Management</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane pt-2 fade show active" id="pills-home" role="tabpanel" 
                    aria-labelledby="pills-home-tab">
                       
                       <TopIndustry/>

                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                  </div>

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

 export default FindExpert;