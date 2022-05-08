import React from "react";
// import luxigro from "../icon/luxigro.svg"
import whatsapp from "../icon/whatsapp.svg"
import fb from "../icon/fb.svg"
import insta from "../icon/insta.svg"
import "./index.css"
import { Link } from "react-router-dom";


export default function Footer() {



    return(
        <div className="footer">
            <div className="top_footer">
               {/* <div className="logo_footer">
                <img src={luxigro} alt="" className="icon_logo_footer" />

                <div className="text_logo_footer">Luxigro</div>
            </div> */}
            
            <div className="social_media_icon">
                    <a href="https://www.facebook.com/Luxigro-111827417959799/">
                    <img src={fb} alt="" className="fb_icon"/>
                    </a>

                    <a href="https://www.instagram.com/luxigro/">
                    <img src={insta} alt="" className="insta_icon"/>
                    </a>
                    <a href="https://wa.me/918920832778?text=hi">
                    <img src={whatsapp} alt="" className="whatsapp_icon"/>
                    </a>
                </div> 
            </div>

            
            <div className="middle_footer">

            <Link className="link" to="/privacy-policy">Privacy Policy</Link>
                <div>copywrite © Luxigro(opc) pvt ltd </div>

            <Link className="link" to="/terms-and-condition">Terms & condition</Link>

            

            </div>

            <div className="bottom_footer">
                powered by <b className="nolox_gradient">Nolox.io</b> 
            </div>
            

            
        </div>
    )
}