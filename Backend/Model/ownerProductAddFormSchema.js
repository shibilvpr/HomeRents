import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    bhk: {
      type: Number,
      required: true,
    },

    bathrooms: {
      type: Number,
      default: 1,
    },

    area: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    rent: {
      type: Number,
      required: true,
    },

    deposit: {
      type: Number,
      default: 0,
    },

    maintenance: {
      type: Number,
      default: 0,
    },

    furnishing: {
      type: String,
      default: "Furnished",
    },

    highlights: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
      default: "",
    },

    owner: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PropertyFormModel = mongoose.model("Property",propertySchema);