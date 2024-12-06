import React, { useState } from "react";
import { Buffer } from "buffer";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Modal from "./Modal";

function Cards({ item, fetchedData }) {
  const [toModal, sendToModal] = useState(null); // Modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Delete product handler
  const handleDelete = async (id) => {
    let token = localStorage.getItem("token");
    await axios
      .delete(`http://localhost:3000/products/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        fetchedData(); // Refresh the list after deletion
      })
      .catch((err) => console.log(err));
  };

  // Handle "Edit" button click
  const handleEdit = (getItem) => {
    sendToModal(getItem); // Set modal data
    setIsModalOpen(true); // Open modal
  };

  // Handle product update
  const handleUpdate = async (updatedItem) => {
    let token = localStorage.getItem("token");
    await axios
      .put(
        `http://localhost:3000/products/update-product/${updatedItem._id}`,
        updatedItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setIsModalOpen(false); // Close modal after update
        fetchedData(); // Refresh data after update
      })
      .catch((err) => console.log(err));
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
            className="text-red-600"
          />
          <FaEdit onClick={() => handleEdit(item)} className="text-blue-600" />
        </div>

        {base64Image ? (
          <img
            src={`data:image/jpeg;base64,${base64Image}`}
            className="h-full w-full object-cover"
            alt="Product"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No
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
    </div>
  );
}

export default Cards;
