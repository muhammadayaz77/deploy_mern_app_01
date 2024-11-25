import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs';
import dotenv from 'dotenv'
// router imports
import ownerRouter from './routes/ownerRouter.mjs'
import userRouter from './routes/userRouter.mjs'
import productRouter from './routes/productRouter.mjs'
dotenv.config();
let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB();

app.use('/owners',ownerRouter)
app.use('/users',userRouter )
app.use('/products',productRouter)

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
