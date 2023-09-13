import React from "react";
import "../assets/styles/Contact.css";
import location from "../assets/images/location.png";
import mail from "../assets/images/mail.png";
import whatsapp from "../assets/images/whatsapp_.png";
import LinkedIn from "../assets/images/linkedIn.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.webp";

const Contact = () => {
  return (
    <div className="contact-class">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
          <h2>Don't be shy! Hit me up! 👇</h2>
        </div>
        <div className="bottom">
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={location} />
              </div>
              <div className="right">
                <span>Location</span>
                <span>Lahore Pakistan 📍</span>
              </div>
            </a>
          </div>
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={mail} />
              </div>
              <div className="right">
                <span>Mail</span>
                <span>jibrannaeem4855@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={whatsapp} />
              </div>
              <div className="right">
                <span>Whatsapp</span>
                <span>0333********</span>
              </div>
            </a>
          </div>
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={LinkedIn} />
              </div>
              <div className="right">
                <span>LinkedIn</span>
                <span>jibranmuhammadnaeem</span>
              </div>
            </a>
          </div>
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={fb} />
              </div>
              <div className="right">
                <span>Facebook</span>
                <span>Jibran Muhammad Naeem</span>
              </div>
            </a>
          </div>
          <div className="subbottom">
            <a href="#">
              <div className="left">
                <img src={insta} />
              </div>
              <div className="right">
                <span>Instagram</span>
                <span>Jibran Muhammad Naeem</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
