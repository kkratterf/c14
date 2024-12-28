import React from "react";
import * as LabelPrimitives from "@radix-ui/react-label";

import { cn } from "@c14/design-system/lib/utils";

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  disabled?: boolean;
}

const Label = React.forwardRef<React.ComponentRef<typeof LabelPrimitives.Root>, LabelProps>(
  ({ className, disabled, ...props }, forwardedRef) => (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cn(
        // base
        "text text-md leading-none",
        // disabled
        {
          "text-disabled": disabled,
        },
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
);

Label.displayName = "Label";

export { Label };
