import React, { useState } from "react";
import "./nav.css";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const NavItems = [
  { text: "About", href: "" },
  { text: "Projects", href: "" },
  { text: "Resume", href: "" },
  { text: "Contact", href: "" },
];

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const NavButtonClick = () => {
    setIsActive(true);
  };

  const NavButtonBackClick = () => {
    setIsActive(false);
  };

  return (
    <nav className={`nav-bar ${isActive ? "active" : "inactive"} `}>
      {!isActive ? (
        <ul className="nav-button" onClick={NavButtonClick}>
          <li>
          <IoMenu />
          </li>
        </ul>
      ) : (
        <ul className="nav-items">
          {NavItems.map(({ text, href }, index) => (
            <li key={index} className="nav-item">
              <a href={href}>{text}</a>
            </li>
          ))}
          <li onClick={NavButtonBackClick} className="nav-back">
          <ImCross />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
