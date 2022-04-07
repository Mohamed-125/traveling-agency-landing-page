import React, { useState } from "react";
import "./App.css";
import Book from "./Components/Book/Book";
import Destinations from "./Components/Destinations/Destinations";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ImagesSlider from "./Components/ImagesSlider/ImagesSlider";
import Navbar from './Components/Navbar/Navbar'
import PopularDestionations from "./Components/PopularDestinations/PopularDestionations";
const App = () => {
  return <>
    <Navbar />
    <Hero />
    <Destinations />
    <Book />
    <PopularDestionations />
    <ImagesSlider />
    <Footer />
  </>;
};

export default App;
