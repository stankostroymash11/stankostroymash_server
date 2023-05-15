import { Router } from "express";
import { Search } from "../controllers/Search.js";

const SearchRoute = new Router();
SearchRoute.get("/search", Search);

export { SearchRoute };
