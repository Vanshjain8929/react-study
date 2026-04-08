import HeroText from './herotext';
import Arrow from './arrow';

const LeftContent = () => {
  return (
    <div className="relative flex flex-col justify-between h-full">
      <HeroText />
      {/* Arrow Bottom Left */}
      <Arrow />
    </div>
  );
};

export default LeftContent;
