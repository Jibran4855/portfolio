import React from "react";
import "../assets/styles/About.css";
import programmer from "../assets/images/About1.png";

const About = (props) => {
  return (
    <div className="About-class">
      <div className="container">
        <div className="left">
          <img src={programmer} width="400" height="400" />
        </div>
        <div className="right">
          <div className="top">
            <h1>About Me</h1>
          </div>
          <div className="mid">
            A dedicated Full-stack Developer based in Lahore, Pakistan. 📍
          </div>
          <div className="bottom">
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in <span className="skill-span">HTML5</span> ,{" "}
              <span className="skill-span">CSS3</span>,{" "}
              <span className="skill-span">JavaScript</span>,{" "}
              <span className="skill-span">ReactJS</span>,{" "}
              <span className="skill-span">NodeJS</span>,{" "}
              <span className="skill-span">C#</span>, and{" "}
              <span className="skill-span">SQL</span>. I excel in designing and
              maintaining responsive websites that offer a smooth user
              experience. My expertise lies in craftingdynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              playerwho thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
