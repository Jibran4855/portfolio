import React from "react";
import "../assets/styles/Portfolio.css";
import newmethods from "../assets/images/learnnewmethods.png";

const Portfolio = (props) => {
  return (
    <div className="Portfolio-class">
      <div className="container">
        <div className="top">
          <h1>Portfolio</h1>
          <h2>Each project is a unique piece of development </h2>
        </div>
        <div className="bottom">
          <div className="containerb">
            <div className="leftb">
              <img src={newmethods} />
            </div>
            <div className="rightb">
              <div className="topb">
                <h3>Learning Website</h3>
              </div>
              <div className="midb">
                <p>
                  This is my learning purpose website to developed in ReactJS
                  Front End Project in 2 days. Basically it's a challege for me
                  to develop this website in minimum days. And I Completed the
                  Challenge in 2 days by giving my 100% effort.
                </p>
                <div className="midbtn">
                  <span>ReactJS</span>
                  <span>CSS</span>
                </div>
              </div>
              <div className="bottomb">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://jibran4855.github.io/LearningNewMethods/"
                  target="_blank"
                >
                  <div className="livebtn">
                    Live Demo <i class="fa fa-play-circle"></i>
                  </div>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Jibran4855/LearningNewMethods"
                  target="_blank"
                >
                  <div className="gitbtn">
                    Code <i class="fa fa-github"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
