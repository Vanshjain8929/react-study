const RightCardContent = ({ customerType, status, statusColor }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5 text-white h-full flex flex-col justify-end">
      <p className="text-xs leading-relaxed mb-2 sm:mb-3 lg:mb-4 line-clamp-2">
        {customerType}
      </p>

      {/* Status Badge */}
      <button
        className={`${statusColor} text-black font-semibold px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs inline-flex items-center gap-1 sm:gap-2 w-fit hover:shadow-lg transition-shadow`}
      >
        {status}
        <span className="text-xs">→</span>
      </button>
    </div>
  );
};

export default RightCardContent;
