import { Router } from "express";
import { getMe } from "../utils/getMe.js";
import { EditItem } from "../controllers/EditItem.js";

const EditItemRoute = new Router();
EditItemRoute.post("/edit_item", getMe, EditItem);

export { EditItemRoute };