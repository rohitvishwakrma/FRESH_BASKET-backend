// Export getExpiringProducts for use in product.routes.js
import Product from '../models/product.model.js';

export async function getExpiringProducts(req, res) {
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
    res.status(500).json({ success: false, message: 'Server error' });
  }
}
import cron from "node-cron";
import User from "../models/user.model.js"; // Seller model

export const startExpiryNotificationJob = () => {
  // Run every day at 9 AM
  cron.schedule("0 9 * * *", async () => {
    const today = new Date();

    const expiredProducts = await Product.find({
      expiryDate: { $lte: today },
      inStock: true,
    });

    for (const product of expiredProducts) {
      // Mark as out of stock
      product.inStock = false;
      await product.save();

      // Notify seller
      const seller = await User.findById(product.sellerId);
      if (seller) {
        console.log(`Notify seller ${seller.name}: Product ${product.name} has expired.`);
        // Optional: send email or push notification here
      }
    }
  });
};

// Removed duplicate getExpiringProducts export
