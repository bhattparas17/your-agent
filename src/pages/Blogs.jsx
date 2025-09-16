import { Link } from "react-router-dom";
import blogs from "../assets/blogData";

function Blogs() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Our Blogs
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="transform transition hover:scale-105"
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h2 className="text-2xl font-bold text-blue-700 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.desc}</p>
                <span
                  className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-md transition-all duration-200 hover:from-blue-700 hover:to-blue-500 hover:scale-105 hover:shadow-xl focus:outline-none cursor-pointer"
                >
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
