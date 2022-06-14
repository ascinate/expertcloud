import React from "react";


const words = ["Project Management", "Mobile Payments" ," Information Services ","Business Information technology",];
  
const updatedNums = words.map((words)=>{
    return <li>{words}</li>;
});

function SearchFactoryList(){
    return(
        <>
        <ul className="list-unstyled m-0">
        {updatedNums}
        </ul> 
        </>
    );
}
export default SearchFactoryList;