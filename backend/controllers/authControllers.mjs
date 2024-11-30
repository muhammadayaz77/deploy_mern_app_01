
import userModel from '../models/userModel.mjs';
import bcrypt from 'bcrypt'
import { generateJWT } from '../utils/generateJWT.mjs';

export let login = async(req,res) => {
    try {
      let {email,password} = req.body;
      let existedUser = await userModel.findOne({email});
      if(!existedUser) return res.status(401).send("You don't have an account")
      bcrypt.compare(password,existedUser.password,(err,result)=>{
      if(result == true){
        let token = generateJWT(existedUser)
        return res.send({token : token});
      }
      else if(result == false){
        res.status(400).send("Email or Password is incorrect");
      }
      })
    } catch (error) {
      res.send(error.message);
    }
  }
export let register = async(req,res) => {
    try {
      let {fullname,email,password} = req.body;
      let existedUser = await userModel.findOne({email});
      if(existedUser) return res.status(401).send("You already have an account")
      let hashedPassword = await bcrypt.hash(password,10);
      let user = await userModel.create({
        fullname,
        email,
        password : hashedPassword
      })
      let token = generateJWT(user)
      res.send(token);
    } catch (error) {
      res.send(error.message);
    }
  }