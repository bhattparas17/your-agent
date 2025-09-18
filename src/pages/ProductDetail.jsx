import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../assets/productsData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [showMessage, setShowMessage] = useState(false);

  if (!product) {
    return <p className="text-center mt-10 text-red-600">Product not found</p>;
  }

  const handleEnquire = () => {
    setShowMessage(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/919013497667?text=Hello,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
          product.title
        )}`,
        "_blank"
      );
      setShowMessage(false);
    }, 1500);
  };

  return (
    <div className="py-12 px-4 md:px-20 bg-gray-50">
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          Redirecting to WhatsApp…
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="font-bold text-lg text-gray-900 mb-8">
          Price: {product.price}
        </p>

        <div className="flex gap-4">
          <Link
            to="/products"
            className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Back to Products
          </Link>
          <button
            onClick={handleEnquire}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
