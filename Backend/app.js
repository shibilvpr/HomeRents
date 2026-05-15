import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import dotenv from "dotenv";
dotenv.config(); // ✅ MUST BE FIRST

import express from "express";
const app = express();

import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";

// Controllers
import {
  signup,
  login,
  getAllUsers,
  toggleBlockUser,
} from "./Controller/userController.js";

import {
  addProduct,
  getProducts,
  deleteProduct,
  getDeletedProducts,
  restoreProduct,
  permanentDelete,
  updateProduct,
  getAllListings,
  updateStatus,
  deleteListing,
  adminStats,
} from "./Controller/ProductController.js";
import { getFavorites, toggleFavorite } from "./Controller/favoriteController.js";
import { createBooking, getAllBookings, getUserBookings, updateBookingStatus } from "./Controller/bookingController.js";
import { createProperty, deleteProperty, getProperties } from "./Controller/ownerProductAddFormController.js";

// =======================
// DB CONNECTION
// =======================
console.log("DB URL:", process.env.DB_url);

mongoose
  .connect(process.env.DB_url)
  // .connect(process.env.ATLAS_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// =======================
// MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("public/images"));

// =======================
// MULTER (IMAGE UPLOAD)
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// =======================
// AUTH ROUTES
// =======================
app.post("/signup", signup);
app.post("/login", login);

// =======================
// PRODUCT ROUTES
// =======================
app.post("/api/products/add", upload.single("image"), addProduct);
app.get("/api/products", getProducts);
app.delete("/api/products/:id", deleteProduct);
app.put("/api/products/:id", upload.single("image"), updateProduct);

app.get("/api/products/deleted", getDeletedProducts);
app.put("/api/products/restore/:id", restoreProduct);
app.delete("/api/products/permanent/:id", permanentDelete);

// faverate =======================

app.get("/api/favorites/:userId", getFavorites);
app.post("/api/favorites", toggleFavorite);
// ADMIN ROUTES
// =======================
app.get("/users", getAllUsers);
app.put("/users/block/:id", toggleBlockUser);

app.get("/listings", getAllListings);
app.put("/listings/:id", updateStatus);
app.delete("/listings/:id", deleteListing);

app.get("/admin/stats", adminStats);

// booking 
app.post("/api/bookings",createBooking);
app.get("/api/bookings/:userId", getUserBookings);

// ADMIN
app.get("/api/admin/bookings", getAllBookings);
app.put("/api/admin/bookings/:id", updateBookingStatus);

// owner add propperty

app.post("/api/properties", upload.array("images", 5), createProperty);
app.get("/api/properties", getProperties);
app.delete("/api/properties/:id", deleteProperty);


// =======================
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});