import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../TopNavBar";
import { isMobile } from "react-device-detect";
import HambergerMenu from "../HamburgerMenu";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as TopBlob } from "../../Assets/TopBlob.svg";
import { ReactComponent as SideBlob } from "../../Assets/sideblob.svg";
import headshot from "../../Assets/headshot.webp";
import aboutraiders from "../../Assets/aboutraiders.webp";
import aboutlakers from "../../Assets/aboutlakers.webp";
import viakoologo from "../../Assets/viakoologo.webp";
import thalogo from "../../Assets/thalogo.webp";
import ltcc from "../../Assets/ltcc.webp";
import smartcardlogo from "../../Assets/smartcardlogo.webp";
import TechnoRiver from "../TechnoRiver";

const Development = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <>
      <div className="background">
        {isMobile ? (
          <>
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
          </>
        ) : (
          <div className="top-nav-landing-holder">
            <TopNavBar />
          </div>
        )}
        <div className="cover-text-holder">
          <div className="blob-holder">
            <TopBlob className="top-blob" />
          </div>
          <div className="header-holder">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mobile developer",
                3000,
                "Web developer",
                3000,
                "Front end developer",
                1000,
                "Full stack developer",
                1000,
                "Designer",
                500,
                "Freelancer",
                500,
              ]}
              wrapper="span"
              speed={50}
              className="header"
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className="name-holder">
              <img
                src={headshot}
                alt="Ellis O'Dowd head shot"
                className="headshot"
              />
              <h2 className="name">
                <div className="first-name">Ellis</div>&nbsp;O'Dowd
              </h2>
            </div>
          </div>
        </div>
      </div>
      <TechnoRiver />
      <div className="about-section">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "About me",
          ]}
          wrapper="span"
          speed={10}
          className="subheader"
        />
        <div className="about-text-container">
          <p>
            I'm a 21 year old software engineer based in Reno, Nevada. I'm
            currently in college studying computer science, but this hasn't
            stopped me from working with companies and individuals to meet their
            software needs.
          </p>
          <p>
            I love to stay active. I've played Ice Hockey for nearly my entire
            life (If you're a parent looking to schedule lessons, click{" "}
            <a href="/hockey">here</a>).
            <br /> When I'm off the ice, you can expect to find me at the golf
            course, in the gym, or working on my projects.
          </p>
        </div>
        <img
          src={aboutlakers}
          alt="Ellis O'Dowd playing on the Lake Tahoe Lakers"
          id="about-lakers"
        />
        <img
          src={aboutraiders}
          alt="Ellis O'Dowd playing on the Reno Ice Raiders"
          id="about-raiders"
        />
      </div>
      {/* <div id="resume-section">
        <div id="column-holder">
          <div className="resume-col">
            <div className="resume-item">
              <img
                src={viakoologo}
                style={{ width: "100px" }}
                alt="Viakoo company logo"
              />
              <p>Viakoo</p>
            </div>
            <div className="resume-item">
              <div className="resume-photo-holder">
                <img
                  src={smartcardlogo}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  alt="Viakoo company logo"
                />
              </div>
              <p>SmartCard Solutions</p>
            </div>
          </div>
          <div className="resume-col">
            <div className="resume-item">
              <div className="resume-photo-holder">
                <img
                  src={ltcc}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="LTCC logo"
                />
              </div>
              <p>Lake Tahoe Community College</p>
            </div>
            <div className="resume-item">
              <div className="resume-photo-holder">
                <img
                  src={thalogo}
                  style={{ height: "100px" }}
                  alt="Viakoo company logo"
                />
              </div>
              <p>Tahoe Prep Academy / STHS</p>
            </div>
          </div>
        </div>
        <div id="side-blob-holder">
          <SideBlob id="side-blob" />
        </div>
      </div> */}
    </>
  );
};

export default Development;
