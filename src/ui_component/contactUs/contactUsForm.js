import send from "../icon/send.svg"
import face from "../icon/face.svg"
import emailjs from "emailjs-com"
import phone from "../icon/phone.svg"
import mail from "../icon/mail.svg"
import message from "../icon/message.svg"
import React, { useRef, useState } from "react"
import "./index.css"
import sendCheck from "../icon/send-check.svg"

export default function ContactUsForm() {

    const [sent, setSent] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mcjfcd9', 'template_edbkd0s', e.target, 'IpA8V3XiK-bR7_wu8')
          .then((result) => {
              setSent(true)
          }, (error) => {
              console.log(error.text);
          });

      };

     
     

    return(
        <div className="contact_us_container">
        <img src={message} alt="" className="contact_illustration" />

        <div className="contact_text_and_box">

        <div className="gradient">Get in touch</div>


                <form action="" className="contact_box" onSubmit={sendEmail}>



                <div className="contact_input_container">
                <img src={face} alt=""className="contact_icon"  />
                <input maxLength={30} type="text" required name="name" id="contact_input" placeholder="Name" />
                </div>


                <div className="contact_input_container">
                <img  src={phone} alt=""className="contact_icon" />
                <input  maxLength={12} required type="tel" name="phone" id="contact_input" placeholder="Phone" />
                </div>


                <div className="contact_input_container">
                <img  src={mail} alt=""className="contact_icon"  />
                <input maxLength={50} required type="email"  id="contact_input"  placeholder="Email" name="email"/>
                </div>



                <textarea maxLength={200} id="detail" name="message" rows="4" cols="50"  placeholder="Your message"></textarea>
                    <button className="submit_btn"><img className="btn_icon" src={sent ? sendCheck : send} alt="" /> send</button>
                </form>

        
        </div>

        </div>
    )
}