import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="glass mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abeer Mathur</h3>
            <p className="text-gray-300">
              Data Science & Computer Science Student
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:abeermathur17@gmail.com" className="hover:text-primary transition-colors">
                  abeermathur17@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919246340159" className="hover:text-primary transition-colors">
                  +91 9246340159
                </a>
              </li>
              <li>Kolkata, West Bengal, India</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/abeermathur/" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary transition-colors">
                <i className="uil uil-linkedin-alt text-2xl"></i>
              </a>
              <a href="https://github.com/AbeerMathur" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition-colors">
                <i className="uil uil-github-alt text-2xl"></i>
              </a>
              <a href="https://linktr.ee/abeermathur" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition-colors">
                <i className="uil uil-link text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p>© 2024 Abeer Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};