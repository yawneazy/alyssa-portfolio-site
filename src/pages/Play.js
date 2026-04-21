import React, { useState } from 'react';
import '../styles/Play.css'
import { Link } from 'react-router-dom';
import cactuspainting from '../images/cactus-painting.png';
import flowerspainting from '../images/flowers-painting.jpeg';
import digitalProfilePic from '../images/digital-art-profile-pic.jpg';

const Play = () => {

  const projects = [
    // {
    //   type: "music",
    //   title: "Aly Olson Music Site",
    //   image: piano,
    //   link: "https://yawneazy.com",
    //   description:
    //     "Personal music website showcasing my work as a musician and creative producer."
    // },

    // ART
    {
      type: "art",
      title: "Cactus Pointillism Painting",
      image: cactuspainting,
      // link: "#",
      description:
        "2018: Traditional pointillism painting inspired by desert landscapes."
    },
    {
      type: "art",
      title: "Floral Textured Painting",
      image: flowerspainting,
      // link: "#",
      description:
        "2018: Mixed media floral artwork exploring texture and depth."
    },
    {
      type: "art",
      title: "Digital Portrait",
      image: digitalProfilePic,
      // link: "#",
      description:
        "2023: Digital self-portrait created in Procreate exploring lighting and form."
    }
  ];

  const renderArtSection = (title, type) => (
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

  // const renderArtContent = () => (
  //   <>
  //     <div className="art-container">
  //       <div className="thumbnail">
  //         <img src={cactuspainting} alt="Cactus Painting" className="thumbnail" />
  //         <p className="description-title">Description:</p>
  //         <p>
  //           2018: Pointillism desert artwork created on a smaller canvas. The painting was composed of intricate dots and inspired by another
  //           reference painting.
  //         </p>
  //       </div>
  //       <div className="thumbnail">
  //         <img src={flowerspainting} alt="Flowers Painting" className="thumbnail" />
  //         <p className="description-title">Description:</p>
  //         <p>
  //           2018: Textured artwork featuring flowers, created with texture paste, and inspired by a reference painting.
  //         </p>
  //       </div>
  //       <div class="summary-text">
  //         Summary: Working with various art mediums, both digital and traditional, has deepened my understanding of color theory, shadows, and
  //         textures. This artistic foundation has greatly influenced my approach to user experience (UX) design.
  //       </div>
  //       <div className="thumbnail">
  //         <img src={digitalProfilePic} alt="Digital Art Profile Pic" className="thumbnail" />
  //         <p className="description-title">Description:</p>
  //         <p>
  //           2023: Digital portrait photo drawn using ProCreate, a digital art app.
  //         </p>
  //       </div>
  //       <div class="summary-text">
  //         Summary: Working with various art mediums, both digital and traditional, has deepened my understanding of color theory, shadows, and
  //         textures. This artistic foundation has greatly influenced my approach to user experience (UX) design.
  //       </div>
  //     </div>
  //   </>
  // );

  // const renderVideoContent = () => (
  //   <>
  //     <div className="video-container">
  //       <div className="video-item">
  //         <div className="video-thumbnail">
  //           <iframe
  //             src="https://youtube.com/embed/N0yOEFhM4oQ"
  //             title="VGS Video"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //             referrerPolicy="strict-origin-when-cross-origin"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //         <div className="video-description">
  //           <p className="description-title">Description:</p>
  //           <p>This video was created for the SNRC Film Festival 
  //             VGS - the organization I work for. It takes you behind the 
  //             scenes of what we do and how I fit in. Although it was for a film festival,
  //             I wanted to showcase VGS  and give a different perspective on how, even though we work with technoloy, still can help protect our environment.
  //       </p>
  //         </div>
  //       </div>
  
  //       <div className="video-item">
  //         <div className="video-thumbnail">
  //           <iframe
  //             src="https://www.youtube.com/embed/DRmJVM9iY3E?si=umepAZF31sO-XAGz"
  //             title="Coding Your Own Music"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //             referrerPolicy="strict-origin-when-cross-origin"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //         <div className="video-description">
  //           <p className="description-title">Description:</p>
  //           <p>
  //             When I first got interested in coding, I read articles about how music and coding really work quite well together.
  //             Both fields require problem-solving,
  //             attention to detail, and creative thinking within structured
  //             frameworks.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  

  
  return (
    <div className="work-page">
      <div className="work-header">Creative Work</div>

      {/* {renderArtSection("Music", "music")} */}
      {renderArtSection("Art", "art")}

      <div className="home-link">
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
  //   <div>
  //     <div class="play-header">My Creative Side</div>
  //     <div className="play-header2">
  //       Art work 
  //     <div>{renderArtSection()}</div> 
  //     {/* Check out my{' '}
  //       <span className={`artist ${selectedCategory === 'art' ? 'selected' : ''}`} onClick={() => setSelectedCategory('art')}>
  //         art
  //       </span>
  //       ,{' '}
    
  //       and{' '}
  //       <span className={`video-productions ${selectedCategory === 'video' ? 'selected' : ''}`} onClick={() => setSelectedCategory('video')}>
  //         video productions
  //       </span>
  //       . */}
  //     </div>
  //     {/* <p>Select a word above to explore more.</p> */}
  //     {/* <div className="category-header">{renderCategoryHeader()}</div> */}
  //     {/* <div>{renderContent()}</div> */}
  //     <div class="home-link">
  //                <Link to="/">Go Home</Link>
  //                </div>
  //     </div>
  // );
};

export default Play;
