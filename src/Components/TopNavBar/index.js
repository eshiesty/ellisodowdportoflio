import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const TopNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="landing-header-nav-holder">
        <div id="landing-header-nav">
          <p className="nav-link selected-nav">Development</p>
          <div
            onClick={() => {
              //do nothing rn
              // navigate("/aboutme");
            }}
          >
            <p className="nav-link">About me</p>
          </div>
          <p className="nav-link">Free lance</p>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
