import express from "express";
import Partner from "../models/Partner.model.js";
import multer from "multer";
import path from "path";
import { setPartnerPassword, partnerLogin } from "../controller/partner.auth.controller.js";

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
router.post("/apply", upload.single("document"), async (req, res) => {
  try {
    const { businessName, contactPerson, email, phone, message } = req.body;
    const document = req.file ? req.file.filename : null;

    const newPartner = new Partner({
      businessName,
      contactPerson,
      email,
      phone,
      message,
      document,
    });

    await newPartner.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------
// Get all pending applications (Admin)
// ----------------------
router.get("/pending", async (req, res) => {
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
router.patch("/:id", async (req, res) => {
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
router.get("/approved", async (req, res) => {
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

export default router;
