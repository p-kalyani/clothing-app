import { useParams } from "react-router-dom";

export const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Not found</p>;

  return (
    <div className="p-4 sm:p-6 flex flex-col md:flex-row gap-6">

      <img className="h-60 mx-auto md:mx-0" src={product.image} />

      <div>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-3 text-lg font-semibold text-green-600">₹ {product.price}</p>
      </div>

    </div>
  );
};