import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import {BsPlusLg ,BsChatLeft, BsPencil } from "react-icons/bs";
import ReacentAllView from "./RecentlyVewApi";

function RecenetViewTable(){
    const [ workData , setworkData] =useState(ReacentAllView);
    console.log(workData);
    return(
        <>

          

        <table id="ceo">
            <thead>
            <tr>
                <th title="Age" className="noafter w-66"></th>
                <th title="Name" className="w-300">File name</th>
                <th title="Gender" className="w-160">Created by</th>
                <th title="Age" className="w-1001">COmments</th>
               
                <th title="Age" className="noafter w-270"></th>
            </tr>
            </thead>
            <tbody>
            

            {
                workData.map((curElem) => {
                    const{ id, filename, autorname, days, commentnumber,commenttime } = curElem;
                    return(
                        <>
                        <tr className="my-4 sp-td-sec" colspan="5">
                    
                            <div className="td-inside d-flex align-item-center">
                                <div className="icon-img">
                                    <img src="images/folder-icons1.png" alt="file"/>
                                </div>
                                <div className="bg-white d-flex justify-content-end">
                                        <div className="text-td">
                                            <NavLink to="/projectsdetails" className="comon-table-td"> 
                                            <span className="d-block"> {filename}</span>
                                            
                                            </NavLink>
                                        </div>
                                        <div className="auto-td">
                                            <h6>{autorname}</h6>
                                            <p> {days} </p>
                                        </div>
                                        <div className="commment-td">
                                            <div className="number-message">
                                                {commentnumber}
                                            </div>
                                            <p> {commenttime} </p>
                                        </div>
                                        <div className="option-td">
                                            <div className="d-flex gp-anhcor justify-content-end align-items-center">
                                                <NavLink to="/">  <img src="images/chat.png" alt="png"/>  </NavLink>
                                                <NavLink to="/"> <img src="images/pen.png" alt="png"/> </NavLink>
                                                <NavLink to="/"> <img src="images/share.png" alt="png"/> </NavLink>

                                                <div className="dropdown">
                                                    <button className="btn p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src="images/blue-dots.png" alt="png"/>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">View </a></li>
                                                        <li><a className="dropdown-item" href="#">Delete</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                    
                   
                         </tr>
                        </>
                    );
                })
            }

                

            </tbody>
        </table>
        </>
    );
}
export default RecenetViewTable;