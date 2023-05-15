import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();
const SECRET = process.env.secret;

export const GetMeAuth = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token) {
      return res.status(403).json({ success: false });
    }
    const decoded = jwt.verify(token, SECRET);
    const admin = await Admin.findOne({ _id: decoded.id });
    if (!admin) {
      return res.status(404).json({ success: false });
    }
    if (admin._doc.token !== token) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
