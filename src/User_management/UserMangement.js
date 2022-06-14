import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import { FaAngleLeft } from "react-icons/fa";
import {BsPlusLg ,BsPlus, BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import UserMangementTable from "./UserMangementTable";
import UserManagementTable from "./UserManagementTable";



function UserMangement(){
    document.title ="Expert Cloud -  User Management"

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
          
             
             
             <div className="body-expart-div projects-pages  user-mg-page">

              <div className="d-block d-lg-none  position-relative align-items-center">
                  <div className="mobile-serch-sec-div">      
                    <input type="text" className="form-control" placeholder="Search.."/>
                    <NavLink to="/search">   <BsSearch/> </NavLink>
                  </div>  
              </div>


                <div className="d-flex top-ps-seection justify-content-between align-items-center">
                   <h2> User Management </h2>

                  

                   <button className="btn add-ps-btn" data-bs-toggle="modal" 
                   data-bs-target="#adduser"> <BsPlusLg/>  Add New </button>
                </div>
               

                

                <div className="d-none d-lg-block">
                    <div className="managment-table">
                        <UserMangementTable/>
                    </div>
                </div>
                <div className="d-block d-lg-none">
                     <UserManagementTable/>
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



      <div className="modal fade projects-modal" id="adduser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              <div className="projects-modal-divs">
                  <div className="d-flex position-relative align-items-center">
                  
                  <h2 className="text-center mx-auto"> Add User </h2>
                  </div>
             
                  <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>

                  <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="form-group">
                          <label>User Name *</label>
                          <input type="text" className="form-control" placeholder="Johnson Willianson"/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input type="email" className="form-control" placeholder="Enter email address"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                          <label>Role *</label>
                          <input type="text" className="form-control" placeholder="Enter Role"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                          <label>Action *</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Enter Action</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                    </div>

                    

                    <div className="col-lg-12 mt-5">
                       <button data-bs-dismiss="modal" type="button" className="btn col-lg-5 mx-auto btnsm"> Add User </button>
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


 export default UserMangement;