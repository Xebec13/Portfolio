import React from "react";
import "./aboutme.css";
import {AboutMeCard} from "../index";
import profilePhoto from "../../assets/me2.png";

const aboutMeInfo = [
  {
    title: "Nice to meet you!",
    subtitle: "I'm David ",
    description:
      "My goal is to elevate companies like yours through the power of design. I am here to help you effectively convey your message and make a positive impact. Let's bring your vision to life!",
  },
];


const AboutMe = () => (
  <section className="aboutme-container">
    <div className="aboutme-profile-image">
      <img src={profilePhoto} alt="man" />
    </div>
    {aboutMeInfo.map(({ title, subtitle, description }, index) => (
      <div className="aboutme-main-card" key={index}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    ))}
    <AboutMeCard/>
    
  </section>
);
export default AboutMe;
