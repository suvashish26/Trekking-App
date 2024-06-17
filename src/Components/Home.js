// src/Components/Home.js
import React from "react";
import { Navbar } from "./Navbar"; // Correct import for named export
// import BannerBackground from "../Assets/home-banner-image.png";
import BannerImage from "../Assets/home-banner-background.png";
import BannerBackground from "../Assets/pizza.png";
import { FiArrowRight } from "react-icons/fi";
export const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            harum dicta. Quia consequuntur
          </p>
          <button className="secondary-button">
            Order Now NOWWW <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
    </div>
  );
};
