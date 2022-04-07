import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  mobileNavOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="nav">
      <div className="nav__contener section__padding">
        <div className="nav__logo_div">
          <p style={{ color: mobileNavOpen ? "black" : "white" }}>BEACHES.</p>
        </div>
        <div className="nav__icons__div  ">
          {mobileNavOpen ? (
            <FaTimes
              style={{ color: mobileNavOpen ? "black" : "white" }}
              onClick={() => {
                setMobileNavOpen((pre) => !pre);
              }}
              className="nav__icon"
            />
          ) : (
            <FaBars
              style={{ color: mobileNavOpen ? "black" : "white" }}
              onClick={() => {
                setMobileNavOpen((pre) => !pre);
              }}
              className="nav__icon"
            />
          )}
        </div>
        <div
          className={mobileNavOpen ? "nav__mobile_links_div" : "nav__links_div"}
        >
          <div className="nav__mobile_links_contener section__padding">
            <a href="#home">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#travel">Travel</a>
            <a href="#views">Views</a>
            <a href="#book">Book</a>
          </div>
        </div>
        <div className="nav__desktop_icons ">
          <BsPerson />
          <BiSearch />
        </div>

        {mobileNavOpen && (
          <div
            style={{ textAlign: "center" }}
            className="nav__mobile_search_icons_account_div    "
          >
            <button> Search</button>
            <button>Account</button>
            <div className="nav__mobile_icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
