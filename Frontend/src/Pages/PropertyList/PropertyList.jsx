// ==========================================
// PropertyList.jsx
// ==========================================

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./PropertyList.css";
const api = import.meta.env.VITE_API_URL;


import Navbar from "../../Compenents/Navbar/Navbar";
import heroImg from "../../assets/AirHome.png";
import Footer from "../../Compenents/Footer/Footer";

const PropertyList = () => {

  const [estateData, setEstateData] =
    useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {

    try {

      const response =
        await axios.get(
          `${API}/api/properties`
        );

      setEstateData(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="estate-page-container">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="estate-hero-section">

        <div className="estate-overlay-bg"></div>

        <motion.div
          className="estate-hero-left"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <p className="estate-mini-title">
            FIND YOUR DREAM PROPERTY
          </p>

          <h1>
            Discover Premium <br />
            Luxury Properties
          </h1>

          <p className="estate-description-text">
            Explore modern apartments,
            villas, and luxury homes
            with premium amenities
            in the best locations.
          </p>

          <div className="estate-action-buttons">

            <button className="estate-primary-btn">
              Explore Now
            </button>

            <button className="estate-secondary-btn">
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* HERO IMAGE */}

        <motion.div
          className="estate-hero-right"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >

          <img
            src={heroImg}
            alt="Luxury Home"
            className="estate-hero-image"
          />

        </motion.div>

      </section>

      {/* ================= TITLE ================= */}

      <motion.h1
        className="estate-main-heading"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Premium Properties
      </motion.h1>

      {/* ================= PROPERTY LIST ================= */}

      <div className="estate-card-wrapper">

        {estateData.map((property, index) => (

          <motion.div
            className="estate-card-box"
            key={property._id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
          >

            {/* ================= LEFT IMAGES ================= */}

            <div className="estate-image-gallery">

              {/* MAIN IMAGE */}

              <div className="estate-main-image-box">

                <img
                  src={
                    property.images?.[0]
                      ? `${API}/images/${property.images[0]}`
                      : "https://via.placeholder.com/500"
                  }
                  alt=""
                />

              </div>

              {/* SIDE IMAGES */}

              <div className="estate-side-image-group">

                {property.images
                  ?.slice(1, 4)
                  .map((image, i) => (

                    <img
                      key={i}
                      src={`${API}/images/${image}`}
                      alt=""
                    />

                  ))}

              </div>

            </div>

            {/* ================= DETAILS ================= */}

            <div className="estate-content-section">

              <div>

                <h2>
                  {property.city}, {property.state}
                </h2>

                <h3 className="estate-property-title">
                  {property.title}
                </h3>

              </div>

              {/* PRICE */}

              <div className="estate-price-info">

                <div>
                  <h1>
                    ₹{property.rent}
                  </h1>

                  <p>/month</p>
                </div>

                <div>
                  <h2>
                    {property.area}
                  </h2>

                  <p>Plot Area</p>
                </div>

                <div>
                  <h2>
                    {property.bhk} BHK
                  </h2>

                  <p>
                    {property.bathrooms} Baths
                  </p>
                </div>

              </div>

              {/* HIGHLIGHTS */}

              <div className="estate-feature-section">

                <h4>
                  Highlights
                </h4>

                <div className="estate-feature-list">

                  {property.highlights?.map(
                    (feature, i) => (

                      <span key={i}>
                        {feature}
                      </span>

                    )
                  )}

                </div>

              </div>

              {/* DESCRIPTION */}

              <p className="estate-property-description">
                {property.description}
              </p>

              {/* BOTTOM */}

              <div className="estate-footer-row">

                <div>

                  <p className="estate-owner-label">
                    Property Owner
                  </p>

                  <h3>
                    {property.owner}
                  </h3>

                </div>

                {/* BUTTONS */}

                <div className="estate-button-group">

                  <button
                    className="estate-whatsapp-btn"
                    onClick={() => {

                      const phone =
                        property.phone.replace(/\D/g, "");

                      window.open(
                        `https://wa.me/${phone}?text=Hi%20I%20am%20interested%20in%20your%20property%20${property.title}`,
                        "_blank"
                      );
                    }}
                  >
                    WhatsApp
                  </button>

                  <button className="estate-contact-btn">
                    Contact
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
      
        <Footer/>
    </div>
  );
};

export default PropertyList;