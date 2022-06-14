import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import { FaAngleLeft } from "react-icons/fa";
import {BsPlusLg ,BsPlus, BsFilterLeft,BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import RequestTableCell from "./RequestTableCell";
import CompleteTables from "./CompleteTables";
import CompletesTableMobile from "./CompletesTableMobile";


function ExpertCell(){
    document.title ="Expert Cloud -  Expert Cell"

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
          
          <div className="d-block d-lg-none  position-relative align-items-center">
              <div className="mobile-serch-sec-div">      
                <input type="text" className="form-control" placeholder="Search.."/>
                <NavLink to="/search">   <BsSearch/> </NavLink>
              </div>  
          </div>
             
             <div className="body-expart-div projects-pages expert-cell-page">
                <div className="d-md-flex top-ps-seection justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="m-0"> Expert Calls </h2>

                        <div className="d-block d-lg-none">
                            <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#carteProjectModal"> <BsPlusLg/>  Create Project </button>
                        </div>

                     </div>

                   <ul className="nav col-lg-6 mx-auto nav-pills mb-3 mt-4 mt-md-0 mb-md-0" id="pills-tab" role="tablist">
                   <li className="nav-item" role="presentation">
                     <button className="nav-link active" id="pills-home-tab" 
                     data-bs-toggle="pill" data-bs-target="#pills-home" 
                     type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                     Requested Calls </button>
                   </li>
                   <li className="nav-item" role="presentation">
                     <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" 
                     data-bs-target="#pills-profile" type="button" role="tab"
                      aria-controls="pills-profile" aria-selected="false">Completed Calls</button>
                   </li>
                   

                   </ul>
                   <div className="d-none d-lg-block">
                      <button className="btn add-ps-btn" data-bs-toggle="modal" 
                      data-bs-target="#"> <BsPlusLg/>  Add Expert </button>
                  </div>
                </div>
               

                
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane pt-2 fade show active" id="pills-home" role="tabpanel" 
                aria-labelledby="pills-home-tab">
                 <div className="d-none d-lg-block">   
                    <RequestTableCell/>
                </div>

                <div className="d-block d-lg-none">   
                    <CompletesTableMobile/>
                </div>


                  
                
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                     <CompleteTables/>
                </div>
                
              </div>

             </div>
          
          </div>
       </div>
     </main>
     </div>


     <div className="modal fade pro-jects1" id="carteProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="add-ps-modal-1">
                 <h2 className="text-center"> Create New Project </h2>
                 <p className="text-center"> Detail out your reqiurement to help us match you with the best in the industry </p>
                 <div className="row">
                    <div className="col-lg-12">
                       <div className="form-group">
                          <label> Project title * </label>
                          <input type="text" className="form-control" placeholder="Project name"/>
                       </div>
                    </div>

                    <div className="col-lg-6">
                       <div className="form-group">
                          <label>Number of expected calls *</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                       </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="form-group">
                          <label>Project deadline *</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                    </div>


                    <div className="col-lg-12">
                       <div className="form-group">
                          <label> Project Overview * </label>
                          <div className="mainl">
                             <textarea className="form-control" placeholder="Project brief"></textarea>
                             <figure className="mainl-c">
                                <img src="images/mail-pic.png"/>
                             </figure>
                          </div>
                          
                       </div>
                    </div>

                    <div className="col-lg-12">
                       <button  data-bs-toggle="modal" data-bs-target="#projects-modal" data-bs-dismiss="modal" 
                       className="btn col-lg-5 mx-auto btnsm"> Create </button>
                    </div>


                 </div>
              </div>
          </div>
          
        </div>
      </div>
     </div>


   

      <div className="modal fade projects-modal" id="projects-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="projects-modal-divs">
                  <div className="d-flex position-relative align-items-center">
                  <button  data-bs-toggle="modal" data-bs-target="#carteProjectModal" data-bs-dismiss="modal" 
                  className="btn back-n-bt mr-auto"> <FaAngleLeft/> Back </button>
                  <h2 className="text-center mx-auto"> You are almost done </h2>
                  </div>
             
                  <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label>Geography of experts *</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                          <label>Target Companies *</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                          <label>Invite your team (Optional)*</label>
                          <div className="new-input1 d-flex justify-content-between">
                             <input type="form-control" placeholder="Enter Email.."/>
                             <span> techrefic.com</span>
                          </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                        Request calls to be recorded
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-5">
                       <button data-bs-dismiss="modal" type="button" className="btn col-lg-5 mx-auto btnsm"> Submit</button>
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


 export default ExpertCell;