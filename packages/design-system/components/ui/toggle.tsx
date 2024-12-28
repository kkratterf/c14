"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const toggleVariants = tv({
  base: [
    // base
    "text text-md bg-item border border-item shadow-sm inline-flex items-center justify-center gap-1 rounded-lg px-2 transition-colors",
    // icon
    "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-icon-active",
    // hover
    "hover:bg-item-hover cursor-pointer",
    // active
    "data-[state=on]:bg-brand-subtle data-[state=on]:border-brand-subtle data-[state=on]:text-brand-strong [&>svg]:data-[state=on]:stroke-icon-brand-strong hover:data-[state=on]:bg-brand-subtle",
    // focus
    focusRing,
    // disabled
    "disabled:bg-neutral-disabled disabled:text-disabled disabled:border-disabled disabled:shadow-none [&>svg]:disabled:stroke-icon-disabled disabled:pointer-events-none",
  ],
  variants: {
    size: {
      default: "h-9 min-w-9",
      small: "h-8 min-w-8 px-1.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, size, ...props }, forwardedRef) => (
  <TogglePrimitive.Root ref={forwardedRef} className={cn(toggleVariants({ size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

