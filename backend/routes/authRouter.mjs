import express from 'express'
import isLoginUser from '../middleware/isUserLogin.mjs'
import { verifyAdmin } from '../middleware/verifyAdmin.mjs';
import userModel from '../models/userModel.mjs';

let router = express.Router();

router.get('/verify-admin', isLoginUser,verifyAdmin, async(req, res) => {
  try {
    const user = req.user._id; // Decoded from the token
    console.log(user);
    let existedUser = await userModel.findById({_id : user});
    console.log(existedUser);
    if (existedUser.isadmin) {
      res.status(200).json({ isadmin : true, message : 'You can Access' });
    } else if(!existedUser.isadmin) {
      res.status(403).json({ isadmin: false, message: 'Access denied' });
    }
  } catch (error) {
    console.log(error)
  }

});
export default router;