import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth < 800) {
  //         setIsMenuOpen(false);
  //       }
  //     };
  //     // Initial check for mobile view
  //     handleResize();
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <nav className="navContainer">
      <div className="navContainer_logo">
        <NavLink to="/">
          {/* <img src="#" alt="Logo" /> */}
          <div className="navContainer_logo_first">S</div>
        </NavLink>
        <div className="navContainer_logo_name">Sathveegan</div>
      </div>
      <div className="navContainer_menu-icon" onClick={handleMenuClick}>
        ☰
      </div>
      <div
        className={`navContainer_links ${
          isMenuOpen ? "navContainer_active" : ""
        }`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="navContainer_social-links">
        <a
          href="https://linkedin.com/in/www.linkedin.com/in/sathveegan-yogendrarajah-866060241"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="navContainer_social-links_icon"
            icon={faLinkedin}
            size="2xl"
            style={{ color: "#ff6000" }}
          />
        </a>
        <a
          href="https://github.com/https://github.com/SathveeganYogendrarajah2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ color: "#ff6000" }}
          />
        </a>
        <a
          href="https://web.facebook.com/sathveegan.yogendrarajah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xl"
            style={{ color: "#ff6000" }}
          />
        </a>
      </div>
      {/* {isMenuOpen ? (
        <div className="navContainer_menu-icon">☰</div>
      ) : (
        <div className="navContainer_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
