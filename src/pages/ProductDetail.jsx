import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";
import dummyProducts from "../dummyProducts.json";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = dummyProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({ id: product.id, name: product.name, price: product.price })
    );
    navigate("/cart"); // 장바구니 페이지로 이동
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={`/assets/${product.image}`}
          alt={product.name}
          className="w-full lg:w-1/2 h-64 object-cover rounded-md shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-bold text-blue-500">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
