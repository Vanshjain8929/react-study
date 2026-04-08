import RightCardContent from './rightcardcontent';

const RightCard = ({ segment }) => {
  return (
    <div
      key={segment.id}
      className="relative bg-black rounded-2xl sm:rounded-3xl overflow-hidden group h-full hover:scale-110 transition-transform duration-300 ease-out cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${segment.image})` }}
      />

      {/* Overlay - gradient from top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

      {/* Number Badge - Top Right */}
      <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10">
        <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold border border-white/50">
          {segment.id}
        </div>
      </div>

      {/* Card Content */}
      <RightCardContent 
        customerType={segment.customerType}
        status={segment.status}
        statusColor={segment.statusColor}
      />
    </div>
  );
};

export default RightCard;
