import React,{useEffect} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft, FaEnvelope, FaMapMarkerAlt,FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
import Aos from "aos";
import ContactForm from "./ContactForm";
import Header from "../Header";
import Footer from "../Footer";

function Contact(){
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
        document.title ="Expert Cloud -  Contact"
    return(
        <>
        <Header/>
           
            <div className="body-sections py-5">
              <div className="contact-us">
                <div className="container">
                     <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                         <div className="col">
                            <h2> Contact Us </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae. Bibendum enim facilisis gravida neque. Ultrices dui sapien eget mi.
                             Pharetra convallis posuere morbi leo urna molestie.</p>
                             <div className="d-none d-lg-block">
                                 <div className="bottom-contact-us">
                                    <span className="d-block"> <FaEnvelope/> Contact@Nextyn.com </span>
                                    <span className="d-block"> <FaMapMarkerAlt/> New York, USA</span>
                                    <hr className="mt-5"/>
                                    <ul className="list-unstyled d-flex cont-socal">
                                       <li> <NavLink to=""> <FaFacebookF/> </NavLink> </li>
                                       <li> <NavLink to=""> <FaInstagram/> </NavLink> </li>
                                       <li> <NavLink to=""> <FaTwitter/> </NavLink> </li>
                                    </ul>
                                 </div>
                             </div>
                         </div>
                         <div className="col">
                            <ContactForm/>
                            <div className="d-block d-lg-none">
                                 <div className="bottom-contact-us">
                                    <span className="d-block"> <FaEnvelope/> Contact@Nextyn.com </span>
                                    <span className="d-block"> <FaMapMarkerAlt/> New York, USA</span>
                                    <hr className="mt-3"/>
                                    <ul className="list-unstyled d-flex cont-socal">
                                       <li> <NavLink to=""> <FaFacebookF/> </NavLink> </li>
                                       <li> <NavLink to=""> <FaInstagram/> </NavLink> </li>
                                       <li> <NavLink to=""> <FaTwitter/> </NavLink> </li>
                                    </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
              </div>
            </div>
         
        <Footer/>
        </>
    );
}
export default Contact;