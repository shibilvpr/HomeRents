import React from "react";
import "./LuxuryInterior.css";
import Footer from "../../Compenents/Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../Compenents/Navbar/Navbar";

const LuxuryInterior = () => {
  return (
    <div className="interior-wrapper">


      {/* PREMIUM TOP HEADER */}
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
        <Navbar/>

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

      {/* CONTENT SECTION */}
      <section className="content-section">

        {/* LEFT CONTENT */}
        <div className="left-content">

          <h1>
            Chenictue- <br />
            Milley~ismouly
          </h1>

          <p>
            Elegant furniture crafted with luxury
            aesthetics and modern minimalist styling.
          </p>

          <Link to="/BookingForm" className="book-btn">Book Now</Link>

        </div>

        {/* RIGHT GRID */}
        <div className="right-grid">

          <div className="grid-card large-card">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000"
              alt=""
            />
          </div>

          <div className="grid-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000"
              alt=""
            />
          </div>

          <div className="grid-card text-card">

            <h3>
              Comfort <br />
              Pure Style
            </h3>

            <p>
              Minimal ceramic pieces crafted
              for modern interiors.
            </p>

          </div>

          <div className="grid-card">
            <img
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1000"
              alt=""
            />
          </div>

        </div>

      </section>

      {/* BOTTOM SECTION */}
      <section className="bottom-section">

        <div className="bottom-left">

          <h2>
            Lot's is foor-the teame <br />
            I-slisnjd Reiievordiel.
          </h2>

<Link to="/" className="book-btn">View More</Link>
         

        </div>

        <div className="bottom-right">

          <h4>Timeless Modern Furniture</h4>

          <p>
            Premium handcrafted interior products
            designed for luxurious living experiences.
          </p>

          
          <Link to="/" className="book-btn">➜ More</Link>

        </div>

      </section>

      {/* BOTTOM GALLERY */}
      <section className="bottom-gallery">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
          alt=""
        />

      </section>
      <Footer />
    </div>
  );
};

export default LuxuryInterior;