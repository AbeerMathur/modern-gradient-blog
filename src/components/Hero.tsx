import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;