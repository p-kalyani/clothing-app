import React, { useState } from 'react';
import Product from '../components/Product'

const Home = ({ products }) => {
  const [search, setSearch] = useState("");

  const clothingProducts = products.filter(
    p =>
      p.category === "men's clothing" ||
      p.category === "women's clothing"
  );

  const filteredProducts = clothingProducts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-6 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Home
