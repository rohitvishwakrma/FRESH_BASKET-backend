import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String },
  resume: { type: String, required: true }, // store file path
  submittedAt: { type: Date, default: Date.now }
});

export const Application = mongoose.model("Application", applicationSchema);
