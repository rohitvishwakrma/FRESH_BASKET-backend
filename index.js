// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import { connectDB } from "./config/connectDB.js";
// dotenv.config();

// import userRoutes from "./routes/user.routes.js";
// import sellerRoutes from "./routes/seller.routes.js";
// import productRoutes from "./routes/product.routes.js";
// import cartRoutes from "./routes/cart.routes.js";
// import addressRoutes from "./routes/address.routes.js";
// import orderRoutes from "./routes/order.routes.js";
// import contactRoutes from "./routes/contact.routes.js";
// import { startExpiryNotificationJob } from "./Foodutils/expairynotification.js";  
// import careerRoutes from "./routes/career.routes.js";
// import partnerRoutes from "./routes/partner.routes.js";
// import adminRoutes from "./routes/admin.routes.js";
// import fs from "fs";
// if (!fs.existsSync("uploads/resumes")) fs.mkdirSync("uploads/resumes", { recursive: true });
// const app = express();



// // Allow multiple frontend origins
// const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true); // allow server-to-server requests or Postman
//     if (!allowedOrigins.includes(origin)) {
//       return callback(new Error("Not allowed by CORS"), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));

// // Middlewares
// app.use(cookieParser());
// app.use(express.json());

// // API endpoints
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRoutes);
// app.use("/api/seller", sellerRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/career", careerRoutes);
// app.use("/uploads/resumes", express.static("uploads/resumes"));
// app.use("/api/partners", partnerRoutes);
// app.use("/api/admin", adminRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server is running on port ${PORT}`);

//   // Start expiry notification job
//   startExpiryNotificationJob();
// });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fs from "fs";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./config/connectDB.js";
import { startExpiryNotificationJob } from "./Foodutils/expairynotification.js";
import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ Gemini

dotenv.config();

// Routes
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import careerRoutes from "./routes/career.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import adminRoutes from "./routes/admin.routes.js";

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

// API endpoints
app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/uploads/resumes", express.static("uploads/resumes"));
app.use("/api/partners", partnerRoutes);
app.use("/api/admin", adminRoutes);

// --- 🔌 Socket.io Setup ---
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// --- 🤖 Gemini AI Setup ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

io.on("connection", (socket) => {
  console.log(" New client connected:", socket.id);

  socket.on("sendMessage", async (msg) => {
    console.log("💬 Message received:", msg);

    // Broadcast user message to all clients
    io.emit("receiveMessage", msg);

    // --- Ask Gemini AI for a reply ---
    try {
      const result = await model.generateContent(msg.text);
      const botReply = {
        sender: "Gemini AI",
        text: result.response.text(),
        time: new Date().toLocaleTimeString(),
      };

      // Send AI reply to all clients
      io.emit("receiveMessage", botReply);
    } catch (err) {
      console.error(" Gemini error:", err.message);
    }
  });

  socket.on("disconnect", () => {
    console.log(" Client disconnected:", socket.id);
  });
});

// --- Start server ---
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  connectDB();
  console.log(` Server is running on port ${PORT}`);
  startExpiryNotificationJob();
});
