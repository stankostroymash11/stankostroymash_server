import { Router } from "express";
import { Auth } from "../controllers/Auth.js";
import { firstIteration } from "../utils/firstIteration.js";

const AuthRoute = new Router();

AuthRoute.post("/auth", firstIteration, Auth);

export { AuthRoute };
