import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom'; 
import portrait from '../images/homepic.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <div className="home-header">Hi, I'm Alyssa.</div>
        <br></br>
        <div className="home-header2">
          <span className="developer">
            <Link to="/work">Developer</Link>
          </span>
          {" "}and{" "}
          <span className="designer">
            <Link to="/design">designer.</Link>
          </span>
        </div>

        <div className="home-content">
          I'm a Frontend developer and UX designer based in Tucson, AZ.
          I build thoughtful, user-centered digital experiences.

        </div>
      </div>

      <div className="home-image">
        <img src={portrait} alt="Profile pic" className="portrait-photo" />
      </div>
    </div>
  );
};

export default Home;