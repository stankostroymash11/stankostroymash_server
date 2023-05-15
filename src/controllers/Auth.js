import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";

dotenv.config();
const SECRET = process.env.secret;

export const Auth = async (req, res) => {
  try {

    const admin = await Admin.find({ user: req.body.email });
    if (admin[0].token) {
      const { token, user, passwordHash } = admin[0];
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        passwordHash
      );
      if (!isValidPassword) {
        return res.status(404).json({ success: false })
      }
      return res.status(200).json({
        token: token,
        user: user,
      });
    }

    const token = jwt.sign({ id: admin[0]._id, data: [admin[0].user, admin[0].passwordHash] }, SECRET);

    await Admin.updateOne({ _id: admin[0]._id }, { token: token })

    res.status(200).json({
      token: token,
      user: admin[0].user,
    });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
