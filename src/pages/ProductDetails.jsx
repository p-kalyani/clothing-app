import { useParams } from "react-router-dom";

export const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <img src={product.image} className="h-60" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
    </div>
  );
};

