import User from "../models/user.model.js";

// update user cartData: /api/cart/update

export const updateCart = async (req, res) => {
  try {
    const userId = req.user;
    const { cartItems } = req.body;
   const updatedUser =   await User.findByIdAndUpdate(userId, { cartItems }, { new: true });
   if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "Cart updated" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
