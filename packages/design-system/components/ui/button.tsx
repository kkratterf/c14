import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { LoaderCircle } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const buttonVariants = tv({
  base: [
    // base
    "relative flex text-md items-center justify-center whitespace-nowrap [&>svg]:stroke-[2.5px] [&>svg]:size-4 gap-1 rounded-lg border text-center font-medium shadow-sm transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        "border-transparent",
        // text color
        "text-inverse",
        // background color
        "bg-neutral",
        // hover color
        "hover:bg-neutral-hover",
        // active color
        "active:bg-neutral-active",
        // disabled
        "disabled:bg-neutral-disabled disabled:border-disabled disabled:text-disabled",
      ],
      secondary: [
        // border
        "border-item",
        // text color
        "text",
        // background color
        "bg-item",
        //hover color
        "hover:bg-item-hover",
        //hover color
        "active:bg-item-active dark:active:bg-item-selected",
        // disabled
        "disabled:text-disabled disabled:border-disabled disabled:bg-neutral-disabled",
      ],
      text: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text",
        // hover color
        "bg-transparent hover:bg-item-active active:bg-item-hover dark:active:bg-item-selected",
        // disabled
        "disabled:text-disabled",
      ],
      link: [
        // base
        "shadow-none underline underline-offset-4",
        // border
        "border-transparent",
        // text color
        "text-brand",
        // hover color
        "bg-transparent hover:text-brand-hover active:text-brand-active",
        // disabled
        "disabled:text-disabled",
      ],
      danger: [
        // text color
        "text-danger-inverse",
        // border
        "border-transparent",
        // background color
        "bg-danger",
        // hover color
        "hover:bg-danger-hover",
        // active color
        "active:bg-danger-active",
        // disabled
        "disabled:bg-neutral-disabled disabled:border-disabled disabled:text-disabled",
      ],
    },
    size: {
      default: "px-2.5 h-9",
      small: "px-2 h-8",
    },
    icon: {
      true: "",
    },
  },
  compoundVariants: [
    {
      size: "default",
      icon: true,
      class: "w-9",
    },
    {
      size: "small",
      icon: true,
      class: "w-8",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  size?: "default" | "small";
  icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      size = "default",
      icon = false,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size, icon }), className)}
        disabled={disabled || isLoading}
        {...props}>
        {isLoading ? (
          <span className="flex justify-center items-center gap-1 pointer-events-none shrink-0">
            <LoaderCircle className="animate-spin shrink-0 size-4" aria-hidden="true" />
            {!icon && <span className="sr-only">{loadingText ? loadingText : "Loading"}</span>}
            {!icon && (loadingText ? loadingText : children)}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };