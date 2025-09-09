import express from "express";
import multer from "multer";
import path from "path";
import { CareerApplicant } from "../models/CareerApplicant.model.js";

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST /api/career/apply
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, jobTitle, coverLetter } = req.body;
    const resume = req.file ? req.file.path : null;

    if (!fullName || !email || !phone || !jobTitle || !resume) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    const applicant = new CareerApplicant({
      fullName,
      email,
      phone,
      jobTitle,
      coverLetter,
      resume,
    });

    await applicant.save();

    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
