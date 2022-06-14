import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft, FaRedo } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import Data from "./NotesDetailsApi";


function NotesSetions(){
    const [ noOfElement , setnoOfElement] = useState(4);
    const slice = Data.NotesAllDetails.slice(0, noOfElement);

    const LoadMore = () => {
        setnoOfElement(noOfElement + noOfElement);
       
    }

    return(
         <>
         <div className="d-flex top-ps-seection justify-content-between align-items-center">
              <h2 className="mb-0 search-btn-back"> Notes (24) </h2>
              <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#NotesModal"> <BsPlusLg/>  Create Note </button>
         </div>

         <div className="notes-d-section">
            <div className="row row-cols-1 mt-4 row-cols-sm-2 row-cols-lg-2 row-cols-xl-4">

            {slice.map((item, index) => {
                return(
                 
                    <div className="col">
                        <div className="comon-notes">
                            <NavLink to="/" className="note-titel"> {item.titel} </NavLink> 
                            <p> {item.paragraph} </p>

                            <div className="auto-sec">
                                <p className="m-0"> Create By <NavLink to="/"> {item.author} </NavLink>  </p>
                                <h6 className="my-3"> at {item.date} : {item.time} </h6>
                            </div>
                            
                        </div>
                    </div>
                  
                )
              })}

            </div>

       
            <button className="loading-btn btn text-center mx-auto d-table mt-4"
            onClick={() => LoadMore()} >
            <FaRedo/> Load More Notes </button>
         </div>
         </>
    );
}
export default NotesSetions;