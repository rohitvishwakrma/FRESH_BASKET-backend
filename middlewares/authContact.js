// middleware/authContact.js
import jwt from "jsonwebtoken";

const authContact = (req, res, next) => {
  const { ContactToken } = req.cookies; // Ensure frontend sends correct cookie name

  if (!ContactToken) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  try {
    const decoded = jwt.verify(ContactToken, process.env.JWT_SECRET);

    if (decoded.email === process.env.CONTACT_EMAIL) {
      return next();
    } else {
      return res.status(403).json({ message: "Forbidden", success: false });
    }
  } catch (error) {
    console.error("Error in authContact middleware:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

export default authContact;
