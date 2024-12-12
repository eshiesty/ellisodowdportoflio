import React from "react";
import "./styles.css";

const TechBadges = ({ techlist, color }) => {
  return (
    <div id="badges-container">
      {techlist.map((item) => {
        return (
          <div className="badge-outline" style={{ borderColor: color }}>
            <span style={{ color: color }}>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TechBadges;
