import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";
import { FaAngleLeft } from "react-icons/fa";
import MobileMenu from "../MobileMenu";

function ExpertProfile(){
  document.title ="Expert Cloud -  Expert Profile"
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
              
                   <div className="body-expart-div request-page">
                       <NavLink to="/search" className="mb-0 btn search-btn-back"> <FaAngleLeft/> Profile Details </NavLink>
                       <hr className="sp-hr w-100"/>
                       
                       <div className="request-body-sec">
                          <div className="d-md-flex justify-content-between">
                           
                               <div className="left-section-divs">
                                 <h2> Senior Consultant Gehrman Lehman Group (GLG), Emissary Exchange and Manager 
                                 </h2>
                                 <ul className="list-unstyled mt-4 d-flex align-items-center">
                                    <li> 
                                     <span>   <img src="images/sl-location.svg" alt="sv"/> </span> 
                                     Newyork,USA </li>

                                    <li> 
                                     <span>  <img src="images/company-icon.svg" alt="sv"/> </span> 
                                     Newyork,USA </li>

                                 </ul>
                                 <h5 className="mt-5"> DESCRIPTION </h5>
                                 <p> Eu augue ut lectus arcu bibendum at varius. Magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus ut faucibus. Non quam lacus suspendisse faucibus interdum posuere lorem. Aliquet lectus proin nibh nisl condimentum id venenatis. Dignissim cras tincidunt lobortis feugiat vivamus at. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Viverra vitae congue eu consequat ac felis donec et. Morbi tristique senectus et netus et. Nunc vel risus commodo viverra
                                  maecenas accumsan lacus vel. Ultrices dui sapien eget mi proin sed libero.</p>

                                  <p> Ut aliquam purus sit amet luctus venenatis lectus. Semper quis lectus nulla at volutpat diam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dolor purus non enim praesent. Arcu cursus euismod quis viverra nibh cras. Diam sollicitudin tempor id eu. Netus et malesuada fames ac turpis egestas sed. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Id diam vel quam elementum pulvinar etiam non quam. Vel pretium lectus quam id leo in vitae turpis. 
                                  Odio ut enim blandit volutpat maecenas volutpat blandit.</p>

                                  <p> Viverra suspendisse potenti nullam ac tortor vitae purus. Feugiat vivamus at augue eget arcu. Ante metus dictum at tempor commodo. Vel pharetra vel turpis nunc eget lorem. Suspendisse potenti nullam ac tortor vitae purus. Cursus eget nunc scelerisque viverra. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. In fermentum et sollicitudin ac orci phasellus egestas tellus. Nibh sed pulvinar proin gravida hendrerit lectus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Enim sit amet venenatis urna cursus eget nunc scelerisque. Vivamus arcu felis bibendum ut tristique et. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nisi quis eleifend quam adipiscing vitae proin sagittis. Aliquet porttitor lacus
                                   luctus accumsan tortor posuere ac ut. Aliquam sem fringilla ut morbi tincidunt.</p>

                               </div>
                            
                             
                                <div className="right-section-div mt-5 mt-md-0">
                                    <h2 className="text-center"> $525 <span>/hour </span> </h2>


                                    <a data-bs-toggle="modal" data-bs-target="#expertmodal"className="btn requset-1btn"> Request</a>

                                    <h5 className="mt-4"> Expert info </h5>
                                    <ul className="mt-4 list-unstyled">
                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon1.svg"/>
                                        </figure>
                                        <div className="text-ex">
                                        Since Mar 13, 2022
                                        </div>
                                      </li>

                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon2.svg"/>
                                        </figure>
                                        <div className="text-ex">
                                        23 Recording
                                        </div>
                                      </li>

                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon3.svg"/>
                                        </figure>
                                        <div className="text-ex">
                                        3.4K Transcription
                                        </div>
                                      </li>

                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon4.svg"/>
                                        </figure>
                                        <div className="text-ex">
                                        Preffered Locations : India, America, France
                                        </div>
                                      </li>

                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon5.svg"/>
                                        </figure>
                                        <div className="text-ex list-btn3">
                                            <a id="" className="btn"> ACC Limited </a>
                                            <a id="" className="btn"> ACC Limited (LafargeHolcim) </a>
                                            <a id="" className="btn"> Axel Kellermann </a>
                                            <a id="" className="btn"> AVIZO - Business Manager </a>
                                        </div>
                                      </li>

                                      <li>
                                        <figure className="l-icon">
                                          <img src="images/expert-icon6.svg"/>
                                        </figure>
                                        <div className="text-ex list-btn3">
                                            <a id="" className="btn"> Project Management </a>
                                            <a id="" className="btn"> Mobile Payments </a>
                                            <a id="" className="btn"> Information Services, </a>
                                            <a id="more-bn" className="monr-btn"> +2more </a>
                                        </div>
                                      </li>
                                      

                                    </ul>
                                </div>
                            
                          </div>
                       </div>

                   </div>
              
             </div>
          </div>
        </main>
        </div>

        <div className="modal fade projects-modal speacial-expert" id="expertmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="projects-modal-divs">
                    <div className="d-flex position-relative align-items-center">
                    
                    <h2 className="text-center mx-auto"> How many experts would you <br/> like to consult?</h2>
                    </div>
  
                    <div className="row mt-3">
                      <div className="col-lg-12 px-3 mx-auto d-md-flex justify-content-center">
                          <a id="#" className="one-ex-btn btn"> One Expert </a>
                          <a id="#" className="more-ex-btn btn"> More than one </a>
                      </div>
                      <hr className="mt-4 mx-auto "/>
                     
                      <div className="notes col-lg-12 px-3 mx-auto">
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

 export default ExpertProfile;