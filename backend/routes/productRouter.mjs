import express from 'express'
import upload from '../config/multer-config.mjs';
import productModel from '../models/productModel.mjs';

let router = express.Router();

router.post("/create",upload.single('image'),async(req,res)=>{
 try {
  let {
    name,
    price ,
    discount ,
    bgcolor ,
    panelcolor ,
    textcolor ,
  } = req.body;
  let product = await productModel.create({
    image : req.file.buffer,
    name,
    price ,
    discount ,
    bgcolor ,
    panelcolor ,
    textcolor ,
  })
  res.status(200).send(product);
 } catch (error) {
  res.json({error : error.message});
 }

})
export default router