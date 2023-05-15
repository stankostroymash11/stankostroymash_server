import { Router } from "express";
import { getMe } from "../utils/getMe.js";
import { AddItem } from "../controllers/AddItem.js";

const AddItemRoute = new Router();
AddItemRoute.post("/add_item", getMe, AddItem);

export { AddItemRoute };