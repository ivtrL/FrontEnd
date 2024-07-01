import * as React from "react";
import { CarouselItem } from "./carousel";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardItemVariants = cva(
  "flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-lg",
  {
    variants: {
      size: {
        default: "w-96 h-96",
        sm: "w-80 h-80",
        lg: "w-104 h-104",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface CardItemProps
  extends React.ComponentPropsWithoutRef<typeof CarouselItem>,
    VariantProps<typeof cardItemVariants> {}

const CardItem = React.forwardRef<
  React.ElementRef<typeof CarouselItem>,
  CardItemProps
>(({ className, size, ...props }, ref) => {
  return (
    <CarouselItem
      className={cn(cardItemVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  );
});

CardItem.displayName = "CardItem";

export default CardItem;
