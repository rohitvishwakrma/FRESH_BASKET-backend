import express from "express";
import Review from "../models/review.model.js";

const router = express.Router();

// Add a review
router.post("/add", async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const user = req.user;
    const review = await Review.create({ product, user, rating, comment });
    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get reviews for a product
router.get("/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId }).populate("user", "name");
    res.json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
