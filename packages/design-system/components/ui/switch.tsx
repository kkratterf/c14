import React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, "asChild">
>(({ className, ...props }, forwardedRef) => {
  return (
    <SwitchPrimitives.Root
      ref={forwardedRef}
      className={cn(
        "border-item bg-muted group relative isolate inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border p-px shadow-inner outline-none transition-all",
        "data-[state=checked]:bg-brand data-[state=checked]:border-brand-active",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        focusRing,
        className
      )}
      {...props}>
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none relative inline-block size-4 appearance-none rounded-full border-none shadow-lg outline-none transition-all duration-150 ease-in-out focus:border-none focus:outline-none focus:outline-transparent data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "bg-white",
          "group-data-[disabled]:shadow-none"
        )}
      />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = "Switch";

export { Switch };
