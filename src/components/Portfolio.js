import React, { useState } from "react";
import "../assets/styles/Portfolio.css";
import newmethods from "../assets/images/learnnewmethods.png";
import norvido from "../assets/images/norvido.jpg";
import PortfolioProject from "./PortfolioProject";
import portfolio from "../assets/images/portfolio.jpg";

const Portfolio = (props) => {
  const [websiteDetails, setWebsiteDetail] = useState([
    {
      name: "Learning Website",
      paragraph:
        "This website serves as my learning project, developed using ReactJS for the frontend. I aimed to complete this challenge within a two-day timeframe. It was a personal challenge for me to develop this website in such a short period, and I successfully completed it by putting in 100% effort.",
      technologies: ["ReactJS", "CSS"],
      picture: newmethods,
      githublink: "https://github.com/Jibran4855/LearningNewMethods",
      livewebsitelink: "https://jibran4855.github.io/LearningNewMethods/",
      row: "row",
    },
    {
      name: "AuroraLabz (Rebranded to Nordivo)",
      paragraph:
        "Nordivo stands as your global partner in the development of decentralized technologies, encompassing blockchains and software solutions. Our core mission is enable you with designing, developing, and deploying state-of-the-art solutions for web3. As a rapidly expanding organization, we operate on a global scale, with a remote-first approach and a diverse team of engineers",
      technologies: [
        "Javascript",
        "JQuery",
        "HTML5",
        "ReactJS",
        "NodeJS",
        "CSS",
      ],
      picture: norvido,
      githublink: "https://nordivo.com/",
      livewebsitelink: "https://nordivo.com/",
      row: "row-reverse",
    },
    {
      name: "My Portfolio",
      paragraph:
        "My portfolio project reflects my passion for creativity and problem-solving. Each project I've undertaken has been an opportunity to learn, grow, and showcase my skills. From web development to graphic design, I take pride in delivering solutions that not only meet but exceed expectations. My portfolio represents the journey I've embarked on in my career, and I'm excited to continue exploring new challenges and creating meaningful work that leaves a lasting impact.",
      technologies: ["Javascript", "ReactJS", "CSS"],
      picture: portfolio,
      githublink: "https://github.com/Jibran4855/portfolio",
      livewebsitelink: "https://jibran4855.github.io/portfolio/",
      row: "row",
    },
  ]);

  return (
    <div className="Portfolio-class">
      <div className="container">
        <div className="top">
          <h1>Portfolio</h1>
          <h2>Each project is a unique piece of development.</h2>
        </div>
        <PortfolioProject websiteDetails={websiteDetails} />
      </div>
    </div>
  );
};

export default Portfolio;
