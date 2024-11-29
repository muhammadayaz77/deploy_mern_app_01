import express from 'express'
import { login, register } from '../controllers/authControllers.mjs';
import isUserLogin from '../middleware/isUserLogin.mjs'
import { home } from '../controllers/userController.mjs';
import productModel from '../models/productModel.mjs';
let router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/home",isUserLogin,home)
router.get("/shop",isUserLogin,async(req,res) => {
  let product = await productModel.find();
  res.json({product})
})
export default router