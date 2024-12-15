import express from 'express'
import cors from 'cors'
import connectDB from './config/db.mjs';
import dotenv from 'dotenv'
import Stripe from 'stripe';
// router imports
import userRouter from './routes/userRouter.mjs'
import productRouter from './routes/productRouter.mjs'
import authRouter from './routes/authRouter.mjs'
import cartRouter from './routes/cartRouter.mjs'
dotenv.config();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51QVmyJGO9zJL4clfK58gcpU9wmCgbtWI2Po8Z0rYLP8N2Cu8l3VV9ozJMBkNevYfljvf8YOqGJBOvpgPuq3f4RGi00IFeOgWia');

let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB();
app.use('/users',userRouter )
app.use('/products',productRouter)
app.use('/auth',authRouter)
app.use('/cart',cartRouter)
app.get('/ping',(req,res)=>{
  res.send('pong');
})

app.listen(PORT,()=>{
  // https://deploy-mern-app-01-ecommerce-backend.vercel.app/ping
  console.log(`http://localhost:${PORT}`);
})
