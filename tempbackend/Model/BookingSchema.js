import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },

  name: String,
  email: String,
  phone: String,

  category: String,
  location: String,

  startDate: Date,
  endDate: Date,

  message: String,

  status: {
    type: String,
    default: "pending",
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);