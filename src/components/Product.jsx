import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ProductCartContext';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300">

            <Link to={`/product/${product.id}`}>
                <img
                    className="h-40 mx-auto object-contain"
                    src={product.image}
                    alt={product.title}
                />
            </Link>
            <h3 className="mt-3 text-sm font-semibold line-clamp-2">{product.title}</h3>
            <p className="text-lg font-bold text-green-600 mt-1"> ₹ {product.price}</p>
            <button
                className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                onClick={() => {
                    addToCart(product);
                    toast.success("Added to cart 🛒");
                }}
            >
                Add To Cart
            </button>
        </div>
    )
}

export default Product
