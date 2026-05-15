import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./BookingForm.css";
import Navbar from "../../Compenents/Navbar/Navbar";
const api = import.meta.env.VITE_API_URL;

const BookingForm = ({ property }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?._id) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(`${API}/api/bookings`, {
        ...form,
        userId: user._id,
        propertyId: property?._id || null,
      });

      alert("✅ Booking request sent!");

      setForm({
        name: "",
        email: "",
        phone: "",
        category: "",
        location: "",
        startDate: "",
        endDate: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("❌ Booking failed");
    }
  };

  return (
    <div className="booking-page">
        <Navbar/>

      {/* LEFT SIDE */}
      <motion.div
        className="booking-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Connect with Us for Your Next Project</h2>
        <p>
          Discover premium living spaces crafted with elegance, comfort,
          and modern design. Let us help you find your perfect home.
        </p>

        <motion.div
          className="left-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>Essential Aspects Driving Our Strategy</h3>
          <p>
            We focus on innovation, premium quality, and exceptional
            customer experience to deliver luxury living solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.div
        className="booking-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.form
          className="booking-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Book Property</h2>

          <div className="row">
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          </div>

          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />

          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>

          <select name="location" value={form.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Calicut">Calicut</option>
          </select>

          <div className="date-group">
            <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
            <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
          </div>

          <textarea name="message" placeholder="Additional Message" value={form.message} onChange={handleChange} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>

    </div>
  );
};

export default BookingForm;