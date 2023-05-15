import { Router } from "express";
import { getMe } from "../utils/getMe.js";
import { AddItemDuplicates } from "../controllers/AddItemDuplicates.js";

const AddItemDuplicatesRoute = new Router();
AddItemDuplicatesRoute.post("/add_item_duplicates", getMe, AddItemDuplicates);

export { AddItemDuplicatesRoute };