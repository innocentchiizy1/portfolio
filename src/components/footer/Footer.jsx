import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container" container>
        <h1 className="footer_title">Innocent</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/innocentmr_0/"
            className="footer_social-link"
            target="_blank"
          >
            <i className=" bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Innocentmr_0"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://wa.me/message/YQGXF44NTQS6C1"
            className="footer_social-link"
            target="_blank"
          >
            <i className=" bx bxl-whatsapp"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Innocentmr. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
