import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import TopNavBar from "../TopNavBar";
import HambergerMenu from "../HamburgerMenu";
import { ReactComponent as Logo } from "../../Assets/ellislogo.svg";
const NavigationComponent = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div>
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
      <Logo className="mobile-logo" />
      <div id="top-nav-landing-holder">
        <TopNavBar />
      </div>
    </div>
  );
};

export default NavigationComponent;
