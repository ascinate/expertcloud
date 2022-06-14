import React, {useState} from "react";
import SwitchToggle from "./SwitchToggle";
import SwitchToggleNext from "./SwitchToggleNext";


function PaymentMethord(){
    const [value, setValue] = useState(false);
    const [onvalue, setOnValue] = useState(true);
    return(
        <>
        <div className="payment-method-div">
             <h2> Added Payment Method </h2>
            <div className="comon-payments-ex mt-4 d-md-flex align-items-center">
            <div className="row w-100">
                <div className="col-lg-9">
                    <div className="left-pm">
                        <figure>
                            <img src="images/payment-m1.svg" alt="svg"/>
                        </figure>
                        <h5> 5151 2323 45XX XXXX 
                            <span> Your Master was added on Apr22, 2022 </span>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-center justify-content-md-between">
                    <div className="comon-toggle">
                        <p className="my-0 me-3"> Primary Method </p>
                        <SwitchToggle isOn={value}
                        handleToggle={() => setValue(!value)}/>
                    </div>

                    <div className="dropdown">
                        <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="images/dp-dots1.svg" alt="svb"/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            
            </div>

            <div className="comon-payments-ex d-md-flex align-items-center">
            <div className="row w-100">
                <div className="col-lg-9">
                    <div className="left-pm">
                        <figure>
                            <img src="images/payment-m1.svg" alt="svg"/>
                        </figure>
                        <h5> 5151 2323 45XX XXXX 
                            <span> Your Master was added on Apr22, 2022 </span>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-center justify-content-md-between">
                    <div className="comon-toggle">
                        <p className="my-0 me-3"> Primary Method </p>
                        <SwitchToggleNext isOn={onvalue}
                        handleToggleNew={() => setOnValue(!onvalue)}/>
                    </div>

                    <div className="dropdown">
                        <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="images/dp-dots1.svg" alt="svb"/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            
            </div>


        </div>
        </>
    );
}
export default PaymentMethord;