import React from "react";
import "./social.css";

import { FaJsSquare } from "react-icons/fa";
import { MdOutlineHtml } from "react-icons/md";
import { SiCsswizardry } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";

const Social = () => {
  return (
    <div className="social test-card">
      <div className="container">
        <h4>I know:</h4>
        <div className="icons">
          <p>
            <MdOutlineHtml />
          </p>
          <p>
            <SiCsswizardry />
          </p>
          <p>
            <FaJsSquare />
          </p>
          <p>
            <BiLogoPython />
          </p>
          <p>
            <MdOutlineHtml />
          </p>
          <p>
            <SiCsswizardry />
          </p>
          <p>
            <FaJsSquare />
          </p>
          <p>
            <BiLogoPython />
          </p>
        </div>
      </div>
      <div className="container">
        <h4>I use:</h4>
        <div className="icons">
          <p>
            <MdOutlineHtml />
          </p>
          <p>
            <SiCsswizardry />
          </p>
          <p>
            <FaJsSquare />
          </p>
          <p>
            <BiLogoPython />
          </p>
          <p>
            <MdOutlineHtml />
          </p>
          <p>
            <SiCsswizardry />
          </p>
          <p>
            <FaJsSquare />
          </p>
          <p>
            <BiLogoPython />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
