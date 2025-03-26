import React from "react";
import "./social.css";

const SocialInfo = [
  {
    slogan: "Your Vision, My Creation",
    description:
      "See how your vision can be transformed into stunning digital creations through my portfolio.",
  },
];

const Social = () => (
  <section className="social-container">
    {SocialInfo.map(({ slogan, description }, index) => (
      <div key={index} className="social-card">
        <h1>{slogan}</h1>
        <p>{description}</p>
      </div>
    ))}
    <div className="social-animated-card">
      GOWNO
    </div>
  </section>
);

export default Social;
