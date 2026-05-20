// HotelRooms.jsx

import React from "react";
import "./HotelRoom.css";
import { Link } from "react-router-dom";
import Navbar from "../../Compenents/Navbar/Navbar";
import Footer from "../../Compenents/Footer/Footer";

const HotelRooms = () => {
  return (


    <section className="lux-hotel">
      <>
      <Navbar/>
        <section className="premium-top-header">

          <div className="premium-small-text left">
            General Furnishing
          </div>

          <div className="premium-center">
            <h2>Preferrcints</h2>

            <p>
              This elegant furniture collection mixes modern
              craftsmanship and premium materials creating
              refined interior comfort.
            </p>
          </div>

          <div className="premium-small-text right">
            Specialty Interiors
          </div>

        </section>

        {/* HERO VIDEO */}
        <section className="hero-image-section">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source
              src="https://www.w3schools.com/howto/rain.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay">
            <h1>Luxury Living</h1>
            <p>
              Elegant modern interiors crafted for timeless comfort.
            </p>

            <button>Explore Collection</button>
          </div>

        </section>

        {/* TOP NAV */}
        <section className="top-nav">

          <div className="nav-dot"></div>

          <div className="nav-links">
            <span>
              <Link to="/luxuryInterior">Luxury</Link>
            </span>

            <span>
              <Link to="/hotelRooms">Hotel</Link>
            </span>

            <span>
              <Link to="/dormitory">Dormitory</Link>
            </span>
          </div>

          <div className="nav-icons">
            <span>☰</span>
            <span>⚪</span>
          </div>
          
        </section>


        {/* BACKGROUND */}
        <div className="lux-bg lux-bg-one"></div>
        <div className="lux-bg lux-bg-two"></div>

        {/* ================= HERO ================= */}
        <div className="lux-hero-wrapper">

          {/* LEFT */}
          <div className="lux-left-content">

            <span className="lux-small-title">
              PREMIUM HOTEL EXPERIENCE
            </span>

            <h1 className="lux-main-heading">
              Luxury <br />
              Hotel <br />
              Rooms
            </h1>

            <p className="lux-description">
              Experience elegant interiors,
              premium comfort and unforgettable
              luxury stays crafted for modern living.
            </p>

           

            <Link to="/BookingForm" className="lux-main-btn">Reserve Room</Link>

            <div className="lux-slider-dots">
              <span className="lux-active-dot"></span>
              <span></span>
              <span></span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lux-right-image">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              alt="Luxury Hotel"
            />

            <div className="lux-price-badge">
              +530
            </div>

          </div>

        </div>

        {/* ================= ABOUT ================= */}
        <div className="lux-about-wrapper">

          <div className="lux-mini-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2 className="lux-about-title">
            The Best <br />
            Luxury Experience
          </h2>

          <p className="lux-about-text">
            Discover beautifully designed rooms,
            modern architecture and luxury spaces
            built for unforgettable comfort.
          </p>

        </div>

        {/* ================= GALLERY ================= */}
        <div className="lux-gallery-wrapper">

          <div className="lux-gallery-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              alt=""
            />
          </div>

          <div className="lux-gallery-card">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"
              alt=""
            />
          </div>

          <div className="lux-gallery-card">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200"
              alt=""
            />
          </div>

        </div>

        {/* ================= FEATURE ================= */}
        <div className="lux-feature-wrapper">

          {/* IMAGE */}
          <div className="lux-feature-image">

            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200"
              alt=""
            />

          </div>

          {/* CONTENT */}
          <div className="lux-feature-content">

            <h2 className="lux-feature-title">
              What Makes Is <br />
              Our Luxury
            </h2>

            <p className="lux-feature-text">
              Enjoy premium hotel interiors,
              elegant architecture, luxury comfort,
              modern rooms and world class service.
            </p>

            {/* <button className="lux-feature-btn">
              Explore Rooms
            </button> */}

          </div>

        </div>

        {/* ================= FLOAT BUTTONS ================= */}
        <div className="lux-floating-buttons">

          <div className="lux-icon-btn">
            ↗
          </div>

          <div className="lux-icon-btn">
            ⟳
          </div>
          

        </div>
        <Footer/>
      </>
    </section>


  );
};

export default HotelRooms;