import React, { useState } from 'react'

function Modal({sendToModal,toModal}) {
  let handleSubmit = () => {
  }
  let handleInputChange= (e) => {
    console.log(toModal)
    let {name,value} = e.target;
    sendToModal({
      ...toModal,
      [name] : value
    })
  }
  let handleImageChange = () => {}
  let [loading,setLoading] = useState(false)

  return (<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
      <div className="modal-action">
        <div>
        <div className=" bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
        <form  method="dialog" onSubmit={handleSubmit}>
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
                  name="name"
                  value={toModal.name}
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
                  name="price"
                  value={toModal.price}
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
                  name="discount"
                  value={toModal.discount}
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
                  name="bgcolor"
                  value={toModal.bgcolor}
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
                  name="panelcolor"
                  value={toModal.panelcolor}
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
                  name="textcolor"
                  value={toModal.textcolor}
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
            className={`btn w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 ${loading && 'cursor-not-allowed'}`}
          >
            {
              loading ? <span className="loading loading-ring loading-md"></span>
              :
            "Update Product"
            }
          </button>
          <button className="btn">Close</button>
        </form>
      </div>
        </div>
      </div>
    </div>
  </dialog>
  )
}

export default Modal