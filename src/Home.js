import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81P+LllxicL._SX3000_.jpg"
          alt="front_image"
        ></img>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Hydro Flask Wide Mouth Bottle with Flex Cap"
            price={32.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61JEB+cGneL._AC_UL450_SR450,320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="SHASHIBO Shape Shifting Box - Award-Winning, Patented Fidget Cube w/ 36 Rare Earth Magnets - Extraordinary 3D Magic Cube – Shashibo Cube Magnet Fidget Toy Transforms Into Over 70 Shapes (Spaced Out)"
            price={25.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71QlPgolYMS._AC_UL450_SR450,320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Cleaning Gel for Car, Car Cleaning Kit Universal Detailing Automotive Dust Car Crevice Cleaner Auto Air Vent Interior Detail Removal Putty Cleaning Keyboard Cleaner for Car Vents, PC, Laptops, Cameras"
            price={6.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71YLxhnPUxL._AC_UL450_SR450,320_.jpg"
            rating={4}
          />
          <Product
            title="Amazon Brand - 100 Ct. Solimo Dark Roast Coffee Pods, Compatible with Keurig 2.0 K-Cup Brewers 100 Count(Pack of 1)"
            price={40.43}
            image="https://images-na.ssl-images-amazon.com/images/I/51wLOLvmDWL._AC_UL450_SR450,320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
