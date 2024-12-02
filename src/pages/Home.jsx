import React from "react";
import bannerImage from "../assets/banner.jpg";

function Home() {
  return (
    <div className="p-6">
      <section className="mb-8">
        <img
          src={bannerImage}
          alt="ShopEasy Banner"
          className="w-full h-64 object-cover rounded-md shadow-lg"
        />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Welcome to ShopEasy!</h2>
        <p className="text-gray-700">
          Discover the best products at the best prices.
        </p>
      </section>
    </div>
  );
}

export default Home;
