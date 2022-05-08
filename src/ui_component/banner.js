import React from "react";
import { Link } from "react-router-dom";
import arrow from "./icon/arrow1.svg"

export default function Banner(props) {
    return(
        <>
         <div className="banner">
                <h1 className="banner_title">
                    {props.title1}<br/>
                    {props.title2}
                    <b className="well">{props.highlight}</b>
                    
                </h1>
                <img src={props.img} alt="" className="neon_img"/>
                <div>
                <Link className="btn" to="/project">
                Our work
                <img src={arrow} alt="" className="arrow"/>
                </Link>
                </div>
            </div>

        </>
    )
}