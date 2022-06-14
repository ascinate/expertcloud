import React from "react";

function TopSelectOption(){
    return(
        <>
        
        <div className="select-option col-lg-9">
                <div className="row flex-column flex-md-row">
                <div className="col">
                    <div className="comon-select">
                        <span>
                            <img src="images/sl-location.svg" alt="sv"/>
                        </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className="col">
                    <div className="comon-select">
                        <span>
                            <img src="images/company-icon.svg" alt="sv"/>
                        </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Company</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col">
                    <div className="comon-select">
                        <span>
                            <img src="images/dollers-icon.svg" alt="sv"/>
                        </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Price</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col">
                    <div className="comon-select">
                        <span>
                            <img src="images/induc-icon.png" alt="sv"/>
                        </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Industry</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>


                <div className="col pe-lg-0">
                    <div className="comon-select">
                        <span>
                            <img src="images/sl-location.svg" alt="sv"/>
                        </span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Expertise</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                </div>
         </div>
        </>
    );
}
export default TopSelectOption;