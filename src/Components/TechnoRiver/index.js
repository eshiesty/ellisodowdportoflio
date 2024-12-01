import React, { useEffect, useState } from "react";
import "./styles.css";
import { ReactComponent as ReactIcon } from "../../Assets/TechIcons/react.svg";
import { ReactComponent as CssIcon } from "../../Assets/TechIcons/css.svg";
import { ReactComponent as HtmlIcon } from "../../Assets/TechIcons/html.svg";
import { ReactComponent as JavaIcon } from "../../Assets/TechIcons/java.svg";
import { ReactComponent as JestIcon } from "../../Assets/TechIcons/jest.svg";
import { ReactComponent as JsIcon } from "../../Assets/TechIcons/js.svg";
import { ReactComponent as MobileIcon } from "../../Assets/TechIcons/mobile.svg";
import { ReactComponent as MongoIcon } from "../../Assets/TechIcons/mongo.svg";
import { ReactComponent as NodeIcon } from "../../Assets/TechIcons/node.svg";
import { ReactComponent as SwiftIcon } from "../../Assets/TechIcons/swift.svg";

const TechnoRiver = () => {
  const Tooltip = ({ IconComponent, tooltipText }) => {
    return (
      <div className="tooltip">
        <IconComponent className="tech-icon" />
        <span className="tooltiptext">{tooltipText}</span>
      </div>
    );
  };

  const icons = [
    { IconComponent: ReactIcon, tooltipText: "React" },
    { IconComponent: CssIcon, tooltipText: "CSS" },
    { IconComponent: HtmlIcon, tooltipText: "HTML" },
    { IconComponent: JavaIcon, tooltipText: "Java" },
    { IconComponent: JestIcon, tooltipText: "Jest" },
    { IconComponent: JsIcon, tooltipText: "JavaScript" },
    { IconComponent: MobileIcon, tooltipText: "Mobile" },
    { IconComponent: MongoIcon, tooltipText: "MongoDB" },
    { IconComponent: NodeIcon, tooltipText: "Node.js" },
    { IconComponent: SwiftIcon, tooltipText: "Swift" },
  ];
  const RiverGroup = () => {
    return (
      <div className="river-items">
        {icons.map((icon, index) => (
          <Tooltip
            key={index}
            IconComponent={icon.IconComponent}
            tooltipText={icon.tooltipText}
          />
        ))}
      </div>
    );
  };

  return (
    <div id="river-container">
      <h3 id="technologies-text">Technologies</h3>
      <div id="river">
        <div id="river-items">
          <div className="tooltip">
            <ReactIcon className="tech-icon" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <CssIcon className="tech-icon" />
            <span className="tooltiptext">CSS</span>
          </div>
          <div className="tooltip">
            <HtmlIcon className="tech-icon" />
            <span className="tooltiptext">HTML</span>
          </div>
          <div className="tooltip">
            <JavaIcon className="tech-icon" />
            <span className="tooltiptext">Java</span>
          </div>
          <div className="tooltip">
            <JestIcon className="tech-icon" />
            <span className="tooltiptext">Jest</span>
          </div>
          <div className="tooltip">
            <JsIcon className="tech-icon" />
            <span className="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
            <MobileIcon className="tech-icon" />
            <span className="tooltiptext">Mobile</span>
          </div>
          <div className="tooltip">
            <MongoIcon className="tech-icon" />
            <span className="tooltiptext">MongoDB</span>
          </div>
          <div className="tooltip">
            <NodeIcon className="tech-icon" />
            <span className="tooltiptext">Node.js</span>
          </div>
          <div className="tooltip">
            <SwiftIcon className="tech-icon" />
            <span className="tooltiptext">Swift</span>
          </div>
          <div className="tooltip">
            <ReactIcon className="tech-icon" />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <CssIcon className="tech-icon" />
            <span className="tooltiptext">CSS</span>
          </div>
          <div className="tooltip">
            <HtmlIcon className="tech-icon" />
            <span className="tooltiptext">HTML</span>
          </div>
          <div className="tooltip">
            <JavaIcon className="tech-icon" />
            <span className="tooltiptext">Java</span>
          </div>
          <div className="tooltip">
            <JestIcon className="tech-icon" />
            <span className="tooltiptext">Jest</span>
          </div>
          <div className="tooltip">
            <JsIcon className="tech-icon" />
            <span className="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
            <MobileIcon className="tech-icon" />
            <span className="tooltiptext">Mobile</span>
          </div>
          <div className="tooltip">
            <MongoIcon className="tech-icon" />
            <span className="tooltiptext">MongoDB</span>
          </div>
          <div className="tooltip">
            <NodeIcon className="tech-icon" />
            <span className="tooltiptext">Node.js</span>
          </div>
          <div className="tooltip">
            <SwiftIcon className="tech-icon" />
            <span className="tooltiptext">Swift</span>
          </div>
        </div>
        {/* <RiverGroup /> */}
        {/* <RiverGroup /> */}
      </div>
    </div>
  );
};

export default TechnoRiver;
