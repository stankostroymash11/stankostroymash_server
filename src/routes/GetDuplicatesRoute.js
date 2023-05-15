import { Router } from "express";
import { GetDuplicates } from "../controllers/GetDuplicates.js";

const GetDuplicatesRoute = new Router();
GetDuplicatesRoute.get("/getDuplicates", GetDuplicates);

export { GetDuplicatesRoute };
