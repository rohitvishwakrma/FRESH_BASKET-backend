import Partner from "../models/Partner.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Partner registration (after approval, set password)
export const setPartnerPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const partner = await Partner.findOne({ email, status: "approved" });
    if (!partner) return res.status(404).json({ message: "Partner not found or not approved." });
    partner.password = await bcrypt.hash(password, 10);
    await partner.save();
    res.json({ message: "Password set successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Partner login
export const partnerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const partner = await Partner.findOne({ email, status: "approved" });
    if (!partner || !partner.password) return res.status(400).json({ message: "Invalid credentials or not approved." });
    const isMatch = await bcrypt.compare(password, partner.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });
    const token = jwt.sign({ email: partner.email, role: "seller" }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ message: "Login successful", success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
