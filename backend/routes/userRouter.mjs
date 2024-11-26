import express from 'express'
import { login, register } from '../controllers/authControllers.mjs';
import isUserLogin from '../middleware/isUserLogin.mjs'
let router = express.Router();

router.post("/register",register)
router.post("/login",login)
export default router