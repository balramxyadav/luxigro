import React from "react";
import illustraion from "../icon/newsletter.svg"
import email from "../icon/mail.svg"
import phone from "../icon/phone.svg"
import location from "../icon/location.svg"

export default function ContactDeatails() {
    return(
        <div className="contact_detail">
           <div className="details">
            <div className="heading">Contact us</div>
            <div className="contact_detail_box">
                <div id="detail_box">
                    <img src={email} alt="" />
                    <div>Info@luxigro.com</div>
                </div>

                <div id="detail_box">
                    <img src={phone} alt="" />
                    <div>8920832778</div>
                </div>

                <div id="detail_box_bottom">
                    <img src={location} alt="" />
                    <div>D-9, sector-3 Noida, UTTAR PRADESH 201301 </div>
                </div>
            </div>
        </div>

        <img src={illustraion} alt="" className="detail_illustraion" /> 
        </div>
    )
}