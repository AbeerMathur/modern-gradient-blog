import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <span className="text-xl font-bold text-white">Abeer Mathur</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="nav-link text-white">About</a>
            <a href="#portfolio" className="nav-link text-white">Portfolio</a>
            <Link to="/blog" className="nav-link text-white">Blog</Link>
            <a 
              href="https://linktr.ee/abeermathur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link text-white"
            >
              Linktree
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass mt-2 rounded-lg p-4 space-y-3">
            <a 
              href="#about" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <Link 
              to="/blog" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="https://linktr.ee/abeermathur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Linktree
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};