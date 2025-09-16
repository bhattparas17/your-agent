import { motion } from "framer-motion";


function About() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          About Us
        </h1>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To simplify the insurance buying process by offering clear,
              reliable, and customized solutions that protect what matters most
              to our customers.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a trusted name in the insurance industry by delivering
              value-driven services, building long-term client relationships,
              and promoting financial security for all.
            </p>
          </div>
        </div>

        {/* About Company Section */}
        <div className="bg-white shadow-lg rounded-2xl p-10 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">🏢 About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <span className="font-semibold">Policy360</span>, we believe
            that insurance should be simple, trustworthy, and personalized. We
            are committed to guiding individuals, families, and businesses
            through a wide range of insurance options so they can make informed
            and confident choices.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a growing network of customers and a strong local presence,
            <span className="font-semibold"> Policy360</span> offers policies
            from top-rated insurers with complete transparency and expert
            support. Whether you're securing your family's future, protecting
            your assets, or planning for uncertainties, we're here to help every
            step of the way.
          </p>
        </div>
      </div>

     {/* Feedback Section */}
<div className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto text-center mb-12 text-white">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">💬 Feedbacks</h2>
    <p className="text-lg sm:text-xl max-w-2xl mx-auto">
      What Our Clients Say About Us
    </p>
    <p className="text-blue-200 mt-2 max-w-3xl mx-auto">
      Your experience matters to us! At <span className="font-semibold">Policy360</span>, 
      we constantly strive to improve our services. Share your thoughts, suggestions, 
      or concerns—your feedback helps us serve you better and ensures we continue 
      delivering trusted and personalized insurance solutions.
    </p>
  </div>

  {/* Feedback Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Rahul Sharma",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Policy360 made buying insurance so simple and stress-free. Highly recommended!",
      },
      {
        name: "Priya Mehta",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Great support and guidance. They really care about finding the best plan for you.",
      },
      {
        name: "Arjun Verma",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        text: "Transparent policies and quick claim process. Very satisfied with their service!",
      },
    ].map((feedback, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white shadow-md p-6 rounded-xl transition transform hover:-translate-y-2 hover:shadow-lg text-center"
      >
        <img
          src={feedback.avatar}
          alt={feedback.name}
          className="w-16 h-16 mx-auto rounded-full mb-4"
        />
        <p className="text-gray-600 italic mb-4">{feedback.text}</p>
        <h4 className="font-semibold text-blue-700">— {feedback.name}</h4>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  );
}

export default About;
