import React, {useState, useMemo,} from "react";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import {NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { BsFilterLeft, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import { BsPlusLg } from "react-icons/bs";
import NotesSetions from "./NotesSetions";
import FolderSections from "./FolderSections";
import RecenetViewTable from "./RecenetViewTable";
import MailEditor from "../MailEditor";
const config = {
   readonly: false, 
   height: '200px',
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
function Collaborate(){
   const [value, setValue] = useState('')
    document.title ="Expert Cloud -  Collaborate"
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
                        <div className="d-block d-lg-none  position-relative align-items-center">
                              <div className="mobile-serch-sec-div">      
                              <input type="text" className="form-control" placeholder="Search.."/>
                              <NavLink to="/search">   <BsSearch/> </NavLink>
                              </div>  
                        </div>
                            
                         
                         
                         
                         <div className="request-body-sec collaborate-page">
                            <div className="notes-sections">
                                <NotesSetions/>
                            </div>
                            <hr className="mt-4 w-100"/>
                            <div className="folder-sections">
                                <FolderSections/>
                            </div>
                            <hr className="mt-4 w-100"/>
                            <div className="recente-vew-divs mt-5">
                                <h2 className="search-btn-back"> Recently Viewed (4) </h2>

                                <div className="comon-table-divs collab-table">
                                   <RecenetViewTable/>
                                </div>
                            </div>
                         </div>
  
                     </div>
                
               </div>
            </div>
          </main>
          </div>


   

          <div className="modal fade addmodal cm-modal-all" id="NotesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="inside-comon-modal">
                       <h2 className="text-center"> Add Your Note </h2>
                       <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
                       <form method="get" action="">
                         <div className="form-group">
                            <label> Note Title * </label>
                            <input type="text" className="form-control" placeholder="Note TItle"/>
                         </div>

                         <div className="form-group">
                            <label> Description * </label>
                            <div className="message-modal">
                                  <textarea placeholder="Write...." className="form-control d-none"></textarea>
                                  <figure className="mx-auto d-none">
                                     <img src="images/textarea-img.png" alt="texta"/>
                                  </figure>
                                  <MailEditor  setValue={setValue}  config={config}/>
                                  
                            </div>
                            
                         </div>
                         <div className="form-group">
                            <input type="submit" className="btn submit-bn" value="Add Note"/>
                         </div>
                       </form>
                    </div>
                </div>
               
              </div>
            </div>
          </div>


       
         
          <div className="modal fade addmodal cm-modal-all" id="contentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create Your Content</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="inside-comon-modal">
                       <h2 className="text-center">Create Your Content</h2>
                       <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
                       <form method="get" action="">
                         <div className="row">
                            <div className="col-lg-6">
                               <div className="form-group">
                                  <label> Content Title* </label>
                                  <input type="text" className="form-control" placeholder="Content Title*"/>
                               </div>
                            </div>

                            <div className="col-lg-6">
                               <div className="form-group">
                                  <label> Pick Cover </label>
                                  <input type="text" className="form-control" placeholder="Select Cover"/>
                               </div>
                            </div>
                         </div>

                         <div className="form-group">
                            <label> Content Area  * </label>
                            <div className="message-modal">
                                  <textarea placeholder="Write...." className="form-control d-none"></textarea>
                                  <figure className="mx-auto d-none">
                                     <img src="images/textarea-img.png" alt="texta"/>
                                  </figure>
                                  <MailEditor  setValue={setValue}  config={config}/>
                            </div>
                            
                         </div>

                         <div className="form-group">
                            <input type="submit" className="btn submit-bn" value="Add Files"/>
                         </div>

                       </form>
                    </div>
                </div>
               
              </div>
            </div>
          </div>


      

          <div className="modal fade addmodal cm-modal-all" id="coverModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create New Cover</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="inside-comon-modal">
                       <h2 className="text-center"> Create New Cover </h2>
                       <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
                       <form method="get" action="">
                         <div className="form-group">
                            <label> Cover Name * </label>
                            <input type="text" className="form-control" placeholder="Note TItle"/>
                         </div>

                         <div className="form-group">
                            <label> Description * </label>
                            <div className="message-modal">
                                  <textarea placeholder="Write...." className="form-control d-none"></textarea>
                                  <figure className="mx-auto d-none">
                                     <img src="images/textarea-img.png" alt="texta"/>
                                  </figure>
                                  <MailEditor  setValue={setValue}  config={config}/>
                            </div>
                            
                         </div>
                         <div className="form-group">
                            <input type="submit" className="btn submit-bn" value="Create Cover"/>
                         </div>
                       </form>
                    </div>
                </div>
               
              </div>
            </div>
          </div>


         
         
          <div className="modal fade addmodal cm-modal-all" id="FolderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add Your Files</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="inside-comon-modal">
                       <h2 className="text-center">Add Your Files</h2>
                       <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>
                       <form method="get" action="">
                         <div className="row">
                            <div className="col-lg-6">
                               <div className="form-group">
                                  <label> File Name Title* </label>
                                  <input type="text" className="form-control" placeholder="Content Title*"/>
                               </div>
                            </div>

                            <div className="col-lg-6">
                               <div className="form-group">
                                  <label> Pick Cover  </label>
                                  
                                  <select class="form-select" aria-label="Default select example">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                               </div>
                            </div>
                         </div>

                         <div className="form-group">
                            <label> Content Area  * </label>
                            
                            <div className="file-upload">
                            <label className="file-upload__label"><span>
                               <img src="images/file-img2.png" allt="icn"/>
                            </span>
                            Drag and drop your Files
                            </label>
                            
                            <input className="file-upload__input" type="file"/></div>
                            
                         </div>

                         <div className="form-group">
                            <input type="submit" className="btn submit-bn" value="Create"/>
                         </div>

                       </form>
                    </div>
                </div>
               
              </div>
            </div>
          </div>



          </>
    );
}

export default Collaborate;