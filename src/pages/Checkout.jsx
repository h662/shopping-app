import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Checkout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: "/checkout" }} />;
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    if (name && address) {
      alert("Your order has been successfully placed!");
      setName("");
      setAddress("");
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleCheckout}
      >
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your address"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded"
          >
            Confirm Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
