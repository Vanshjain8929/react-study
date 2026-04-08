import Navbar from './navbar';
import Page1Content from './page1content'

const Section1 = ({ segmentationData }) => {
  return (
    <section className="h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col w-full">
        {/* Top Header - Target Audience & Platform */}
        <Navbar />

        {/* Main Layout - Left Text with Arrow, Right Cards */}
        <Page1Content segmentationData={segmentationData} />
      </div>
    </section>
  );
};

export default Section1;
