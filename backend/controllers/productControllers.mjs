
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

export const deleteProduct = async(req,res) => {
  try {
    let productID = req.params.id;
  if(!productID) return res.status(401).json({message : "Product Not found!",success : false})
  let deleteItem = await productModel.findByIdAndDelete(productID);
  return res.status(200).json({
    message : 'Product deleted',
    product : deleteItem,
    success : true,
  })
  } catch (error) {
    res.status(404).json({
      message : error.message,
      success : false,
    })
  }
}