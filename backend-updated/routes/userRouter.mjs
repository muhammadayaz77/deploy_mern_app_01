import express from 'express'
import { login, register } from '../controllers/authControllers.mjs';
import isUserLogin from '../middleware/isUserLogin.mjs'
import { home } from '../controllers/userController.mjs';
import productModel from '../models/productModel.mjs';
let router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/home",isUserLogin,home)
router.get("/shop", isUserLogin, async (req, res) => {
  try {
    const product = await productModel.find();
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;