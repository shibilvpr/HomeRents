import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // ✅ GET REAL USER
  const user = JSON.parse(localStorage.getItem("user"));

  // ================= PRODUCTS =================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.products || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // ================= FAVORITES =================
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!user?._id) return;

        const res = await axios.get(
          `http://localhost:5000/api/favorites/${user._id}`
        );

        setFavorites(res.data.favorites || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFavorites();
  }, []);

  // ================= TOGGLE FAVORITE =================
  const handleFavorite = async (product) => {
    if (!user?._id) {
      alert("Please login first");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/favorites",
        {
          userId: user._id,
          product,
        }
      );

      // ✅ ALWAYS TRUST BACKEND
      setFavorites(res.data.favorites);

    } catch (err) {
      console.log(err);
    }
  };

  // ================= CHECK =================
  const isFav = (id) => {
    return favorites.some((item) => item.productId === id);
  };

  return (
    <section className="clients" id="went">
      <div className="cards">
        {products.map((item, index) => {
          const isActive = active === index;
          const favActive = isFav(item._id);

          return (
            <div
              key={item._id}
              className={`card ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {/* ❤️ FAVORITE BUTTON */}
              <button
                className={`fav-btn ${favActive ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation(); // ✅ prevent hover issues
                  handleFavorite(item);
                }}
              >
                {favActive ? "❤️" : "🤍"}
              </button>

              {/* IMAGE */}
              <div className="image-wrapper">
                <img
                  src={
                    item.image
                      ? `http://localhost:5000/images/${item.image}`
                      : "https://via.placeholder.com/200"
                  }
                  alt={item.name}
                />
              </div>

              {/* INFO */}
              <div className="info">
                <span className="category">{item.category}</span>

                <h3>{item.name}</h3>

                <p>{item.description?.slice(0, 70)}...</p>

                <div className="price">₹ {item.price}</div>

                {/* BUTTONS */}
                <div className="actions">
                  <button className="btn view" ><a href="/PropertyList">VIEW</a></button>
                  <button className="btn cart"> <a href="/BookingForm">CONTACT</a></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="title">OUR PROPERTIES</h2>
    </section>
  );
};

export default ProductPage;