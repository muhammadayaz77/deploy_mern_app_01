import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs';
import dotenv from 'dotenv'
dotenv.config();
let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB();


app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
