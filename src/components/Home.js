import React from "react";
import img from "../assets/images/programmer.png";
import jibran from "../assets/images/Jibran1.png";
import html5 from "../assets/images/html5.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import csharp from "../assets/images/c-sharp.png";
import sql from "../assets/images/database.png";
import "../assets/styles/Home.css";

const Home = (props) => {
  return (
    <div className="Home-class">
      <div className="top">
        <div className="profile-desc">
          <h1>Full Stack Developer (MERN)</h1>
          <p>
            Hi, I'm <span>Jibran Muhammad Naeem</span>. A passionate Full Stack
            Developer based in Lahore, Pakistan. 📍
          </p>
        </div>
        <div className="profile-pic">
          <img src={jibran} width="400" height="350" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>Tech Stacks</h2>
          <span className="borderright"></span>
        </div>
        <div className="right">
          <div>
            <img src={html5} width="50" height="50" />
          </div>
          <div>
            <img src={css} width="50" height="50" />
          </div>
          <div>
            <img src={js} width="50" height="50" />
          </div>
          <div>
            <img src={react} width="50" height="50" />
          </div>
          <div>
            <img src={nodejs} width="50" height="50" />
          </div>
          <div>
            <img src={csharp} width="50" height="50" />
          </div>
          <div>
            <img src={sql} width="50" height="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
