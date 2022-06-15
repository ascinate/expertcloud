import React,{useEffect} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft, FaEnvelope, FaMapMarkerAlt,FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
import Aos from "aos";
import ConatctComonWebFaq from "./ConatctComonWebFaq";
import Data from "./ComplianceApi";
import Header from "../Header";
import Footer from "../Footer";

function Compliance(){
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
        document.title ="Expert Cloud -  Compliance"
    return(
        <>
        <Header/>
           
            <div className="body-sections py-5">
              <div className="compliance-d1">
                <div className="container">
                     <h2 > Compliance </h2>
                     <p className="subtext1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                     <div className="inside-page mt-5">

                     {Data.AllCompliance.map((item, index) => {
                      return(
                       
                        <div className="comon-compliance">
                           <h5> {item.date} </h5>
                           <p> {item.para}
                           </p>

                           <div className="d-md-flex justify-content-between">
                                <NavLink to={item.link}> Expert Terms & Conditions - Signed (Download)</NavLink>
                                <h6> {item.sign} </h6>
                           </div>

                           <hr/>

                        </div>
                        
                        )
                      })}
                        

                     </div>
                </div>
              </div>
            </div>

            <ConatctComonWebFaq/>
         
        <Footer/>
        </>
    );
}
export default Compliance;