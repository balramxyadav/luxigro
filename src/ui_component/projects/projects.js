import React  from "react";
import Project from "./project/project"
import "./index.css"

export default function Projects() {
    return(
       <div className="container">

           <div className="banner_conatiner">
               <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1079&q=80" alt="" className="banner_img" />
               <div className="title_banner"></div>
               <div className="location"></div>
           </div>
         
        <div className="our_project">Our projects</div>
        <div className="project_grid">

        <Project img="img_1.jpeg" title="Bhagan bigha"/>
        <Project img="img2.jpeg" title="Patna"/>
        <Project img="img3.jpeg" title="Kaladham"/>
        <Project img="img4.jpeg" title="P-3"/>
        <Project img="img5.jpeg" title="Beta"/>
        <Project img="img7.jpeg" title="Kasna"/>

        </div>

            
    </div>
    )
    
}