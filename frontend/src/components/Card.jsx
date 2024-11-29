import React from "react";
import { Buffer } from "buffer";

function Card({ item }) {
  // Check if the image data exists and can be processed
  const base64Image =
    item.image && item.image.data
      ? Buffer.from(item.image.data).toString("base64")
      : null;

  return (
    <div className=" md:col-span-4 col-span-6 lg:col-span-3 border-2 border-black">
      {/* Image Section */}
      <div
        style={{ backgroundColor: item.bgcolor || "#f0f0f0" }} // Dynamic background color
        className="h-[250px] p-10"
      >
        {base64Image ? (
          <img
            src={`data:image/jpeg;base64,${base64Image}`}
            className="h-full w-full object-cover"
            alt="Product"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Panel Section */}
      <div
        style={{ backgroundColor: item.panelcolor || "white" }} // Dynamic panel color
        className={`h-[80px] w-full flex justify-between items-center px-5 z-50   `}
      >
        <div
          style={{ color: item.textcolor || "#000000" }} // Dynamic text color
          className="text-sm font-semibold"
        >
          <p>{item.name || "Unnamed Product"}</p>
          <p>$ {item.price || "N/A"}</p>
        </div>
        <button className="w-9 h-9 flex justify-center items-center bg-white rounded-full">
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
