import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import { GetItemRoute } from "./src/routes/GetItemRoute.js";
import { AuthRoute } from "./src/routes/AuthRoute.js";
import { GetSubCategoryRoute } from "./src/routes/GetSubCategoryRoute.js";
import { GetCategoryRoute } from "./src/routes/GetCategoryRoute.js";
import { SearchRoute } from "./src/routes/SearchRoute.js";
import { DeleteImageRoute } from "./src/routes/DeleteImageRoute.js";
import { GetMeAuthRoute } from "./src/routes/GetMeAuthRoute.js";
import { ChangePasswordRoute } from "./src/routes/ChangePasswordRoute.js";
import { getMe } from "./src/utils/getMe.js";
import { AddItemRoute } from "./src/routes/AddItemRoute.js";
import { AddItemDuplicatesRoute } from "./src/routes/AddItemDuplicatesRoute.js";
import { DeleteItemRoute } from "./src/routes/DeleteItemRoute.js";
import { GetDuplicatesRoute } from "./src/routes/GetDuplicatesRoute.js";
import { GetItemDuplicatesRoute } from "./src/routes/GetItemDuplicatesRoute.js";
import { EditItemRoute } from "./src/routes/EditItemRoute.js";

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    const fileNameArray = file.originalname.split(".");
    const d = new Date();
    const newFileName = `${d.getTime()}.${
      fileNameArray[fileNameArray.length - 1]
    }`;
    file.originalname = newFileName;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

dotenv.config();

const PORT = process.env.PORT || 4444;
const PATH = process.env.MONGODB_PATH;

mongoose
  .connect(PATH)
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error ", err));

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.status(200).send("server run!!!");
});

app.post("/upload", getMe, upload.single("image"), (req, res) => {
  res.json({ url: `/uploads/${req.file.originalname}` });
});

app.use("/api", GetItemRoute);
app.use("/api", GetItemDuplicatesRoute);
app.use("/api", SearchRoute);

app.use("/api", AuthRoute);
app.use("/api", GetMeAuthRoute);
app.use("/api", ChangePasswordRoute);

app.use("/api", EditItemRoute);
app.use("/api", DeleteItemRoute);
app.use("/api", AddItemRoute);
app.use("/api", AddItemDuplicatesRoute);
app.use("/api", DeleteImageRoute);
app.use("/api", GetSubCategoryRoute);
app.use("/api", GetCategoryRoute);
app.use("/api", GetDuplicatesRoute);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port:${PORT}`);
});
