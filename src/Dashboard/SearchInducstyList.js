import React from "react";


const words = ["ACC Limited", "ACC Limited (LafargeHolcim)" ," Axel Kellermann ","AVIZO - Business Manager",];
  
const updatedNums = words.map((words)=>{
    return <li>{words}</li>;
});

function SearchInducstyList(){
    return(
        <>
        <ul className="list-unstyled m-0">
        {updatedNums}
        </ul> 
        </>
    );
}
export default SearchInducstyList;