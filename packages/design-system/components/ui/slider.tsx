"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn, focusRing } from "@c14/design-system/lib/utils";

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ariaLabelThumb?: string;
}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, ariaLabelThumb, ...props }, forwardedRef) => {
    const value = props.value || props.defaultValue;
    return (
      <SliderPrimitive.Root
        ref={forwardedRef}
        className={cn(
          // base
          "relative flex cursor-pointer touch-none select-none",
          // orientation
          "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
          "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
          // disabled
          "data-[disabled]:pointer-events-none",
          className
        )}
        {...props}>
        <SliderPrimitive.Track
          className={cn(
            // base
            "bg-muted relative grow overflow-hidden rounded-full",
            // orientation
            "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
            "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5"
          )}>
          <SliderPrimitive.Range
            className={cn(
              // base
              "bg-neutral absolute rounded-full",
              // orientation
              "data-[orientation='horizontal']:h-full",
              "data-[orientation='vertical']:w-full",
              // disabled
              "data-[disabled]:opacity-30"
            )}
          />
        </SliderPrimitive.Track>
        {value?.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className={cn(
              // base
              "block size-[17px] shrink-0 rounded-full border shadow-sm transition-colors",
              // boder color
              "border-item-hover",
              // background color
              "bg-white",
              // disabled
              "data-[disabled]:border-disabled data-[disabled]:bg-neutral-disabled data-[disabled]:pointer-events-none data-[disabled]:shadow-none",
              focusRing,
              "focus-visible:outline-brand-subtlest focus-visible:border-brand outline-offset-0"
            )}
            aria-label={ariaLabelThumb}
          />
        ))}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
