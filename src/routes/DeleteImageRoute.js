import { Router } from "express";
import { DeleteImage } from "../controllers/DeleteImage.js";
import { getMe } from "../utils/getMe.js";

const DeleteImageRoute = new Router();
DeleteImageRoute.post("/delete_image", getMe, DeleteImage);

export { DeleteImageRoute };
