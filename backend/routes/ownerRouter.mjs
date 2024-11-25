import express from 'express'
import dotenv from 'dotenv'
import ownerModel from '../models/ownerModel.mjs';
dotenv.config();
let router = express.Router();

if(process.env.NODE_ENV == 'development'){
  router.post("/create",async(req,res)=>{
    let owners = await ownerModel.find();
    if(owners.length > 0){
      return res.status(503).send("You don't have permission to create owner");
    }
    let {fullname,email,password} = req.body;
    let createOwner = await ownerModel.create({
      fullname,
      email,
      password,
    })
    res.status(201).send(createOwner);
  })
}
export default router