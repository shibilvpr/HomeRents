import React, { useState } from "react";
import "./Home.css";

import img1 from "../../assets/Dormetry-1.jpg";
import img2 from "../../assets/LuxueryHome.jpg";
import img3 from "../../assets/Home-Classic.jpg";
import img4 from "../../assets/Flates-2.jpg";
import img5 from "../../assets/NormalHome.jpg";

const tabs = [ 
  { title: "CLASSIC HOUSE", subtitle: "Beauty of Nature", image: img3 },
  { title: "BUNK ", subtitle: "Dormitory Model", image: img1 },
  { title: "HOME", subtitle: "Virtual concierge", image: img5 },
  { title: "FLAT", subtitle: "Apartment", image: img4 },
  { title: "LUXUERY HOME", subtitle: "Sleep very well ", image: img2 },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="home-wrapper">

      <div className="main-card">

        {/* TEXT SIDE */}
        <div className="card-text">
          <h1>{tabs[activeIndex].title}</h1>
          <p>{tabs[activeIndex].subtitle}</p>
        </div>

        {/* IMAGE SIDE */}
        <div className="card-image">
          <img src={tabs[activeIndex].image} alt="" />
        </div>

      </div>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={`tab ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.title}
          </div>
        ))}
      </div>

    </div>
  );
}