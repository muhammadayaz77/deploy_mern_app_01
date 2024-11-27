import express from 'express'
import { login, register } from '../controllers/authControllers.mjs';
import isUserLogin from '../middleware/isUserLogin.mjs'
import { home } from '../controllers/userController.mjs';
let router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/home",isUserLogin,home)
export default router