// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"]
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [4, "Message must be at least 10 characters long"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
