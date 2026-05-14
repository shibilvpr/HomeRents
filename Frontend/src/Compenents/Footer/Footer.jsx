// Footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">

      {/* Animated Gradient Background */}
      <div className="bg-gradient gradient-1"></div>
      <div className="bg-gradient gradient-2"></div>

      {/* Floating Cards */}
      <div className="floating-cards">

        <div className="float-card card-one">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
            alt=""
          />
        </div>

        <div className="float-card card-two">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200"
            alt=""
          />
        </div>

        <div className="float-card card-three">
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
            alt=""
          />
        </div>

      </div>

      {/* Main Footer Content */}
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">

          <span className="footer-subtitle">
            INTERIOR • ARCHITECTURE • LUXURY
          </span>

          <h1>
            Designing timeless <br />
            spaces with emotion, <br />
            elegance & luxury.
          </h1>

          <p>
            We create modern living experiences
            that blend architecture, beauty,
            comfort, and innovation together.
          </p>

          <div className="footer-btns">

            <button className="btn-primary">
              Let’s Talk
            </button>

            <button className="btn-outline">
              Explore
            </button>

          </div>

        </div>

        {/* CENTER IMAGE */}
        <div className="footer-center">

          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
            alt=""
          />

          <div className="image-overlay"></div>

          <div className="center-content">
            <span>Luxury Residence</span>
            <h2>Modern Villa</h2>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">

          <div className="glass-card">

            <div className="card-top">

              <div className="arrow">
                ↗
              </div>

              <div className="circle-button">
                →
              </div>

            </div>

            <h2>
              Visit <br />
              Project
            </h2>

            <p>
              Discover our newest luxury
              architecture project and modern
              interior inspirations.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      {/* =========================
    MODERN FOOTER BOTTOM
========================= */}

<div className="footer-bottom">

  {/* LEFT */}
  <div className="footer-brand">

    <h2>RentHome</h2>

    <p>
      Discover premium rental homes,
      luxury apartments, and modern
      living spaces crafted for comfort.
    </p>

    <div className="footer-contact">
      <span> Perinthalmanna, Kerala</span>
      <span>+91 9567590970</span>
      <span>shibilvpr@gmail.com</span>
    </div>

  </div>

  {/* CENTER */}
  <div className="footer-menu">

    <div className="footer-column">
      <h3>Company</h3>

      <a href="/">About Us</a>
      <a href="/">Careers</a>
      <a href="/">Blog</a>
      <a href="/">Contact</a>
    </div>

    <div className="footer-column">
      <h3>Explore</h3>

      <a href="/">Apartments</a>
      <a href="/">Luxury Villas</a>
      <a href="/">Modern Homes</a>
      <a href="/">Commercial</a>
    </div>

    <div className="footer-column">
      <h3>Support</h3>

      <a href="/">Help Center</a>
      <a href="/">Terms & Conditions</a>
      <a href="/">Privacy Policy</a>
      <a href="/">FAQs</a>
    </div>

  </div>

  {/* RIGHT */}
  <div className="footer-newsletter">

    <h3>Stay Updated</h3>

    <p>
      Subscribe for latest property
      updates and luxury home trends.
    </p>

    <div className="newsletter-box">

    </div>

    <div className="footer-socials">

      <div className="social-icon">
        Instagram
      </div>

      <div className="social-icon">
        Facebook
      </div>

      <div className="social-icon">
        Twitter
      </div>

    </div>

  </div>

</div>

{/* =========================
    COPYRIGHT
========================= */}

<div className="footer-copy">

  <p>
    © 2026 RentHome. All Rights Reserved.
  </p>

  <span>
    Designed with luxury & modern experience.
  </span>

</div>

{/* =========================
    FLOATING DOTS
========================= */}

<div className="footer-dots">
  <span></span>
  <span></span>
  <span></span>
</div>

    </footer>
  );
};

export default Footer;