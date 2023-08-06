import React from "react";
import "./styles.css";
import { useNavigate, useHref } from "react-router-dom";
const HambergerMenu = () => {
  const href = useHref();
  const navigate = useNavigate();
  return (
    <>
      <div id="hamburger-content-holder">
        <div id="hamburger-nav-options">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <p className={`burger-link ${href === "/" ? "selected-nav" : ""}`}>
              Development
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            <p
              className={`burger-link ${
                href === "/aboutme" ? "selected-nav" : ""
              }`}
            >
              About me
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/hockey");
            }}
          >
            <p
              className={`burger-link ${
                href === "/hockey" ? "selected-nav" : ""
              }`}
            >
              Hockey
            </p>
          </div>
          <p
            className={`burger-link ${
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

export default HambergerMenu;
