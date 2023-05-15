import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";

export const firstIteration = async (req, res, next) => {
    const admin = await Admin.find();
    if (!admin.length) {
        const { password, email } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new Admin({
            user: email,
            passwordHash: hash,
        });
        await doc.save();
        return next();
    }
    else {
        return next();
    }
}