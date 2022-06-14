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
import MailEditor from "../MailEditor";


function ProjectsDetailsMessage(){

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
                               <NavLink to="/search" className="mb-0 btn search-btn-back"> <FaAngleLeft/> Conversations </NavLink>

                               <ul className="nav col-lg-6 mx-auto nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                               <li className="nav-item" role="presentation">
                               <NavLink to="/projectsdetails" className="nav-link" >
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


                       
                       <div className="request-body-sec projects-details-page details-message-part">
                               
                            <div className="members-list d-flex align-items-center">
                               <div className="menmber-icons">
                                  <NavLink to="/" className="mb-icons">
                                     <img src="images/member-img1.png" alt="mb"/>
                                  </NavLink>
                                  <NavLink to="/" className="mb-icons">
                                     <img src="images/member-img2.png" alt="mb"/>
                                  </NavLink>
                                  <NavLink to="/" className="mb-icons">
                                     <img src="images/member-img3.png" alt="mb"/>
                                  </NavLink>
                                  <NavLink to="/" className="more-btn-show">
                                     +27
                                  </NavLink>
                               </div> <span className="ms-3"> 30 Members Joined </span>
                            </div>

                            <div className="message-text-area">
                                <div className="inside-message1">

                                    <div className="admin-text">
                                       <p className="content"> 
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                       </p>
                                       <h6> Just Now </h6>
                                    </div>
                                    
                                    
                                    <div className="menmber-text">
                                        <div className="d-flex align-items-center">
                                            <figure>
                                                <img src="images/chart-member.png" alt="ct"/>
                                            </figure>
                                            <p className="content"> 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                            </p>
                                        </div>
                                        <h6> Just Now </h6>
                                    </div>


                                    <div className="admin-text">
                                       <p className="content"> 
                                       Lorem ipsum dolor sit amet,
                                       </p>
                                       <h6> Just Now </h6>
                                    </div>

                                </div>
                                <div className="text-area-type sp-are-sec mx-auto">
                                    <textarea className="form-control d-none" placeholder="Type Messege"></textarea>
                                    <figure className="mx-auto d-none">
                                       <img src="images/message-fild-img.png" alt="sp"/>
                                    </figure>
                                     <MailEditor/>
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

 export default ProjectsDetailsMessage;