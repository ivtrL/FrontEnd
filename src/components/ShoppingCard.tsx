"use client";
import * as React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface ShoppingCardProps {
  image: StaticImageData | string;
  title: string;
}

const ShoppingCard = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.ComponentPropsWithoutRef<typeof Card> & ShoppingCardProps
>(({ className, image, title, ...props }, ref) => {
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

export { ShoppingCard };
