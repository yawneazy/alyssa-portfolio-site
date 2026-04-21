import React from 'react';

import {FaGithub, FaLinkedin} from  "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="footer">
       <p>© 2026 Alyssa Olson</p>
  <p>Frontend Developer • UX Designer • Creator</p>
        {/* <p>Built with React • Designed & developed by Alyssa Olson</p> */}
        {/* <p>Thanks for stopping by — let’s build something cool together.</p> */}
        {/* <p>Let’s connect → GitHub • LinkedIn • Email</p> */}
      {/* <h1>Let's connect (:</h1>
<div className="social-icons">
          <a href="https://github.com/yawneazy"><FaGithub /></a>
          <a href="https://music.apple.com/us/artist/yawneazy/1335067186"><IoIosMail /></a>
          <a href="https://www.linkedin.com/in/alyssayanezolson"><FaLinkedin /></a>
             </div> */}
    </footer>
  );
};

export default Footer;