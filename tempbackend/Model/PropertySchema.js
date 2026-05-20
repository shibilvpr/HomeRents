import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  image: String,

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending", // 🔥 IMPORTANT
  },
});

export const propertyModel = mongoose.model("properties", propertySchema);