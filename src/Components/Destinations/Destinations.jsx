import React from "react";
import "./Destinations.css";
const Destinations = () => {
  return (
    <section className="section__padding  destinations__section">
      <div className="destinations__text">
        <h3>All Inclusive Resorts</h3>
        <p>On The Caribbean's Best Beaches</p>
      </div>

      <div className="destinations__grid_parent">
        <img src="https://raw.githubusercontent.com/fireclint/react-travel-tailwind/main/src/assets/borabora.jpg "></img>
        <img src="https://raw.githubusercontent.com/fireclint/react-travel-tailwind/main/src/assets/borabora2.jpg "></img>
        <img src="https://raw.githubusercontent.com/fireclint/react-travel-tailwind/main/src/assets/keywest.jpg "></img>
        <img src="https://raw.githubusercontent.com/fireclint/react-travel-tailwind/main/src/assets/maldives.jpg "></img>
        <img src="https://raw.githubusercontent.com/fireclint/react-travel-tailwind/main/src/assets/maldives2.jpg "></img>
      </div>
    </section>
  );
};

export default Destinations;
