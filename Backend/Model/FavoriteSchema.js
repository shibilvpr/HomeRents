import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  properties: [
    {
      productId: String,
      name: String,
      price: Number,
      image: String,
      category: String,
      description: String,
    },
  ],
});

export const favoriteModel = mongoose.model("favorites", favoriteSchema);