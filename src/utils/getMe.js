import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.secret;

export const getMe = async (req, res, next) => {
    const token = req.headers.auth;
    const { id } = jwt.verify(token, SECRET);
    const admin = await Admin.findOne({ _id: id });
    if (!admin) {
        return res.status(404).json({ success: false })
    }
    if (token !== admin.token) {
        return res.status(404).json({ success: false })
    }
    next();

}