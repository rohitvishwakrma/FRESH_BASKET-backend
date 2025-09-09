import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  const valid = await admin.comparePassword(password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  // Generate JWT token
  const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, message: 'Login successful.' });
});

// POST /api/admin/register (for initial setup, remove in production)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = await Admin.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Admin already exists.' });
  const bcrypt = await import('bcryptjs');
  const hash = await bcrypt.hash(password, 10);
  const admin = new Admin({ email, password: hash });
  await admin.save();
  res.json({ message: 'Admin registered.' });
});

export default router;
