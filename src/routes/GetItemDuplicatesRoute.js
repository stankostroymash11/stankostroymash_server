import { Router } from "express";
import { GetItemDuplicates } from "../controllers/GetItemDuplicates.js";

const GetItemDuplicatesRoute = new Router();
GetItemDuplicatesRoute.get("/getItemDuplicates/:id", GetItemDuplicates);

export { GetItemDuplicatesRoute };
