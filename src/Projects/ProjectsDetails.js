import React from "react";
import {NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import ScopeTeamsli from "./ScopeTeamsli";
import ProjectScopeLeftSection from "./ProjectScopeLeftSection";
import ScopeOverview from "./ScopeOverview";
import ScopeProjectInfomation from "./ScopeProjectInfomation";
import NextynLi from "./NextynLi";
import { FaAngleLeft } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import { BsPlusLg } from "react-icons/bs";


function ProjectsDetails(){

  document.title ="Expert Cloud -  Projects Details"
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
              
                   <div className="body-expart-div request-page projects-scope">

                           <div className="d-md-flex top-ps-seection justify-content-between align-items-center">
                               <NavLink to="/search" className="mb-0 btn search-btn-back"> <FaAngleLeft/> Project Scope </NavLink>

                               <ul className="nav col-lg-6 mx-auto nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                               <li className="nav-item" role="presentation">
                               <NavLink to="/projectsdetails" className="nav-link " >
                               Ongoing</NavLink>
                               </li>
                               <li className="nav-item" role="presentation">
                                 <NavLink to="/projectsdetailsmessage" className="nav-link">Messages</NavLink>
                               </li>
                               <li className="nav-item" role="presentation">
                               <NavLink to="/projectsdetailsexpert" className="nav-link">Experts</NavLink>
                               </li>

                               </ul>

                               <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#carteProjectModal"> <BsPlusLg/>  Create Project </button>
                           </div>
                       
                       <hr className="sp-hr w-100"/>


                       
                       <div className="request-body-sec projects-details-page">
                               
                            
                             <div className="d-md-flex justify-content-between">
                           
                                       <div className="left-section-divs">
                                          <ProjectScopeLeftSection/>
                                       </div>
                              
                               
                                       <div className="right-section-div">
                                          <div className="top-right-projects mt-4 mt-md-0">
                                             <h2> Project Overview  </h2>
                                             <ScopeOverview/>
                                          </div>
      
                                          <div className="middle-right mt-4">
      
                                             
                                          <h2 className="my-0"> Project info </h2>
                                          <ScopeProjectInfomation/>
                                          
                                          </div>
      
                                          <div className="client-temas-div mt-4">
                                             <div className="d-flex justify-content-between">
                                                <h2 className="my-0"> Client Team </h2>
                                                <NavLink to="/" className="btn add-pls"> <BsPlusLg/> Add </NavLink>
                                             </div>
                                             <ScopeTeamsli/>
                                             
                                          </div>
      
      
                                          <div className="client-temas-div mt-4">
                                             <div className="d-flex justify-content-between">
                                                <h2 className="my-0"> Nextyn Team </h2>
                                                <NavLink to="/" className="btn add-pls"> <BsPlusLg/> Add </NavLink>
                                             </div>
                                             <NextynLi/>
                                             
                                          </div>
                                       
      
                                       </div>
                              
                              </div>
                           
                         
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

 export default ProjectsDetails;