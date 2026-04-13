import React, { useEffect } from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext();

const ProductCartContext = ({ children }) => {
  const [cartdata, setCartData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartdata"));
    if (data)
      setCartData(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartdata", JSON.stringify(cartdata))
  }, [cartdata]);

  const addToCart = (product) => {
    const find = cartdata.find((i) => i.id === product.id);
    if (find) {
      setCartData(cartdata.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
    }
    else {
      setCartData([...cartdata, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartData(cartdata.filter((i) => i.id !== id));
  }

  const productQuantity = (id, quantity) => {
    setCartData(cartdata.map(i => i.id === id ? { ...i, quantity } : i
    ));
  };

  const decreaseQuantity = (id) => {
    setCartData(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  return (
    <div>
      <CartContext.Provider value={{ cartdata, addToCart, removeFromCart, productQuantity, decreaseQuantity }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default ProductCartContext
