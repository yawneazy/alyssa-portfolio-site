import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaGithub, FaLinkedin} from  "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [burgerClass, setBurgerClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("close");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLinkClick = () => {
    setBurgerClass("");
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  useEffect(() => {
    handleLinkClick();
  }, [location]);

  const navLinks = (
    <>
  <Link to="/" onClick={handleLinkClick}>Home</Link>
      <Link to="/work" onClick={handleLinkClick}>Work</Link>
      <Link to="/about" onClick={handleLinkClick}>About</Link>

      <a
        href="/docs/A.Olson_Resume.pdf"
        download
        className="resume-btn"
        onClick={handleLinkClick}
      >
        Resume
      </a>
    </>
  );

  const socialLinks = (
    <div className="nav-socials">
      <a href="https://github.com/yawneazy" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
  
      <a href="mailto:your@email.com">
        <IoIosMail />
      </a>
  
      <a
        href="https://www.linkedin.com/in/alyssayanezolson"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );

  return (
    <nav className="navbar">
      <div className={`burger-menu ${burgerClass}`} onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <Link to="/" className="brand">AY.OLSON</Link>

      {/* DESKTOP */}
      <div className="nav-links desktop-nav">
        {navLinks}
        {socialLinks}
      </div>

      {/* MOBILE */}
      <div className={`${menuClass} nav-links mobile-nav`}>
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/Navbar.css';


// const Navbar = () => {
//   const [menuClass, setMenuClass] = useState("menu hidden");
//   const [burgerClass, setBurgerClass] = useState("");
//   const [isMenuClicked, setIsMenuClicked] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     if (!isMenuClicked) {
//       setBurgerClass("close");
//       setMenuClass("menu visible");
//     } else {
//       setBurgerClass("");
//       setMenuClass("menu hidden");
//     }
//     setIsMenuClicked(!isMenuClicked);
//   };

//   const handleLinkClick = () => {
//     if (isMenuClicked) {
//       setBurgerClass("");
//       setMenuClass("menu hidden");
//       setIsMenuClicked(false);
//     }
//   };

//   useEffect(() => {
//     handleLinkClick();
//   }, [location]);

//   return (
//     <nav className="navbar">
//       <div className={`burger-menu ${burgerClass}`} onClick={toggleMenu}>
//         <div className="burger-bar"></div>
//         <div className="burger-bar"></div>
//         <div className="burger-bar"></div>
//       </div>
//       <Link to="/" className="brand">ALYSSA OLSON</Link>
//       <div className="nav-links">
//         <Link to="/work">Work</Link>
//         {/* <Link to="/design">Design</Link> */}
//         {/* <Link to="/play">Play</Link> */}
//         <Link to="/about">About</Link>

//         <a href="/docs/A.Olson_Resume.pdf" download className="resume-btn">
//     Resume
//   </a>
//       </div>
//       <div className={`${menuClass} nav-links`}>
//         <Link to="/work">Work</Link>
//         {/* <Link to="/design">Design</Link> */}
//         {/* <Link to="/play">Play</Link> */}
//         <Link to="/about">About</Link>

//         <a href="/docs/A.Olson_Resume.pdf" download className="resume-btn">
//     Resume
//   </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;