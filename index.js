import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js"; // Use named import as exported

// Routes
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import refundRoutes from "./routes/refund.routes.js";
import cancellationRoutes from "./routes/cancellation.routes.js";
import paymentRoutes from "./routes/rozarpay.routes.js";
import careerRoutes from "./routes/career.routes.js";

// --- Ensure uploads folder exists ---
if (!fs.existsSync(path.join("uploads", "resumes"))) {
  fs.mkdirSync(path.join("uploads", "resumes"), { recursive: true });
}

// --- Initialize app ---
const app = express();
const server = createServer(app);

// --- CORS Configuration ---
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://fresh-basket-fr-git-fe00bc-rohit-vishwakarmas-projects-0ce99492.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// --- Middleware ---
app.use(cookieParser());
app.use(express.json());

// --- Set cookie options for production ---
app.use((req, res, next) => {
  res.cookie('dummy', 'test', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });
  next();
});

// --- Static Files ---
app.use("/images", express.static(path.join("uploads")));

// --- API Routes ---
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/refund", refundRoutes);
app.use("/api/cancellation", cancellationRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/career", careerRoutes);

// --- Connect to MongoDB & Start Server ---
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to connect to MongoDB:", err);
    process.exit(1);
  });

export default app;
