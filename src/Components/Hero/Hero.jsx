import React from "react";
import "./Hero.css";
import HeroVideo from "../../assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero__section section__padding  flex__center">
      <div className="hero__text_input_contener">
        <h3>First Class Travel </h3>
        <p>Top 1% Locations Worldwide</p>
        <div className="hero__input_inputIcon_div">
          <input placeholder="Search Destinations" className="hero__input" />
          <BiSearch className="hero__inputIcon" />
        </div>
      </div>
      <video
        muted
        className="hero__video"
        autoPlay
        loop
        src={HeroVideo}
      ></video>
    </div>
  );
};

export default Hero;
