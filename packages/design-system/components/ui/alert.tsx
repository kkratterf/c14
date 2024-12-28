import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@c14/design-system/lib/utils";

const alertVariants = tv({
  base: "flex flex-col overflow-hidden border rounded-lg p-4",
  variants: {
    variant: {
      default: ["text-default bg-subtle border-item"],
      brand: ["text-brand-strong bg-brand-subtlest border-brand-subtlest"],
      danger: ["text-danger-strong bg-danger-subtlest border-danger-subtlest"],
      warning: ["text-warning-strong bg-warning-subtlest border-warning-subtlest"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AlertProps extends React.ComponentPropsWithoutRef<"div">, VariantProps<typeof alertVariants> {
  title: string;
  icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ title, icon: Icon, className, variant, children, ...props }: AlertProps, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn(alertVariants({ variant }), className)} {...props}>
        <div className={cn("flex items-center justify-start")}>
          {Icon && <Icon className={cn("mr-1.5 size-5 shrink-0")} aria-hidden="true" />}
          <span className={cn("text-lg font-medium")}>{title}</span>
        </div>
        <div className={cn("text-md overflow-y-auto", children ? "mt-1" : "")}>{children}</div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants, type AlertProps };
