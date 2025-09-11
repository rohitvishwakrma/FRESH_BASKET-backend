import express from "express";
import Refund from "../models/refund.model.js";
import Cancellation from "../models/cancellation.model.js";
import User from "../models/user.model.js";
import { sendSMS } from "../Foodutils/sendSMS.js";
import { sendEmail } from "../Foodutils/sendEmail.js";

const router = express.Router();

// Get all refund requests (admin)
router.get("/refunds", async (req, res) => {
  try {
    const refunds = await Refund.find().populate("order user");
    res.json({ success: true, refunds });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all cancellation requests (admin)
router.get("/cancellations", async (req, res) => {
  try {
    const cancellations = await Cancellation.find().populate("order user");
    res.json({ success: true, cancellations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update refund/cancellation status (admin)
router.patch("/refund/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const refund = await Refund.findByIdAndUpdate(req.params.id, { status, processedAt: new Date() }, { new: true }).populate("user");
    // Send SMS notification
    if (refund && refund.user && refund.user.phone) {
      await sendSMS({
        to: refund.user.phone,
        message: `Your refund request for order ${refund.order} is now ${status}.`
      });
    }
    // Send Email notification
    if (refund && refund.user && refund.user.email) {
      await sendEmail({
        to: refund.user.email,
        subject: "Refund Request Update",
        text: `Your refund request for order ${refund.order} is now ${status}.`
      });
    }
    res.json({ success: true, refund });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch("/cancellation/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const cancellation = await Cancellation.findByIdAndUpdate(req.params.id, { status, processedAt: new Date() }, { new: true }).populate("user");
    // Send SMS notification
    if (cancellation && cancellation.user && cancellation.user.phone) {
      await sendSMS({
        to: cancellation.user.phone,
        message: `Your cancellation request for order ${cancellation.order} is now ${status}.`
      });
    }
    // Send Email notification
    if (cancellation && cancellation.user && cancellation.user.email) {
      await sendEmail({
        to: cancellation.user.email,
        subject: "Cancellation Request Update",
        text: `Your cancellation request for order ${cancellation.order} is now ${status}.`
      });
    }
    res.json({ success: true, cancellation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
