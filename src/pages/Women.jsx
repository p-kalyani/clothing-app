import React from 'react'
import Product from '../components/Product';

const Women = ({ products }) => {
  const womenProducts = products.filter(
    prod => prod.category === `women's clothing`
  );
  return (
<div className="bg-gray-100 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">      {
        womenProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Women
