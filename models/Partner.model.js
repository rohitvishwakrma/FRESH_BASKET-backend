import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false }, // for login after approval
  phone: { type: String, required: true },
  message: { type: String },
  document: { type: String }, // optional file path
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Partner", partnerSchema);
