import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";

dotenv.config();
const SECRET = process.env.secret;

export const ChangePassword = async (req, res) => {
    try {
        const { oldPassword, password, token } = req.body;
        if (!oldPassword || !password || !token) {
            return res.status(403).json({ success: false })
        }
        const decoded = jwt.verify(token, SECRET);

        const admin = await Admin.findOne({ _id: decoded.id });
        if (!admin) {
            return res.status(404).json({ success: false })
        }
        if (admin._doc.token !== token) {
            return res.status(404).json({ success: false })
        }
        const isValidPassword = await bcrypt.compare(
            req.body.oldPassword,
            admin._doc.passwordHash
        );
        if (!isValidPassword) {
            return res.status(404).json({ success: false })
        }
        const salt = await bcrypt.genSalt(10);
        const newHash = await bcrypt.hash(password, salt);

        const newToken = jwt.sign({ id: admin._id, data: [admin.user, newHash] }, SECRET);

        await Admin.updateOne({ _id: admin._id }, { token: newToken, passwordHash: newHash })
        res.status(200).json({ success: true, token: newToken })
    } catch (e) {
        res.status(400).json({ message: e });
    }
};
