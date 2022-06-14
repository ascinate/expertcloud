import React from "react";
import { NavLink } from "react-router-dom";


const words = ["ACC Limited", "ACC Limited (LafargeHolcim)" ," Axel Kellermann ","AVIZO - Business Manager",];
  
const updatedNums = words.map((words)=>{
    return <li>{words}</li>;
});

function IndustryList(){
    return(
        <>
        <ul className="list-unstyled m-0">
        {updatedNums}
        <li className="d-block d-lg-none"> <NavLink to="/">  +15 More.. </NavLink> </li>
        </ul> 
        </>
    );
}
export default IndustryList;