import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import TimelineSection from "@/components/TimelineSection";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

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

  return (
    <div className="min-h-screen gradient-background transition-all duration-300">
      <Navbar />
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-24 right-4 z-50 glass rounded-full w-10 h-10 flex items-center justify-center"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </Button>

      <div className="reveal">
        <Hero />
      </div>
      
      <div id="about" className="reveal">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6 text-center">
              I am a Computer Science student at Vellore Institute of Technology, passionate about technology and innovation. 
              I'm proficient in machine learning and deep learning methodologies.
            </p>
          </div>
        </div>
      </div>
      
      <div className="reveal">
        <TimelineSection />
      </div>
      
      <div id="portfolio" className="reveal">
        <Portfolio />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;