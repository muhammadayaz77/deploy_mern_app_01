    import React, { useEffect, useState } from "react";
    import { Buffer } from "buffer";
    import axios from "axios";

    function CartCards({ item }) {
      // Check if the image data exists and can be processed
      let [count,setCount] = useState(1);
      const base64Image =
        item.image && item.image.data
          ? Buffer.from(item.image.data).toString("base64")
          : null;
      // Function to darken a HEX color
    function darkenColor(hex, percent) {
      // Convert HEX to RGB
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);

      // Decrease each color channel by the percentage
      r = Math.max(0, Math.min(255, r - (r * percent) / 100));
      g = Math.max(0, Math.min(255, g - (g * percent) / 100));
      b = Math.max(0, Math.min(255, b - (b * percent) / 100));

      // Convert back to HEX
      return `#${((1 << 24) + (r << 16) + (g << 8) + b)
          .toString(16)
          .slice(1)}`;
    }

    // Example usage
    let originalColor = item.bgcolor;
    let darkerColor1 = darkenColor(originalColor, 10); // 10% darker
    let darkerColor2 = darkenColor(originalColor, 20); // 20% darker
    console.log(darkerColor1, darkerColor2);

      return (
        <div className=" md:col-span-4 col-span-6 lg:col-span-3 mb-20">
          {/* Image Section */}
          <div
            style={{ backgroundColor:originalColor || 'black' }} // Dynamic background color
            className="h-[350px] p-10"
          >
            {base64Image ? (
              <img
                src={`data:image/jpeg;base64,${base64Image}`}
                className="h-full w-[1/2] object-cover mx-auto"
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
            style={{ backgroundColor:item.panelcolor || "pink" }} // Dynamic panel color
            className={`h-[80px] w-full z-50`}
          >
            <div
              style={{ color: item.textcolor || "black",backgroundColor : item.panelcolor}} // Dynamic text color
              className="text-2xl font-medium tracking-tighter flex justify-between w-full 
              px-5 py-5"
            >
              <p>{item.name}</p>
              <div className="flex items-center">
    <button
      className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-black"
      onClick={()=>{
        count >= 1 ?
        setCount(count-1)
        :
        setCount(0)
      }} 
    >
      -
    </button>
    <span className="mx-4">{count}</span>
    <button
      className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-black"
      onClick={()=>setCount(count+1)}
    >
      +
    </button>
  </div>
            </div>
            <div
              style={{ color: item.textcolor || "color", backgroundColor : darkerColor1 || 'white'}} // Dynamic text color
              className={`text-md font-semibold flex justify-between w-full px-5 py-4`}
            >
              <p>{"Net Total"}</p>
              <p>$ {item.price}</p>
            </div>
          </div>
        </div>
      );
    }

    export default CartCards;
