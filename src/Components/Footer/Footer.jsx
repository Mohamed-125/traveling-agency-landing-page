import React from "react";
import "./Footer.css";
import "../Navbar/Navbar.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer__section section__padding">
      <div className="footer__contener">
        <div
          style={{
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className=" nav__logo_div flex"
        >
          <p>BEACHES.</p>
          <div className=" flex footer__icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
