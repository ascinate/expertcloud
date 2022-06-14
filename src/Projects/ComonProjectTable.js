import React from "react";
import {NavLink } from "react-router-dom";
function ComonProjectTable(){
    return(
        <>
        <div className="comon-table-divs">
                <table id="ceo">
                    <thead>
                        <tr>
                            <th title="Name" className="w-300">Project name</th>
                            <th title="Gender" className="w-160">Progress</th>
                            <th title="Age" className="w-1001">deadline</th>
                            <th title="Age" className="w-2001">team members </th>
                            <th title="Age" className="w-1001">messages </th>
                            <th title="Age" className="noafter w-66"></th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        <tr className="my-4">
                            <td className="w-300">
                            <NavLink to="/projectsdetails" className="comon-table-td"> 
                                <span className="d-block"> Business analyst for developing my idea
                                and make it live to users </span>
                                <span className="d-flex align-items-center mt-3 ">
                                <figure className="m-0 me-2">
                                <img src="images/expert-icon1.svg" alt="sn"/>
                                </figure>  mar 13, 2022
                                </span>
                            </NavLink>
                            </td>
                            <td className="w-160">
                            <div className="progress">
                                <div className="progress-bar w-50" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <ul className="d-flex number-list align-items-center list-unstyled">
                            <li> 
                                <span> 
                                <img src="images/phone.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/file.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/check.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            </ul>
                            </td>
                            <td className="w-1001 date">
                            <h6>26-04-2022</h6>
                            <p> 2days ago </p>
                            </td>
                            <td className="w-2001">
                            <div className="user-tabale-td">
                                <span> S </span>
                                <span> A </span>
                                <span> D </span>
                                <a id="#"> +27</a>
                            </div>
                            <div className="number-member">
                            <h6> 30 Members </h6> 
                            <a id="#"> 2 Invites sent </a>
                            </div>
                            </td>
                            <td className="w-1001 nm1">
                            <div className="number-message">
                                2
                            </div>
                            <p> Last 5 hours </p>
                            </td>

                            <td >
                            <div className="dropdown">
                                <button className="btn p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/dots.png" alt="dts"/>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">View </a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                
                                </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="my-4">
                            <td className="w-300">
                            <NavLink to="/projectsdetails" className="comon-table-td"> 
                                <span className="d-block"> Business analyst for developing my idea
                                and make it live to users </span>
                                <span className="d-flex align-items-center mt-3 ">
                                <figure className="m-0 me-2">
                                <img src="images/expert-icon1.svg" alt="sn"/>
                                </figure>  mar 13, 2022
                                </span>
                            </NavLink>
                            </td>
                            <td className="w-160">
                            <div className="progress">
                                <div className="progress-bar w-50" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <ul className="d-flex number-list align-items-center list-unstyled">
                            <li> 
                                <span> 
                                <img src="images/phone.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/file.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/check.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            </ul>
                            </td>
                            <td className="w-1001 date">
                            <h6>26-04-2022</h6>
                            <p> 2days ago </p>
                            </td>
                            <td className="w-2001">
                            <div className="user-tabale-td">
                                <span> S </span>
                                <span> A </span>
                                <span> D </span>
                                <a id="#"> +27</a>
                            </div>
                            <div className="number-member">
                            <h6> 30 Members </h6> 
                            <a id="#"> 2 Invites sent </a>
                            </div>
                            </td>
                            <td className="w-1001 nm1">
                            <div className="number-message">
                                2
                            </div>
                            <p> Last 5 hours </p>
                            </td>

                            <td >
                            <div className="dropdown">
                                <button className="btn p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/dots.png" alt="dts"/>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">View </a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                
                                </ul>
                            </div>
                            </td>
                        </tr>


                        <tr className="my-4">
                            <td className="w-300">
                            <NavLink to="/projectsdetails" className="comon-table-td"> 
                                <span className="d-block"> Business analyst for developing my idea
                                and make it live to users </span>
                                <span className="d-flex align-items-center mt-3 ">
                                <figure className="m-0 me-2">
                                <img src="images/expert-icon1.svg" alt="sn"/>
                                </figure>  mar 13, 2022
                                </span>
                            </NavLink>
                            </td>
                            <td className="w-160">
                            <div className="progress">
                                <div className="progress-bar w-50" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <ul className="d-flex number-list align-items-center list-unstyled">
                            <li> 
                                <span> 
                                <img src="images/phone.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/file.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            <li> 
                                <span> 
                                <img src="images/check.svg" alt="svg"/>
                                </span>
                                20
                            </li>

                            </ul>
                            </td>
                            <td className="w-1001 date">
                            <h6>26-04-2022</h6>
                            <p> 2days ago </p>
                            </td>
                            <td className="w-2001">
                            <div className="user-tabale-td">
                                <span> S </span>
                                <span> A </span>
                                <span> D </span>
                                <a id="#"> +27</a>
                            </div>
                            <div className="number-member">
                            <h6> 30 Members </h6> 
                            <a id="#"> 2 Invites sent </a>
                            </div>
                            </td>
                            <td className="w-1001 nm1">
                            <div className="number-message">
                                2
                            </div>
                            <p> Last 5 hours </p>
                            </td>

                            <td >
                            <div className="dropdown">
                                <button className="btn p-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/dots.png" alt="dts"/>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">View </a></li>
                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                
                                </ul>
                            </div>
                            </td>
                        </tr>

                    
                        
                    </tbody>
                </table>
        </div>
        </>
    );
}
export default ComonProjectTable;