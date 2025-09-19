import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";


function Footer() {
  // Scroll to top handler
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Policy360</h2>
          <p className="text-gray-300">
            Simplifying insurance with transparency, trust, and personalized solutions.  
            Secure your future with us today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/blogs" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>

          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300">📍 312, NFC, New Delhi - 110025</p>
          <p className="text-gray-300">📞 +91 90134 97667 || +91 95551 23427</p>
          <p className="text-gray-300">
            ✉️ <a href="mailto:sharmarp.lic@gmail.com" className="hover:underline">sharmarp.lic@gmail.com</a>
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919013497667" className="bg-white text-green-600 p-2 rounded-full hover:bg-gray-200">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm relative">
        © {new Date().getFullYear()} Policy360. All Rights Reserved.<br />
          {/* External Link */}
          <a
            href="https://saathi.licindia.co.in/s/ram-pukar-sharma/01500312"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-300 hover:text-blue-500"
          >
            Visit LIC Saathi Profile
          </a>
        <span className="block mt-2">Made with <span className="text-red-500">❤️</span> by Policy360</span>
        <button
          onClick={handleBackToTop}
          className="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow transition focus:outline-none"
          aria-label="Back to Top"
        >
          Back to Top
        </button>
        <button
          onClick={handleBackToTop}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-blue-700 py-2 font-semibold text-white shadow transition hover:bg-blue-800 focus:outline-none sm:hidden"
          aria-label="Back to Top"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
