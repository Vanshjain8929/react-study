import LeftContent from './leftcontent';
import RightContent from './rightcontent';

const Page1Content = ({ segmentationData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-1 items-center">
      {/* Left Side - Text Content with Arrow */}
      <LeftContent />

      {/* Right Side - Cards Grid */}
      <RightContent segmentationData={segmentationData} />
    </div>
  );
};

export default Page1Content;
