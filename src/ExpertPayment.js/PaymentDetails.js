import React from "react";
import Data from "./PaymentDetailsApi";

function PaymentDetails(){

    return(
        <>
        
        <div className="payment-details-2 ">
           <h2> Payment Details  </h2>
           <div className="row row-cols-1 mt-4 mb-5 row-cols-md-2 row-cols-lg-4">
            {Data.AllPaymentDetails.map((item, index) => {
                return(
                 
                   
                         <div className="col">
                            <div className="comon-card-n">
                                    <figure>
                                    <img src={item.img} alt="bn"/>
                                    </figure>
                                
                                <h5> {item.titel}
                                    <span className="d-block"> {item.subtext} </span>
                                </h5>
                            </div>
                        </div>
                    
            
                  
                )
              })}
              </div>
            
        </div>
        </>
    );
}
export default PaymentDetails;