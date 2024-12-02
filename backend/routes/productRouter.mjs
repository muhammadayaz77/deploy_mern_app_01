import express from 'express'
import upload from '../config/multer-config.mjs';
import { createProduct } from '../controllers/productControllers.mjs';
import isUserLogin from '../middleware/isUserLogin.mjs'
import { verifyAdmin } from '../middleware/verifyAdmin.mjs';

let router = express.Router();

router.post("/create",isUserLogin,verifyAdmin,upload.single('image'),createProduct)
export default router