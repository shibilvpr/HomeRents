import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecycleBin.css";
import Sidebar from "../../Compenents/Sidebar/Sidebar";

const RecycleBin = () => {
  const [deletedItems, setDeletedItems] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  // ================= FETCH PRODUCTS =================
  const loadDeletedProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products/deleted"
      );

      setDeletedItems(response.data?.products || []);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    loadDeletedProducts();
  }, []);

  // ================= RESTORE =================
  const restoreProduct = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/restore/${id}`
      );

      loadDeletedProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= PERMANENT DELETE =================
  const deleteForever = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/products/permanent/${id}`
      );

      loadDeletedProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="recycle-page-layout">
      <Sidebar />

      <div className="recycle-main-section">
        <h1 className="recycle-page-title">
          Recycle Bin
        </h1>

        {/* LOADING */}
        {pageLoading && (
          <p className="recycle-loading-text">
            Loading...
          </p>
        )}

        {/* EMPTY */}
        {!pageLoading &&
          deletedItems.length === 0 && (
            <p className="recycle-empty-text">
              No deleted products found
            </p>
          )}

        {/* PRODUCTS */}
        <div className="deleted-products-grid">
          {deletedItems.map((product) => (
            <div
              className="deleted-product-card"
              key={product._id}
            >
              <img
                className="deleted-product-image"
                src={
                  product.image
                    ? `http://localhost:5000/images/${product.image}`
                    : "https://via.placeholder.com/150"
                }
                alt={product.name}
              />

              <h3 className="deleted-product-name">
                {product.name}
              </h3>

              <div className="deleted-product-actions">
                <button
                  className="restore-product-btn"
                  onClick={() =>
                    restoreProduct(product._id)
                  }
                >
                  Restore
                </button>

                <button
                  className="delete-product-btn"
                  onClick={() =>
                    deleteForever(product._id)
                  }
                >
                  Delete Forever
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecycleBin;