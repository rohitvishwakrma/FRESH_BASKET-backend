import express from "express";
import { createOrder, verifyPayment } from "../controller/rozarpay.controller.js";
import Razorpay from "razorpay";
import crypto from "crypto";

// ✅ Initialize Razorpay instance}
const router = express.Router();

router.post("/order", createOrder);     // ✅ Create Razorpay order
router.post("/verify", verifyPayment);  // ✅ Verify payment signature

export default router;
