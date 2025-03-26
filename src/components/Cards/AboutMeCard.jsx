import React from "react";
import "./aboutmecard.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaPython,
  FaReact,
  FaBootstrap,
  FaAngular,
  FaSass,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSvgdotjs } from "react-icons/si";

const AboutMeCardInfo = [
  {
    title: "I know:",
    icons: [
      <FaHtml5 key="html5" />,
      <FaCss3Alt key="css3" />,
      <FaJs key="js" />,
      <FaPython key="python" />,
      <FaGit key="git" />,
    ],
  },
  {
    title: "I use:",
    icons: [
      <FaReact key="react" />,
      <FaSass key="sass" />,
      <RiTailwindCssFill key="tailwind" />,
      <FaBootstrap key="bootstrap" />,
      <FaFigma key="figma" />,
      <FaGithub key="github" />,
    ],
  },
  {
    title: "I learn:",
    icons: [
      <SiTypescript key="typescript" />,
      <RiNextjsFill key="nextjs" />,
      <FaAngular key="angular" />,
      <SiSvgdotjs key="svgdotjs" />,
    ],
  },
];

const AboutMeCard = () => {
  return AboutMeCardInfo.map(({ title, icons }, index) => (
    <div className={`aboutme-card class${index}`} key={index}>
      <h3>{title}</h3>
      <div className="scroll-container">
        <div className="scroll-content">
          <div className="group">
            {icons.map((icon, iconIndex) => (
              <div key={iconIndex} className={`item item${iconIndex + 1}`}>
                {icon}
              </div>
            ))}
          </div>
          <div className="group" aria-hidden="true">
            {icons.map((icon, iconIndex) => (
              <div
                key={`${iconIndex}-duplicate`}
                className={`item item${iconIndex + 1}`}
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="group" aria-hidden="true">
            {icons.map((icon, iconIndex) => (
              <div
                key={`${iconIndex}-duplicate`}
                className={`item item${iconIndex + 1}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AboutMeCard;
