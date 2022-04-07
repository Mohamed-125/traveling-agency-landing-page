import React from "react";
import { DestinationData } from "./DestinationData";
import "./PopularDestinations.css";
const PopularDestionations = () => {
  return (
    <section className="popularDests__section">
      <div className="popularDests__parent_grid">
        {DestinationData.map((destination, index) => {
          return (
            <div key={destination.title} className="popularDest__div">
              <img src={destination.img} alt="/" />
              <p> {destination.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularDestionations;
