import express from "express";
import { addToCart, cartData } from "../controllers/cartControllers.mjs";
import isUserLogin from '../middleware/isUserLogin.mjs'
const routes = express.Router();

routes.post("/addToCart/:id",isUserLogin, addToCart);
routes.get("/carts", isUserLogin, cartData);

export default routes;