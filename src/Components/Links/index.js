import React, { useEffect, useState } from "react";
import "./styles.css";
import GithubLogo from "../../Assets/Github.png";
import LinkedInLogo from "../../Assets/LinkedIn.png";
import InstagramLogo from "../../Assets/Instagram.png";
import GmailLogo from "../../Assets/Gmail.png";
const Links = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(window.innerHeight);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  });
  return (
    <div className="links-zone">
      <div className="links-content">
        <h2 className="sub-header mobile-sub-header">Links</h2>
        <div
          className={`link-card-slideshow ${
            scrollPosition > 1200 ? "visible" : "off-screen"
          }`}
          //   style={{
          //     translate: `${(-scrollPosition / window.innerHeight) * 50}%`,
          //   }}
        >
          <a
            target="_blank"
            href={"https://www.github.com/eshiesty"}
            className="link-card"
          >
            <div className="top-color" />
            <img className="link-image" src={GithubLogo} width={90} />
            <p className="link-text">Github</p>
          </a>
          <a
            target="_blank"
            href={"https://www.linkedin.com/in/ellisodowd"}
            className="link-card"
          >
            <div className="top-color" />
            <img className="link-image" src={LinkedInLogo} width={90} />
            <p className="link-text">LinkedIn</p>
          </a>
          <a
            target="_blank"
            href={"mailto:ellisodowd.dev@gmail.com"}
            className="link-card gmail-card"
          >
            <div className="top-color" />
            <img className="link-image gmail" src={GmailLogo} width={100} />
            <p className="link-text email-text">ellisodowd.dev@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
