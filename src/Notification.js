import React, {useState} from "react";
import NotificationPin from "./NotificationApi";

function Notification(){
    const [ workData , setworkData] =useState(NotificationPin);
    console.log(workData);
    return(
        <>
           <div className="notification-div">
                <ul className="list-unstyled">
                {
                    workData.map((curElem) => {
                        const{ id, icon, img, titel, days,orderid } = curElem;
                        return(
                            <>
                            <li>
                               <figure>
                                  <img src={img} alt="img"/>
                               </figure>
                                <div>
                                    
                                    <h5 className="ms-2"> {titel}
                                    <span className="d-block"> {orderid} </span>
                                    </h5>
                                    <h6 className="d-block">  {days}</h6>
                                </div>
                            </li>
                            </>
                        );
                    })
                }
                    
                </ul>
            </div>
        </>
    );
}
export default Notification;