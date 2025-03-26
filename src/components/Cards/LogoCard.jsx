import React from "react";
import "./logocard.css";
import MainButton from "../../containers/Buttons/MainButton";
const LogoCardInfo = [
  {
    slogan: "Details Define Design",
    description:
      "With a keen eye for design and a strong foundation in modern web technologies, I bring your ideas to life with precision and creativity.",
  },
];

const LogoCard = () => {
  return (
    <section>
      {LogoCardInfo.map(({ slogan, description }, index) => (
        <div className="logo-card" key={index}>
          <h1>{slogan}</h1>
          <p>{description}</p>
          <MainButton/>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default LogoCard;
