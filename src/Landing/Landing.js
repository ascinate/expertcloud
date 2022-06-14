import React from "react";
import {NavLink } from "react-router-dom";
import Aos from "aos";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import SearchSectionBody from "./SearchSectionBody";
import ConsultLanding from "./ConsultLanding";
import CollaborateLanding from "./CollaborateLanding";
import FaqSectionLanding from "./FaqSectionLanding";
import ConatctComonWeb from "../ConatctComonWeb";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";



function Landing(){
  Aos.init({
    offset: 100,
    easing: 'ease',
    delay: 0,
    once: true,
    duration: 800,
  
  });
    document.title ="Expert Cloud -  Landing"
   


  return(
     <>
      <Header/>
    
      
      <div className="landing-banner">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7" data-aos="fade-down">
                  <h1> <span>We are Nextyn : </span> 
                  the best way to connect with Industry Experts </h1>
                  <p className="mt-lg-4 col-lg-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore.</p>
               </div>
               <div className="col-lg-5" data-aos="fade-up">
                   <div className="form-sec-ban">
                      <h2 className="text-center mb-5" > Get Nextyn Trial version <span className="d-block">
                      to find experts </span> </h2>
                      <div className="form-group">
                         <label> Full Name </label>
                         <input type="text" className="form-control" placeholder="Dhruv123#"/>
                      </div>
                      <div className="form-group">
                         <label> Email Address </label>
                         <input type="text" className="form-control" placeholder="Dhruv@Nextyn.com"/>
                      </div>
                      <div className="form-group">
                         <input type="submit" className="btn submit" value="Get Started"/>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </div>

      <div className="body-sections">
          <div className="expert-cloud-div py-5">
            <div className="container">
                <h1 className="text-center" data-aos="fade-down"> Expert Cloud </h1>
                <p className="text-center subtext1" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>

          <div className="comon-web-search-sec">
            <div className="container">

             <SearchSectionBody/>

             <ConsultLanding/>

             <CollaborateLanding/>

             <FaqSectionLanding/>

             <ConatctComonWeb/>

            </div>
          </div>

      </div>
  
      <Footer/>
     </>
  );
}


 export default Landing;