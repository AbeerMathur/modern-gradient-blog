import TimelineItem from "./TimelineItem";

const TimelineSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Education & Experience</h2>
        <div className="space-y-8">
          <TimelineItem 
            date="2023 - Present"
            title="Research Intern"
            organization="IIT Madras"
            description="Working on deep learning models for computer vision applications."
          />
          <TimelineItem 
            date="2022 - 2023"
            title="Software Engineer Intern"
            organization="Tech Solutions"
            description="Developed web applications using React and Node.js."
          />
          <TimelineItem 
            date="2021 - 2022"
            title="Bachelor of Technology"
            organization="Vellore Institute of Technology"
            description="Pursuing a degree in Computer Science."
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
