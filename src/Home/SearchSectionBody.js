import React from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";

function SearchSectionBody(){
    return(
         <>
         <div className="row row-cols-1 row-cols-lg-2">
            <div className="col" data-aos="fade-left">
                <figure className="m-0">
                <img src="images/landing-search.svg" alt="svg1"/>
                </figure>
            </div>
            <div className="col" data-aos="fade-right">
                <div className="comon-section-landing col-lg-9">
                <h2> Search. </h2>
                <p> Our advanced NLP based search lets you identify experts that match your 
                project requirements
                </p>
                <h5> Search based on: </h5>
                <ul className="list-unstyled">
                    <li>
                    <button className="btn btn-comon-web">
                    Industry
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-comon-web">
                    Designation
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-comon-web">
                    Company
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-comon-web">
                    Expertise
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-comon-web">
                    Price
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-comon-web">
                    Location
                    </button>
                    </li>
                </ul>
                <NavLink to="/" className="btn click-btn"> at the click of a button </NavLink>
                <p className="mt-3"> Pre-vetted marketplace of experts from over 90 geographies 
                and 30 industries </p>

                <NavLink to="/" className="btn get-start-btn"> Get Started  <FaAngleRight/> </NavLink>


                </div>
            </div>

         </div>
         </>
    );
}

export default SearchSectionBody;