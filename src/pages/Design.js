import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Design.css';

const Design = () => {
  const projects = [
    // UX/UI DESIGN
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
    <div className="design-section">
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
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              )}

              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
      </div>
    </div>
  );

  return (
    <div className="design-page">
      <div className="design-header">Selected Designs</div>

      {renderSection("Design", "design")}

      <div className="home-link">
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default Design;
