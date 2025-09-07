// routes/contact.js
import express from "express";
import { ContactForm } from "../controller/contact.controller.js";
import authContact from "../middlewares/authContact.js";

const router = express.Router();

// Public route — anyone can send a contact message
router.post("/", ContactForm);

// Protected route — only admin can view messages
router.get("/messages", authContact, (req, res) => {
  res.send("This would return all messages for admin");
});

export default router;
