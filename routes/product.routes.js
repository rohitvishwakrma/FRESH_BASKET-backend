import express from "express";

import { authSeller } from "../middlewares/authSeller.js";
import {
  addProduct,
  getProducts,
} from "../controller/product.controller.js";
import { upload } from "../config/multer.js";
const router = express.Router();
import { getExpiringProducts } from '../Foodutils/expairynotification.js';

router.post("/add-product", authSeller, upload.array("image", 4), addProduct);
router.get("/list", getProducts);
// router.get("/id", getProductById); // Removed due to missing export
// router.post("/stock", authSeller, changeStock); // Removed due to missing export
router.get('/expiring', getExpiringProducts);

export default router;
