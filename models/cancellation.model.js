import mongoose from "mongoose";

const cancellationSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "Requested" },
  processedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const Cancellation = mongoose.model("Cancellation", cancellationSchema);
export default Cancellation;
