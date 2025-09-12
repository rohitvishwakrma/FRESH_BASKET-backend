// Update product stock
export const updateProductStock = async (req, res) => {
  try {
    const { productId, stock } = req.body;
    if (!productId || typeof stock !== 'number') {
      return res.status(400).json({ success: false, message: "Product ID and stock value required." });
    }
    const product = await Product.findByIdAndUpdate(productId, { stock, inStock: stock > 0 }, { new: true });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Get product stock info
export const getProductStock = async (req, res) => {
  try {
    const products = await Product.find({}, 'name inStock stock');
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
import Product from "../models/product.model.js";

// Add product (with expiryDate)
export const addProduct = async (req, res) => {
  try {
    const { name, price, offerPrice, description, category, expiryDate } = req.body;
    const image = req.files?.map((file) => file.filename);
    if (!name || !price || !offerPrice || !description || !category || !image || image.length === 0 || !expiryDate) {
      return res.status(400).json({ success: false, message: "All fields including images and expiry date are required" });
    }
    const product = new Product({
      name, price, offerPrice, description, category, image, expiryDate,
      sellerId: req.user?._id // if using seller authentication
    });
    const savedProduct = await product.save();
    return res.status(201).json({ success: true, product: savedProduct, message: "Product added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error while adding product" });
  }
};

// Fetch products expiring in next 7 days
export const getExpiringProducts = async (req, res) => {
  try {
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);
    const filter = req.user?.role === 'seller'
      ? { sellerId: req.user._id, expiryDate: { $gte: now, $lte: nextWeek } }
      : { expiryDate: { $gte: now, $lte: nextWeek } };
    const products = await Product.find(filter).sort({ expiryDate: 1 });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Mark expired products
export const markExpiredProducts = async (req, res) => {
  try {
    const today = new Date();
    const expiredProducts = await Product.updateMany(
      { expiryDate: { $lte: today }, inStock: true },
      { $set: { inStock: false } }
    );
    res.status(200).json({ success: true, result: expiredProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error while fetching products" });
  }
};
