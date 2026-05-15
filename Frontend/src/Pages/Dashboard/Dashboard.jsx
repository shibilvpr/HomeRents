import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import AdminSidebar from "../../Compenents/Sidebar/Sidebar";
const api = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [mode, setMode] = useState(
    localStorage.getItem("admin-theme") || "dark-mode"
  );

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("admin-theme", mode);
  }, [mode]);

  // FETCH PRODUCTS
  const loadProducts = async () => {
    try {
      const response = await axios.get(
        `${API}/api/products`
      );

      setItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // DELETE PRODUCT
  const removeProduct = async (id) => {
    try {
      await axios.delete(
        `${API}/api/products/${id}`
      );

      loadProducts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  // EDIT OPEN
  const openEditor = (product) => {
    setSelectedItem(product);
  };

  // INPUT CHANGE
  const handleInput = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE PRODUCT
  const updateProduct = async () => {
    try {
      await axios.put(
        `${API}/api/products/${selectedItem._id}`,
        selectedItem
      );

      setSelectedItem(null);
      loadProducts();
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  // TOTALS
  const productCount = items.length;

  const revenueTotal = items.reduce(
    (acc, product) => acc + Number(product.price || 0),
    0
  );

  return (
    <div className="admin-shell">
      <AdminSidebar />

      <div className="admin-main-panel">
        <div className={`admin-dashboard-wrapper ${mode}`}>
          {/* TOP BAR */}
          <div className="dashboard-topbar">
            <h1>Product Dashboard</h1>

            <button
              className="mode-switch-btn"
              onClick={() =>
                setMode(
                  mode === "dark-mode"
                    ? "light-mode"
                    : "dark-mode"
                )
              }
            >
              {mode === "dark-mode"
                ? "Light Mode"
                : "Dark Mode"}
            </button>
          </div>

          {/* STATISTICS */}
          <div className="analytics-grid">
            <div className="analytics-box">
              <h2>{productCount}</h2>
              <p>Total Products</p>
            </div>

            <div className="analytics-box">
              <h2>₹ {revenueTotal}</h2>
              <p>Total Revenue</p>
            </div>
          </div>

          {/* TABLE */}
          <div className="product-table-wrapper">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Controls</th>
                </tr>
              </thead>

              <tbody>
                {items.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img
                        className="table-image"
                        src={`${API}/images/${product.image}`}
                        alt=""
                      />
                    </td>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>₹ {product.price}</td>

                    <td>{product.description}</td>

                    <td>
                      <div className="table-actions">
                        <button
                          className="edit-action-btn"
                          onClick={() =>
                            openEditor(product)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-action-btn"
                          onClick={() =>
                            removeProduct(product._id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MODAL */}
          {selectedItem && (
            <div className="editor-modal-overlay">
              <div className="editor-modal-box">
                <h2>Edit Product</h2>

                <input
                  type="text"
                  name="name"
                  value={selectedItem.name}
                  onChange={handleInput}
                  placeholder="Product Name"
                />

                <input
                  type="number"
                  name="price"
                  value={selectedItem.price}
                  onChange={handleInput}
                  placeholder="Price"
                />

                <input
                  type="text"
                  name="category"
                  value={selectedItem.category}
                  onChange={handleInput}
                  placeholder="Category"
                />

                <textarea
                  name="description"
                  value={selectedItem.description}
                  onChange={handleInput}
                  placeholder="Description"
                />

                <div className="modal-button-group">
                  <button onClick={updateProduct}>
                    Save
                  </button>

                  <button
                    onClick={() =>
                      setSelectedItem(null)
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;