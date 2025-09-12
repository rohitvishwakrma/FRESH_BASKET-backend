
import Razorpay from "razorpay";
import crypto from "crypto";

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");
    if (razorpay_signature === expectedSign) {
      return res.json({ success: true, message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;
// console.log("Using Razorpay Key:", RAZORPAY_KEY_ID);
// console.log("Using Razorpay Secret:", RAZORPAY_KEY_SECRET);
console.log("rozarpay Connected")
const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET
});

export const renderProductPage = async (req, res) => {
  try {
    res.render('product');
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrder = async (req, res) => {
  try {
    const amount = req.body.amount * 100;
    const options = {
      amount: amount,
      currency: 'INR',
      receipt: 'razorUser@gmail.com'
    };

    try {
      const order = await razorpayInstance.orders.create(options);
      res.status(200).send({
        success: true,
        msg: 'Order Created',
        order_id: order.id,
        amount: amount,
        key_id: RAZORPAY_KEY_ID,
        product_name: req.body.name,
        description: req.body.description,
        contact: "6263738729",
        name: "Rohit Kumar",
        email: "rohitvihswakarma02198@gmail.com"
      });
    } catch (err) {
      console.error("Razorpay order creation error with key:", err);
      res.status(400).send({ success: false, msg: 'Razorpay error: ' + (err?.error?.description || 'Something went wrong!') });
    }
  } catch (error) {
    console.log(error.message);
  }
};
