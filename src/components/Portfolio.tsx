import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
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
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;