import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Work.css';

import piano from '../images/piano.jpg';
import vgslogo from '../images/vgs-logo.png';
import yawneazyMusic from '../images/yawneazy-site.JPG';

const Work = () => {
  const projects = [
    {
      type: "development",
      title: "Olson Wedding Photos",
      image: piano,
      link: "https://olsonwedding123.web.app/",
      description:
        "React + Firebase site showcasing a responsive photography portfolio."
    },
    {
      type: "development",
      title: "VGS Website",
      image: vgslogo,
      link: "https://vgs.arizona.edu",
      description:
        "UI/UX redesign and ongoing frontend improvements for VGS."
    },
    {
      type: "development",
      title: "Aly Olson Music",
      image: yawneazyMusic,
      link: "https://yawneazy.com",
      description:
        "Personal music website built and deployed as a creative project."
    },

    // // UX / DESIGN
    {
      type: "design",
      title: "Mood Mobile App Prototype",
      image: null,
      link: "https://www.figma.com/design/9PDlZ6Ew5opY1bwI6CWaHY/Mood-Mobile-Prototype",
      description:
        "UX prototype for a concert ticketing app created in Figma."
    },
    {
      type: "design",
      title: "VGS iOS Mobile App Prototype",
      image: null,
      link: "https://www.figma.com/design/KJNOKjplUNdOnmjda0sZhb/VGS-iOS-App?node-id=0-1&p=f",
      description:
        "UX prototype for the iOS VGS app on Figma"
    },
    {
      type: "design",
      title: "Type Persona Specimen",
      image: null,
      link: "https://www.figma.com/design/bgefy02CQro8wIc5ZR5CP6",
      description:
        "Typography-based UX exploration and component design system."
    }
  ];

  const renderSection = (title, type) => (
    <div className="work-section">
      <h2>{title}</h2>

      <div className="project-grid">
        {projects
          .filter((p) => p.type === type)
          .map((project, index) => (
            <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
      
            </div>
          
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            )}
                    <span className="card-link">View Project →</span>
          </a>
          ))}
      </div>
    </div>
  );

  return (
    <div className="work-page">
      <div className="work-header">Selected Work</div>

      {renderSection("Development", "development")}
      {renderSection("Design", "design")}

      {/* <div className="home-link">
        <Link to="/">Go Home</Link>
      </div> */}
    </div>
  );
};

export default Work;
