import express from "express";
import multer from "multer";
import { Application } from "../models/Application.js";

const router = express.Router();

// Configure multer to save files in 'uploads/'
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "_" + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// POST /api/application
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { jobTitle, fullName, email, phone, coverLetter } = req.body;
    const resumePath = req.file ? req.file.filename : "";

    const application = new Application({
      jobTitle,
      fullName,
      email,
      phone,
      coverLetter,
      resume: resumePath
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
