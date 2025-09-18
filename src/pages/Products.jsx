import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../assets/productsData";
import {
  FaPiggyBank,
  FaWallet,
  FaChild,
  FaShieldAlt,
  FaUserTie,
  FaChartLine,
  FaInfinity,
  FaHandsHelping,
} from "react-icons/fa";

// Icon map
const iconMap = {
  ENDOWMENT: FaPiggyBank,
  MONEYBACK: FaWallet,
  CHILD: FaChild,
  TERM: FaShieldAlt,
  PENSION: FaUserTie,
  ULIP: FaChartLine,
  WHOLELIFE: FaInfinity,
  MICRO: FaHandsHelping,
};

// Background colors for cards
const bgColors = {
  ENDOWMENT: "bg-blue-50",
  MONEYBACK: "bg-green-50",
  CHILD: "bg-pink-50",
  TERM: "bg-red-50",
  PENSION: "bg-purple-50",
  ULIP: "bg-indigo-50",
  WHOLELIFE: "bg-teal-50",
  MICRO: "bg-orange-50",
};

// Unique icon colors per category
const iconColors = {
  ENDOWMENT: "text-blue-600",
  MONEYBACK: "text-green-600",
  CHILD: "text-pink-600",
  TERM: "text-red-600",
  PENSION: "text-purple-600",
  ULIP: "text-indigo-600",
  WHOLELIFE: "text-teal-600",
  MICRO: "text-orange-600",
};

const categories = [
  "ALL",
  "ENDOWMENT",
  "MONEYBACK",
  "CHILD",
  "TERM",
  "PENSION",
  "ULIP",
  "WHOLELIFE",
  "MICRO",
];

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showMessage, setShowMessage] = useState(false);
  const itemsPerPage = 9;

  const filtered =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const indexOfLast = currentPage * itemsPerPage;
  const current = filtered.slice(indexOfLast - itemsPerPage, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const handleEnquire = (title) => {
    setShowMessage(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/919013497667?text=Hello,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
          title
        )}`,
        "_blank"
      );
      setShowMessage(false);
    }, 1500);
  };

  return (
    <div className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
        Our Insurance Plans
      </h2>

      {/* Success Popup */}
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          Redirecting to WhatsApp…
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap justify-center mb-10 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition transform hover:scale-105 ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {current.map((product) => {
          const Icon = iconMap[product.category] || FaPiggyBank;
          const bg = bgColors[product.category] || "bg-gray-50";
          const iconColor = iconColors[product.category] || "text-gray-600";

          return (
            <div
              key={product.id}
              className={`relative rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center ${bg}`}
            >
              {/* Icon */}
              <div className="mb-5 w-28 h-28 rounded-2xl bg-white flex items-center justify-center shadow-md">
                <Icon size={56} className={iconColor} />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {product.description}
              </p>
              <p className="font-bold text-gray-900">{product.price}</p>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-4">
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleEnquire(product.title)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
