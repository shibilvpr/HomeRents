import { productModel } from "../Model/ProductSchema.js";
import { userModel } from "../Model/userSchema.js";

// ADD
export const addProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    const product = await productModel.create({
      name,
      price,
      category,
      description,
      image: req.file ? req.file.filename : "",
    });

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding product" });
  }
};

// GET
export const getProducts = async (req, res) => {
  const products = await productModel.find({ isDeleted: false });
  res.json({ products });
};

// DELETE (SOFT)
export const deleteProduct = async (req, res) => {
  await productModel.findByIdAndUpdate(req.params.id, {
    isDeleted: true,
  });
  res.json({ message: "Deleted" });
};

// RECYCLE
export const getDeletedProducts = async (req, res) => {
  const products = await productModel.find({ isDeleted: true });
  res.json({ products });
};

export const restoreProduct = async (req, res) => {
  await productModel.findByIdAndUpdate(req.params.id, {
    isDeleted: false,
  });
  res.json({ message: "Restored" });
};

export const permanentDelete = async (req, res) => {
  await productModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted permanently" });
};

// UPDATE
export const updateProduct = async (req, res) => {
  const data = req.body;

  if (req.file) {
    data.image = req.file.filename;
  }

  const updated = await productModel.findByIdAndUpdate(
    req.params.id,
    data,
    { new: true }
  );

  res.json(updated);
};

// ================= ADMIN =================

// LISTINGS
export const getAllListings = async (req, res) => {
  const data = await productModel.find();
  res.json(data);
};

export const updateStatus = async (req, res) => {
  const { status } = req.body;

  const updated = await productModel.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(updated);
};

export const deleteListing = async (req, res) => {
  await productModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// STATS
export const adminStats = async (req, res) => {
  const users = await userModel.countDocuments();
  const listings = await productModel.countDocuments();
  const approved = await productModel.countDocuments({
    status: "approved",
  });

  res.json({ users, listings, approved });
};