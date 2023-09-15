import React, { useState } from "react";
import "../assets/styles/Contact.css";
import location from "../assets/images/location.png";
import mail from "../assets/images/mail.png";
import whatsapp from "../assets/images/whatsapp_.png";
import LinkedIn from "../assets/images/linkedIn.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.webp";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState([
    {
      img: location,
      title: "Location",
      description: "Lahore Pakistan 📍",
    },
    {
      img: mail,
      title: "Mail",
      description: "jibrannaeem4855@gmail.com",
    },
    {
      img: whatsapp,
      title: "Whatsapp",
      description: "0333********",
    },
    {
      img: LinkedIn,
      title: "LinkedIn",
      description: "jibranmuhammadnaeem",
    },
    {
      img: fb,
      title: "Facebook",
      description: "Jibran Muhammad Naeem",
    },
    {
      img: insta,
      title: "Instagram",
      description: "Jibran Muhammad Naeem",
    },
  ]);

  return (
    <div className="contact-class">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
          <h2>Don't be shy! Hit me up! 👇</h2>
        </div>
        <div className="bottom">
          {contactDetails.map((itm) => (
            <div className="subbottom">
              <a href="#">
                <div className="left">
                  <img src={itm.img} />
                </div>
                <div className="right">
                  <span>{itm.title}</span>
                  <span>{itm.description}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
