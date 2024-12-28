import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@c14/design-system/lib/utils";

const skeletonVariants = tv({
  base: cn("bg-muted animate-pulse"),
  variants: {
    shape: {
      line: "h-4 w-full rounded",
      circle: "h-9 w-9 rounded-full",
    },
  },
  defaultVariants: {
    shape: "line",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, shape, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ shape }), className)} {...props} />;
}

export { Skeleton, skeletonVariants };
