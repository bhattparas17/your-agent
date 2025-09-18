import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_l8r92pj",
        "template_4ivgobq",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "AZkyyahPuns4LTNyU"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const quotes = [
    "“Policy360 made buying insurance so simple and stress-free!” — Rahul S.",
    "“Excellent guidance and support. Highly recommended.” — Priya M.",
    "“Transparent policies and quick claim process.” — Arjun V.",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
  <div className="relative bg-blue-700 h-[30vh] flex items-center justify-center rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>

      {/* Contact Form & Details */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
          {success && (
            <p className="text-green-600 mb-4">
              Your message has been sent successfully!
            </p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Info</h2>
          <p className="text-gray-700 mb-4">
            📍 Address: Off.: 312, NFC, New Delhi-110025, <br />
            # Service Area: South Delhi & NCR, Faridabad, Noida
          </p>
          <p className="text-gray-700 mb-4">
            📞 Phone:{" "}
            <a href="tel:+919013497667" className="text-blue-700 hover:underline">
              +91 90134 97667 +91 9555123427
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            ✉️ Email:{" "}
            <a href="mailto:sharmarp.lic@gmail.com" className="text-blue-700 hover:underline">
              sharmarp.lic@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            🕒 Working Hours: Mon - Sat: 9:00 AM - 6:00 PM
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-700 hover:text-blue-900 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-blue-700 hover:text-blue-900 text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700 text-xl"><FaInstagram /></a>
            <a href="https://wa.me/919555123427" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 text-xl"><FaWhatsapp /></a>
          </div>
        </motion.div>
      </div>

      {/* Quick Quotes / Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {quotes.map((quote, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-gray-700 italic">
            {quote}
          </div>
        ))}
      </motion.div>

      {/* Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 mb-16"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.277110774135!2d77.2656658752863!3d28.561440375703608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39491eb6059%3A0xccb1bb5125d85ca8!2s312%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1757710045065!5m2!1sen!2sin"
          width="100%"
          height="350"
          className="rounded-2xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919555123427"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-2xl hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Contact;
