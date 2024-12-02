import React from "react";

function Checkout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2">
            Address
          </label>
          <textarea
            id="address"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div>
          <label htmlFor="payment" className="block mb-2">
            Payment Method
          </label>
          <select id="payment" className="w-full border px-4 py-2 rounded">
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
      </form>
      <div className="mt-6">
        <button className="w-full px-6 py-3 bg-blue-500 text-white rounded">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default Checkout;
