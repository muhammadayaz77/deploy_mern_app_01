import React, { useState } from "react";

function Modal({ toModal, sendToModal, onClose, onUpdate }) {
  const [loading, setLoading] = useState(false);

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    sendToModal({
      ...toModal,
      [name]: value, // Update the specific field in the modal data
    });
  };

  // Handle image change (optional, not implemented)
  const handleImageChange = () => {
    // Logic to handle image change can be added here if needed
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onUpdate(toModal); // Send updated product data back to parent component
  };

  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Product Details */}
          <div className="mb-6">
            <div>
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={toModal?.name || ""}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={toModal?.price || ""}
                onChange={handleInputChange}
                placeholder="Enter price"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
            <div>
              <label>Discount Price</label>
              <input
                type="number"
                name="discount"
                value={toModal?.discount || ""}
                onChange={handleInputChange}
                placeholder="Enter discount price"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
          </div>

          {/* Panel Details */}
          <div className="mb-6">
            <div>
              <label>Background Color</label>
              <input
                type="text"
                name="bgcolor"
                value={toModal?.bgcolor || ""}
                onChange={handleInputChange}
                placeholder="e.g., #FFFFFF"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
            <div>
              <label>Panel Color</label>
              <input
                type="text"
                name="panelcolor"
                value={toModal?.panelcolor || ""}
                onChange={handleInputChange}
                placeholder="e.g., #F1F1F1"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
            <div>
              <label>Text Color</label>
              <input
                type="text"
                name="textcolor"
                value={toModal?.textcolor || ""}
                onChange={handleInputChange}
                placeholder="e.g., #000000"
                className="block w-full border rounded-lg p-2 text-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 ${loading && "cursor-not-allowed"}`}
          >
            {loading ? (
              <span className="loading loading-ring loading-md"></span>
            ) : (
              "Update Product"
            )}
          </button>
        </form>
        <button className="btn mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}

export default Modal;
