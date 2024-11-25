import mongoose from "mongoose";

let connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_CONN);
    console.log("mongoDB connected...")
  } catch (error) {
    console.log("ERROR : ",error)
  }
}
export default connectDB