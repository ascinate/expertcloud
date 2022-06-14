import React from "react";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import {NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
import { BsPlusLg,BsSearch,BsRecordFill } from "react-icons/bs";

function Conversations(){
    document.title ="Expert Cloud -  Conversations"
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
                
                     <div className="body-expart-div request-page converstion-page">
  
                         <div className="converstion-divs">
                              <div className="d-md-flex justify-content-between">
                                 <div className="col-lg-4">
                                    <h2> Conversations </h2>
                                    <div className="serch-divs my-4">
                                       <div className="form-group form-control">
                                           <BsSearch/>
                                           <input type="text" placeholder="Search.."/>
                                       </div>
                                    </div>


                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" 
                                        data-bs-target="#v-pills-home" type="button" role="tab" 
                                        aria-controls="v-pills-home" aria-selected="true">
                                           <figure>
                                              <img src="images/chats-pic1.png" alt="pn"/>
                                           </figure>
                                           <h5> Monika George 
                                            <span className="d-block"> Lorem ipsum dolor sit amet... </span>
                                           </h5>
                                           <h6>2</h6>
                                        </button>
                                        <button className="nav-link" id="v-pills-profile-tab"
                                         data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button"
                                          role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                          <figure>
                                          <img src="images/chats-pic2.png" alt="pn"/>
                                            </figure>
                                            <h5>John Doe
                                                <span className="d-block"> Lorem ipsum dolor sit amet... </span>
                                            </h5>
                                            <h6>4</h6>
                                          </button>
                                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" 
                                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                                         aria-selected="false">
                                              
                                           <figure>
                                              <img src="images/chats-pic3.png" alt="pn"/>
                                           </figure>
                                           <h5> Emi Willis
                                            <span className="d-block"> Lorem ipsum dolor sit amet... </span>
                                           </h5>
                                           
                                         
                                         </button>
                                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                         data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" 
                                         aria-selected="false">
                                         
                                            <figure>
                                               <img src="images/chats-pic4.png" alt="pn"/>
                                            </figure>
                                            <h5> Cavin S
                                            <span className="d-block"> Lorem ipsum dolor sit amet... </span>
                                            </h5>
                                         
                                         
                                         </button>
                                    </div>
                                 </div>

                                 <div className="col-lg-8 ps-md-4">
                                     <div className="chat-divs-scetion">
                                     
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-home"
                                             role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                 
                                                 <div className="comon-chats-divs">
                                                      <div className="d-flex users-details align-items-center justify-content-between">
                                                          <div className="user-status d-flex align-items-center">
                                                             <figure className="my-0">
                                                                <img src="images/chats-pic4.png" alt="pn"/>
                                                             </figure>
                                                             <h5 className="ms-2 my-0"> Monika George <span className="online"> <BsRecordFill/> Online </span> </h5>
                                                          </div>

                                                          <div className="dropdown">
                                                            <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img src="images/chats-dots.png" alt="nm"/>
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li><a className="dropdown-item" id="#">Clear Chat</a></li>
                                                            </ul>
                                                          </div>

                                                         

                                                          
                                                      </div>

                                                      <div className="all-chat-divs">

                                                         <div className="charts-sections1">

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
                                                                consectetur adipiscing elit, sed do eiusmod.
                                                                </p>
                                                                <h6> Just Now </h6>
                                                            </div>


                                                            <div className="admin-text">
                                                                <p className="content"> 
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                                                </p>
                                                                <h6> Just Now </h6>
                                                            </div>
                                                        </div>


                                                      </div>
                                                 </div>
                                             
                                             </div>
                                            <div className="tab-pane fade" id="v-pills-profile"
                                             role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                             
                                             <div className="comon-chats-divs">
                                                    <div className="d-flex users-details align-items-center justify-content-between">
                                                        <div className="user-status d-flex align-items-center">
                                                            <figure className="my-0">
                                                            <img src="images/chats-pic2.png" alt="pn"/>
                                                            </figure>
                                                            <h5 className="ms-2 my-0"> John Doe <span className="online"> <BsRecordFill/> Online </span> </h5>
                                                        </div>

                                                        <div className="dropdown">
                                                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src="images/chats-dots.png" alt="nm"/>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a className="dropdown-item" id="#">Clear Chat</a></li>
                                                        </ul>
                                                        </div>

                                                        

                                                        
                                                    </div>

                                                    <div className="all-chat-divs">

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
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>


                                                        <div className="admin-text">
                                                            <p className="content"> 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>



                                                    </div>
                                             </div>
                                             
                                             </div>
                                            <div className="tab-pane fade" id="v-pills-messages" 
                                            role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                  
                                               <div className="comon-chats-divs">
                                                    <div className="d-flex users-details align-items-center justify-content-between">
                                                        <div className="user-status d-flex align-items-center">
                                                            <figure className="my-0">
                                                            <img src="images/chats-pic3.png" alt="pn"/>
                                                            </figure>
                                                            <h5 className="ms-2 my-0"> Emi Willis <span className="online"> <BsRecordFill/> Online </span> </h5>
                                                        </div>

                                                        <div className="dropdown">
                                                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src="images/chats-dots.png" alt="nm"/>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a className="dropdown-item" id="#">Clear Chat</a></li>
                                                        </ul>
                                                        </div>

                                                        

                                                        
                                                    </div>

                                                    <div className="all-chat-divs">

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
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>


                                                        <div className="admin-text">
                                                            <p className="content"> 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>



                                                    </div>
                                               </div>
                                            
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-settings"
                                             role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                             
                                               <div className="comon-chats-divs">
                                                    <div className="d-flex users-details align-items-center justify-content-between">
                                                        <div className="user-status d-flex align-items-center">
                                                            <figure className="my-0">
                                                            <img src="images/chats-pic4.png" alt="pn"/>
                                                            </figure>
                                                            <h5 className="ms-2 my-0"> Cavin S <span className="online"> <BsRecordFill/> Online </span> </h5>
                                                        </div>

                                                        <div className="dropdown">
                                                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src="images/chats-dots.png" alt="nm"/>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a className="dropdown-item" id="#">Clear Chat</a></li>
                                                        </ul>
                                                        </div>

                                                        

                                                        
                                                    </div>

                                                    <div className="all-chat-divs">

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
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>


                                                        <div className="admin-text">
                                                            <p className="content"> 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                                            </p>
                                                            <h6> Just Now </h6>
                                                        </div>



                                                    </div>
                                               </div>
                                             
                                             </div>
                                        </div>

                                        <div className="type-chat-sec ">
                                            <div className="form-group">
                                               <input type="text" className="form-control" placeholder="Type Messege"/>
                                            </div>
                                            <label className="file-btn">
                                               <input type="file"/>
                                               <img src="images/file-input.png" alt="file"/>
                                            </label>
                                            <a id="#" className="emojee-btn">
                                                <img src="images/emojjee.png" alt="smo"/>
                                            </a>

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

export default Conversations;