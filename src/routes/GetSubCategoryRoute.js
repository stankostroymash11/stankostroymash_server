import { Router } from "express";
import { GetSubCategory } from "../controllers/GetSubCategory.js";

const GetSubCategoryRoute = new Router();
GetSubCategoryRoute.get("/getSubCategory", GetSubCategory);

export { GetSubCategoryRoute };
