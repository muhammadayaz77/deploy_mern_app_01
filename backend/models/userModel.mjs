import mongoose from "mongoose";


let userSchema = new mongoose.Schema({
  fullname : String,
  email : {
    type : String,
    require : true,
    unique : true
  },
  password : String,
  cart : {
    type : Array,
    default : []
  },
  isadmin : Boolean,
  orders : {
    type : Array,
    default : [],
  },
  contact : Number,
  picture : String,
})

let userModel = mongoose.model('user',userSchema);

export default userModel;