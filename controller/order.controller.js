import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

// Place order COD: /api/order/place
// export const placeOrderCOD = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { items, address } = req.body;
//     if (!address || !items || items.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "Invalid order details", success: false });
//     }
//     // calculate amount using items;
//     let amount = await items.reduce(async (acc, item) => {
//       const product = await Product.findById(item.product);
//       return (await acc) + product.offerPrice * item.quantity;
//     }, 0);

//     // Add tex charfe 2%
//     amount += Math.floor((amount * 2) / 100);
//     await Order.create({
//       userId,
//       items,
//       address,
//       amount,
//       paymentType: "COD",
//       isPaid: false,
//     });
//     res
//       .status(201)
//       .json({ message: "Order placed successfully", success: true });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const placeOrderCOD = async (req, res) => {
  try {
    const userId = req.user;

    const { items, address } = req.body;
    if (!address || !items || items.length === 0) {
      return res.status(400).json({ message: "Invalid order details", success: false });
    }
    const addressId = typeof address === 'object' && address !== null ? address._id : address;
    if (!mongoose.Types.ObjectId.isValid(addressId)) {
      return res.status(400).json({ message: "Invalid address provided", success: false });
    }

    // --- Performance Improvement: Fetch all products in a single query ---

    // 1. Get all product IDs from the cart and validate their format.
    const productIds = [];
    for (const item of items) {
        if (!item.product || !mongoose.Types.ObjectId.isValid(item.product)) {
            return res.status(400).json({ message: `Invalid product ID '${item.product}' in order items.`, success: false });
        }
        productIds.push(item.product);
    }

    // 2. Fetch all unique products from the database at once.
    const uniqueProductIds = [...new Set(productIds)];
    const products = await Product.find({ '_id': { $in: uniqueProductIds } });

    // 3. Create a map for quick access to product details by ID.
    const productMap = new Map(products.map(p => [p._id.toString(), p]));

    // 4. Check if any product was not found.
    if (productMap.size !== uniqueProductIds.length) {
      const notFoundIds = uniqueProductIds.filter(id => !productMap.has(id));
      return res.status(404).json({ message: `Products not found: ${notFoundIds.join(', ')}`, success: false });
    }

    // --- Calculate total amount and prepare order items ---
    let amount = 0;
    const orderItems = items.map(item => {
      const product = productMap.get(item.product);
      amount += (product.offerPrice ?? product.price) * item.quantity;

      // The Order schema requires an expiryDate. This was missing.
      // TODO: Review this logic. Setting a default of 3 days for now.
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 3);

      return { product: item.product, quantity: item.quantity, expiryDate };
    });

    // Add tax charge 2%
    amount += Math.floor((amount * 2) / 100);

    await Order.create({
      userId,
      items: orderItems,
      address: addressId,
      amount,
      paymentType: "COD",
      isPaid: false,
    });

    res.status(201).json({ message: "Order placed successfully", success: true });
  } catch (error) {
    console.error("Error placing COD order:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// oredr details for individual user :/api/order/user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user;
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all orders for admin :/api/order/all
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
