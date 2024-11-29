import mongoose from "mongoose";


let productSchema = new mongoose.Schema({
  
  name : String,
  image : Buffer,
  price : Number,
  discount : {
    type : Number,
    default : 0,
  },
  bgcolor : String,
  panelcolor : String,
  textcolor : String,
})

let productModel = mongoose.model('product',productSchema);

export default productModel;