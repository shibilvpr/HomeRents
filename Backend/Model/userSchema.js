import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "owner", "admin"], // ✅ secure roles
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false, // ✅ fixed name
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("users", userSchema);