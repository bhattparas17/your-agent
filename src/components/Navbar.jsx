import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="mx-auto mt-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl bg-blue-700/80 backdrop-blur-lg text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-3 rounded-2xl shadow-xl border border-blue-300 z-[9999]">
      <Link
        to="/"
        className="text-2xl font-extrabold text-white transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6] focus:outline-none"
        style={{ letterSpacing: '1px' }}
      >
        Policy360
      </Link>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Links */}
      <div className="hidden md:flex gap-2">
        <NavLink to="/" label="Home" />
        <NavLink to="/products" label="Products" />
        <NavLink to="/blogs" label="Blogs" />
        <NavLink to="/about" label="About Us" />
        <NavLink to="/contact" label="Contact Us" />
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <>
          {/* Overlay to prevent background scroll and clipping */}
          <div className="fixed inset-0 bg-black/30 z-[9998] md:hidden" onClick={() => setMenuOpen(false)}></div>
          <div className="fixed left-0 w-full bg-blue-800/95 backdrop-blur-lg flex flex-col items-center py-4 z-[9999] md:hidden animate-fade-in rounded-b-2xl shadow-xl border-t border-blue-300" style={{ top: '64px' }}>
            <NavLink to="/" label="Home" onClick={() => setMenuOpen(false)} mobile />
            <NavLink to="/products" label="Products" onClick={() => setMenuOpen(false)} mobile />
            <NavLink to="/blogs" label="Blogs" onClick={() => setMenuOpen(false)} mobile />
            <NavLink to="/about" label="About Us" onClick={() => setMenuOpen(false)} mobile />
            <NavLink to="/contact" label="Contact Us" onClick={() => setMenuOpen(false)} mobile />
          </div>
        </>
      )}
    </nav>
  );

}

// Custom NavLink for animated underline
function NavLink({ to, label, onClick, mobile }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-3 py-2 font-semibold transition-colors duration-200 ${mobile ? 'w-full text-center hover:bg-blue-600 rounded-lg mb-1' : 'hover:text-blue-200'} group`}
    >
      {label}
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 bg-blue-300 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:bg-blue-400`}
      ></span>
    </Link>
  );
}

export default Navbar;
