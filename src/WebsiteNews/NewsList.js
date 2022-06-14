import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import Data from "./NewBlogsApi";
import { FaAngleLeft,FaAngleRight,FaChevronRight,FaRedo } from "react-icons/fa";

function NewsList(){
    const [ noOfElement , setnoOfElement] = useState(9);
    const slice = Data.AllNewsBlogs.slice(0, noOfElement);
  
    
    const LoadMore = () => {
      setnoOfElement(noOfElement + noOfElement);
     
    }
    return(
        <>
        <div className="row row-cols-1 row-cols-lg-3 g-lg-5 mt-0">
            {slice.map((item, index) => {
                return(
                    <>
                    
                        <div className="col">
                                <NavLink to={item.link} className="comon-ads1">
                                    <figure>
                                        <figcaption className="feature-in"> {item.feature} </figcaption>
                                        <img src="images/blog-img.svg" alt="bg"/>
                                    </figure>
                                    <h5> {item.titel} </h5>
                                    <p> {item.description}</p>
                                    <h3 to="/" className="tgs">{item.tags} </h3>
                                    <h6> at {item.date} : {item.time} </h6>
                                </NavLink>
                        </div>
            
                   
                    </>
                );
            })}
         </div>
         <button className="loading-btn btn text-center mx-auto d-table"
         onClick={() => LoadMore()} >
         <FaRedo/> Load More News </button>

         <hr className="my-5"/>
        </>
    );
}

export default NewsList;