"use client";
import * as React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface ShoppingCardProps {
  image: StaticImageData | string;
  title: string;
}

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  reviews: number;
  stars: number;
}

// Temporary solution for the StarRating component
const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  ({ className, reviews, stars, ...props }, ref) => {
    return (
      <div className={cn("flex", className)} {...props} ref={ref}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            fill={index <= Math.floor(stars) ? "#D4AF37" : "#111"}
            strokeWidth={0}
          />
        ))}
        <div>({reviews})</div>
      </div>
    );
  }
);

const ShoppingCard = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.ComponentPropsWithoutRef<typeof Card> &
    ShoppingCardProps & { reviews: number; stars: number }
>(({ className, image, title, reviews, stars, ...props }, ref) => {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const handleHoverEnter = () => {
    if (drawerRef.current) {
      drawerRef.current.classList.add("modal-open");
    }
  };

  const handleHoverExit = () => {
    if (drawerRef.current) {
      drawerRef.current.classList.remove("modal-open");
    }
  };

  return (
    <Card
      {...props}
      ref={ref}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
      className={cn("rounded-xl overflow-hidden", className)}
    >
      <CardContent className="relative flex items-center justify-center h-full flex-col">
        <Image src={image} alt="" className="object-cover aspect-square" />
        <CardTitle className="text-lg w-full text-ellipsis p-4 text-center jusitfy-center items-center flex">
          {title}
        </CardTitle>
        <CardFooter>
          <StarRating reviews={reviews} stars={stars} />
        </CardFooter>
        <div
          ref={drawerRef}
          className="modal modal-bottom absolute overscroll-auto"
        >
          <div className="modal-box bg-white overscroll-auto">
            <Button className="w-full">Reserve Já</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ShoppingCard.displayName = "ShoppingCard";

export { ShoppingCard, StarRating };
