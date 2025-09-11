// ...existing code...
// ...existing code...
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET);
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import careerRoutes from "./routes/career.routes.js";
// import reviewRoutes from "./routes/review.routes.js";
import { startExpiryNotificationJob } from "./Foodutils/expairynotification.js";  
import  cloudinary from "./config/cloudinary.js";

const app = express();
// import adminRequestsRoutes from "./routes/admin.requests.routes.js";
// import refundRoutes from "./routes/refund.routes.js";
// import cancellationRoutes from "./routes/cancellation.routes.js";

// allow multiple origins
// Allow all local frontend ports for development
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost:")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


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



// app.use("/api/review", reviewRoutes);
// app.use("/api/refund", refundRoutes);
// app.use("/api/cancellation", cancellationRoutes);
// app.use("/api/admin/requests", adminRequestsRoutes);


const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    //start expiry notification
    startExpiryNotificationJob();
  });
});
