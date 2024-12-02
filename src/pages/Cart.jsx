import React from "react";

function Cart() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Quantity</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4">Sample Product</td>
            <td className="p-4">
              <button className="px-2 py-1 border rounded">-</button>
              <span className="px-2">1</span>
              <button className="px-2 py-1 border rounded">+</button>
            </td>
            <td className="p-4">$100</td>
            <td className="p-4">$100</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <h2 className="text-xl font-bold">Total: $100</h2>
        <button className="px-6 py-2 bg-green-500 text-white rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
