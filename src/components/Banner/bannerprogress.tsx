"use client";

import { useCarousel } from "../ui/carousel";
import { ProgressBar, useProgress } from "./progressbar";

const BannerProgress = () => {
  const ONE_SECOND = 1000;
  const INTERVAL = 10 * ONE_SECOND;
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps, onProgressClick } = useProgress(api);

  return (
    <div className="absolute bottom-2 w-full flex items-center justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <ProgressBar
          key={index}
          index={index}
          onClick={() => onProgressClick(index)}
          className={`bottom-0 left-0 w-16 h-2`}
          isSelected={index === selectedIndex}
          intervalTime={INTERVAL}
        />
      ))}
    </div>
  );
};

export default BannerProgress;
