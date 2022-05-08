import React, { useState } from "react";
import controlRight from "./control_right.svg"
import controlLeft from "./control_left.svg"
import SliderData from "./sliderData"
import { Link } from "react-router-dom";

export default function Projects(props) {

    const [slideIndex, setSlideIndex] = useState(0)

    const slider = SliderData.map((data) => {
        return(
            <div className="slider_container"> 
                <img className="project_img" src={data.img} alt="Project image"  />

                    <div className="content">
                        <div className="project_text">{data.content}</div>
                        <div className="project_title">{data.title}</div>
                        <div className="project_location">{data.location}</div>
                        {/* <Link className="border_btn_project" to="#" > See all</Link> */}
                    </div>
            </div>
            
                    

    )})

    const prev = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 0){
            setSlideIndex(3)
        }
        console.log(SliderData.length)
    }

    
    const next = () => {
        if(slideIndex !== 3){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === 3){
            setSlideIndex(0)
        }
    }


    return(
        <div className="Project">

             <div className="project_box">

          {slider[slideIndex]}  

          <img onClick={prev} src={controlLeft} alt="" className="control_left"/>
          <img onClick={next} src={controlRight} alt="" className="control_right"/>


                </div>

        </div>
        
    )
}