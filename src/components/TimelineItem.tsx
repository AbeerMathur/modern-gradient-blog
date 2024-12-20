interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  side: "left" | "right";
}

export const TimelineItem = ({ title, subtitle, date, side }: TimelineItemProps) => {
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