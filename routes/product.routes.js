
import express from "express";
import { authSeller } from "../middlewares/authSeller.js";
import { authUserOrSeller } from "../middlewares/authUser.js";


import {
  addProduct,
  getProducts,
  getProductStock,
  updateProductStock
} from "../controller/product.controller.js";
import { upload } from "../config/multer.js";
import { getExpiringProducts } from '../Foodutils/expairynotification.js';
const router = express.Router();

router.post("/add-product", authSeller, upload.array("image", 4), addProduct);
router.get("/list", getProducts);
// router.get("/id", getProductById); // Removed due to missing export
// router.post("/stock", authSeller, changeStock); // Removed due to missing export

// Get product stock info
router.get('/stock', getProductStock);
// Update product stock
router.patch('/stock', updateProductStock);
router.get('/expiring', authUserOrSeller, getExpiringProducts);

export default router;
