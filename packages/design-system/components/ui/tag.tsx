import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@c14/design-system/lib/utils";

const tagVariants = tv({
  base: cn(
    "inline-flex h-6 items-center gap-1 whitespace-nowrap rounded border px-2 py-1 text-sm font-medium [&>svg]:size-[14px] [&>svg]:stroke-2"
  ),
  variants: {
    variant: {
      brand:
        "bg-chart-brand-subtlest text-chart-brand-strong stroke-icon-chart-brand-strong border-chart-brand-subtlest",
      neutral:
        "bg-chart-neutral-subtlest text-chart-neutral-strong stroke-icon-chart-neutral-strong border-chart-neutral-subtlest",
      red: "bg-chart-red-subtlest text-chart-red-strong stroke-icon-chart-red-strong border-chart-red-subtlest",
      amber:
        "bg-chart-amber-subtlest text-chart-amber-strong stroke-icon-chart-amber-strong border-chart-amber-subtlest",
      emerald:
        "bg-chart-emerald-subtlest text-chart-emerald-strong stroke-icon-chart-emerald-strong border-chart-emerald-subtlest",
      teal: "bg-chart-teal-subtlest text-chart-teal-strong stroke-icon-chart-teal-strong border-chart-teal-subtlest",
      cyan: "bg-chart-cyan-subtlest text-chart-cyan-strong stroke-icon-chart-cyan-strong border-chart-cyan-subtlest",
      blue: "bg-chart-blue-subtlest text-chart-blue-strong stroke-icon-chart-blue-strong border-chart-blue-subtlest",
      purple:
        "bg-chart-purple-subtlest text-chart-purple-strong stroke-icon-chart-purple-strong border-chart-purple-subtlest",
      pink: "bg-chart-pink-subtlest text-chart-pink-strong stroke-icon-chart-pink-strong border-chart-pink-subtlest",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

interface TagProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, ...props }: TagProps, forwardedRef) => {
    return <span ref={forwardedRef} className={cn(tagVariants({ variant }), className)} {...props} />;
  }
);

Tag.displayName = "Tag";

export { Tag, tagVariants, type TagProps };
