import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";
import TopNavBar from "../TopNavBar";
import { isMobile } from "react-device-detect";
import HambergerMenu from "../HamburgerMenu";
const AboutMe = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className="about-me-zone">
      {isMobile ? (
        <div id="hamburger-container">
          <div
            onClick={() => {
              setHamburgerMenuOpen(!hamburgerMenuOpen);
              console.log(hamburgerMenuOpen);
            }}
            id="hamburger-menu-icon-holder"
          >
            <MdMenu size={45} />
          </div>
          <div
            className={`${
              hamburgerMenuOpen ? "hamburger-menu" : "hamburger-hidden"
            }`}
          >
            <HambergerMenu />
          </div>
        </div>
      ) : (
        <div className="top-nav-landing-holder">
          <TopNavBar />
        </div>
      )}
      <h1>about me</h1>
    </div>
  );
};

export default AboutMe;
