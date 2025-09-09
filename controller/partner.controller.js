import Partner from "../models/Partner.model.js";
import Seller from "../models/user.model.js"; // Assuming seller is a user with a role

// Create partner application
export const createPartner = async (req, res) => {
  try {
    const partner = new Partner({
      ...req.body,
      document: req.file ? req.file.path : undefined,
    });
    await partner.save();
    res.status(201).json({ message: "Partner application submitted.", partner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all partner applications (for seller/admin)
export const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve partner application (seller/admin only)
export const approvePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    if (!partner) return res.status(404).json({ error: "Partner not found" });
    res.json({ message: "Partner approved.", partner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reject partner application (seller/admin only)
export const rejectPartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );
    if (!partner) return res.status(404).json({ error: "Partner not found" });
    res.json({ message: "Partner rejected.", partner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single partner application
export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ error: "Partner not found" });
    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
