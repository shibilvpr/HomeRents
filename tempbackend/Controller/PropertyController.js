import { propertyModel } from "../Model/PropertySchema.js";

// 🔹 GET ALL PROPERTIES (ADMIN)
export const getAllProperties = async (req, res) => {
  const data = await propertyModel.find().populate("ownerId", "name email");
  res.json(data);
};

// 🔹 APPROVE
export const approveProperty = async (req, res) => {
  await propertyModel.findByIdAndUpdate(req.params.id, {
    status: "approved",
  });

  res.json({ message: "Property Approved" });
};

// 🔹 REJECT
export const rejectProperty = async (req, res) => {
  await propertyModel.findByIdAndUpdate(req.params.id, {
    status: "rejected",
  });

  res.json({ message: "Property Rejected" });
};