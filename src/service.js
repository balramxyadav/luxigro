import React from "react";
import { Link } from "react-router-dom";

export default function ServiceComp(props) {
    return(
        <>
        <Link className="service_title" to="contactus">
            <div className="service_box">
                <div className="service_title">
                {props.service}
                </div>
            </div>
        </Link>
        </>
    )
}