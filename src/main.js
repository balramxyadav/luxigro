import React from "react";
import Service from "./service";
import Project from "./slider/projects.js"
import ContactUs from "./ui_component/contactUs/contactUs"
import Banner from "./ui_component/banner.js"
import banner_img from "./ui_component/icon/Neon.png"
import WeAreLuxigro from "./ui_component/aboutUs/weAreLuxigro";


export default function Main() {
    return(
        <div className="main">
            <Banner img={banner_img} title1='What we do.' title2="We do " highlight="well" />
        <div id="service" >
           <div className="service">Services</div>
        <div className="service_container" >
         <Service  service="Demolation"/>
         <Service  service="Renovation"/>
         <Service  service="Industrial"/>
         <Service  service="Residential"/>
         <Service  service="Exterior"/>
         <Service  service="Interior"/>  
        </div> 
        </div>
        
        
        <div className="service">Our projects</div>
        <Project/>

        <WeAreLuxigro/>

        <ContactUs/>

        </div>
    )
}