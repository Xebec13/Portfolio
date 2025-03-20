import React from "react";
import './cards.css'
import profilePhoto from "../../assets/me2.png";

const ProfileCard = () => {
  return (
    <div className="profile-card test-card">
      <img src={profilePhoto} alt="" />
    </div>
  );
};

export default ProfileCard;
