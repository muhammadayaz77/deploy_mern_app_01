
import productModel from '../models/productModel.mjs';
export const createProduct = async(req,res)=>{
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
    //  image : req.file.buffer,
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
 
 }