import { Router } from "express";
import { GetMeAuth } from "../controllers/GetMeAuth.js";

const GetMeAuthRoute = new Router();
GetMeAuthRoute.post("/get-me", GetMeAuth);

export { GetMeAuthRoute };
