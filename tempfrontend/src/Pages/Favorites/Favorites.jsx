import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Favorites.css";
import Navbar from "../../Compenents/Navbar/Navbar";
const API = import.meta.env.VITE_API_URL;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!user?._id) {
          setError("Please login first");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${API}/api/favorites/${user._id}`
        );

        setFavorites(res.data?.favorites || []);
      } catch (err) {
        console.log(err);
        setError("Failed to load favorites");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="fav-container">
      <Navbar/>
      <h1 className="fav-title">❤️ Your Favorites</h1>

      {loading && <p className="state">Loading...</p>}
      {error && <p className="state error">{error}</p>}

      {!loading && favorites.length === 0 && (
        <p className="state">No favorites found</p>
      )}

      <div className="fav-grid">
        {favorites.map((item) => (
          <div className="fav-card" key={item.productId}>
            
            {/* IMAGE */}
            <div className="fav-image">
              <img
                src={
                  item.image
                    ? `${API}/images/${item.image}`
                    : "https://via.placeholder.com/300"
                }
                alt={item.name}
              />
            </div>

            {/* CONTENT */}
            <div className="fav-content">
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="price">₹ {item.price}</p>

              
            </div>
             <div className="actions">
                  <button className="btn view" ><a href="/luxuryInterior">VIEW</a></button>
                  <button className="btn cart"> <a href="/BookingForm">CONTACT</a></button>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;