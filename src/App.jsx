import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import './App.css';
import { fetchProducts } from './api/axios'
import { ProductDetails } from './pages/ProductDetails';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading products...</h2>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/men' element={<Men products={products} />} />
          <Route path='/women' element={<Women products={products} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />         
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
