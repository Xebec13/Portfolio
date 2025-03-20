import React, { useState } from "react";
import "./nav.css";

const NavItems = [
  { text: "About", href: "" },
  { text: "Projects", href: "" },
  { text: "Resume", href: "" },
  { text: "Contact", href: "" },
];

const Nav = () => (
  <header>
    {NavItems.map(({text,href},index)=> (
      <nav key={index}>
        <ul>
          <li><a href={href}>{text}</a></li>
        </ul>
      </nav>
    ))}
  </header>
);

export default Nav;
