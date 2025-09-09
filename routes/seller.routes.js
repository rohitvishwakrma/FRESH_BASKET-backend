import express from "express";
import {
  checkAuth,
  sellerLogin,
  sellerLogout,
} from "../controller/seller.controller.js";
import { authSeller } from "../middlewares/authSeller.js";
const router = express.Router();

// Default root endpoint for /api/seller/
router.get("/", (req, res) => {
  res.status(200).json({ message: "Seller API is running.", success: true });
});
router.post("/login", sellerLogin);
router.get("/is-auth", authSeller, checkAuth);
router.get("/logout", authSeller, sellerLogout);

export default router;
