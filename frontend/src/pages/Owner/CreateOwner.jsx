import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateOwner = () => {
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let { isAdminExist } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    discountPrice: "",
    backgroundColor: "",
    textColor: "",
    panelColor: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      window.toastify("Please upload a valid image file.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    if (!token) {
      window.toastify("No authentication token found.", "error");
      return;
    }

    let { productName, productPrice, discountPrice, backgroundColor, textColor, panelColor } = formData;
    if (!image || !productName || !productPrice || !discountPrice || !backgroundColor || !textColor || !panelColor) {
      window.toastify("Fill all fields", "error");
      return;
    }

    const payload = new FormData();
    payload.append("name", formData.productName);
    payload.append("image", image);
    payload.append("price", formData.productPrice);
    payload.append("discount", formData.discountPrice);
    payload.append("bgcolor", formData.backgroundColor);
    payload.append("panelcolor", formData.panelColor);
    payload.append("textcolor", formData.textColor);

    setLoading(true);
    await axios.post("https://deploy-mern-app-01-ecommerce-backend.vercel.app/products/create", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(res => {
        navigate("/shop");
        window.toastify("Product Added.", "success");
      })
      .catch(err => {
        console.log(err.response ? err.response.data.message : err.message); // Log specific error
        window.toastify("Something went wrong.", "error");
      });
    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Product Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Product Image */}
            <div>
              <label className="block font-medium mb-1">Product Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-700 border rounded-lg p-2"
              />
            </div>

            {/* Product Name */}
            <div>
              <label className="block font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="block w-full border rounded-lg p-2 text-gray-700"
                required
              />
            </div>

            {/* Product Price */}
            <div>
              <label className="block font-medium mb-1">Product Price</label>
              <input
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
                placeholder="Enter product price"
                className="block w-full border rounded-lg p-2 text-gray-700"
                required
              />
            </div>

            {/* Discount Price */}
            <div>
              <label className="block font-medium mb-1">Discount Price</label>
              <input
                type="number"
                name="discountPrice"
                value={formData.discountPrice}
                onChange={handleInputChange}
                placeholder="Enter discount price"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Panel Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Panel Details</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Background Color */}
            <div>
              <label className="block font-medium mb-1">Background Color</label>
              <input
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleInputChange}
                placeholder="e.g., #FFFFFF"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>

            {/* Panel Color */}
            <div>
              <label className="block font-medium mb-1">Panel Color</label>
              <input
                type="text"
                name="panelColor"
                value={formData.panelColor}
                onChange={handleInputChange}
                placeholder="e.g., #F1F1F1"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>

            {/* Text Color */}
            <div>
              <label className="block font-medium mb-1">Text Color</label>
              <input
                type="text"
                name="textColor"
                value={formData.textColor}
                onChange={handleInputChange}
                placeholder="e.g., #000000"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? <span className="loading loading-ring loading-md"></span> : "Create New Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateOwner;
