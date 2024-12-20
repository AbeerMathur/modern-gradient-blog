import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className="glass mx-auto max-w-7xl px-4 sm:px-6 rounded-full">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/img/logo.jpg" 
              alt="Logo" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold">Abeer Mathur</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <Link to="/blog" className="nav-link">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};