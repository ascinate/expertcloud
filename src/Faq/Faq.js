import React,{useEffect} from "react";
import {NavLink } from "react-router-dom";
import Aos from "aos";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import ConatctComonWebFaq from "./ConatctComonWebFaq";
import FaqSectionOne from "./FaqSectionOne";
import FaqSectionThree from "./FaqSectionThree";
import FaqSectionTwo from "./FaqSectionTwo";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";



function Faq(){
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
    
      <div className="body-sections pt-5">

          <div className="comon-web-search-sec faq-page">
             <div className="container">
                <h1 className="text-center" data-aos="fade-down"> FAQ </h1>
                <p className="text-center subtext1 mb-4" data-aos="fade-up"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.
                </p>
                

                <FaqSectionOne/>

                <FaqSectionTwo/>
                
                <FaqSectionThree/>


                <ConatctComonWebFaq/>


             </div>
          </div>

      </div>
  
      <Footer/>
     </>
  );
}


 export default Faq;