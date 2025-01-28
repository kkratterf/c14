import React from "react";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, checked, ...props }, forwardedRef) => {
  return (
    <CheckboxPrimitives.Root
      ref={forwardedRef}
      {...props}
      checked={checked}
      className={cn(
        // base
        "text-sm border-item bg-card text-white relative inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded-md border shadow-sm outline-none transition duration-100 enabled:cursor-pointer",
        // disabled
        "data-[disabled]:bg-neutral-disabled data-[disabled]:text-disabled data-[disabled]:border-disabled",
        // checked and enabled
        "enabled:data-[state=checked]:bg-brand enabled:data-[state=checked]:border-none enabled:data-[state=checked]:border-transparent",
        // indeterminate
        "enabled:data-[state=indeterminate]:bg-brand enabled:data-[state=indeterminate]:border-none enabled:data-[state=indeterminate]:border-transparent",
        // focus
        focusRing,
        className
      )}>
      <CheckboxPrimitives.Indicator asChild className="flex justify-center items-center size-full">
        {checked === "indeterminate" ? (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              x1="4"
              x2="12"
              y1="8"
              y2="8"></line>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.2 5.59998L6.79999 9.99998L4.79999 7.99998"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"></path>
          </svg>
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
