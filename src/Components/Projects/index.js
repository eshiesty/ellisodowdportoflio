import React, { useEffect, useState } from "react";
import "./styles.css";
import HTMLLogo from "../../Assets/html5.png";
import CSSLogo from "../../Assets/CSS3.png";
import JSLogo from "../../Assets/JS.png";
import ReactLogo from "../../Assets/React.png";
import ReactNativeLogo from "../../Assets/ReactNative.png";
import NodeJSLogo from "../../Assets/NodeJS.png";
import JavaLogo from "../../Assets/Java.png";
import MongoDBLogo from "../../Assets/MongoDB.png";
import RealmLogo from "../../Assets/Realm.png";
import ExpressJSLogo from "../../Assets/ExpressJS.png";
import YolkifyLogo from "../../Assets/Yolkify.png";
const Projects = () => {
  const [leftDropDownOpen, setLeftDropDownOpen] = useState(false);
  const [rightDropDownOpen, setRightDropDownOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(window.innerHeight);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(window.innerHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  });
  return (
    <div className="skills-zone">
      <div className="project-content-area">
        <h2 className="sub-header">Projects</h2>
        {/* <div className="project-area "> */}
        <div className="project-grid">
          {/* <div className="project-header-holder"> */}
          <div className="project-name-and-photo">
            <img width={57} height={65} src={YolkifyLogo} />
            <h3 className="project-name yolkify">Yolkify</h3>
          </div>
          <p className="project-description">
            A social workout tracker for IOS and Android
          </p>

          <div className="skill-holder-grid">
            {/* <div className="skill-holder"> */}
            {/* <div className="logo-column"> */}
            <div className="logo-column-grid">
              <div className="skill-logo">
                <img width={60} src={ReactNativeLogo} />
              </div>
              <div className="skill-logo">
                <img width={50} src={JSLogo} />
              </div>
              <div className="skill-logo">
                <img width={60} src={CSSLogo} />
              </div>
              <div className="skill-logo">
                <img width={30} src={MongoDBLogo} />
              </div>
              <div className="skill-logo">
                <img width={60} src={RealmLogo} />
              </div>
            </div>
          </div>
          <div className="skill-name-holder-grid">
            {/* <div className="skill-name-column"> */}
            <p className="skill-name-grid">React Native</p>
            <p className="skill-name-grid">Javascript</p>
            <p className="skill-name-grid">CSS</p>
            <p className="skill-name-grid">Mongodb</p>
            <p className="skill-name-grid">Realm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
