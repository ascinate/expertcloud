import React from "react";
import { NavLink } from "react-router-dom";

const words = ["Project Management", "Mobile Payments" ," Information Services ","Business Information technology",];
  
const updatedNums = words.map((words)=>{
    return <li>{words}</li>;
});

function FactoryInduxtry(){
    return(
        <>
        <ul className="list-unstyled m-0">
        {updatedNums}
        <li className="d-block d-lg-none"> <NavLink to="/">  +15 More.. </NavLink> </li>
        </ul> 
        </>
    );
}
export default FactoryInduxtry;