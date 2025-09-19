import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] lg:h-[80vh] flex items-center justify-center rounded-xl overflow-hidden px-4 sm:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/40 to-transparent rounded-xl"></div>

        {/* Content */}
        <div className="relative text-center text-white px-2 sm:px-6 py-10 sm:py-0 rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
            Protect What Matters Most
          </h1>
          <p className="text-base sm:text-lg mb-6 drop-shadow-md">
            Reliable insurance solutions for your life, health, vehicle, and travel.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Explore Our Plans
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8 px-4">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6">
          <Motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 font-medium">✅ Trusted by thousands of customers</p>
          </Motion.div>
          <Motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 font-medium">💰 Affordable and flexible plans</p>
          </Motion.div>
          <Motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 font-medium">📞 24/7 Customer Support</p>
          </Motion.div>
          <Motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-700 font-medium">⚡ Easy claim process</p>
          </Motion.div>
        </div>
      </div>

      {/* Attractive About Us Section with Animation */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6">
          {/* Left Image */}
          <Motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src="https://www.renewbuy.com/sites/default/files/2023-10/Asset%205%40300x%20%281%29.png"
              alt="Family Insurance Illustration"
              className="rounded-2xl shadow-lg w-full h-auto max-h-[420px] object-contain"
            />
          </Motion.div>


          {/* Right Content */}
          <Motion.div
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">About Us</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              We are a trusted insurance agency dedicated to providing reliable, affordable,
              and personalized insurance solutions for individuals and families.
              With years of experience and a commitment to customer satisfaction,
              our mission is to help you secure your future with the right coverage
              for life, health, vehicles, and travel.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Learn More
            </Link>
          </Motion.div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow-lg">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-blue-700 text-xl sm:text-2xl mb-4">What types of insurance plans do you offer?</h3>
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">We offer a wide range of insurance plans including life, health, vehicle, and travel insurance to suit your needs.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-blue-700 text-xl sm:text-2xl mb-4">How do I choose the right insurance plan?</h3>
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">Our experts can help you assess your requirements and recommend the best plan for you. Contact us for a personalized consultation.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-blue-700 text-xl sm:text-2xl mb-4">How can I file a claim?</h3>
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">You can file a claim online through our website or contact our customer support for assistance. We ensure a quick and easy claim process.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-blue-700 text-xl sm:text-2xl mb-4">What documents are required for buying insurance?</h3>
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">Generally, you need identity proof, address proof, and income documents. Requirements may vary based on the plan selected.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 transition-transform duration-300 md:col-span-2">
              <h3 className="font-bold text-blue-700 text-xl sm:text-2xl mb-4">How do I contact customer support?</h3>
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">You can reach our customer support 24/7 via phone, email, or live chat. Visit our Contact Us page for details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
