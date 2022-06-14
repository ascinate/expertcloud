import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft, FaRedo } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import FolderAllDetails from "./FolderDetailsApi";


function FolderSections(){
    const [ workData , setworkData] =useState(FolderAllDetails);
    console.log(workData);
    return(
         <>
         <div className="d-flex top-ps-seection justify-content-between align-items-center">
              <h2 className="mb-0 search-btn-back"> Folders (13) </h2>
            

              <div className="dropdown">
                <button className="btn add-ps-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsPlusLg/>  Create Note 
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#contentModal">Create Content</a></li>
                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#coverModal">Create Cover</a></li>
                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#FolderModal">Create Folder</a></li>
                </ul>
              </div>

         </div>

         <div className="notes-d-section">
            <div className="row row-cols-1 mt-4 row-cols-sm-2 row-cols-lg-2 row-cols-xl-4">

                {
                    workData.map((curElem) => {
                        const{ id, foldername, paragraph, author,date, time } = curElem;
                        return(
                            <>
                            <div className="col">
                                <div className="comon-notes">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <figure className="m-0">
                                           <img src="images/folder-icon.png" alt="folder"/>
                                        </figure>
                                        <div className="auto-sec">
                                            <p className="m-0"> Create By <NavLink to="/"> {author} </NavLink>  </p>
                                            
                                        </div>
                                         
                                    </div>
                                    <NavLink to="/" className="note-titel mt-4"> {foldername} </NavLink>
                                    <p> {paragraph} </p>
                                    <h6 className="my-3"> at {date} : {time} </h6>

                                    
                                    
                                </div>
                            </div>
                            </>
                        );
                    })
                }
                
            </div>

            <a id="#" className="loading-btn btn text-center mx-auto d-table mt-4"> <FaRedo/> Load More Folders </a>

         </div>
         </>
    );
}
export default FolderSections;