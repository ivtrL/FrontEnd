import * as React from "react";
import { CarouselContent, CarouselItem } from "../ui/carousel";

const imgs = [
  { src: "/praia.jpg", title: "Praias de Maceió" },
  { src: "/rio.jpg", title: "Rio de Janeiro" },
  { src: "/SP.jpg", title: "São Paulo" },
];

const BannerComponent = React.forwardRef<
  React.ElementRef<typeof CarouselContent>,
  React.ComponentPropsWithoutRef<typeof CarouselContent>
>(({ className, ...props }, ref) => {
  return (
    <CarouselContent {...props} ref={ref} className={className}>
      {imgs.map((img, index) => (
        <CarouselItem key={index}>
          <div className="aspect-video w-full shrink-0 h-[600px] relative text-center">
            <h1 className="absolute bottom-8 left-16 text-white text-4xl font-bold">
              {img.title}
            </h1>
            <div
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-full object-cover shadow-vignette"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
});

BannerComponent.displayName = "BannerComponent";

export default BannerComponent;
