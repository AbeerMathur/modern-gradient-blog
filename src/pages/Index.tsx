import { Navbar } from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Creating beautiful and functional web experiences
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-200">
            I'm a passionate web developer focused on creating beautiful and functional websites.
            With expertise in modern web technologies, I bring ideas to life through clean code
            and elegant design.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass rounded-xl p-6 blog-card">
                <h3 className="text-xl font-semibold mb-4">Project {item}</h3>
                <p className="text-gray-300">
                  A brief description of the project and its key features.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;