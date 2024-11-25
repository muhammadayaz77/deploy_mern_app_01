import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();


export let generateJWT = (user) => {
  return jwt.sign({email : user.email,id : user._id},process.env.SECRET_KEY)
}