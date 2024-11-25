import express from 'express'

let router = express.Router();

router.get("/",(req,res)=>{
  res.send("working...")
})
export default router