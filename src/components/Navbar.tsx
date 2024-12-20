import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 py-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>
        <div className="flex gap-4">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};