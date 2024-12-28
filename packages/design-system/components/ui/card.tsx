import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@c14/design-system/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={forwardedRef}
      className={cn(
        // base
        "text-sm relative w-full rounded-xl border p-6 text-left shadow-sm",
        // background color
        "bg-card",
        // border color
        "border-default",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export { Card, type CardProps };
