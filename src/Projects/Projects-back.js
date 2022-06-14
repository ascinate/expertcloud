import React from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";
import { FaAngleLeft } from "react-icons/fa";
import {BsPlusLg ,BsPlus } from "react-icons/bs";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";
import TopMenu from "../TopMenu";




class Projects extends React.Component {
    componentWillMount(){
 
       $(document).ready(function(){
         $(".togle-icon").click(function(e) {
             e.preventDefault();
             $("#navAccordion").toggleClass("active");
             $("main").toggleClass("full-width");
             $("footer").toggleClass("full-width");
       
       });


       $(function () {
         $('table')
           .on('click', 'th', function () {
             var index = $(this).index(),
                 rows = [],
                 thClass = $(this).hasClass('asc') ? 'desc' : 'asc';
       
             $('#ceo th').removeClass('asc desc');
             $(this).addClass(thClass);
       
             $('#ceo tbody tr').each(function (index, row) {
               rows.push($(row).detach());
             });
       
             rows.sort(function (a, b) {
               var aValue = $(a).find('td').eq(index).text(),
                   bValue = $(b).find('td').eq(index).text();
       
               return aValue > bValue
                    ? 1
                    : aValue < bValue
                    ? -1
                    : 0;
             });
       
             if ($(this).hasClass('desc')) {
               rows.reverse();
             }
       
             $.each(rows, function (index, row) {
               $('#ceo tbody').append(row);
             });
           });
       });


       });
       document.title ="Expert Cloud -  Projects"
     }
    render() {
      return(
         <>
         <MobileMenu/>
         <div className='page-wrapper chiller-theme toggled'>
         <div className="main-sec d-lg-flex">
           <div className="sidebar-menu" id="navAccordion">
              <Sidebar/>
           </div>
         </div>
         <main className="body-total content-wrapper float-start w-100">
           <div className="container-fluid">
           
 
             <div className="d-block d-lg-block">
                   <div className="top-bar-menu float-start">
                      
                      <TopMenu/>
                   </div>
             </div>
              
              <div className="dasb-div bk-div float-start w-100">
              
                 
                 
                 <div className="body-expart-div projects-pages">
                    <div className="d-lg-flex top-ps-seection justify-content-between align-items-center">
                       <h2> My Projects </h2>

                       <ul className="nav col-lg-6 mx-auto nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                       <li className="nav-item" role="presentation">
                         <button className="nav-link active" id="pills-home-tab" 
                         data-bs-toggle="pill" data-bs-target="#pills-home" 
                         type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                         Ongoing</button>
                       </li>
                       <li className="nav-item" role="presentation">
                         <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" 
                         data-bs-target="#pills-profile" type="button" role="tab"
                          aria-controls="pills-profile" aria-selected="false">On Hold</button>
                       </li>
                       <li className="nav-item" role="presentation">
                         <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" 
                         type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
                       </li>
   
                       </ul>

                       <button className="btn add-ps-btn" data-bs-toggle="modal" data-bs-target="#carteProjectModal"> <BsPlusLg/>  Create Project </button>
                    </div>
                   

                    
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane pt-2 fade show active" id="pills-home" role="tabpanel" 
                    aria-labelledby="pills-home-tab">
                       
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
                    
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                                        <h6>22-04-2022</h6>
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
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
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
                                          <NavLink to="/" className="comon-table-td"> 
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
                                          <h6>20-04-2022</h6>
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
                                          <NavLink to="/" className="comon-table-td"> 
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
                                          <h6>20-04-2022</h6>
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
                                          <NavLink to="/" className="comon-table-td"> 
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
                                          <NavLink to="/" className="comon-table-td"> 
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
                                          <NavLink to="/" className="comon-table-td"> 
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
                    </div>
                  </div>

                 </div>
              
              </div>
           </div>
         </main>
         </div>
 

         <div className="modal fade pro-jects1" id="carteProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div className="add-ps-modal-1">
                     <h2 className="text-center"> Create New Project </h2>
                     <p className="text-center"> Detail out your reqiurement to help us match you with the best in the industry </p>
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="form-group">
                              <label> Project title * </label>
                              <input type="text" className="form-control" placeholder="Project name"/>
                           </div>
                        </div>

                        <div className="col-lg-6">
                           <div className="form-group">
                              <label>Number of expected calls *</label>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                           </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="form-group">
                              <label>Project deadline *</label>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                        </div>


                        <div className="col-lg-12">
                           <div className="form-group">
                              <label> Project Overview * </label>
                              <div className="mainl">
                                 <textarea className="form-control" placeholder="Project brief"></textarea>
                                 <figure className="mainl-c">
                                    <img src="images/mail-pic.png"/>
                                 </figure>
                              </div>
                              
                           </div>
                        </div>

                        <div className="col-lg-12">
                           <button  data-bs-toggle="modal" data-bs-target="#projects-modal" data-bs-dismiss="modal" 
                           className="btn col-lg-5 mx-auto btnsm"> Create </button>
                        </div>


                     </div>
                  </div>
              </div>
              
            </div>
          </div>
         </div>


        //  projects modal

          <div className="modal fade projects-modal" id="projects-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div className="projects-modal-divs">
                      <div className="d-flex position-relative align-items-center">
                      <button  data-bs-toggle="modal" data-bs-target="#carteProjectModal" data-bs-dismiss="modal" 
                      className="btn back-n-bt mr-auto"> <FaAngleLeft/> Back </button>
                      <h2 className="text-center mx-auto"> You are almost done </h2>
                      </div>
                 
                      <p className="text-center"> Lorem ipsum dolor sit amet, consectetur </p>

                      <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="form-group">
                              <label>Geography of experts *</label>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                              <label>Target Companies *</label>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                              <label>Invite your team (Optional)*</label>
                              <div className="new-input1 d-flex justify-content-between">
                                 <input type="form-control" placeholder="Enter Email.."/>
                                 <span> techrefic.com</span>
                              </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Request calls to be recorded
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-12 mt-5">
                           <button data-bs-dismiss="modal" type="button" className="btn col-lg-5 mx-auto btnsm"> Submit</button>
                        </div>

                      </div>
                  </div>
              </div>
              
            </div>
          </div>
          </div>
      
         </>
      );
    }
  }
 
 export default Projects;