import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import AppenDiv from "./AppendDiv";

function StepFour(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
    return(
        <>

        <div className="totoal-re-div">
            <h1 className="comon-re-texts">
            Participate in <span className="d-block"> Online Surveys </span>
            </h1>

            <NavLink className="logo re-spi-logo d-block d-lg-none mb-5 active" to="/">
                    <img src="images/logo-main.svg" alt="logo"/>
            </NavLink>

            <div className="main-re-from-divs col-lg-8 mx-auto">
                
            
                

                <h5> EXPERT REGISTRATION </h5>
                <h2> Acceptance of terms </h2>
                
                <div className="row mt-5">
                    
                    <div className="col-lg-12">
                        <div className="form-group">
                        <label> Email* </label>
                        
                        <input type="text" className="form-control" placeholder="Dhruv@nextyn.com"/>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                        <label> Hourly Consulting Rate* </label>
                        
                            <div className="d-flex form-control ne-usd justify-content-between">
                                <span> <b> USD </b>   </span>
                            
                                <input type="text" className="form-control" placeholder="110"/>
                        
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-12">
                        <div className="form-group">
                            <label> Advisor : Click to Sign </label>
                        
                            <button className="btn file-sign" data-bs-toggle="modal" data-bs-target="#signdModal">
                            Click to SIgn
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                        <label> Name </label>
                        
                                <input type="text" className="form-control" placeholder="Name"/>
                        
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                        <label> Date </label>
                        
                            <input type="text" className="form-control" placeholder="Apr 30, 2022" disabled/>
                        
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <div className="last-details">
                            <h5> Nextyn Advisory Pvt Ltd. </h5>
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <ul className="list-unstyled">
                                    <li> <span> Name : </span> Rasesh Seth </li>
                                    <li> <span> Titlee : </span> Director </li>
                                    <li> <span> Date :  </span> Apr 30, 2022 </li>
                                </ul>
                                <div className="signd">
                                    <figure>
                                    
                                    </figure>
                                    <h5 className="text-center mt-2">  Signature </h5>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <a data-bs-toggle="modal" data-bs-target="#CompletModl" className="btn login-btn" > Complete Induction </a>
                    </div>

                    

                </div>

                
            </div>
        </div>


      <div className="modal fade sign-modal-div" id="signdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="add-ps-modal-1">
                  <h2 className="text-center"> Signature  </h2>
                  <p className="text-center"> You have successfully registered  </p>
                    <div className="row">
                         <div className="col-lg-12">
                           <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                <label className="form-check-label" for="flexCheckDefault">
                                Use Keyword 
                                </label>
                           </div>
                         </div>
                         <div className="col-lg-12 mt-2">
                            <div className="comon-sign1">
                                <figure className="m-0">
                                   <img src="images/type-img.svg" alt="svg"/>
                                </figure>
                                <input class="form-control me-2" type="text" placeholder="Type Sign" />
                            </div>
                         </div>
                         <div className="col-lg-12 my-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                Upload Signature
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group">
                            

                            <div className="file-upload">
                                <div className="d-flex text-a1 align-items-center justify-content-center">
                                    <figure className="m-0">
                                    <img src="images/color-file.svg" alt="svg"/>
                                    </figure>
                                    <p> Drag and drop / Upload Sign</p>
                                </div>
                                <input type="file"/>
                            </div>
                                
                            </div>
                        </div>

                  




                    

                    <div className="col-lg-12 mt-3">
                        <button  data-bs-toggle="modal" data-bs-target="#CompletModl" data-bs-dismiss="modal" 
                        className="btn col-lg-5 mx-auto btnsm"> Complete Induction </button>
                    </div>


                    </div>
                </div>
            </div>
           
            </div>
        </div>
      </div>


        <div className="modal fade complets-td-divs" id="CompletModl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                       
                    <div className="add-ps-modal-1">
                       <figure className="d-table mx-auto">
                          <img src="images/file-check2.svg" alt="nm"/>
                       </figure>
                       
                       <h2 className="text-center"> You have successfully registered </h2>
                        <p className="text-center"> Welcome to Nextyn’s Panel of Experts </p>
               
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        
        </>
    );
}
export default StepFour;