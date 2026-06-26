import React from 'react';
import '../styles/Work.css';

const projects = [
  {
    type: "development",
    title: "MadeForURL",
    link: "https://madeforurl.com/",
    description: "Custom website business design and implementation",
    tags: ["React", "Vite", "Vercel"]
  },
  {
    type: "development",
    title: "Valencia Financial Group",
    link: "https://valenciafinancialgroup.com/",
    description: "Design and implementation for Valencia Financial Accounting firm",
    tags: ["React", "Resend", "Vercel"]
  },
  {
    type: "development",
    title: "Nik Bolivar Productions",
    link: "https://nikbolivar.com/",
    description: "Design and implementation for Nik Bolivar - Video Producer",
    tags: ["React", "Firebase"]
  },
  {
    type: "development",
    title: "Wedding Photography Site",
    link: "https://olsonwedding123.web.app/",
    description: "React + Firebase site showcasing a responsive photography portfolio.",
    tags: ["React", "Firebase"]
  },
  {
    type: "development",
    title: "Aly Olson Music",
    link: "https://yawneazy.com",
    description: "Personal music website built and deployed as a creative project.",
    tags: ["React", "Firebase"]
  },
  {
    type: "design",
    title: "Mood Mobile App Prototype",
    link: "https://www.figma.com/design/9PDlZ6Ew5opY1bwI6CWaHY/Mood-Mobile-Prototype",
    description: "UX prototype for a concert ticketing app created in Figma.",
    tags: ["Figma", "UX"]
  },
  {
    type: "design",
    title: "VGS iOS Mobile App Prototype",
    link: "https://www.figma.com/design/KJNOKjplUNdOnmjda0sZhb/VGS-iOS-App?node-id=0-1&p=f",
    description: "UX prototype for the iOS VGS (Vegetation GIS System) app on Figma.",
    tags: ["Figma", "UX"]
  },
  {
    type: "design",
    title: "Type Persona Specimen",
    link: "https://www.figma.com/design/bgefy02CQro8wIc5ZR5CP6",
    description: "Typography-based UX exploration and component design system.",
    tags: ["Figma", "Typography"]
  }
];
// ─────────────────────────────────────────────────────────────────────────────

const getFavicon = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return null;
  }
};

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="project-card"
  >
    <div className="project-header">
      <img
        src={getFavicon(project.link)}
        alt=""
        className="project-favicon"
        onError={(e) => e.target.style.display = 'none'}
      />
      <h3>{project.title}</h3>
    </div>

    <p className="project-desc">{project.description}</p>

    {project.tags?.length > 0 && (
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    )}

    <span className="view-link">View project →</span>
  </a>
);

const Work = () => {
  const devProjects = projects.filter(p => p.type === 'development');
  const designProjects = projects.filter(p => p.type === 'design');

  return (
    <div className="work-page">
      <section className="work-section">
        <h2>Development</h2>
        <div className="project-grid">
          {devProjects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section>

      <section className="work-section">
        <h2>Design</h2>
        <div className="project-grid">
          {designProjects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section>
    </div>
  );
};

export default Work;

// import React from 'react';
// // import { Link } from 'react-router-dom';
// import '../styles/Work.css';

// import madeforurlLogo from '../images/madeforurl.jpg';
// import piano from '../images/piano.jpg';
// import vgslogo from '../images/vgs-logo.png';
// import valenciaLogo from '../images/valencia-logo.jpg';
// import yawneazyMusic from '../images/yawneazy-site.JPG';

// const Work = () => {
//   const projects = [
//     {
//       type: "development",
//       title: "MadeForURL",
//       image: madeforurlLogo,
//       link: "https://madeforurl.com/",
//       description:
//         "Design and implementation for MadeForURL custom website business"
//     },
//     {
//       type: "development",
//       title: "Valencia Financial Accounting",
//       image: valenciaLogo,
//       link: "https://valenciafinancialgroup.com/",
//       description:
//         "Design and implementation for Valencia Financial Accounting firm - In progress"
//     },
//     {
//       type: "development",
//       title: "Nik Bolivar Productions",
//       // image: valenciaLogo,
//       link: "https://nikbolivar.com/",
//       description:
//         "Design and implementation for Nik Bolivar - Video Producer"
//     },
//     // {
//     //   type: "development",
//     //   title: "VGS Website",
//     //   image: vgslogo,
//     //   link: "https://vgs.arizona.edu",
//     //   description:
//     //     "UI/UX redesign and ongoing frontend improvements for VGS."
//     // },
//     {
//       type: "development",
//       title: "Wedding Photography Site",
//       image: piano,
//       link: "https://olsonwedding123.web.app/",
//       description:
//         "React + Firebase site showcasing a responsive photography portfolio."
//     },
//     {
//       type: "development",
//       title: "Aly Olson Music",
//       image: yawneazyMusic,
//       link: "https://yawneazy.com",
//       description:
//         "Personal music website built and deployed as a creative project."
//     },

//     // UX / DESIGN
//     {
//       type: "design",
//       title: "Mood Mobile App Prototype",
//       image: null,
//       link: "https://www.figma.com/design/9PDlZ6Ew5opY1bwI6CWaHY/Mood-Mobile-Prototype",
//       description:
//         "UX prototype for a concert ticketing app created in Figma."
//     },
//     {
//       type: "design",
//       title: "VGS iOS Mobile App Prototype",
//       image: null,
//       link: "https://www.figma.com/design/KJNOKjplUNdOnmjda0sZhb/VGS-iOS-App?node-id=0-1&p=f",
//       description:
//         "UX prototype for the iOS VGS app on Figma"
//     },
//     {
//       type: "design",
//       title: "Type Persona Specimen",
//       image: null,
//       link: "https://www.figma.com/design/bgefy02CQro8wIc5ZR5CP6",
//       description:
//         "Typography-based UX exploration and component design system."
//     }
//   ];

//   const renderSection = (title, type) => (
//     <div className="work-section">
//       <h2>{title}</h2>

//       <div className="project-grid">
//         {projects
//           .filter((p) => p.type === type)
//           .map((project, index) => (
//             <a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noreferrer"
//             className="project-card"
//           >
//             <div className="card-content">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
      
//             </div>
          
//             {project.image && (
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="project-img"
//               />
//             )}
//                     <span className="card-link">View Project →</span>
//           </a>
//           ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="work-page">
//       <div className="work-header">Selected Work</div>

//       {renderSection("Development", "development")}
//       {renderSection("Design", "design")}

//       {/* <div className="home-link">
//         <Link to="/">Go Home</Link>
//       </div> */}
//     </div>
//   );
// };

// export default Work;
