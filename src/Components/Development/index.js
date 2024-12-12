import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../TopNavBar";
import HambergerMenu from "../HamburgerMenu";
import { TypeAnimation } from "react-type-animation";
import { ReactComponent as TopBlob } from "../../Assets/TopBlob.svg";
import { ReactComponent as MobileTopBlob } from "../../Assets/MobileTopBlob.svg";
import { ReactComponent as SideBlob } from "../../Assets/sideblob.svg";
import headshot from "../../Assets/headshot.webp";
import aboutraiders from "../../Assets/aboutraiders.webp";
import aboutlakers from "../../Assets/aboutlakers.webp";
import viakoologo from "../../Assets/viakoologo.webp";
import thalogo from "../../Assets/thalogo.webp";
import ltcc from "../../Assets/ltcc.webp";
import UClogo from "../../Assets/UClogo.webp";
import smartcardlogo from "../../Assets/smartcardlogo.webp";
import TechnoRiver from "../TechnoRiver";
import TechBadges from "../TechBadges";
import ResumeItem from "../ResumeItem";
import { ReactComponent as Logo } from "../../Assets/ellislogo.svg";
const Development = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="background">
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
        <div className="cover-text-holder">
          <div className="blob-holder">
            <TopBlob className="top-blob" />
            <MobileTopBlob className="top-blob top-blob-mobile" />
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
        <h3 className="subheader">About me</h3>
        <div className="about-text-container">
          <p className="paragraph">
            I'm a 21 year old software engineer based in Reno, Nevada. I'm
            currently in college studying computer science, but this hasn't
            stopped me from working with companies and individuals to meet their
            software needs.
          </p>
          <img
            src={aboutraiders}
            alt="Ellis O'Dowd playing on the Reno Ice Raiders"
            id="mobile-raiders"
          />
          <p className="paragraph">
            I do anything I can to stay active. I've played Ice Hockey for
            nearly my entire life. If you're a parent looking to schedule
            lessons, click <a href="/hockey">here</a>.
            <br /> When I'm off the ice, you can expect to find me at the golf
            course, in the gym, or working on my projects.
          </p>
        </div>
        <div id="lakers-and-raiders-images">
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
      </div>
      <div id="resume-section">
        <div id="column-holder">
          <div className="resume-col">
            <h3 className="subheader">Professional experience</h3>
            <ResumeItem
              name={"Viakoo"}
              description={"IoT Secuity"}
              position={"Front-end engineer intern"}
              image={viakoologo}
              badgelist={["Javascript", "React", "Jest"]}
              color="#149899"
              date={"4/2024 - 9/2024"}
              alt={"Viakoo company logo"}
            />
            <ResumeItem
              name={"SmartCard Solutions"}
              description={"Digital Business Cards"}
              position={"Freelance mobile developer"}
              image={smartcardlogo}
              imageStyle={{ height: "100%", objectFit: "cover" }}
              badgelist={["React Native", "Javascript", "Tailwind"]}
              color="#fad38c"
              date={"11/2023"}
              alt={"SmartCard Solutions company logo"}
            />
            <ResumeItem
              name={"Lake Tahoe Community College"}
              position={"Computer science department tutor"}
              image={ltcc}
              imageStyle={{ width: "45px" }}
              badgelist={["Java"]}
              color="#91c6a9"
              date={"8/2022 - 6/2023"}
              alt={"Lake Tahoe Community College logo"}
            />
          </div>
          <div className="resume-col">
            <h3 className="subheader">Education</h3>
            <ResumeItem
              name={"University of California"}
              image={UClogo}
              imageStyle={{ width: "80%" }}
              badgelist={["B.S Computer Science"]}
              color="#ffce21"
              date={"Expected 2027"}
              alt={"Lake Tahoe Community College logo"}
            />
            <ResumeItem
              name={"Lake Tahoe Community College"}
              image={ltcc}
              imageStyle={{ width: "45px" }}
              badgelist={["A.S. Mathematics"]}
              date={"Graduating 2025"}
              color="#91c6a9"
              alt={"Lake Tahoe Community College logo"}
            />
            <ResumeItem
              name={"Tahoe Prep Academy"}
              image={thalogo}
              imageStyle={{ width: "110%" }}
              badgelist={["4.31 GPA", "Grad rank #6"]}
              color="#8a6eff"
              date={"Graduated 2021"}
              alt={"Tahoe Prep Academy logo"}
            />
          </div>
        </div>
        <div id="side-blob-holder">
          <SideBlob id="side-blob" />
        </div>
      </div>
    </div>
  );
};

export default Development;
