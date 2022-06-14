import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import { FaAngleLeft,FaAngleRight,FaChevronRight } from "react-icons/fa";
import {BsPlusLg ,BsPlus,  BsFilterLeft, BsSearch, BsBell  } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import FaqSection from "./FaqSection";



function HelpSupport(){
    document.title ="Expert Cloud -  Help & Support"

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
       

         <div className="d-block d-lg-block">
               <div className="top-bar-menu float-start">
                  
                  <TopMenu/>
               </div>
         </div>
          
          <div className="dasb-div bk-div float-start w-100">
          
             
             
             <div className="body-expart-div projects-pages support-page">

                <div className="d-block d-lg-none  position-relative align-items-center">
                    <div className="mobile-serch-sec-div">      
                      <input type="text" className="form-control" placeholder="Search.."/>
                      <NavLink to="/search">   <BsSearch/> </NavLink>
                    </div>  
                </div>
                <div className="inside-support">
                   <h2> Help & Support </h2>
                   <hr/>

                   <button type="button" class="btn support-btn" data-bs-toggle="modal" data-bs-target="#ResubmitModal">
                       <img src="images/support-page-icon.png" alt="support"/>
                       <span> <b className="d-block"> Submit your email request </b>  
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                       </span>
                       <FaChevronRight className="ms-auto d-table"/>
                    </button>
                </div>
               
                   

                
               

                <div className="faq-section mt-5">
                    <FaqSection/>
                </div>

             </div>
          
          </div>
       </div>
     </main>
     </div>





      <div className="modal fade projects-modal" id="ResubmitModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="projects-modal-divs">
                  <div className="d-flex position-relative align-items-center">
                  
                  <h2 className="text-center mx-auto"> Submit Your Request </h2>
                  </div>
             
                  <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>

                  <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input type="email" className="form-control" placeholder="Registered Email Address"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                          <label>Description *</label>
                          <textarea className="form-control descrip-texarea" placeholder="Please detail out the trouble you are facing and our support will be in touch with 
                          a suitable solution"></textarea>
                        </div>
                    </div>

                    

                   
                    

                    <div className="col-lg-12 mt-3">
                       <button data-bs-dismiss="modal" type="button" className="btn col-lg-5 mx-auto btnsm"> Submit </button>
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


 export default HelpSupport;