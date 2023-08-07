import React from "react";
import "./styles.css";
import { useNavigate, useHref } from "react-router-dom";
const TopNavBar = () => {
  const href = useHref();
  const navigate = useNavigate();
  return (
    <>
      <div id="landing-header-nav-holder">
        <div id="landing-header-nav">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <p className={`nav-link ${href === "/" ? "selected-nav" : ""}`}>
              Development
            </p>
          </div>
          {/* <div
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            <p
              className={`nav-link ${
                href === "/aboutme" ? "selected-nav" : ""
              }`}
            >
              About me
            </p>
          </div> */}
          <div
            onClick={() => {
              navigate("/hockey");
            }}
          >
            <p
              className={`nav-link ${href === "/hockey" ? "selected-nav" : ""}`}
            >
              Hockey
            </p>
          </div>
          <p
            className={`nav-link ${
              href === "/freelance" ? "selected-nav" : ""
            }`}
          >
            Free lance
          </p>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
