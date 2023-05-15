import mongoose from "mongoose";

const Admin = new mongoose.Schema(
  {
    user: {
      type: String,
      require: true,
    },
    passwordHash: {
      type: String,
      require: true,
    },
    token: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Admin", Admin);
