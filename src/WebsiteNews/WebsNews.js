import React from "react";
import {NavLink } from "react-router-dom";
import Aos from "aos";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import ConatctComonWebFaq from "./ConatctComonWebFaq";
import NewsList from "./NewsList";
import Header from "../Header";
import Footer from "../Footer";


function WebsNews(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
        document.title ="Expert Cloud -  News"
    return(
        <>
        <Header/>
         <div className="body-sections py-5">
             <div className="webnews-div">
                    <div className="container">
                        <h1 className="text-center"> News & Insights </h1>
                        <p className="text-center sub-text2"> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,</p>

                        
                            <NewsList/>

                    
                    </div>
                    <ConatctComonWebFaq/>
             </div>
            
          </div>
        
         <Footer/>
        </>
    );
}
export default WebsNews;