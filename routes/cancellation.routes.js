import express from "express";
import Cancellation from "../models/cancellation.model.js";

const router = express.Router();

// Request a cancellation
router.post("/request", async (req, res) => {
  try {
    const { order, reason } = req.body;
    const user = req.user;
    const cancellation = await Cancellation.create({ order, user, reason });
    res.status(201).json({ success: true, cancellation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get cancellations for a user
router.get("/user", async (req, res) => {
  try {
    const user = req.user;
    const cancellations = await Cancellation.find({ user });
    res.json({ success: true, cancellations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
