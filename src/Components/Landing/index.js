import React from "react";
import "./styles.css";
import EllisPhoto from "../../Assets/is.jpg";
const Landing = () => {
  return (
    <div className="header-holder">
      <h1 className="header">Ellis O'Dowd</h1>
      <img width={500} alt={"A headshot of me in a suit"} src={EllisPhoto} />
    </div>
  );
};

export default Landing;
