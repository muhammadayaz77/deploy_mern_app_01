import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs';
import dotenv from 'dotenv'
// router imports
import userRouter from './routes/userRouter.mjs'
import productRouter from './routes/productRouter.mjs'
import authRouter from './routes/authRouter.mjs'
import cartRouter from './routes/cartRouter.mjs'
dotenv.config();
let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB();
app.use('/users',userRouter )
app.use('/products',productRouter)
app.use('/auth',authRouter)
app.use('/cart',cartRouter)

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})
