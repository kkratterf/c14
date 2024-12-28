import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn, focusRing } from "@c14/design-system/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitive.List
    ref={forwardedRef}
    className={cn("border-default flex w-full items-center justify-start border-b", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitive.Trigger
    ref={forwardedRef}
    className={cn(
      "text-description text-sm [&>svg]:stroke-icon hover:text hover:border-item [&>svg]:hover:stroke-icon-active disabled:text-disabled [&>svg]:disabled:stroke-icon-disabled data-[state=active]:border-brand data-[state=active]:text-brand [&>svg]:data-[state=active]:stroke-icon-brand focus-visible:bg-item -mb-px inline-flex h-9 items-center justify-center gap-1 whitespace-nowrap border-b-2 border-transparent px-3 py-1 font-medium focus-visible:rounded-lg disabled:pointer-events-none data-[state=active]:focus-visible:border-0 [&>svg]:size-4 [&>svg]:stroke-2",
      focusRing,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitive.Content
    ref={forwardedRef}
    className={cn("text-sm mt-2 p-3 outline-none focus-visible:rounded-lg", focusRing, className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };

