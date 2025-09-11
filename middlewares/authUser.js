// Middleware to allow access for both authenticated users and sellers
// ...existing code...
export const authUserOrSeller = async (req, res, next) => {
  const { token, sellerToken } = req.cookies;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid user token", success: false });
    }
  }
  if (sellerToken) {
    try {
      const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
      req.user = decoded.id;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid seller token", success: false });
    }
  }
  return res.status(401).json({ message: "Unauthorized", success: false });
};
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    console.error("Error in authUser middleware:", error);
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};

export default authUser;
