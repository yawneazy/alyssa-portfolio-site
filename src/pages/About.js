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
                 <p>Welcome! I want to tell you a bit about myself 
                  and the journey that’s shaped who I am today. I've always been 
                  ambitious - I was a tri-sport athlete,
                  excelled in academics, and explored a variety of hobbies. 

                  But I've always been drawn to creativity — art and music 
                  were where I truly thrived. Still, I wasn't sure how to turn 
                  that passion into a sustainable career, and it took a lot of 
                  exploration to figure it out.
                  </p>
                  <p>
                  In 2018, I earned a BA in Music from Holy Names University 
                  in Oakland, CA, where I also competed as an NCAA collegiate 
                  golfer on scholarship. During this time, I performed and 
                  taught music lessons. I continued to do this after graduation when I returned
                  to my hometown of Tucson, AZ.
              
                  </p>
                  <p>
                  I joined a band and kept teaching music, but I eventually realized 
                  music education wasn't the right path for me. My 
                  curiousity about software development kept growing. With 
                  the support of my family and then-boyfriend (now husband), 
                  I went back to school and earned a BS in Computer Science 
                  from the University of Arizona in 2023.
                  </p>
                  <p>
                  Learning to code was tough — I lost sleep (and maybe some sanity) — 
                  but it turned out to be the most rewarding thing I’ve ever
                   done. As I transitioned from music teaching to tech roles, I kept asking myself: 
                   Where do I fit in this field? Backend? 
                   Frontend? Testing? It took a mix of jobs and internships to explore different paths,
                   but eventually I found the right fit: <b>UX development</b>. 
                  </p>
                  <p>
                  <p>
                  <b>I've found my dream in UX where I get to blend creativity with problem-solving. </b>
                  Designing and building mobile apps and websites, and being able to bring my own ideas
                  to life is incredibly fullfilling.       </p>

                  To continue growing as a UX professional, 
                  I’m currently pursuing a master’s degree in User Experience 
                  at ASU. While studying and working on design and development 
                  projects, I also launched my own business creating 
                  custom websites for small businesses. With these skills, I can support and people and 
                  causes I care about, and still pursue my passion for music on the side.
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
