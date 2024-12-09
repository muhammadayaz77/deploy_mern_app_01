import { Cart } from "../models/cartModel.mjs";
import productModel from "../models/productModel.mjs";

export const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);
    if (!req.body.productId) {
      return res.json({
        success: false,
        message: "Product ID is required",
      });
    }
    const isExistProduct = await productModel.findById({ _id: req.body.productId });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    const addProduct = await Cart.create({
      userId,
      products: [{ productId: req.body.productId }],
      quantity: req.body.quantity || 1,
    });
    return res.json({
      success: true,
      message: "Product added to cart",
      data: addProduct,
    });
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

    // Fetch the cart for the specific user and populate product details
    const cart = await Cart.findOne({ userId })
      .populate("products.productId", "name price") // Populate product details (name, price, description)
      .exec();
      
    // If no cart found for the user
    if (!cart) {
      return res.json({
        success: false,
        message: "No cart found for this user",
      });
    }

    return res.json({
      success: true,
      message: "Cart products fetched successfully",
      data: cart.products, // Send only the products array
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};