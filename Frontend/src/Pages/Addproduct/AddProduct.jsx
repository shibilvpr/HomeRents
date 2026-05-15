import React, { useState } from "react";
import axios from "axios";
import Input from "../../Compenents/Input/Input";
import "./AddProduct.css";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../../Compenents/Sidebar/Sidebar";
const api = import.meta.env.VITE_API_URL;

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", form.name);
      data.append("price", form.price);
      data.append("category", form.category);
      data.append("description", form.description);
      data.append("image", image);

      await axios.post(`${API}/api/products/add`, data);

      alert("✅ Product Added");

      // reset form
      setForm({
        name: "",
        price: "",
        category: "",
        description: "",
      });
      setImage(null);

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="add-product-container">
      <Sidebar/>
      <div className="add-product-card">
        <h2>Add New Property</h2>

        <form onSubmit={handleSubmit}>

          <Input
            label="Property Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter property name"
          />

          <Input
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
          />

          <Input
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Apartment / Villa / House"
          />

          {/* TEXTAREA */}
          <div className="input-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="textarea"
            />
          </div>

          {/* FILE */}
          <div className="input-group">
            <label>Upload Image</label>
            <input type="file" onChange={handleFile} />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;