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
const Skills = () => {
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
      <div className="skills-content-area">
        <h2 className="sub-header">Skills</h2>
        <div className="skills-dropdown-holder">
          <div
            className={
              scrollPosition / window.innerHeight <
                (window.innerWidth > 600 ? 0.03 : 0.8) || rightDropDownOpen
                ? "skills-dropdown-closed"
                : "skills-dropdown-opened"
            }
          >
            <div className="dropdown-title-holder">
              <p>Front end</p>
            </div>
            <div className="skill-holder">
              <div className="logo-column">
                <div className="skill-logo">
                  <img width={60} src={HTMLLogo} />
                </div>
                <div className="skill-logo">
                  <img width={60} src={CSSLogo} />
                </div>
                <div className="skill-logo">
                  <img width={50} src={JSLogo} />
                </div>
                <div className="skill-logo">
                  <img width={60} src={ReactLogo} />
                </div>
                <div className="skill-logo">
                  <img width={60} src={ReactNativeLogo} />
                </div>
              </div>
              <div className="skill-name-column">
                <p>HTML5</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>React Native</p>
              </div>
            </div>
          </div>
          <div
            className={
              scrollPosition / window.innerHeight <
                (window.innerWidth > 600 ? 0.03 : 0.8) || rightDropDownOpen
                ? "skills-dropdown-closed"
                : "skills-dropdown-opened"
            }
          >
            <div className="dropdown-title-holder">
              <p>Back end</p>
            </div>
            <div className="skill-holder">
              <div className="logo-column">
                <div className="skill-logo">
                  <img width={50} src={NodeJSLogo} />
                </div>
                <div className="skill-logo">
                  <img width={50} src={JavaLogo} />
                </div>
                <div className="skill-logo">
                  <img width={30} src={MongoDBLogo} />
                </div>
                <div className="skill-logo">
                  <img width={60} src={RealmLogo} />
                </div>
                <div className="skill-logo">
                  <img width={60} src={ExpressJSLogo} />
                </div>
              </div>
              <div className="skill-name-column">
                <p>Node</p>
                <p>Java</p>
                <p>Mongodb</p>
                <p>Realm</p>
                <p>Express</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
