import { Router } from "express";
import { GetItem } from "../controllers/GetItem.js";

const GetItemRoute = new Router();
GetItemRoute.get("/getItem/:id", GetItem);

export { GetItemRoute };
