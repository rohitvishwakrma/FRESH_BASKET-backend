import express from "express";
import Refund from "../models/refund.model.js";

const router = express.Router();

// Request a refund
router.post("/request", async (req, res) => {
  try {
    const { order, reason } = req.body;
    const user = req.user;
    const refund = await Refund.create({ order, user, reason });
    res.status(201).json({ success: true, refund });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get refunds for a user
router.get("/user", async (req, res) => {
  try {
    const user = req.user;
    const refunds = await Refund.find({ user });
    res.json({ success: true, refunds });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
