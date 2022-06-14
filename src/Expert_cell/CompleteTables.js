import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import CompletesTablAllData from "./CompletesTablApi";

function CompleteTables(){
    const [ workData , setworkData] =useState(CompletesTablAllData);
    console.log(workData);
    return(

        <>
        <div className="comon-table-divs">
                <table id="ceo">
                    <thead>
                        <tr>
                            <th title="Name" >Project name</th>
                            <th title="Gender" >deadline</th>
                            <th title="Age" >RATE/HR</th>
                            <th title="Age" >DATE ADDED</th>
                            <th title="Age" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        


                    {
                        workData.map((curElem) => {
                            const{ id, icon, titel, location,company,price,duration,deadline, deadlinedays,adddate,addays } = curElem;
                            return(
                                <>
                                <tr className="my-4">
                                        <td >
                                        <NavLink to="/projectsdetails" className="comon-table-td"> 
                                            <span className="d-block"> {titel}</span>
                                            <ul className="list-unstyled d-flex align-items-center">
                                            <li> <span> <img src="images/sl-location.svg" alt="sv"/> 
                                            </span> {location} </li>

                                            <li> <span> <img src="images/company-icon.svg" alt="sv"/>
                                            </span>  {company} </li>
                                            </ul>
                                        </NavLink>
                                        </td>
                                    
                                        <td>
                                        <h6>{deadline}</h6>
                                        <p> {deadlinedays}Days </p>
                                        </td>
                                        <td>
                                        <h6>{price}</h6>
                                        <p> {duration}</p>
                                        </td>
                                        <td>
                                        <h6>{adddate}</h6>
                                        <p> {addays}Days </p>
                                        </td>

                                        <td >
                                        <div className="dropdown ms-auto d-table ">
                                            <button className="btn py-0 pl-0 pr-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="images/dots.png" alt="dts"/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">View </a></li>
                                            <li><a className="dropdown-item" href="#">Delete</a></li>
                                            
                                            </ul>
                                        </div>
                                        </td>
                                </tr>
                                </>
                            );
                        })
                    }
                        

                    
                        
                    </tbody>
                </table>
        </div>
        </>
    );
}
export default CompleteTables;