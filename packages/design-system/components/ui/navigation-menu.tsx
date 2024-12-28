import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { tv, type VariantProps } from "tailwind-variants";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("text-sm relative z-10 flex flex-1 items-center justify-center", className)}
    {...props}>
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const navigationMenuVariants = tv({
  base: ["group text-sm flex list-none gap-1 items-center justify-start"],
  variants: {
    orientation: {
      horizontal: ["flex-row"],
      vertical: ["flex-col"],
    },
    size: {
      default: ["h-9 px-2.5"],
      small: ["h-8 px-2"],
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const NavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> &
    VariantProps<typeof navigationMenuVariants>
>(({ className, orientation, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(navigationMenuVariants({ orientation }), className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item ref={ref} className={cn(className)} {...props}>
    {children}
  </NavigationMenuPrimitive.Item>
));
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> &
    VariantProps<typeof navigationMenuVariants>
>(({ className, children, size = "default", ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={cn(
      navigationMenuVariants({ size }),
      "text-description text-sm group flex w-max cursor-pointer items-center justify-center gap-1 rounded-lg font-medium transition-colors [&>svg]:size-4",
      "hover:bg-item-active hover:text",
      "data-[active]:text-brand",
      "disabled:bg-neutral-disabled disabled:text-disabled disabled:pointer-events-none",
      focusRing,
      className
    )}
    {...props}>
    {children}
  </NavigationMenuPrimitive.Link>
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };
