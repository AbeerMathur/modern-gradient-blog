import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen gradient-background transition-all duration-300">
      <Navbar />
      
      {/* Theme Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-24 right-4 z-50 glass"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </Button>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="glass rounded-2xl p-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Abeer Mathur</h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">Dedicated Data Enthusiast</h2>
            <p className="text-gray-300 mb-8">
              A dedicated data enthusiast proficient in machine learning and deep learning methodologies. 
              Passionate about leveraging technology to solve real-world problems.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
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
          <div className="relative">
            <img 
              src="/assets/img/Pro.jpg" 
              alt="Profile" 
              className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-200 mb-8">
            I'm a third-year Computer Science undergraduate at Vellore Institute of Technology, 
            with a second degree in Data Science and Programming from IIT Madras. Passionate about 
            technology, research, and continuously learning new skills to solve complex problems.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl font-bold">8.88</div>
              <div className="text-sm text-gray-300">CGPA</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl font-bold">04+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl font-bold">02+</div>
              <div className="text-sm text-gray-300">Months Experience</div>
            </div>
          </div>
          <div className="text-center">
            <Button className="glass hover:bg-white/20">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                title: "Deepfake Detection using Deep Learning",
                description: "Designed and developed a custom CNN for deepfake detection, achieving over 97% accuracy.",
                image: "/assets/img/portfolio1.png"
              },
              {
                id: 2,
                title: "E-mail Phishing Detection",
                description: "Developed an email phishing detection model using NLP techniques, achieving over 98% accuracy.",
                image: "/assets/img/portfolio2.png"
              },
              {
                id: 3,
                title: "VCYou – Startup Success Prediction",
                description: "Developed a machine learning model to assist venture capitalists in predicting startup success.",
                image: "/assets/img/portfolio3.png"
              },
              {
                id: 4,
                title: "Real-estate Price Predictor",
                description: "Developed an efficient price predictor using machine learning, achieving over 98% accuracy.",
                image: "/assets/img/portfolio4.png"
              }
            ].map((project) => (
              <div 
                key={project.id} 
                className="glass rounded-xl overflow-hidden blog-card cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;