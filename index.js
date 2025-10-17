import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js"; // Use named import as exported

// Routes will be imported dynamically to isolate startup errors
let userRoutes,
  sellerRoutes,
  productRoutes,
  cartRoutes,
  addressRoutes,
  orderRoutes,
  contactRoutes,
  partnerRoutes,
  adminRoutes,
  reviewRoutes,
  refundRoutes,
  cancellationRoutes,
  paymentRoutes,
  careerRoutes;

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
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Strict',
  });
  next();
});

// --- Static Files ---
app.use("/images", express.static(path.join("uploads")));

// --- API Routes ---
// Dynamically import and mount route modules so errors are isolated and logged
const registerRoutes = async () => {
  try {
    console.log('Registering route modules...');
    userRoutes = (await import('./routes/user.routes.js')).default;
    app.use('/api/user', userRoutes);
    console.log('Mounted user routes');

    sellerRoutes = (await import('./routes/seller.routes.js')).default;
    app.use('/api/seller', sellerRoutes);
    console.log('Mounted seller routes');

    productRoutes = (await import('./routes/product.routes.js')).default;
    app.use('/api/product', productRoutes);
    console.log('Mounted product routes');

    cartRoutes = (await import('./routes/cart.routes.js')).default;
    app.use('/api/cart', cartRoutes);
    console.log('Mounted cart routes');

    addressRoutes = (await import('./routes/address.routes.js')).default;
    app.use('/api/address', addressRoutes);
    console.log('Mounted address routes');

    orderRoutes = (await import('./routes/order.routes.js')).default;
    app.use('/api/order', orderRoutes);
    console.log('Mounted order routes');

    contactRoutes = (await import('./routes/contact.routes.js')).default;
    app.use('/api/contact', contactRoutes);
    console.log('Mounted contact routes');

    partnerRoutes = (await import('./routes/partner.routes.js')).default;
    app.use('/api/partners', partnerRoutes);
    console.log('Mounted partner routes');

    adminRoutes = (await import('./routes/admin.routes.js')).default;
    app.use('/api/admin', adminRoutes);
    console.log('Mounted admin routes');

    reviewRoutes = (await import('./routes/review.routes.js')).default;
    app.use('/api/review', reviewRoutes);
    console.log('Mounted review routes');

    refundRoutes = (await import('./routes/refund.routes.js')).default;
    app.use('/api/refund', refundRoutes);
    console.log('Mounted refund routes');

    cancellationRoutes = (await import('./routes/cancellation.routes.js')).default;
    app.use('/api/cancellation', cancellationRoutes);
    console.log('Mounted cancellation routes');

    paymentRoutes = (await import('./routes/rozarpay.routes.js')).default;
    app.use('/api/payment', paymentRoutes);
    console.log('Mounted payment routes');

    careerRoutes = (await import('./routes/career.routes.js')).default;
    app.use('/api/career', careerRoutes);
    console.log('Mounted career routes');

    console.log('All route modules registered');
  } catch (err) {
    console.error('Route registration error:', err);
    // swallow error to prevent crash while debugging CORS issue
  }
};

registerRoutes();

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
