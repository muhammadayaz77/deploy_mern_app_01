import mongoose from "mongoose";


let postSchema = new mongoose.Schema({
  
  name : String,
  image : String,
  price : Number,
  discount : {
    type : Number,
    default : 0,
  },
  bgcolor : String,
  panelcolor : String,
  textcolor : String,
})

let postModel = mongoose.model('post',postSchema);

export default postModel;