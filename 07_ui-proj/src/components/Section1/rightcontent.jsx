import RightCard from './rightcard';

const RightContent = ({ segmentationData }) => {
  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3 h-[300px] sm:h-[380px] md:h-[420px] lg:h-[500px]">
      {segmentationData.map((segment) => (
        <RightCard key={segment.id} segment={segment} />
      ))}
    </div>
  );
};

export default RightContent;
