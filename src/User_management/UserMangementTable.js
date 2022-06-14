import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import AllDataManagement from "./ManagementTableApi";
import { BsRecordFill } from "react-icons/bs";


function UserMangementTable(){
    const [ workData , setworkData] =useState(AllDataManagement);
    console.log(workData);
    return(

        <>
        <div className="comon-table-divs">
                <table id="ceo">
                    <thead>
                        <tr>
                            <th title="Name" >USER NAME</th>
                            <th title="Gender" >EMAIL</th>
                            <th title="Age" >ROLE</th>
                            <th title="Age" >ACTION</th>
                            <th title="Age" >STATUS</th>
                            <th title="Age" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        


                    {
                        workData.map((curElem) => {
                            const{ username, email, role, action,Status,img } = curElem;
                            return(
                                <>
                                <tr className="my-4">
                                        <td >
                                        <NavLink to="/" className="user-name d-flex align-items-center"> 
                                            <img src={img} alt={username}/>
                                            {username}
                                        </NavLink>
                                        </td>
                                    
                                        <td>
                                        <h6>{email}</h6>
                                        </td>
                                        <td>
                                        <h6>{role}</h6>
                                        </td>
                                        <td>
                                        <h6>{action}</h6>
                                        </td>
                                        <td>
                                          <BsRecordFill/> {Status}
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
export default UserMangementTable;