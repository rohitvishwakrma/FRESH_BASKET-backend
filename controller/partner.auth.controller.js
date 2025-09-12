import bcrypt from "bcryptjs";
import Partner from "../models/Partner.model.js";
// Dummy implementations for password set and login
export const setPartnerPassword = (req, res) => {
		const { id, password } = req.body;
		if (!id || !password) {
			return res.status(400).json({ success: false, message: "Partner ID and password required." });
		}
		import('bcryptjs').then(bcrypt => {
			bcrypt.hash(password, 10, async (err, hash) => {
				if (err) {
					return res.status(500).json({ success: false, message: "Error hashing password." });
				}
				try {
					const partner = await Partner.findById(id);
					if (!partner) {
						return res.status(404).json({ success: false, message: "Partner not found." });
					}
					partner.password = hash;
					await partner.save();
					return res.json({ success: true, message: "Password set successfully." });
				} catch (error) {
					return res.status(500).json({ success: false, message: "Server error." });
				}
			});
		});
};

export const partnerLogin = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ success: false, message: "Email and password required." });
	}
	try {
		const partner = await Partner.findOne({ email });
		if (!partner) {
			return res.status(404).json({ success: false, message: "Partner not found." });
		}
		if (partner.status !== "approved") {
			return res.status(403).json({ success: false, message: "Partner not approved by admin." });
		}
		if (!partner.password) {
			return res.status(400).json({ success: false, message: "No password set. Please set your password." });
		}
		const isMatch = await bcrypt.compare(password, partner.password);
		if (!isMatch) {
			return res.status(401).json({ success: false, message: "Invalid password." });
		}
		// Optionally, generate JWT here
		return res.json({ success: true, message: "Login successful! You are now a seller." });
	} catch (err) {
		return res.status(500).json({ success: false, message: "Server error." });
	}
};
