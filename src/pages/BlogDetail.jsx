import { useParams, Link } from "react-router-dom";
import blogs from "../assets/blogData";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center py-20 text-gray-600">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-2xl shadow-lg mb-6"
      />
      <p className="text-gray-500 mb-3">{blog.date}</p>
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{blog.title}</h1>
      <p className="text-gray-700 text-lg whitespace-pre-line leading-relaxed mb-10">
        {blog.content}
      </p>
      <Link
        to="/blogs"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}

export default BlogDetail;
