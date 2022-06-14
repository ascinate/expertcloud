import React from "react";
import { NavLink } from "react-router-dom";

function ProjectLeftSection(){

    return(
        <>
        <div className="left-section-divs col-lg-7">
               <div className="d-md-flex">
                  <figure className="delp-img">
                     <img src="images/details-img1.svg" alt="svg2"/>
                  </figure>
                  <div className="left-ex-p">
                     <h2> Senior Consultant Gehrman Lehman Group (GLG), Emissary Exchange and Manager
                     </h2>
                         <ul className="list-unstyled mt-4 com-li d-md-flex align-items-center">
                            <li> <span> <img src="images/expet-m.svg" alt="sv"/> </span> 
                            <span> Dhruv@nextyn.com </span> </li>

                            <li> <span> <img src="images/expert-i.svg" alt="sv" /> </span> 
                            <span> Dhruv_nextyn </span> </li>

                            <li> <span> <img src="images/expert-c.svg" alt="sv" /> </span> 
                            <span> +91234567890  </span> </li>
        
                        </ul>
                        <ul className="list-unstyled mt-2 d-flex align-items-center">
                            <li> 
                            <span>   <img src="images/sl-location.svg" alt="sv"/> </span> 
                            Newyork,USA </li>

                            <li> 
                            <span>  <img src="images/company-icon.svg" alt="sv"/> </span> 
                            Newyork,USA </li>

                        </ul>
                  </div>
                  
               </div> 
                
                <h5 className="mt-5"> DESCRIPTION <a data-bs-toggle="modal" data-bs-target="#editDsModal" className="ed-btn"> <img src="images/dl-edit.svg"/> </a> </h5>
                <p> Eu augue ut lectus arcu bibendum at varius. Magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus ut faucibus. Non quam lacus suspendisse faucibus interdum posuere lorem. Aliquet lectus proin nibh nisl condimentum id venenatis. Dignissim cras tincidunt lobortis feugiat vivamus at. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Viverra vitae congue eu consequat ac felis donec et. Morbi tristique senectus et netus et. Nunc vel risus commodo viverra
                    maecenas accumsan lacus vel. Ultrices dui sapien eget mi proin sed libero.</p>

                    <p> Ut aliquam purus sit amet luctus venenatis lectus. Semper quis lectus nulla at volutpat diam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dolor purus non enim praesent. Arcu cursus euismod quis viverra nibh cras. Diam sollicitudin tempor id eu. Netus et malesuada fames ac turpis egestas sed. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Id diam vel quam elementum pulvinar etiam non quam. Vel pretium lectus quam id leo in vitae turpis. 
                    Odio ut enim blandit volutpat maecenas volutpat blandit.</p>

                    <p> Viverra suspendisse potenti nullam ac tortor vitae purus. Feugiat vivamus at augue eget arcu. Ante metus dictum at tempor commodo. Vel pharetra vel turpis nunc eget lorem. Suspendisse potenti nullam ac tortor vitae purus. Cursus eget nunc scelerisque viverra. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. In fermentum et sollicitudin ac orci phasellus egestas tellus. Nibh sed pulvinar proin gravida hendrerit lectus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Enim sit amet venenatis urna cursus eget nunc scelerisque. Vivamus arcu felis bibendum ut tristique et. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Nisi quis eleifend quam adipiscing vitae proin sagittis. Aliquet porttitor lacus
                    luctus accumsan tortor posuere ac ut. Aliquam sem fringilla ut morbi tincidunt.</p>

        </div>
        </>
    );
}
export default ProjectLeftSection;