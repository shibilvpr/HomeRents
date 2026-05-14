import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
// import img1 from "../../assets/Curve.png";
import img1 from "../../assets/Curve.png"
import Navbar from "../../Compenents/Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero">

      {/* ✅ FIXED NAVBAR */}
      <Navbar />

      {/* IMAGE */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={img1} alt="Luxury" className="wave-img" />

        {/* TEXT + BUTTON */}
        <div className="overlay-content">
          <h1>
            <span className="dark">SUSTAINABLE LUXURY</span><br />
            <span className="light">IN RENTAL HOMES</span>
          </h1>

          <button className="floating-btn">
            <Link to="/luxuryInterior">Explore Now</Link>
          </button>
           

          <div className="search-bar">
    <input type="text" placeholder="Search by city, location..." />
    <button>Search</button>
  </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Header;