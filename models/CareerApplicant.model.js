import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    jobTitle: { type: String, required: true },
    coverLetter: { type: String },
    resume: { type: String, required: true }, // will store file path
  },
  { timestamps: true }
);

export const CareerApplicant = mongoose.model("CareerApplicant", careerSchema);
