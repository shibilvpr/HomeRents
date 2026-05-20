import { userModel } from "../Model/userSchema.js";

// GET ALL USERS
export const getUsers = async (req, res) => {
  const users = await userModel.find().select("-password");
  res.json(users);
};

// BLOCK / UNBLOCK USER
export const toggleBlockUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    user.isBlocked = !user.isBlocked;

    await user.save();

    res.json({
      message: user.isBlocked ? "User Blocked" : "User Unblocked",
    });

  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};

// DELETE USER (SPAM REMOVE)
export const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.json({ message: "User removed" });
};