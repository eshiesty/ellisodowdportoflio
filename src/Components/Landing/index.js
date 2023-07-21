import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../TopNavBar";
import { isMobile } from "react-device-detect";
import HambergerMenu from "../HamburgerMenu";
const Landing = () => {
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
      <div className="landing-zone">
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
          <div className="header-holder">
            <h1 className="header">{title}</h1>
            <p className="text-cursor">I</p>
          </div>

          <div className="name-holder">
            <h2 className="name">Ellis O'Dowd</h2>
          </div>
        </div>
      </div>
      <div id="down-arrows-holder">
        <HiOutlineChevronDoubleDown id="down-arrows" size={45} />
      </div>
    </>
  );
};

export default Landing;
