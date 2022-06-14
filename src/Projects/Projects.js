import React, {useState, useMemo,} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import TestTable from "./TestTable";
import ComonProjectTable from "./ComonProjectTable";
import MobileComonProjectsTable from "./MobileComonProjectsTable";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import MailEditor from "../MailEditor";


const config = {
   readonly: false,
   height: '280px',
   width: '100%',
   enableDragAndDropFileToEditor: true,
   buttons: [
       'source',
       '|',
       'bold',
       'italic',
       'underline',
       '|',
       'ul',
       'ol',
       '|',
       'font',
       'fontsize',
       'brush',
       'paragraph',
       '|',
       'image',
       'table',
       'link',
       '|',
       'left',
       'center',
       'right',
       'justify',
       '|',
       'undo',
       'redo',
       '|',
       'hr',
       'eraser',
       'fullsize',
   ],
   uploader: { insertImageAsBase64URI: false },
   removeButtons: ['brush', 'file','hr','font','fontsize','brush','image', 'undo',
   'redo','link','fullsize', 'table', 'undo','redo', 'back','paint','eraser','paragraph','source','|',
'justify'],
   showXPathInStatusbar: false,
   showCharsCounter: false,
   showWordsCounter: true,
   toolbarAdaptive: false,
   toolbarSticky: false,
   toolbarButtonSize: "middle",

};
function Projects(){
   const [value, setValue] = useState('')

  
  
  document.title ="Expert Cloud -  Projects"
 

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
          
           
             
             
             <div className="body-expart-div projects-pages">

             <div className="d-block d-lg-none  position-relative align-items-center">
               <div className="mobile-serch-sec-div">      
                  <input type="text" className="form-control" placeholder="Search.."/>
                  <NavLink to="/search">   <BsSearch/> </NavLink>
               </div>  
            </div>
                <div className="d-md-flex top-ps-seection justify-content-between align-items-center">

                  <div className="d-flex justify-content-between align-items-center">
                     <h2 className="m-0"> My Projects </h2>

                     <div className="d-block d-lg-none">
                        <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#carteProjectModal"> <BsPlusLg/>  Create Project </button>
                     </div>
                       
                   </div>
                  

                        <ul className="nav col-xl-6 mx-auto nav-pills mb-3 mt-4 mt-md-0 mb-md-0" id="pills-tab" role="tablist">
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
                  

                   <div className="d-none d-lg-block">
                   <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#carteProjectModal"> <BsPlusLg/>  Create Project </button>
                   </div>
                   
                </div>
               

                
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane pt-2 fade show active" id="pills-home" role="tabpanel" 
                aria-labelledby="pills-home-tab">
                  <div className="d-none d-lg-block">
                   <ComonProjectTable/>
                  </div>

                  <div className="d-block d-lg-none">
                     <MobileComonProjectsTable/>
                  </div>


                  
                
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="d-none d-lg-block">
                <ComonProjectTable/>
               </div>

               <div className="d-block d-lg-none">
                  <MobileComonProjectsTable/>
               </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="d-none d-lg-block">
                <ComonProjectTable/>
               </div>

               <div className="d-block d-lg-none">
                  <MobileComonProjectsTable/>
               </div>
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
                             <textarea className="form-control d-none" placeholder="Project brief"></textarea>
                             <figure className="mainl-c d-none">
                                <img src="images/mail-pic.png"/>
                             </figure>
                             <MailEditor setValue={setValue}  config={config} />
                            
                            
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

  
     </>
  );
}


 export default Projects;