import userModel from "../models/userModel.mjs";


export const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const userExists = await userModel.findById({ _id: userId });
    if (!userExists) {
      return res.json({
        isadmin : false,
        success: false,
        message: "User not found",
      });
    }
    if (!userExists.isadmin) {
      return res.json({
        isadmin : false,
        success: false,
        message: "Unauthorized access",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};