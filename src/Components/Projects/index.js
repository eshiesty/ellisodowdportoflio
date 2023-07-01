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
import Mongoose from "../../Assets/Mongoose.png";
import RealmLogo from "../../Assets/Realm.png";
import NextJSLogo from "../../Assets/NextJSLogo.png";
import ExpressJSLogo from "../../Assets/ExpressJS.png";
import YolkifyLogo from "../../Assets/Yolkify.png";
import YolkifyDashboard from "../../Assets/YolkifyDashboard.png";
import YolkifyProfile from "../../Assets/YolkifyProfile.png";
import YolkifyWeb from "../../Assets/YolkifyWeb.png";
import MintervalLanding from "../../Assets/MintervalLanding.png";
import MintervalProfile from "../../Assets/MintervalProfile.png";
import mintervalclock from "../../Assets/mintervalclock.png";
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
    <div id="skills-zone">
      <div className="project-content-area">
        <h2 className="sub-header project-header">Projects</h2>
        {/* <div className="project-area "> */}
        <div className="yolkify-grid">
          {/* <div className="project-header-holder"> */}
          <div className="project-photo">
            <img width={57} height={65} src={YolkifyLogo} />
          </div>
          <div className="project-name yolkify">
            <h3>Yolkify</h3>
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
          <img id="yolkify-dashboard" src={YolkifyDashboard} />
          <img id="yolkify-profile" src={YolkifyProfile} />
        </div>
        {/* YOLKIFY APP WEB PAGE 

!!!!!!!!

          ! */}
        <div className="yolkify-web-grid">
          <div />
          {/* <div className="project-header-holder"> */}
          <div className="project-photo">
            <img width={57} height={65} src={YolkifyLogo} />
          </div>
          <div className="project-name yolkify">
            <a href="https://www.yolkify.app">
              <h3 className="project-name yolkify">yolkify.app</h3>
            </a>
          </div>
          <p className="project-description description-yolk-web">
            The accompanying web page for the Yolkify app
          </p>

          <div className="skill-holder-grid">
            {/* <div className="skill-holder"> */}
            {/* <div className="logo-column"> */}
            <div className="logo-column-grid">
              <div className="skill-logo">
                <img width={60} src={ReactLogo} />
              </div>
              <div className="skill-logo">
                <img width={60} src={NextJSLogo} />
              </div>
              <div className="skill-logo">
                <img width={50} src={JSLogo} />
              </div>
              <div className="skill-logo">
                <img width={60} src={CSSLogo} />
              </div>
            </div>
          </div>
          <div className="skill-name-holder-grid">
            {/* <div className="skill-name-column"> */}
            <p className="skill-name-grid">React</p>
            <p className="skill-name-grid">NextJS</p>
            <p className="skill-name-grid">Javascript</p>
            <p className="skill-name-grid">CSS</p>
          </div>
          <img id="yolkify-web-ss" src={YolkifyWeb} />
        </div>
        {/*
        
        
        MINTERVAL

!!!!!!!!

          ! */}
        <div className="yolkify-web-grid minterval-border">
          <div />
          {/* <div className="project-header-holder"> */}
          <div className="project-photo">
            <img width={60} height={60} src={mintervalclock} />
          </div>
          <div className="project-name yolkify">
            <a href="https://www.minterval.com">
              <h3 className="project-name minterval">minterval.com</h3>
            </a>
          </div>
          <p className="project-description description-minterval">
            A social network that manufactures quality using interval limits for
            publishing content. (currently down)
          </p>

          <div className="skill-holder-grid">
            {/* <div className="skill-holder"> */}
            {/* <div className="logo-column"> */}
            <div className="logo-column-grid">
              <div className="skill-logo">
                <img width={60} src={ReactLogo} />
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
                <img width={60} src={Mongoose} />
              </div>
              <div className="skill-logo">
                <img width={60} src={NodeJSLogo} />
              </div>
              <div className="skill-logo">
                <img width={60} src={ExpressJSLogo} />
              </div>
            </div>
          </div>
          <div className="skill-name-holder-grid">
            {/* <div className="skill-name-column"> */}
            <p className="skill-name-grid">React</p>
            <p className="skill-name-grid">Javascript</p>
            <p className="skill-name-grid">CSS</p>
            <p className="skill-name-grid">MongoDB</p>
            <p className="skill-name-grid">Mongoose</p>
            <p className="skill-name-grid">Node</p>
            <p className="skill-name-grid">ExpressJS</p>
          </div>
          <div id="minterval-ss-column">
            <img className="minterval-ss" src={MintervalLanding} />
            <img className="minterval-ss" src={MintervalProfile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
