import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/ProductCartContext';

const Navbar = () => {
  const { cartdata } = useContext(CartContext);
  return (
    <nav className='flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50'>
      <h1 className="text-2xl font-bold text-orange-500">Clothing Store</h1>
      <div className="flex items-center gap-6 font-medium">
        <Link className="hover:text-orange-500" to='/'>Home</Link>
        <Link className="hover:text-orange-500" to='/men'>Men</Link>
        <Link className="hover:text-orange-500" to='/women'>Women</Link>
        <Link className="relative" to='/cart'>🛒 Cart
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartdata.length}
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
