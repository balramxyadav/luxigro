import React from "react";
import { Link } from "react-router-dom";
import arrow from "../icon/arrow1.svg"
import "./index.css"
import tower from "../icon/tower.png"
import profile from "../icon/profile.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import WeAreLuxigro from "./weAreLuxigro"
// ..
AOS.init();


export default function AboutUs() {
    return(
        <div className="about_us">

            <div className="banner">
                <h1 className="banner_title">
                    We build<br/>
                    Your 
                    <b className="well"> dreams</b>
                    
                </h1>
                <img src={tower} alt="" className="tower"/>
                <div>
                <Link className="btn" to="/project">
                Our work
                <img src={arrow} alt="" className="arrow"/>
                </Link>
                </div>
            </div>

            <WeAreLuxigro/>


            <div className="heading">Meet our founders</div>

            <div className="founders">
                <div className="founder_section">

            <div className="bg_founder">
                <img src={profile} alt="" className="founder" />
                <div className="balram">Balram Yadav</div>
            </div>

            </div>
            <div className="founder_section">

            <div className="bg_founder">
                <img src={profile} alt="" className="founder" />
                <div className="balram">Rajesh Yadav</div>
            </div>
                
            </div>
            </div>

            

            <div className="heading">Our journey</div>

            <div className="journey">
            <div className="date_container">
                <div data-aos="fade-up" className="date">March 30</div>
                <div data-aos="fade-up" className="date">April 1</div>
                <div data-aos="fade-up" className="date">January 30</div>
                <div data-aos="fade-up" className="date">March 30</div>
                <div data-aos="fade-up" className="date">Now</div>
            </div>
                
            <div className="pipe">
                <div className="dot"></div>
            </div>

            <div className="event_container">
                 <div data-aos="fade-up"  className="event">Where we started</div>
                 <div data-aos="fade-up" className="event">Our first projects</div>
                 <div data-aos="fade-up" className="event">More than 10 projects completed</div>
                 <div data-aos="fade-up" className="event">Working in 4+ states</div>
                 <div data-aos="fade-up" className="event">Building your dream</div>
            </div>
                 
            
            </div>

        </div>
    )
}