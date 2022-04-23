import React  from "react";
import "./index.css"

export default function Service(props) {
    return(
        <div className="container">
            <div className="project">
                <div className="shadow"></div>
                <img src={props.img} alt="" className="project_img_comp" />
                <div className="title">{props.title}</div>
            </div>

            
    </div>
    )
    
}