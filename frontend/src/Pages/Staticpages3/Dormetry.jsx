import React from "react";
import "./Dormetry.css";
import { Link } from "react-router-dom";

// ✅ IMPORT IMAGES (IMPORTANT)
import img1 from "../../assets/Dormetry1.jpg";
import img2 from "../../assets/Dormetry2.jpg";
import img3 from "../../assets/Dormetry3.jpg";
import img4 from "../../assets/Dormetry4.jpg";
import img5 from "../../assets/Dormetry5.jpg";
import img6 from "../../assets/Dormetry6.jpg";
import Navbar from "../../Compenents/Navbar/Navbar";
import Footer from "../../Compenents/Footer/Footer";

const Dormetry = () => {
    return (
        <>
            <section className="premium-top-header">
                <Navbar/>

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
                        <Link to="/luxuryInterior"   >Luxury</Link>
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

            <div className="dorm-wrapper">



                {/* HERO */}
                <section className="villa-hero container">
                    <div className="villa-left">
                        <h1>
                            Smart Dormitory Living <br />
                            with Modern Comfort
                        </h1>

                        <p>
                            Experience stylish shared spaces with privacy,
                            comfort and premium interior design.
                        </p>

                        {/* <button className=""></button> */}
                        <Link to="/" className="green-btn">Explore Rooms</Link>
                    </div>

                    <div className="villa-right">
                        <img src={img2} alt="Dorm" />
                    </div>
                </section>

                {/* PROJECT SECTION */}
                <section className="villa-project container">
                    <div className="villa-small-img">
                        <img src={img3} alt="Dorm" />
                    </div>

                    <div className="villa-text">
                        <h2>Modern Dorm Projects</h2>
                        <p>
                            Clean architecture, warm lighting and efficient layouts
                            designed for shared living spaces.
                        </p>

                      
                        <Link to="/" className="outline-btn">Explore</Link>
                    </div>

                    <div className="villa-big-img">
                        <img src={img4} alt="Dorm" />
                    </div>
                </section>

                {/* FEATURE STRIP */}
                <section className="dorm-feature">
                    <div className="container">
                        <div className="feature-content">
                            <h2>Comfort Meets Modern Design</h2>
                            <p>
                                Affordable luxury spaces designed for students,
                                travelers and long-term stays.
                            </p>
                            
                             <Link to="/" className="green-btn">Learn More</Link>
                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="dorm-gallery container">
                    <h2>Explore Dorm Rooms</h2>

                    <div className="gallery-grid">
                        <img src={img1} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </section>

                <Footer/>

            </div>
        </>
    );
};

export default Dormetry;