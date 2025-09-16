import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/40 to-transparent rounded-xl"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6 rounded-xl">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Protect What Matters Most
          </h1>
          <p className="text-lg mb-6 drop-shadow-md">
            Reliable insurance solutions for your life, health, vehicle, and travel.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Explore Our Plans
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 font-medium">✅ Trusted by thousands of customers</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 font-medium">💰 Affordable and flexible plans</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 font-medium">📞 24/7 Customer Support</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-700 font-medium">⚡ Easy claim process</p>
          </motion.div>
        </div>
      </div>

      {/* Attractive About Us Section with Animation */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Image */}
          <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="https://www.renewbuy.com/sites/default/files/2023-10/Asset%205%40300x%20%281%29.png" 
    /* if you download PNG version, adjust accordingly */
    alt="Family Insurance Illustration"
    className="rounded-2xl shadow-lg max-w-full h-auto"
  />
</motion.div>


          {/* Right Content */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
