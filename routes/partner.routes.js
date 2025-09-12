import express from "express";
import Partner from "../models/Partner.model.js";
import multer from "multer";
import path from "path";
import { partnerLogin } from "../controller/partner.auth.controller.js";
import { setPartnerPassword } from "../controller/partner.auth.controller.js";
import { createPartner } from "../controller/partner.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

// Setup multer storage for document uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/partners/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ----------------------
// Submit partner application
// ----------------------
// Use controller for partner application
router.post("/apply", upload.single("document"), createPartner);

// ----------------------
// Get all pending applications (Admin)
// ----------------------
router.get("/pending", authSeller, async (req, res) => {
  try {
    const pendingPartners = await Partner.find({ status: "pending" });
    res.status(200).json(pendingPartners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// Approve or reject application (Admin)
// ----------------------
router.patch("/:id", authSeller, async (req, res) => {
  try {
    const { status } = req.body; // 'approved' or 'rejected'
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({ message: `Partner ${status}`, partner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// Get all approved partners (Frontend display)
// Get all partners (Frontend display)
router.get("/all", async (req, res) => {
  try {
    const allPartners = await Partner.find({});
    res.status(200).json(allPartners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// ----------------------
router.get("/approved", authSeller, async (req, res) => {
  try {
    const approvedPartners = await Partner.find({ status: "approved" });
    res.status(200).json(approvedPartners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// Set partner password
// ----------------------
router.post("/set-password", setPartnerPassword);

// ----------------------
// Partner login
// ----------------------
router.post("/login", partnerLogin);

// Set password for partner (admin only)
router.post("/set-password", setPartnerPassword);

export default router;
