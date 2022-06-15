import React,{useEffect} from "react";
import {NavLink } from "react-router-dom";
import Aos from "aos";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import SearchSectionBody from "./SearchSectionBody";
import ConsultLanding from "./ConsultLanding";
import CollaborateLanding from "./CollaborateLanding";
import FaqSectionLanding from "./FaqSectionLanding";
import ConatctComonWeb from "../ConatctComonWeb";
import WorkIndustry from "./WorkIndustry";
import NewsBlogs from "./NewsBlogs";
import CareerSection from "./CareerSection";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";



function Home(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
    
      
      <div className="home-banner">
         <div className="container">
            
               <div className="col-lg-12 mx-auto" data-aos="fade-down">
                  <h1 className="text-center"> <span>We are Nextyn : </span> 
                  A closed source global expert marketplace </h1>
                  <h3 className="mt-lg-4 col-lg-8 mx-auto text-center">Connect with industry experts, efficiently</h3>
                  <div className="d-md-flex justify-content-center align-items-center mt-md-5">
                     <NavLink to="/" className="btn find-btn"> Find Experts Now <FaAngleRight/> </NavLink>
                     <NavLink to="/" className="btn contact-btn"> Contact Us <FaAngleRight/> </NavLink>
                  </div>
               </div>
               
            
         </div>
      </div>

      <div className="body-sections">

          <WorkIndustry/>
          <div className="expert-cloud-div py-5">
            <div className="container">
                <h1 className="text-center" data-aos="fade-down"> Expert Cloud </h1>
                <p className="text-center subtext1" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>

          <div className="comon-web-search-sec home-body">
            <div className="container">

             <SearchSectionBody/>

             <ConsultLanding/>

             <CollaborateLanding/>

             
             
             <CareerSection/>

             <NewsBlogs/>

             <ConatctComonWeb/>

            </div>
          </div>

      </div>
  
      <Footer/>
     </>
  );
}


 export default Home;