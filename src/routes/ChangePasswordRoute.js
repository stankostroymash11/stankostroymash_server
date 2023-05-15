import { Router } from "express";
import { ChangePassword } from "../controllers/ChangePassword.js";

const ChangePasswordRoute = new Router();
ChangePasswordRoute.post("/change-pass", ChangePassword);

export { ChangePasswordRoute };
