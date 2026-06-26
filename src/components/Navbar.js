import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
    const [menuClass, setMenuClass] = useState("menu hidden");
  const [burgerClass, setBurgerClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
    if (isMenuClicked) {
      setBurgerClass("");
      setMenuClass("menu hidden");
      setIsMenuClicked(false);
    }
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
      <a href="mailto:alyssa.kyanez1@gmail.com">
        <IoIosMail />
      </a>
      <a href="https://www.linkedin.com/in/alyssayanezolson" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://buymeacoffee.com/yawneazy" target="_blank" rel="noreferrer">
        <FaHandHoldingHeart />
      </a>
    </div>
  );

  return (
    <nav className="navbar">

      <Link to="/" className="brand">ALYSSA OLSON</Link>

      {/* BURGER (mobile only) */}
      <div className={`burger-menu ${isMenuClicked ? "open" : ""}`} onClick={toggleMenu}>
  <div className="burger-bar"></div>
  <div className="burger-bar"></div>
  <div className="burger-bar"></div>
</div>

      {/* DESKTOP NAV */}
      <div className="nav-links desktop-nav">
        {navLinks}
        {socialLinks}
      </div>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${isMenuClicked ? "visible" : "hidden"}`}>
        {navLinks}
        {socialLinks}
      </div>

    </nav>
  );
};

export default Navbar;
