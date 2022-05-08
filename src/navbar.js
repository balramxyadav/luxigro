import React from "react";
import logo from "./luxigro.svg"
import {NavLink} from  "react-router-dom"

export default function Navbar() { 
    return(
        <div className="navbar">
            <NavLink className="logo" to="/">
              <img src={logo} alt="" className="icon_logo"/>
            <div className="text_logo">Luxigro</div>  
            </NavLink>

            <div className="nav_cont">
                <ul className="nav_ul">

                

                <NavLink 
                //     style={({isActive}) => {
                //     return{
                //     borderBottom : isActive ? "#1B4BE2 solid 2px" : "none"
                //     }


                // }} 
                className="title_nav" to="project"  >
                    Projects
                </NavLink>

                <NavLink
                 style={({isActive}) => {
                    return{
                    borderBottom : isActive ? "#1B4BE2 solid 2px" : "none"
                    }


                }} className="title_nav" to="./aboutus">
                    About us
                </NavLink>
                

            </ul>
            <NavLink className="nav_btn" to="contactus">Contact us</NavLink>
            </div>
            
        </div>
    )
}