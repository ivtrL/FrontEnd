"use client";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";

const imgs = [
  { src: "/praia.jpg", title: "Praias de Maceió" },
  { src: "/rio.jpg", title: "Rio de Janeiro" },
  { src: "/SP.jpg", title: "São Paulo" },
];

const BannerComponent = React.forwardRef<
  React.ElementRef<typeof Carousel>,
  React.ComponentPropsWithoutRef<typeof Carousel>
>((props, ref) => {
  return (
    <Carousel
      ref={ref}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: false,
          stopOnFocusIn: false,
        }),
      ]}
      className="mt-16"
      opts={{ loop: true }}
      {...props}
    >
      <CarouselContent className="rounded-xl">
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <div className="aspect-video w-full shrink-0 h-[460px] relative text-center">
              <h1 className="absolute bottom-6 left-8 text-white text-4xl font-bold">
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
    </Carousel>
  );
});

BannerComponent.displayName = "BannerComponent";

export default BannerComponent;
