import React from 'react';

function CartHistory({ cart }) {
  const totalMRP = cart.reduce((sum, item) => sum + item.price, 0); // Calculate total MRP
  const discount = 0; // Example static discount
  const platformFee = 20; // Example static platform fee
  const shippingFee = 0; // Example static shipping fee (FREE)
  const totalAmount = totalMRP - discount + platformFee + shippingFee;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Price Breakdown</h2>
      <div className="flex justify-between mb-2">
        <p>Total MRP</p>
        <p>₹ {totalMRP}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Discount on MRP</p>
        <p>₹ {discount}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Platform Fee</p>
        <p>₹ {platformFee}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Shipping Fee</p>
        <p>{shippingFee === 0 ? 'FREE' : `₹ ${shippingFee}`}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between text-lg font-semibold">
        <p>Total Amount</p>
        <p>₹ {totalAmount}</p>
      </div>
      <button className="bg-black text-white w-full py-2 mt-4 rounded-md">
        Place Order
      </button>
    </div>
  );
}

export default CartHistory;
