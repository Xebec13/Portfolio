import React from "react";
import "./profilecard.css";

import DMClogo from "../../assets/logot.png";
import LaptopImage from '../../assets/pink-laptop.png'
import BrushImage from '../../assets/pink-brush.png'
const ProfileCardsInfo = [
  {
    imgSrc: DMClogo,
    title: "DMC my own",
    info: "An independent digital designer based in Poland.",
  },
  {
    imgSrc: LaptopImage,
    title: "Web Design & Dev",
    info: "Cleanly designed, conversion-focused, and built for easy updates.",
  },
  {
    imgSrc: BrushImage,
    title: "UI/UX Design",
    info: "Seamless web or mobile app design to wow your users.",
  },
];

const ProfileCard = () => {
  return (
    <section className="card-container">
      {ProfileCardsInfo.map(({ imgSrc, title, info }, index) => (
        <div className="profile-card" key={index}>
          <img src={imgSrc} alt="person" />
          <div className="profile-text">
            <h4>{title}</h4>
            <p>{info}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfileCard;
