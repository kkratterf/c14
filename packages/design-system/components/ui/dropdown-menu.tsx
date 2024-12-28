"use client";

import * as React from "react";
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@c14/design-system/lib/utils";

const DropdownMenu = DropdownMenuPrimitives.Root;
DropdownMenu.displayName = "DropdownMenu";

const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger;
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuGroup = DropdownMenuPrimitives.Group;
DropdownMenuGroup.displayName = "DropdownMenuGroup";

const DropdownMenuSubMenu = DropdownMenuPrimitives.Sub;
DropdownMenuSubMenu.displayName = "DropdownMenuSubMenu";

const DropdownMenuRadioGroup = DropdownMenuPrimitives.RadioGroup;
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

const DropdownMenuSubMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubTrigger>
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.SubTrigger
    ref={forwardedRef}
    className={cn(
      // base
      "data-[state=checked]:text-brand text-md relative flex h-9 cursor-default select-none items-center gap-2 rounded-sm py-1 pl-3 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-active data-[state=open]:bg-item-active",
      // hover
      "hover:bg-item-active",
      className
    )}
    {...props}>
    {children}
    <ChevronRight
      className="ml-auto data-[disabled]:stroke-icon-disabled shrink-0 size-4 stroke-icon"
      aria-hidden="true"
    />
  </DropdownMenuPrimitives.SubTrigger>
));
DropdownMenuSubMenuTrigger.displayName = "DropdownMenuSubMenuTrigger";

const DropdownMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubContent>
>(({ className, collisionPadding = 12, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Portal>
    <DropdownMenuPrimitives.SubContent
      ref={forwardedRef}
      collisionPadding={collisionPadding}
      className={cn(
        // base
        "text-md relative z-50 overflow-hidden rounded border p-1 shadow-xl",
        // widths
        "min-w-32",
        // heights
        "max-h-[var(--radix-popper-available-height)]",
        // background color
        "bg-card",
        // border color
        "border-default",
        // transition
        "will-change-[transform,opacity]",
        // "data-[state=open]:animate-slideDownAndFade",
        "data-[state=closed]:animate-hide",
        "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitives.Portal>
));
DropdownMenuSubMenuContent.displayName = "DropdownMenuSubMenuContent";

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Content>
>(
  (
    { className, sideOffset = 4, collisionPadding = 8, align = "center", loop = true, ...props },
    forwardedRef
  ) => (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        ref={forwardedRef}
        className={cn(
          // base
          "text-md relative z-50 overflow-hidden rounded border p-1 shadow-lg",
          // widths
          "min-w-48",
          // heights
          "max-h-[var(--radix-popper-available-height)]",
          // background color
          "bg-card",
          // border color
          "border-default",
          // transition
          "will-change-[transform,opacity]",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className
        )}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        loop={loop}
        {...props}
      />
    </DropdownMenuPrimitives.Portal>
  )
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Item> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Item
    ref={forwardedRef}
    className={cn(
      // base
      "group/DropdownMenuItem text-md data-[state=checked]:text-brand relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-sm py-1 pl-3 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-active",
      // hover
      "hover:bg-item-active",
      className
    )}
    {...props}>
    {children}
    {hint && <span className={cn("text-description ml-auto pl-2 pr-1 text-sm")}>{hint}</span>}
    {shortcut && (
      <span className={cn("text-description ml-auto pl-2 pr-1 text-sm opacity-70")}>{shortcut}</span>
    )}
  </DropdownMenuPrimitives.Item>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.CheckboxItem> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, children, checked, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.CheckboxItem
    ref={forwardedRef}
    className={cn(
      // base
      "data-[state=checked]:text-brand text-md relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-sm py-1 pl-3 pr-8 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-active",
      // hover
      "hover:bg-item-active",
      className
    )}
    checked={checked}
    {...props}>
    <span className="right-3 absolute flex justify-center items-center size-4">
      <DropdownMenuPrimitives.ItemIndicator>
        <Check aria-hidden="true" className="text-brand shrink-0 size-full" />
      </DropdownMenuPrimitives.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitives.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.RadioItem> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.RadioItem
    ref={forwardedRef}
    className={cn(
      // base
      "group/DropdownMenuRadioItem text-md data-[state=checked]:text-brand relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-sm py-1 pl-3 pr-8 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-active",
      // hover
      "hover:bg-item-active",
      className
    )}
    {...props}>
    <span className="right-3 absolute flex justify-center items-center size-2">
      <Circle
        aria-hidden="true"
        className="group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden text-brand fill-current shrink-0 size-full"
      />
    </span>
    {children}
  </DropdownMenuPrimitives.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Label>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Label
    ref={forwardedRef}
    className={cn(
      // base
      "text-description text-md flex h-9 items-center justify-start px-3 font-medium tracking-wide",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitives.Separator
    ref={forwardedRef}
    className={cn("border-default -mx-1 my-1 h-px border-t", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSubMenuTrigger,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};