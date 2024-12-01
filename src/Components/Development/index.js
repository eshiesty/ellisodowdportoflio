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
import headshot from "../../Assets/headshot.webp";
import TechnoRiver from "../TechnoRiver";

const Development = () => {
  let titleArray = [
    "Mobile developer",
    "Front end developer",
    "Full stack developer",
    "Designer",
    "Freelancer",
    "Web developer",
  ];
  const navigate = useNavigate();
  const [title, setTitle] = useState(titleArray[5]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [writing, setWriting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [titleComplete, setTitleComplete] = useState(true);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  // setInterval(() => {
  //   console.log(title);
  //   setTitle(title.substring(0, title.length - 1));
  // }, 500);

  const writeWord = (targetWord) => {
    setTitle(targetWord);

    if (titleIndex === 5) setTitleIndex(0);
    setTimeout(() => setDeleting(true), 5000); //should be 5000
  };

  const getRandSeconds = () => {
    return Math.random() * 150;
  };
  useEffect(() => {
    setTimeout(() => setDeleting(true), 5000); //should be 5000
  }, []);

  useEffect(() => {
    if (deleting) {
      setTimeout(() => {
        setTitle(title.substring(0, title.length - 1));
      }, 150);
    }
    if (title === "") {
      setTitleIndex(titleIndex + 1);
      setTimeout(() => {
        setDeleting(false);
        writeWord(titleArray[titleIndex]);
      }, 300);
      if (titleIndex === 5) setTitleIndex(0);
      setTimeout(() => setDeleting(true), 5000);
      // setWriting(true);
    }
  }, [title, deleting]);

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
                3000,
                "Full stack developer",
                3000,
                "Designer",
                3000,
                "Freelancer",
                3000,
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
      {/* <div id="down-arrows-holder">
        <HiOutlineChevronDoubleDown id="down-arrows" size={45} />
      </div> */}
    </>
  );
};

export default Development;
