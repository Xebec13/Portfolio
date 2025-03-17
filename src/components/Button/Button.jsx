import React from "react";
import "./button.css";

const Button = ({ className, text }) => (
  <button className={className}>
    <p>{text}</p>
  </button>
);

export default Button;
