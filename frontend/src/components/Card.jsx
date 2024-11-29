import React from "react";
import { Buffer } from "buffer";

function Card({ item }) {
  console.log(item)
  return (
    <div className="relative md:col-span-4 col-span-6 lg:col-span-3 border-2 border-black">
      {/* Image Section */}
      <div className={`h-[250px] bg-[${item.bgcolor}]`}>
        {/* Display Base64 Image */}
        <img
          src={`data:image/jpeg;base64,${Buffer.from(item.image.data).toString('base64')}`}
          className="h-10 w-10 object-cover"
          alt="Product"
        />
      </div>

      {/* Panel Section */}
      <div
        style={{ backgroundColor: item.panelcolor }}
        className="h-[80px] absolute bottom-0 left-0 w-full flex justify-between items-center px-5"
      >
        <div style={{ color: item.textcolor }} className="text-sm font-semibold">
          <p>{item.name}</p>
          <p>$ {item.price}</p>
        </div>
        <button className="w-9 h-9 flex justify-center items-center bg-white rounded-full">
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
