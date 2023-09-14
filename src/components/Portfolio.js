import React, { useState } from "react";
import "../assets/styles/Portfolio.css";
import newmethods from "../assets/images/learnnewmethods.png";
import norvido from "../assets/images/norvido.jpg";
import PortfolioProject from "./PortfolioProject";

const Portfolio = (props) => {
  const [websiteDetails, setWebsiteDetail] = useState([
    {
      name: "Learning Website",
      paragraph:
        "This is my learning purpose website to developed in ReactJS FrontEnd Project in 2 days. Basically its a challege for me to developthis website in minimum days. And I Completed the Challenge in 2days by giving my 100% effort.",
      technologies: ["ReactJS", "CSS"],
      picture: newmethods,
      githublink: "https://github.com/Jibran4855/LearningNewMethods",
      livewebsitelink: "https://jibran4855.github.io/LearningNewMethods/",
      row: "row",
    },
    {
      name: "AuroraLabz (Rebranded to Norvido)",
      paragraph:
        "Nordivo stands as your global partner in the development of decentralized technologies, encompassing blockchains and software solutions. Our core mission is enable you with designing, developing, and deploying state-of-the-art solutions for web3. As a rapidly expanding organization, we operate on a global scale, with a remote-first approach and a diverse team of engineers, researchers, and cryptographers spread across two continents",
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
