import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@c14/design-system/lib/utils";

const progressVariants = tv({
  slots: {
    background: "",
    bar: "",
  },
  variants: {
    variant: {
      default: {
        background: "bg-muted",
        bar: "bg-inverse",
      },
      brand: {
        background: "bg-brand-subtle",
        bar: "bg-brand",
      },
      danger: {
        background: "bg-danger-subtle",
        bar: "bg-danger",
      },
      warning: {
        background: "bg-warning-subtle",
        bar: "bg-warning",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ProgressProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  showAnimation?: boolean;
  label?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    { value = 0, max = 100, label, showAnimation = false, variant, className, ...props }: ProgressProps,
    forwardedRef
  ) => {
    const safeValue = Math.min(max, Math.max(value, 0));
    const { background, bar } = progressVariants({ variant });
    return (
      <div ref={forwardedRef} className={cn("flex w-full items-center", className)} {...props}>
        <div
          className={cn("relative flex h-2 w-full items-center rounded-full", background())}
          aria-label="progress bar"
          aria-valuenow={value}
          aria-valuemax={max}>
          <div
            className={cn(
              "h-full flex-col rounded-full",
              bar(),
              showAnimation && "transform-gpu transition-all duration-300 ease-in-out"
            )}
            style={{
              width: max ? `${(safeValue / max) * 100}%` : `${safeValue}%`,
            }}
          />
        </div>
        {label ? (
          <span className={cn("text-md ml-2 whitespace-nowrap font-medium leading-none")}>{label}</span>
        ) : null}
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress, progressVariants, type ProgressProps };
