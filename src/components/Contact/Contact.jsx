import React from "react";
import "./contact.css";
import { FaChevronRight } from "react-icons/fa";
import logo from "../../assets/logotr2.png";

const Contact = () => (
  <section className="footer">
    <div className="footer-info">
      <div className="footer-text">
        <h1>Thanks for stoping by!</h1>
        <p>I’d love to chat with you about how I can help. Get in touch!</p>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div className="footer-contact">
      <div className="contact-item">
        <p>Email</p>
        <p>dhoesen@gmail.com</p>
      </div>
      <div className="contact-item">
        <p>Linkedin</p>
        <FaChevronRight />
      </div>
      <div className="contact-item">
        <p>Git</p>
        <FaChevronRight />
      </div>
      <div className="contact-item">
        <p>Resume</p>
        <FaChevronRight />
      </div>
    </div>
  </section>
);

export default Contact;
