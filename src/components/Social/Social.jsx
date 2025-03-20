import React from "react";
import "./social.css";

import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { PiReadCvLogoFill } from "react-icons/pi";

const Social = () => {
  return (
    <div className="social test-card">
      <p><FaGithub /></p>
      <p><ImLinkedin /></p>
      <p><PiReadCvLogoFill /></p>
    </div>
  );
};

export default Social;
