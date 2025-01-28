"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@c14/design-system/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuSubMenu = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      // base
      "data-[state=checked]:text-brand text-sm relative flex h-9 cursor-default select-none items-center gap-2 rounded-md py-1 pl-3 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-hover data-[state=open]:bg-item-hover",
      // hover
      "hover:bg-item-hover",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight
      className="ml-auto data-[disabled]:stroke-icon-disabled shrink-0 size-4 stroke-icon"
      aria-hidden="true"
    />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, collisionPadding = 12, ...props }, forwardedRef) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.SubContent
      ref={forwardedRef}
      collisionPadding={collisionPadding}
      className={cn(
        // base
        "text-sm bg-elevated border-default min-w-32 max-h-[var(--radix-popper-available-height)] relative z-50 overflow-hidden rounded-lg border p-1 shadow-xl",
        // transition
        "will-change-[transform,opacity]",
        // "data-[state=open]:animate-slideDownAndFade",
        "data-[state=closed]:animate-hide",
        "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuSubMenuContent.displayName = "ContextMenuSubMenuContent";

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, collisionPadding = 12, loop = true, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      collisionPadding={collisionPadding}
      loop={loop}
      ref={ref}
      className={cn(
        // base
        "text-sm border-default bg-elevated max-h-[var(--radix-popper-available-height)] relative min-w-48 z-50 overflow-hidden rounded-lg border p-1 shadow-lg",
        // transition
        "will-change-[transform,opacity]",
        "data-[state=closed]:animate-hide",
        "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, shortcut, hint, children, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      // base
      "group/DropdownMenuItem text-sm data-[state=checked]:text-brand relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-md py-1 pl-3 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-hover",
      // hover
      "hover:bg-item-hover",
      className
    )}
    {...props}>
    {children}
    {hint && <span className={cn("text-description ml-auto pl-2 pr-1 text-sm")}>{hint}</span>}
    {shortcut && (
      <span className={cn("text-description ml-auto pl-2 pr-1 text-sm opacity-70")}>{shortcut}</span>
    )}
  </ContextMenuPrimitive.Item>
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, hint, shortcut, children, checked, ...props }, forwardedRef) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={forwardedRef}
    className={cn(
      // base
      "data-[state=checked]:text-brand text-sm relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-md py-1 pl-8 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-hover",
      // hover
      "hover:bg-item-hover",
      className
    )}
    checked={checked}
    {...props}>
    <span className="left-2 absolute flex justify-center items-center size-4">
      <ContextMenuPrimitive.ItemIndicator>
        <Check aria-hidden="true" className="text-brand shrink-0 size-full" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
    {hint && <span className={cn("text-description ml-auto pr-1 text-sm")}>{hint}</span>}
    {shortcut && (
      <span className={cn("text-description ml-auto pr-1 text-sm tracking-widest opacity-70")}>
        {shortcut}
      </span>
    )}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & {
    shortcut?: string;
    hint?: string;
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => (
  <ContextMenuPrimitive.RadioItem
    ref={forwardedRef}
    className={cn(
      // base
      "group/ContextMenuRadioItem text-sm data-[state=checked]:text-brand relative flex h-9 cursor-pointer select-none items-center gap-2 rounded-md py-1 pl-8 pr-1.5 outline-none transition-colors [&>svg]:size-4",
      // disabled
      "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
      // focus
      "focus-visible:bg-item-hover",
      // hover
      "hover:bg-item-hover",
      className
    )}
    {...props}>
    <span className="left-3 absolute flex justify-center items-center size-2">
      <Circle
        aria-hidden="true"
        className="group-data-[state=checked]/ContextMenuRadioItem:flex group-data-[state=unchecked]/ContextMenuRadioItem:hidden text-brand fill-current shrink-0 size-full"
      />
    </span>
    {children}
    {hint && <span className={cn("text-description ml-auto pr-1 text-sm")}>{hint}</span>}
    {shortcut && (
      <span className={cn("text-description ml-auto pr-1 text-sm tracking-widest opacity-70")}>
        {shortcut}
      </span>
    )}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>(({ className, ...props }, forwardedRef) => (
  <ContextMenuPrimitive.Label
    ref={forwardedRef}
    className={cn(
      "text-description text-sm flex h-9 items-center justify-start px-3 font-medium tracking-wide",
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = "ContextMenuLabel";

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, forwardedRef) => (
  <ContextMenuPrimitive.Separator
    ref={forwardedRef}
    className={cn("border-default text-sm -mx-1 my-1 h-px border-t", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = "ContextMenuSeparator";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuSubTrigger,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuGroup,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuSeparator,
};