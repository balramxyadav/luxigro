import React  from "react";
import Project from "./project/project"
import "./index.css"

export default function Projects() {
    return(
       <div className="container">

           <div className="banner_conatiner">
               <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="banner_img" />
               <div className="title_banner">White house</div>
               <div className="location">USA</div>
           </div>
         
        <div className="our_project">Our projects</div>
        <div className="project_grid">

        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>
        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>
        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>
        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>
        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>
        <Project img="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" title="House"/>

        </div>

            
    </div>
    )
    
}