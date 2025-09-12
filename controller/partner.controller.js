import Partner from '../models/Partner.model.js';

// Create new partner application
import bcrypt from "bcryptjs";
export const createPartner = async (req, res) => {
  try {
    const {
      businessName,
      contactPerson,
      email,
      phone,
      message,
      password,
      document
    } = req.body;
    let hashedPassword = "";
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const partner = new Partner({
      businessName,
      contactPerson,
      email,
      phone,
      message,
      password: hashedPassword,
      document,
      status: 'pending'
    });
    await partner.save();
    res.status(201).json({ success: true, partner });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to apply as partner.' });
  }
};

// Get all partners
// Removed duplicate getAllPartners function to fix redeclaration error.

// Get pending partners
export const getPendingPartners = async (req, res) => {
  try {
    const partners = await Partner.find({ status: 'pending' });
    res.status(200).json(partners);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch pending partners.' });
  }
};

// Get approved partners
export const getApprovedPartners = async (req, res) => {
  try {
    const partners = await Partner.find({ status: 'approved' });
    res.status(200).json(partners);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch approved partners.' });
  }
};

// Update partner status (approve/reject)
export const updatePartnerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!partner) return res.status(404).json({ message: "Partner not found" });
    res.status(200).json({ message: `Partner ${status}`, partner });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update partner status.' });
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