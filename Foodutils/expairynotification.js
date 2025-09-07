import cron from "node-cron";
import Product from "../models/product.model.js";
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

export const getExpiringProducts = async (req, res) => {
  try {
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);

    // For sellers, filter by sellerId; for users, show all expiring products
    const filter = req.user?.role === 'seller'
      ? { sellerId: req.user._id, expiryDate: { $gte: now, $lte: nextWeek } }
      : { expiryDate: { $gte: now, $lte: nextWeek } };

    const products = await Product.find(filter);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
