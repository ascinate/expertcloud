import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import ComplteTableDetails from "./CompleteTableApi";

function CompleteTable(){
    const [ workData , setworkData] =useState(ComplteTableDetails);
    console.log(workData);
    return(
        <>
        <div className="comon-table-divs">
                <table id="ceo">
                    <thead>
                        <tr>
                        
                            <th title="Name">#</th>
                            <th title="Name" >Status</th>
                            <th title="Gender">Most Relevant Title</th>
                            <th title="Age" >Company</th>
                            <th title="Age" >RATE/HR </th>
                            <th title="Age" >Declined </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                    {
                        workData.map((curElem) => {
                            const{ id, number, Status,company,rate, titel, date } = curElem;
                            return(
                                <>
                                <tr className="my-4">
                                    <td>
                                        {number}
                                    </td>
                                    <td >
                                    
                                    <span className="submited-text"> {Status} </span>
                                    
                                    </td>
                                    <td>
                                    {titel}
                                    </td>
                                    <td >
                                    {company}
                                    </td>
                                    <td >
                                    {rate}
                                    </td>

                                    <td>
                                    {date}
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
export default CompleteTable;