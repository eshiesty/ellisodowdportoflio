import React from "react";
import "./styles.css";
import TechBadges from "../TechBadges";

const ResumeItem = ({
  name,
  position,
  description,
  date,
  image,
  imageStyle,
  alt,
  badgelist,
  color,
}) => {
  return (
    <div className="resume-item">
      <div className="resume-photo-holder">
        <img
          src={image}
          style={imageStyle}
          alt={alt}
          className="company-image"
        />
      </div>
      <div className="resume-info">
        <div className="name-and-description">
          <span className="company-name">{name}</span>
          {description && <span> - {description}</span>}
        </div>
        <div className="position">{position}</div>
        <div className="date">{date}</div>
        <TechBadges techlist={badgelist} color={color} />
      </div>
    </div>
  );
};

export default ResumeItem;
