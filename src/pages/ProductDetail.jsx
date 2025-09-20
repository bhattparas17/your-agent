import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/productsData";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const whatsappNumber = "919013497667"; // your WhatsApp number

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
  <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10 drop-shadow-lg">
    {product.title}
  </h1>

  {/* Product Overview Card */}
  <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6 transition-transform duration-300 hover:scale-105 border border-blue-100">
    <img
      src="https://plus.unsplash.com/premium_vector-1682301231038-bb5475d82e66?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Product Overview"
      className="w-32 h-32"
    />
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        📝 Product Overview
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
    </div>
  </div>

  {/* Extended content ONLY for Jeevan Anand (id=2) */}
  {product.id === 2 && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Key Features Card */}
      <div className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105 border border-blue-100">
        <img
          src="https://media.istockphoto.com/id/954267982/vector/life-insurance-icon.jpg?s=2048x2048&w=is&k=20&c=hGIWTmNh-JLxqUziJq8FD3RgGZatehKMR3Pa6kLCIF0="
          alt="Key Features"
          className="w-20 h-20"
        />
        <h2 className="text-xl font-bold text-blue-700">🌟 Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
          <li>Lifetime protection with insurance cover.</li>
          <li>Lump sum payout on survival till end of policy term.</li>
          <li>Flexible premium payment (Yearly, Half-Yearly, Quarterly, Monthly).</li>
          <li>Loan facility to meet liquidity needs.</li>
          <li>High Sum Assured rebates available.</li>
          <li>Optional riders (Accident, Disability, Term Rider).</li>
          <li>Option to receive benefits in instalments instead of lump sum.</li>
        </ul>
      </div>

      {/* Eligibility Card */}
      <div className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105 border border-blue-100">
        <img
          src="https://img.freepik.com/premium-vector/concept-vector-illustration-life-insurance-protection-health-life-flat-vector-illustration_98702-1374.jpg?w=2000"
          alt="Eligibility"
          className="w-20 h-20"
        />
        <h2 className="text-xl font-bold text-blue-700">👤 Eligibility</h2>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
          <li>Minimum Entry Age: 18 years</li>
          <li>Maximum Entry Age: 50 years</li>
          <li>Maximum Maturity Age: 75 years</li>
          <li>Policy Term: 15 – 35 years</li>
          <li>Minimum Sum Assured: ₹2,00,000</li>
          <li>Maximum Sum Assured: No limit</li>
        </ul>
      </div>

      {/* Benefits Card (full width) */}
      <div className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105 border border-blue-100 md:col-span-2">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.Jt0vsZPOxjDBLAThvSRBPAHaGE?pid=Api&P=0&h=180"
          alt="Benefits"
          className="w-20 h-20"
        />
        <h2 className="text-xl font-bold text-blue-700">💰 Benefits</h2>
        <p className="text-base text-gray-800 mb-2">
          <b>Death Benefit:</b> 125% of Basic Sum Assured or 7× Premium + Bonuses
        </p>
        <p className="text-base text-gray-800 mb-2">
          <b>Maturity Benefit:</b> Basic Sum Assured + Bonuses
        </p>
        <p className="text-base text-gray-800">
          <b>Participation in Profits:</b> Eligible for annual bonuses + Final Bonus
        </p>
      </div>
    </div>
  )}

  {/* Action Buttons */}
  <div className="flex justify-center gap-4 mt-10">
    <a
      href={`https://wa.me/${whatsappNumber}?text=I want to enquire about ${product.title}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-200"
    >
      <FaWhatsapp className="text-2xl" /> Enquire Now
    </a>
  </div>
</div>

  );
};

export default ProductDetail;
