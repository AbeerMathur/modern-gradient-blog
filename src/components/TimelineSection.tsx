import { TimelineItem } from "./TimelineItem";

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
          
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
  );
};

export default TimelineSection;