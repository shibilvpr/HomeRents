import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Properties.css";
import Navbar from "../../Compenents/Navbar/Navbar";

const OwnerProductAdd = ({ onSuccess }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    bhk: "",
    bathrooms: "",
    area: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    rent: "",
    deposit: "",
    maintenance: "",
    furnishing: "",
    highlights: "",
    description: "",
    owner: "",
    phone: "",
    email: "",
  });

  const [images, setImages] = useState([]);

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // =========================
  // HANDLE IMAGES
  // =========================

  const handleImageChange = (e) => {

    setImages(Array.from(e.target.files));

  };

  // =========================
  // FORM VALIDATION
  // =========================

  const validateForm = () => {

    if (!formData.title.trim()) {
      Swal.fire("Error", "Property Title is required", "warning");
      return false;
    }

    if (!formData.type) {
      Swal.fire("Error", "Select Property Type", "warning");
      return false;
    }

    if (!formData.bhk) {
      Swal.fire("Error", "Enter BHK", "warning");
      return false;
    }

    if (!formData.bathrooms) {
      Swal.fire("Error", "Enter Bathrooms", "warning");
      return false;
    }

    if (!formData.area.trim()) {
      Swal.fire("Error", "Enter Property Area", "warning");
      return false;
    }

    if (!formData.address.trim()) {
      Swal.fire("Error", "Enter Address", "warning");
      return false;
    }

    if (!formData.city.trim()) {
      Swal.fire("Error", "Enter City", "warning");
      return false;
    }

    if (!formData.state.trim()) {
      Swal.fire("Error", "Enter State", "warning");
      return false;
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      Swal.fire(
        "Error",
        "Enter Valid 6 Digit Pincode",
        "warning"
      );
      return false;
    }

    if (!formData.rent) {
      Swal.fire("Error", "Enter Monthly Rent", "warning");
      return false;
    }

    if (!formData.deposit) {
      Swal.fire("Error", "Enter Deposit Amount", "warning");
      return false;
    }

    if (!formData.maintenance) {
      Swal.fire("Error", "Enter Maintenance Amount", "warning");
      return false;
    }

    if (!formData.furnishing) {
      Swal.fire("Error", "Select Furnishing Type", "warning");
      return false;
    }

    if (!formData.highlights.trim()) {
      Swal.fire(
        "Error",
        "Enter Property Highlights",
        "warning"
      );
      return false;
    }

    if (!formData.description.trim()) {
      Swal.fire(
        "Error",
        "Enter Property Description",
        "warning"
      );
      return false;
    }

    if (!formData.owner.trim()) {
      Swal.fire("Error", "Enter Owner Name", "warning");
      return false;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      Swal.fire(
        "Error",
        "Enter Valid 10 Digit Phone Number",
        "warning"
      );
      return false;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      Swal.fire(
        "Error",
        "Enter Valid Email Address",
        "warning"
      );
      return false;
    }

    if (images.length === 0) {
      Swal.fire(
        "Error",
        "Upload Property Images",
        "warning"
      );
      return false;
    }

    return true;

  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATE FORM
    if (!validateForm()) {
      return;
    }

    try {

      const data = new FormData();

      // TEXT DATA
      Object.keys(formData).forEach((key) => {

        data.append(key, formData[key]);

      });

      // IMAGES
      images.forEach((img) => {

        data.append("images", img);

      });

      await axios.post(
        "http://localhost:5000/api/properties",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // SUCCESS ALERT
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Property Added Successfully",
        confirmButtonColor: "#111827",
      });

      // RESET FORM
      setFormData({
        title: "",
        type: "",
        bhk: "",
        bathrooms: "",
        area: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        rent: "",
        deposit: "",
        maintenance: "",
        furnishing: "",
        highlights: "",
        description: "",
        owner: "",
        phone: "",
        email: "",
      });

      setImages([]);

      if (onSuccess) {
        onSuccess();
      }

    } catch (err) {

      console.log(err);

      // ERROR ALERT
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Something went wrong",
        confirmButtonColor: "#dc2626",
      });

    }

  };

  return (

    <div className="property-page">

      <Navbar />

      <div className="property-overlay"></div>

      <div className="property-container">

        {/* LEFT SIDE */}
        <div className="property-left">

          <span className="property-tag">
            PREMIUM RENTAL SYSTEM
          </span>

          <h1>
            Add Your <br />
            Luxury Property
          </h1>

          <p>
            Upload apartments, villas, houses, and premium rental
            properties with complete details and multiple images.
          </p>

          <div className="property-stats">

            <div className="stat-card">
              <h2>30K+</h2>
              <span>Properties</span>
            </div>

            <div className="stat-card">
              <h2>15K+</h2>
              <span>Owners</span>
            </div>

            <div className="stat-card">
              <h2>4.9★</h2>
              <span>Rating</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="property-right">

          <div className="form-card">

            <h2>Add Property</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <input
                  type="text"
                  name="title"
                  placeholder="Property Title"
                  value={formData.title}
                  onChange={handleChange}
                />

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Property Type
                  </option>

                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>

                </select>

                <input
                  type="number"
                  name="bhk"
                  placeholder="BHK"
                  value={formData.bhk}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="bathrooms"
                  placeholder="Bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="area"
                  placeholder="Area (1200 sqft)"
                  value={formData.area}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="rent"
                  placeholder="Monthly Rent"
                  value={formData.rent}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="deposit"
                  placeholder="Deposit Amount"
                  value={formData.deposit}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="maintenance"
                  placeholder="Maintenance"
                  value={formData.maintenance}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />

                <select
                  name="furnishing"
                  value={formData.furnishing}
                  onChange={handleChange}
                >
                  <option value="">
                    Furnishing
                  </option>

                  <option>Furnished</option>
                  <option>Semi Furnished</option>
                  <option>Unfurnished</option>

                </select>

              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
              />

              <textarea
                name="highlights"
                placeholder="Highlights (Power Backup, Parking, Balcony)"
                value={formData.highlights}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Property Description"
                value={formData.description}
                onChange={handleChange}
              />

              <div className="owner-grid">

                <input
                  type="text"
                  name="owner"
                  placeholder="Owner Name"
                  value={formData.owner}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              {/* IMAGE */}
              <div className="upload-box">

                <label>
                  Upload Property Images
                </label>

                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                />

              </div>

              {/* PREVIEW */}
              <div className="preview-grid">

                {images.map((img, index) => (

                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="preview-img"
                  />

                ))}

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Add Property
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default OwnerProductAdd;