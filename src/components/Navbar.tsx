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

  const handleInternalLink = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-2" : "py-4"
    }`}>
      <div className="glass mx-4 sm:mx-auto max-w-7xl px-4 sm:px-6 rounded-2xl">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/img/logo.jpg" 
              alt="Logo" 
              className="w-7 h-7 rounded-full"
            />
            <span className="text-lg font-bold text-white">Abeer Mathur</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => handleInternalLink('about')} className="nav-link text-white">About</button>
            <button onClick={() => handleInternalLink('portfolio')} className="nav-link text-white">Portfolio</button>
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
            className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-1 border-t border-white/10 mt-2">
            <button 
              onClick={() => handleInternalLink('about')}
              className="block w-full py-2 text-sm text-white hover:bg-white/10 text-center"
            >
              About
            </button>
            <button 
              onClick={() => handleInternalLink('portfolio')}
              className="block w-full py-2 text-sm text-white hover:bg-white/10 text-center"
            >
              Portfolio
            </button>
            <Link 
              to="/blog" 
              className="block py-2 text-sm text-white hover:bg-white/10 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="https://linktr.ee/abeermathur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-2 text-sm text-white hover:bg-white/10 text-center"
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