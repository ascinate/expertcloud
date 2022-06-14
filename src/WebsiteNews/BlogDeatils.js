import React from "react";
import {NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Aos from "aos";
import PopularBlogSlider from "./PopularBlogSlider";
import ConatctComonWebFaq from "./ConatctComonWebFaq";
import Header from "../Header";
import Footer from "../Footer";

function BlogDetails(){
    Aos.init({
        offset: 100,
        easing: 'ease',
        delay: 0,
        once: true,
        duration: 800,
      
      });
        document.title ="Expert Cloud -  Blog Deatils"
    return(
        <>
        <Header/>
         <div className="blogs-web-details">
             <div className="container">
                <NavLink to="/webnews" className="btn ps-0 back-btn1"> 
                <FaAngleLeft/> Back to News & Insights </NavLink>
                <div className="blos-details-part">
                   <figure className="blog-pic1">
                      <img src="images/big-blogs.svg" alt="png"/>
                   </figure>
                   <ul className="list-unstyled d-flex align-items-center p-0 m-0">
                     <li> <NavLink to="/" className="btn tags-btn"> New Tags 1 </NavLink>  </li>
                     <li> at 27-04-2022 : 10:30AM </li>
                   </ul>

                   <h2>News Title here with long text 2022 with tages of the news. </h2>

                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra 
                   vitae. Bibendum enim facilisis gravida neque. Ultrices dui sapien eget mi. Pharetra 
                   convallis posuere morbi leo urna molestie. Laoreet sit amet cursus sit amet dictum. 
                   Morbi quis commodo odio aenean sed adipiscing. In hac habitasse platea dictumst. Massa sapien faucibus et molestie. 
                   Varius vel pharetra vel turpis nunc eget lorem. Netus et malesuada fames
                    ac turpis egestas maecenas pharetra convallis. Quam adipiscing vitae proin sagittis.

                   </p>

                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra 
                   vitae. Bibendum enim facilisis gravida neque. Ultrices dui sapien eget mi. Pharetra 
                   convallis posuere morbi leo urna molestie. Laoreet sit amet cursus sit amet dictum. 
                   Morbi quis commodo odio aenean sed adipiscing. In hac habitasse platea dictumst. Massa sapien faucibus et molestie. 
                   Varius vel pharetra vel turpis nunc eget lorem. Netus et malesuada fames
                    ac turpis egestas maecenas pharetra convallis. Quam adipiscing vitae proin sagittis.

                   </p>

                   <p> Vel orci porta non pulvinar neque. Ornare massa eget egestas purus viverra accumsan. Scelerisque viverra mauris in aliquam sem. Sit amet massa vitae tortor condimentum lacinia. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Vitae congue mauris rhoncus aenean vel elit scelerisque. Non curabitur gravida arcu ac. Turpis cursus in hac habitasse platea dictumst quisque. Congue quisque egestas diam in arcu cursus euismod. Ac turpis egestas integer eget aliquet nibh. In aliquam sem fringilla ut morbi tincidunt augue. In hac habitasse platea dictumst quisque sagittis. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Mi in nulla posuere sollicitudin aliquam. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.


                   </p>


                   <p> 
                   Ultrices in iaculis nunc sed augue lacus. Amet massa vitae tortor condimentum. Nisl pretium fusce id velit. Lacus vestibulum sed arcu non odio. Placerat orci nulla pellentesque dignissim enim sit amet. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Lectus sit amet est placerat in egestas erat imperdiet. Sed velit dignissim sodales ut eu. Nisl purus in mollis nunc sed id semper risus in. Lectus mauris ultrices eros in cursus. Aliquam etiam erat velit scelerisque in. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.


                   </p>


                   <p> Nam at lectus urna duis. Commodo elit at imperdiet dui accumsan sit amet. Risus quis varius quam quisque id. Purus semper eget duis at tellus at. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Nibh nisl condimentum id venenatis a condimentum. Id diam maecenas ultricies mi eget mauris. Proin sed libero enim sed faucibus turpis in. Viverra vitae congue eu consequat. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. A pellentesque sit amet porttitor eget dolor. Adipiscing tristique risus nec feugiat in fermentum. Condimentum id venenatis a condimentum vitae sapien pellentesque. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Metus vulputate eu scelerisque felis imperdiet. Accumsan tortor posuere ac ut consequat semper viverra nam libero.



                   </p>
                </div>

                <div className="poular-bls-divs">
                      <h2  data-aos="fade-right">News & Insights </h2>
                    <p className="sub-text-news mb-0" data-aos="fade-down"> Hear more on </p>
                   <PopularBlogSlider/>
                </div>

                
             </div>

             <ConatctComonWebFaq/>
         </div>
         
        <Footer/>
        </>
    );
}
export default BlogDetails;