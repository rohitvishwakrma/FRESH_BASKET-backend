import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "Requested" },
  processedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const Refund = mongoose.model("Refund", refundSchema);
export default Refund;
