import React from "react";
import "./cards.css";
import logoCard from "../../assets/logotr2.png";


const LogoCard = () => {
  return (
    <div className="logo-card test-card">
      <img src={logoCard} alt="" />
    </div>
  );
};

export default LogoCard;
