
import React, { useState } from "react";
import { Buffer } from "buffer";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Modal from "./Modal";

function Cards({ item, data, setData }) {
  const [toModal, sendToModal] = useState(null); // Modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [loading,setLoading] = useState(true);

  // Delete product handler
  const handleDelete = async (id) => {
    const previousData = [...data]; // Backup the current state
    setData((prevData) => prevData.filter((product) => product._id !== id)); // Remove immediately
  
    try {
      let token = localStorage.getItem("token");
      await axios.delete(
        `https://deploy-mern-app-01-ecommerce-backend.vercel.app/products/delete-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.toastify("Data Deleted Successfully","success");
    } catch (err) {
      setData(previousData); // Revert state on failure
      window.toastify("Something went wrong while deleting the product","error")
    }
  };
  
  // Handle "Edit" button click
  const handleEdit = (getItem) => {
    sendToModal(getItem); // Set modal data
    setIsModalOpen(true); // Open modal
  };

  // Handle product update
  const handleUpdate = async (updatedItem) => {
    console.log(updatedItem);

    let token = localStorage.getItem("token");
    try {
      await axios.put(
        `https://deploy-mern-app-01-ecommerce-backend.vercel.app/products/update-product/${updatedItem._id}`,
        updatedItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update the product in state
      setData((prevData) =>
        prevData.map((product) =>
          product._id === updatedItem._id ? updatedItem : product
        )
      );
      setIsModalOpen(false); // Close modal after update
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const base64Image =
    item.image && item.image.data
      ? Buffer.from(item.image.data).toString("base64")
      : null;

  return (
    <div className="md:col-span-4 col-span-6 lg:col-span-3">
      {/* Card UI */}
      <div
        style={{ backgroundColor: item.bgcolor || "#f0f0f0" }}
        className="h-[250px] p-10"
      >
        <div className="flex justify-between my-1 text-xl">
          <MdDeleteForever
            onClick={() => handleDelete(item._id)}
            className="text-red-600 cursor-pointer"
          />
          <FaEdit onClick={() => handleEdit(item)} className="text-blue-600 cursor-pointer" />
        </div>

        {base64Image ? (
          <img
            src={`data:image/jpeg;base64,${base64Image}`}
            className="h-full w-full object-cover"
            alt="Product"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Panel Section */}
      <div
        style={{ backgroundColor: item.panelcolor || "white" }}
        className="h-[80px] w-full flex justify-between items-center px-5"
      >
        <div
          style={{ color: item.textcolor || "#000000" }}
          className="text-sm font-semibold"
        >
          <p>{item.name || "Unnamed Product"}</p>
          <p>$ {item.price || "N/A"}</p>
        </div>
        <button className="w-9 h-9 flex justify-center items-center bg-white rounded-full">
          +
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          toModal={toModal} // Pass selected product to the modal
          sendToModal={sendToModal} // Function to update modal data
          onClose={() => setIsModalOpen(false)} // Close modal
          onUpdate={handleUpdate} // Handle update when submitted
        />
      )}

      {/* loading section */}
      

    </div>
  );
}

export default Cards;
