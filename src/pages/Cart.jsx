import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ProductCartContext';

const Cart = () => {
  const { cartdata, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const total_amount = cartdata.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cartdata.length === 0) return <h2 className="text-center mt-10 text-xl">Your cart is empty</h2>;
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Cart Items</h2>
      {cartdata.map(product => (
         <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 mb-4 shadow rounded-lg" key={product.id}>
          <img className="h-20" src={product.image} alt={product.title} width="100px" />
          <div className="flex-1">
            <h4 className="font-semibold">{product.title}</h4>
            <p>₹ {product.price}</p>
            <p>Qty: {product.quantity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded justify-center">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                -
              </button>

              <span className="w-6 text-center font-semibold">
                {product.quantity}
              </span>

              <button
                onClick={() => addToCart(product)}
                className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600"
              >
                +
              </button>

            </div>

            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3 className="text-xl font-bold mt-6">Total: ₹ {total_amount.toFixed(2)}</h3>
    </div>
  )
}

export default Cart