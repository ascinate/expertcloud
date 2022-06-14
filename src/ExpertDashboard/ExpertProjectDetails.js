import React, {useState, useMemo,} from "react";
import {NavLink } from "react-router-dom";
import ExpertSidebar from "../ExpertSidebar";
import ExpertTopMenu from "../ExpertTopMenu";
import ExpertMobileMenu from "../ExpertMobileMenu";
import { FaAngleLeft } from "react-icons/fa";
import ProjectLeftSection from "./ProjectLeftSection";
import ExpertRightSection from "./ExpertRightSection";
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



function ExpertProjectDetails(){
    const [value, setValue] = useState('');
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    
   document.title ="Expert Cloud -  Compliance"
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

                    <div className="ex-project-details">
                        <NavLink to="/" className="mb-4 btn search-btn-back"> <FaAngleLeft/> Profile Details </NavLink>
                        <div className="request-body-sec">
                            <div className="d-md-flex justify-content-between">
                            
                                <ProjectLeftSection/>
                            
                            
                                <ExpertRightSection/>
                            
                            </div>
                         </div>
                    </div>

                </div>
               
              </div>
           </div>
         </main>
         </div>



         <div className="modal fade edit-ps-modal" id="editprofilemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
                 <div className="projects-modal-divs">
                     
                     
                     <h2 className="text-center mx-auto"> Edit Profile</h2>
                     <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
                    
                     
                     <div className="edite-from">
                        <div className="form-group">
                           <label> Hourly Rate </label>
                           <input type="text" className="form-control" placeholder="$523"/>
                        </div>

                        <div className="form-group">
                           <label className="d-flex justify-content-between"> Companies worked with
                            <button type="button" className="btn p-0 add-btn">12 Added </button> </label>
                           
                           <select className="form-select" aria-label="Default select example">
                            <option selected>University of Minnesota, industry 2,  industry 3, Indu...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                           <label className="d-flex justify-content-between"> Industry Groups & Tags
                            <button type="button" className="btn p-0 add-btn">32 Added </button> </label>
                           
                           <select className="form-select" aria-label="Default select example">
                            <option selected>University of Minnesota, industry 2,  industry 3, Indu...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                           <input type="submit" value="Save Changes" className="btn submit-save"/>
                        </div>
                        <div className="form-group">
                           <p className="text-center">  Want to change password ? <a data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#passwordchangemodal" className="md-titel-link"> 
                           Change password </a>  </p>
                        </div>
                       

                     </div>
                     
                 </div>
             </div>
             
           </div>
         </div>
         </div>



         <div className="modal fade edit-ps-modal" id="passwordchangemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
                 <div className="projects-modal-divs">
                     
                     
                     <h2 className="text-center mx-auto"> Change Password </h2>
                     <p className="text-center"> Keep your account protected with a strong password </p>
                    
                     
                     <div className="edite-from">
                        <div className="form-group">
                            <label> Current Password * </label>
                            <div className="lable-input">
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Dhruv123#" />
                            <div className="input-group-btn">
                            <button className="btn" onClick={togglePassword}>
                            { passwordType==="password"? <i className="fa fa-fw fa-eye-slash"></i> :<i class="fa fa-fw fa-eye"></i> }
                            </button>
                            </div>
                            </div> 
                        </div>

                        
                        <div className="form-group">
                            <label> New Password * </label>
                            <div className="lable-input">
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="**********" />
                            <div className="input-group-btn">
                            <button className="btn" onClick={togglePassword}>
                            { passwordType==="password"? <i className="fa fa-fw fa-eye-slash"></i> :<i class="fa fa-fw fa-eye"></i> }
                            </button>
                            </div>
                            </div> 
                        </div>

                        <div className="form-group">
                            <label> Re-enter New Password * </label>
                            <div className="lable-input">
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="**********" />
                            <div className="input-group-btn">
                            <button className="btn" onClick={togglePassword}>
                            { passwordType==="password"? <i className="fa fa-fw fa-eye-slash"></i> :<i class="fa fa-fw fa-eye"></i> }
                            </button>
                            </div>
                            </div> 
                        </div>

                      

                        <div className="form-group">
                           <input type="submit" value="Change Password" className="btn submit-save"/>
                        </div>
                        
                       

                     </div>
                     
                 </div>
             </div>
             
           </div>
         </div>
         </div>




         <div className="modal fade text-email-modal" id="editDsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Edit Description</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="projects-modal-divs">
                     
                     
                         <h2 className="text-center mx-auto"> Edit Description </h2>
                         <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
               
                
                                <div className="text-area-sec-modal">
                                
                                    <label> Description * </label>

                                    <div className="form-group area-email">
                                       <MailEditor setValue={setValue}  config={config} />
                                    </div>
                                

                                <div className="form-group">
                                    <input type="submit" value="Save Changes" className="btn submit-save"/>
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

 export default ExpertProjectDetails;