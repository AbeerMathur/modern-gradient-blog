import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Experience</h2>
          <div className="relative">
            {/* Line down the middle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem 
                title="Vellore Institute of Technology"
                subtitle="B.Tech in Computer Science"
                date="2021 - 2025"
                side="left"
              />
              <TimelineItem 
                title="Indian Institute of Technology, Madras"
                subtitle="B.Sc in Data Science and Programming (Online)"
                date="2021 - 2025"
                side="right"
              />
              <TimelineItem 
                title="Founding Member"
                subtitle="The Opportunities Portal"
                date="November 2022 – November 2023"
                side="left"
              />
              <TimelineItem 
                title="Research Intern"
                subtitle="National University of Singapore (NUS)"
                date="December 2023 – January 2024"
                side="right"
              />
              <TimelineItem 
                title="Board Member"
                subtitle="Leo Club, VIT"
                date="April 2023 – February 2024"
                side="left"
              />
            </div>
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

const TimelineItem = ({ title, subtitle, date, side }: { 
  title: string; 
  subtitle: string; 
  date: string; 
  side: "left" | "right"; 
}) => {
  return (
    <div className={`flex ${side === 'right' ? 'flex-row-reverse' : ''} items-center justify-center`}>
      <div className={`w-5/12 ${side === 'right' ? 'text-right' : ''}`}>
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-300 mt-2">{subtitle}</p>
          <p className="text-sm text-gray-400 mt-1">{date}</p>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-white rounded-full relative z-10"></div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

export default Index;
