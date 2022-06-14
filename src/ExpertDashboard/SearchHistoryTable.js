import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import {BsPlusLg ,BsChatLeft, BsPencil } from "react-icons/bs";
import Data from "./ExpertTabbleDataApi";


function SearchHistoryTable(){
    
    return(
        <>

          

        <table id="ceo">
            <thead>
            <tr>
                
                <th title="Name" >Project name</th>
                <th title="Gender" >Rate(USD)</th>
                <th title="Age" >Payment Status</th>
                <th title="Age" >Payment Date</th>
               
            </tr>
            </thead>
            <tbody>
            
            {Data.ExpertSerachtable.map((item, index) => {
                  return (
                      <>
                      
                        <tr className="my-4 sp-td-sec" colspan="12">
                    
                            <div className="td-inside d-flex align-item-center">
                                
                                <div className="bg-white d-flex justify-content-end">
                                
                                        <div className="text-td nes-tabs">
                                            <NavLink to="/expertdashboard" className="comon-table-td"> 
                                            <span className="d-block"> {item.titel} </span>
                                            
                                            </NavLink>
                                            <ul className="list-unstyled d-flex align-items-center">
                                              <li> <img src="images/date-picker-img.svg" alt="svg"/> {item.date} </li>
                                              <li> <img src="images/clock-icon.svg" alt="svg"/> {item.time} </li>
                                            </ul>
                                        </div>
                                        <div className="auto-td">
                                            <h6><span> {item.price} </span> /hour</h6>
                                            
                                        </div>
                                        <div className="commment-td">
                                            <div className="number-message1">
                                            {item.status}
                                            </div>
                                           
                                        </div>
                                        <div className="option-td">
                                             <p> {item.payment} </p>
                                        </div>
                                </div>
                            </div>
                    
                   
                         </tr>
                         </>
                         );
                    })}

            </tbody>
        </table>
        </>
    );
}
export default SearchHistoryTable;