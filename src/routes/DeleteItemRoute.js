import { Router } from "express";
import { getMe } from "../utils/getMe.js";
import { DeleteItem } from "../controllers/DeleteItem.js";

const DeleteItemRoute = new Router();
DeleteItemRoute.post("/delete_item", getMe, DeleteItem);

export { DeleteItemRoute };
