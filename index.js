import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js";

// Direct test for .env loading
console.log('Current working directory:', process.cwd());
import path from "path";
console.log('Attempting to load .env from:', path.resolve(process.cwd(), '.env'));
console.log('Loaded .env:', fs.existsSync('./.env'));
console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET);
console.log("rozarpay Connected")
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


// Ensure uploads folder exists
if (!fs.existsSync("uploads/resumes")) {
  fs.mkdirSync("uploads/resumes", { recursive: true });
}

const app = express();
const server = createServer(app);

// Allow multiple frontend origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (!allowedOrigins.includes(origin)) {
        return callback(new Error("Not allowed by CORS"), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Api endpoints
app.use("/images", express.static("uploads"));
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

// --- 🤖 Gemini AI Setup ---
// Gemini AI chat code removed as requested
// --- 🔌 Socket.io Setup ---
// import { Server } from "socket.io";
// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// --- 🤖 Gemini AI Setup ---
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// io.on("connection", (socket) => {
//   console.log(" New client connected:", socket.id);

//   socket.on("sendMessage", async (msg) => {
//     console.log("💬 Message received:", msg);

//     // Broadcast user message to all clients
//     io.emit("receiveMessage", msg);

//     // --- Ask Gemini AI for a reply ---
//     try {
//       const result = await model.generateContent(msg.text);
//       const botReply = {
//         sender: "Gemini AI",
//         text: result.response.text(),
//         time: new Date().toLocaleTimeString(),
//       };

//       // Send AI reply to all clients
//       io.emit("receiveMessage", botReply);
//     } catch (err) {
//       console.error(" Gemini error:", err.message);
//     }
//   });

//   socket.on("disconnect", () => {
//     console.log(" Client disconnected:", socket.id);
//   });
// End of file

// --- Start server ---
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    //start expiry notification
  // startExpiryNotificationJob(); // Disabled: not defined
  });
});
