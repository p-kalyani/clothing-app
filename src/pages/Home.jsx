import React, { useState } from 'react';
import Product from '../components/Product';

const Home = ({ products }) => {
  const [search, setSearch] = useState("");

  const filtered = products
    .filter(p => p.category.includes("clothing"))
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">

      {/* ✅ FIXED INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mb-6 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ FIXED VARIABLE NAME */}
      {filtered.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">😔 No products found</p>
          <p className="text-sm text-gray-400 mt-1">
            Try searching something else
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <Product key={p.id} product={p} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Home;