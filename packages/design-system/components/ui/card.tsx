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
        "text-sm relative border-default bg-card w-full rounded-2xl border p-6 text-left shadow-sm",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export { Card, type CardProps };
