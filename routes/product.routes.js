
import express from "express";
import { authSeller } from "../middlewares/authSeller.js";
import { authUserOrSeller } from "../middlewares/authUser.js";


import {
  addProduct,
  getProducts,
  getProductStock,
  updateProductStock,
  getProductById,
  getProductByName
} from "../controller/product.controller.js";
import { upload } from "../config/multer.js";
import { getExpiringProducts } from '../Foodutils/expairynotification.js';
const router = express.Router();


// Add product
router.post("/add-product", authSeller, upload.array("image", 4), addProduct);
// List all products
router.get("/list", getProducts);
// Get product by ID
router.get("/:id", getProductById);
// Get product by name
router.get("/name/:name", getProductByName);
// Get product stock info
router.get('/stock', getProductStock);
// Update product stock
router.patch('/stock', updateProductStock);
// Get expiring products
router.get('/expiring', authUserOrSeller, getExpiringProducts);

export default router;
