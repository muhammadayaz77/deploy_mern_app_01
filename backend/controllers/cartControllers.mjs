// import { Cart } from "../models/cartModel.mjs";
import productModel from "../models/productModel.mjs";
import userModel from "../models/userModel.mjs";

export const addToCart = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!req.params.id) {
      return res.json({
        success: false,
        message: "Product ID is required",
      });
    }
    const isExistProduct = await productModel.findById({ _id : productId });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    const user = await userModel.findById({_id : req.user._id});
    const isProductInCart = user.cart.some(
      (cartItem) => cartItem.toString() === productId
    );

    if (isProductInCart) {
      return res.status(401).json({
        message : "Product is already in the cart!",
        success : false
      });
    }
    user.cart.push(productId);
    user.save();
    return res.status(200).json({
      message : 'Product added to Cart',
      success : true,
      product : user
    })

    // const addProduct = await Cart.create({
    //   userId,
    //   products: [{ productId: req.body.productId }],
    //   quantity: req.body.quantity || 1,
    // });
    // return res.json({
    //   success: true,
    //   message: "Product added to cart",
    //   data: addProduct,
    // });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
export const cartData = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in req.user._id
    console.log(userId);
    const user = await userModel.findById({_id : userId});
    if(!user){
      return res.status(400).json({
        message : 'user not found',
        success : false
      })
    }
    // return res.status(200).json({
    //   cart : user.cart,
    //   message : "All Cart Data",
    //   success : true
    // })
    
    const cart = await userModel
    .findById(userId)
    .populate({
      path: "cart",
      options: { strictPopulate: false }, // Ignore missing references
    });
    res.json(cart)
    // Fetch the cart for the specific user and populate product details
    // const cart = await Cart.findOne({ userId })
    //   .populate("products.productId", "name price") // Populate product details (name, price, description)
    //   .exec();
      
    // // If no cart found for the user
    // if (!cart) {
    //   return res.json({
    //     success: false,
    //     message: "No cart found for this user",
    //   });
    // }

    // return res.json({
    //   success: true,
    //   message: "Cart products fetched successfully",
    //   data: cart.products, // Send only the products array
    // });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};