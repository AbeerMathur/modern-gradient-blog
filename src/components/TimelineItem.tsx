interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  side?: "left" | "right";
  organization?: string;
  description?: string;
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  date, 
  side = "left", 
  organization, 
  description 
}: TimelineItemProps) => {
  return (
    <div className={`flex ${side === 'right' ? 'flex-row-reverse' : ''} items-center w-full`}>
      <div className={`w-5/12 ${side === 'right' ? 'text-right' : ''}`}>
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && <p className="text-gray-300 mt-2">{subtitle}</p>}
          {organization && <p className="text-gray-300 mt-2">{organization}</p>}
          {description && <p className="text-gray-300 mt-2">{description}</p>}
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

export default TimelineItem;