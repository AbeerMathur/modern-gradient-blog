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
        className="fixed top-24 right-4 z-50 glass"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </Button>

      <Hero />
      <TimelineSection />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;