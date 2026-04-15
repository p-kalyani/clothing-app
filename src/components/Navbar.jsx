import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/ProductCartContext';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { cartdata } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive(path)
        ? "bg-orange-500 text-white"
        : "hover:text-orange-500"
    }`;

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>

      <div className="flex justify-between items-center px-4 sm:px-8 py-4">

        <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
          Clothing Store
        </h1>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden sm:flex items-center gap-6 font-medium">
          <Link className={linkClass("/")} to="/">Home</Link>
          <Link className={linkClass("/men")} to="/men">Men</Link>
          <Link className={linkClass("/women")} to="/women">Women</Link>

          <Link className="relative" to="/cart">
            🛒 Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartdata.length}
            </span>
          </Link>
        </div>
      </div>

      {open && (
        <div className="sm:hidden px-4 pb-4 space-y-2 font-medium">
          <Link onClick={() => setOpen(false)} className={linkClass("/")} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className={linkClass("/men")} to="/men">Men</Link>
          <Link onClick={() => setOpen(false)} className={linkClass("/women")} to="/women">Women</Link>
          <Link onClick={() => setOpen(false)} className="block" to="/cart">
            🛒 Cart ({cartdata.length})
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar