const HeroText = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 md:mb-8 leading-tight">
        Prospective<br />customer<br />segmentation
      </h1>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
        Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
      </p>
    </div>
  );
};

export default HeroText;
