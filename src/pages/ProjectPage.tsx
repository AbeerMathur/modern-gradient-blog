import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const projects = {
  1: {
    title: "Deepfake Detection using Deep Learning",
    description: "Designed and developed a custom Convolutional Neural Network (CNN) for deepfake detection, achieving over 97% accuracy.",
    fullDescription: `This project focuses on developing a robust deepfake detection system using deep learning techniques. 
    The system utilizes a custom CNN architecture to analyze facial features and identify manipulated videos.
    Key achievements include:
    - 97% accuracy in detecting deepfake videos
    - Real-time processing capabilities
    - Low false positive rate
    - Efficient resource utilization`,
    image: "/assets/img/portfolio1.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"]
  },
  2: {
    title: "E-mail Phishing Detection",
    description: "Developed an email phishing detection model using NLP techniques.",
    fullDescription: `This project implements an advanced email phishing detection system using Natural Language Processing.
    The system combines multiple machine learning models to achieve high accuracy in identifying malicious emails.
    Key features include:
    - 98% detection accuracy
    - Real-time email scanning
    - Multi-language support
    - Low false positive rate`,
    image: "/assets/img/portfolio2.png",
    technologies: ["Python", "scikit-learn", "NLTK", "Machine Learning"]
  },
  3: {
    title: "VCYou – Startup Success Prediction",
    description: "Developed a machine learning model to assist venture capitalists in predicting startup success.",
    fullDescription: `VCYou is an innovative platform that helps venture capitalists make informed investment decisions.
    The system analyzes various parameters of startups to predict their likelihood of success.
    Features include:
    - Multi-factor analysis
    - Historical data comparison
    - Risk assessment
    - Market trend analysis`,
    image: "/assets/img/portfolio3.png",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"]
  },
  4: {
    title: "Real-estate Price Predictor",
    description: "Developed an efficient price predictor using machine learning.",
    fullDescription: `This real estate price prediction system uses advanced machine learning algorithms to accurately
    estimate property values based on multiple factors.
    Key features include:
    - 98% prediction accuracy
    - Location-based analysis
    - Market trend integration
    - Comprehensive property analysis`,
    image: "/assets/img/portfolio4.png",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Regression Models"]
  }
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[Number(id) as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <div className="glass rounded-2xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-8">{project.fullDescription}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full glass text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;