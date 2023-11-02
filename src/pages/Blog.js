import React from 'react';
import "../styles/blog.css"
import cocktail from "../assets/images/cocktail.jpg"
import coffee from "../assets/images/coffee.jpg"
import sweets from "../assets/images/sweets.jpg"
import burger from "../assets/images/burger.jpg"


const projectData = [
  {
    title: "Article nr1",
    subtitle: "Subtitle for article",
    imgSrc: coffee,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ['Coffee', 'Beverage'],
  },
  {
    title: "Article nr2",
    subtitle: "Subtitle for article",
    imgSrc: burger,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ['Food', 'Lunch', 'Dining'],
    customColor: 'red',
  },
  {
    title: "Article nr3",
    subtitle: "Subtitle for article",
    imgSrc: cocktail,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ['Cocktails', 'Alcohol'],
    customColor: 'green',
  },
  {
    title: "Article nr4",
    subtitle: "Subtitle for article",
    imgSrc: sweets,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Deserts","Sweets"],
    customColor: '#F5AF41',
  },
];

function ProjectCard({ title, subtitle, imgSrc, description, tags, customColor }) {
  const cardStyle = customColor ? { '--projcard-color': customColor } : {};

  return (
    <div className={`projcard projcard-${customColor ? 'customcolor' : 'blue'}`} style={cardStyle}>
      <div className="projcard-innerbox">
        <img className="projcard-img" src={imgSrc} alt={title} />
        <div className="projcard-textbox">
          <div className="projcard-title">{title}</div>
          <div className="projcard-subtitle">{subtitle}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{description}</div>
          <div className="projcard-tagbox">
            {tags.map((tag, index) => (
              <span className="projcard-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCardContainer() {
  return (
    <div className="projcard-container">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectCardContainer;
