import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../images/homepic.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div>
    <div class="about-container">
      <div class="about-text">
      <h1>About Me</h1>
                 <p>Although my journey has taken some unexpected turns,
                  it shaped me into a versatile creator. I’ve always been 
                  drawn to creativity, but turning that passion into a career 
                  wasn’t easy.
                  </p>
                  <p>
                  In 2018, I earned a BA in Music from Holy Names University 
                  while competing as an NCAA golfer, performing, and teaching 
                  music. My growing interest in technology led me to complete a 
                  BS in Computer Science at the University of Arizona in 2023.
                  </p>

                  <p>
                  Learning to code was challenging but incredibly rewarding. 
                  Through jobs and internships, I discovered my perfect fit: 
                  <b> Front-end Design and Development.</b> With this, I get to blend creativity with 
                  problem-solving to build mobile apps and websites.
                  </p>
    <p> I’m now finishing up my master’s degree in User Experience at ASU, and launching a 
      custom website business to support local businesses and projects I care about. 
      I’ve found my dream career and am excited for what’s ahead:)
</p>

     </div>
      {/* <div class="portrait-container"> */}
      <img src={portrait} alt="Profile pic" className="portrait-photo" />
      {/* </div> */}
    </div>
    <div class="home-link">
      <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default About;   
