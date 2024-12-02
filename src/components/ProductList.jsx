import React from "react";

function ProductList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Cards */}
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="font-semibold">Sample Product</h3>
          <p className="text-gray-700">$100</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
