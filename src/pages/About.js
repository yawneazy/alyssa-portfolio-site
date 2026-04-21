import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../images/homepic.jpg';
import holdingEl from '../images/me_&_El.jpeg';
import performing from '../images/performing.jpeg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
    <div className="about-container">
      <div className="about-text">
      <h1>About Me</h1>
                  <p> I competed as a NCAA Division II collegiate golfer while I earned a B.A. in Music 
                  from Holy Names University in 2018. After developing a growing interest in technology, 
                  I went on to complete a 
                  B.S. in Computer Science at the University of Arizona in 2023.
                  </p>
                  <p>
                    During this transition, I also discovered a passion for design which led me to pursue 
                    an M.S. in User Experience at Arizona State University, completed in 2025—just before the birth of my daughter.
                  
                  Through my studies, internships and professional experience, I found my focus in frontend development and UI/UX design, 
                  where I get to combine creativity with 
                  problem-solving to build thoughtful digital experiences.
                  </p>
                  <p>
                  I’m always open to connecting on new projects or opportunities and continuing to grow as a developer and designer.
</p>

     </div>
      <div className="about-images">
      <img src={holdingEl} alt="me holding Elena" className="about-img" />
      <img src={performing} alt="me performing" className="about-img" />
      </div>
    </div>
    {/* <div class="home-link">
      <Link to="/">Go Home</Link>
      </div> */}
    </div>
  );
};

export default About;