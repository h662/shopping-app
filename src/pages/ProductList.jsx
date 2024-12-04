import React, { useState } from "react";
import { Link } from "react-router-dom";
import dummyProducts from "../dummyProducts.json";

function ProductList() {
  const [search, setSearch] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded shadow hover:shadow-lg"
          >
            <img
              src={`/assets/${product.image}`}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md shadow-lg"
            />
            <h3 className="font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <Link to={`/products/${product.id}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
