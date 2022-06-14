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

                           <div className="d-lg-flex top-ps-seection justify-content-between align-items-center">
                               <NavLink to="/search" className="mb-0 btn search-btn-back"> <FaAngleLeft/> Project Scope </NavLink>

                               <ul className="nav col-lg-6 mx-auto nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                               <li className="nav-item" role="presentation">
                               <button className="nav-link active" id="pills-home-tab" 
                               data-bs-toggle="pill" data-bs-target="#pills-home" 
                               type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                               Ongoing</button>
                               </li>
                               <li className="nav-item" role="presentation">
                               <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" 
                               data-bs-target="#pills-profile" type="button" role="tab"
                               aria-controls="pills-profile" aria-selected="false">On Hold</button>
                               </li>
                               <li className="nav-item" role="presentation">
                               <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" 
                               type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
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
        </>
    );
}

 export default ProjectsDetails;