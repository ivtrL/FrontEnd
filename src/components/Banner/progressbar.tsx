"use client";

import * as React from "react";
import { type EmblaCarouselType } from "embla-carousel";
import { Progress } from "../ui/progress";
import { useCarousel } from "../ui/carousel";

type ProgressType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onProgressClick: (index: number) => void;
};

const useProgress = (emblaApi: EmblaCarouselType | undefined): ProgressType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onProgressClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onProgressClick };
};

interface ProgressBarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Progress>, "value"> {
  isSelected: boolean;
  intervalTime: number;
  index: number;
}

const ProgressBar = React.forwardRef<
  Omit<React.ElementRef<typeof Progress>, "value">,
  ProgressBarProps
>(({ isSelected, intervalTime, index, ...props }, ref) => {
  const [value, setValue] = React.useState(0);
  const timer = React.useMemo(() => {
    return intervalTime / 100;
  }, [intervalTime]);
  const { api } = useCarousel();
  if (!api) throw new Error("useCarousel must be used within a <Carousel />");
  const ArraySnaps = api.scrollSnapList();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isSelected) setValue(0);
      if (isSelected) {
        if (value === 100) {
          setValue(0);
          if (index === ArraySnaps.length - 1) {
            api.scrollTo(0);
          } else {
            api.scrollTo(index + 1);
          }
        } else {
          setValue((prev) => prev + 1);
        }
      }
    }, timer);
    return () => {
      clearInterval(interval);
    };
  }, [ArraySnaps, api, index, isSelected, timer, value]);

  return <Progress {...props} ref={ref} value={value} />;
});

ProgressBar.displayName = "ProgressBar";

export { ProgressBar, useProgress };
