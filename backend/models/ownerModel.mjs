import mongoose from "mongoose";


let ownerSchema = new mongoose.Schema({
  fullname : String,
  email : {
    type : String,
    require : true,
    unique : true
  },
  password : String,
  isadmin : Boolean,
  products : {
    type : Array,
    default : [],
  },
  gstin : String,
  picture : String,
})

let ownerModel = mongoose.model('owner',ownerSchema);

export default ownerModel;