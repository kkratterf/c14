"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@c14/design-system/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative bg-primary/20 rounded-full w-full h-1.5 overflow-hidden grow">
      <SliderPrimitive.Range className="absolute bg-primary h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block border-primary/50 bg-background disabled:opacity-50 shadow border rounded-full focus-visible:ring-1 focus-visible:ring-ring w-4 h-4 transition-colors disabled:pointer-events-none focus-visible:outline-none" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
