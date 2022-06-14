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
import SubmitTable from "./SubmitTable";
import RequestTable from "./RequestTable";
import ScheduledTable from "./ScheduledTable";
import CompleteTable from "./CompleteTable";
import DeclineTable from "./DeclineTable";

function ProjectsDetailsExpert(){
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
                               <NavLink to="/search" className="mb-0 btn search-btn-back"> <FaAngleLeft/> Experts </NavLink>

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
                               
                            <div className="expert-tables">
                                 <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link active"  data-bs-toggle="pill"
                                     data-bs-target="#expert-tab1" type="button" role="tab" aria-controls="pills-home"
                                      aria-selected="true">Submitted</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link"  data-bs-toggle="pill" 
                                    data-bs-target="#expert-tab2" type="button" role="tab"
                                     aria-controls="pills-profile" aria-selected="false">Requested</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" 
                                    data-bs-target="#expert-tab3" type="button" role="tab" 
                                    aria-controls="pills-contact" aria-selected="false">Scheduled</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" 
                                    data-bs-target="#expert-tab4" type="button" role="tab" 
                                    aria-controls="pills-contact" aria-selected="false">Completed</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" 
                                    data-bs-target="#expert-tab5" type="button" role="tab" 
                                    aria-controls="pills-contact" aria-selected="false">Declined</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="expert-tab1" role="tabpanel"
                                     aria-labelledby="pills-home-tab">
                                            
                                        <div className="submit-table comon-tabs-expert">
                                             <SubmitTable/>
                                        </div>

                                     </div>

                                    <div className="tab-pane fade" id="expert-tab2"
                                     role="tabpanel" aria-labelledby="pills-profile-tab">
                                       <div className="submit-table comon-tabs-expert">
                                           <RequestTable/>
                                        </div>
                                     </div>
                                   
                                    <div className="tab-pane fade" id="expert-tab3" role="tabpanel" 
                                    aria-labelledby="pills-contact-tab">
                                         
                                        

                                        <div className="submit-table comon-tabs-expert">
                                           <ScheduledTable/>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className="tab-pane fade" id="expert-tab4" 
                                    role="tabpanel" aria-labelledby="pills-contact-tab">
                                    
                                      

                                       <div className="submit-table comon-tabs-expert">
                                           <CompleteTable/>
                                        </div>
                                    </div>
                                   
                                    <div className="tab-pane fade" id="expert-tab5" role="tabpanel"
                                     aria-labelledby="pills-contact-tab">
                                     
                                        <div className="submit-table comon-tabs-expert">
                                            <DeclineTable/>
                                        </div>
                                        
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
export default ProjectsDetailsExpert;