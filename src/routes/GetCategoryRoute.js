import { Router } from "express";
import { GetCategory } from "../controllers/GetCategory.js";

const GetCategoryRoute = new Router();
GetCategoryRoute.get("/getCategory", GetCategory);

export { GetCategoryRoute };
