import "./landingpage.css";

import Button from "../Button/Button";
import { FaGithub } from "react-icons/fa";

const LandingPageInfo = [
  {
    name: "I'am David",
    title: "Web Developer",
    description:
      "As a passionate front-end developer, I specialize in creating stunning, responsive websites that provide an exceptional user experience. With a keen eye for design and a strong foundation in modern web technologies, I bring your ideas to life with precision and creativity.",
  },
];

const LandingPage = () => (
  <section className="main-section">
    {LandingPageInfo.map(({ name, title, description }, index) => (
      <div key={index} className="content heartbeat">
        <h1>{name}</h1>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    ))}

    <div className="content-buttons">
      <Button className="main-button" text="View Projects" />
      <Button className="main-button" text="View Projects" />
    </div>
    <div className="career-info">
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    <FaGithub className="info-icon"/>
    </div>
  </section>
);

export default LandingPage;
