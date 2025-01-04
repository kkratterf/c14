"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@c14/design-system/lib/utils";

const avatarVariants = tv({
  base: ["relative flex shrink-0 overflow-hidden rounded-full"],
  variants: {
    size: {
      xs: "size-4 text-xs",
      sm: "size-6 text-xs",
      md: "text-sm size-8",
      lg: "text-sm size-9",
      xl: "size-10 text-base",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn(avatarVariants({ size }), className)} {...props} />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square size-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted text flex size-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

