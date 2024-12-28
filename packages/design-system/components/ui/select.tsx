import React from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, ChevronsUpDown, Check } from "lucide-react";

import { cn, focusInput, hasErrorInput } from "@c14/design-system/lib/utils";

const Select = SelectPrimitives.Root;
Select.displayName = "Select";

const SelectGroup = SelectPrimitives.Group;
SelectGroup.displayName = "SelectGroup";

const SelectValue = SelectPrimitives.Value;
SelectValue.displayName = "SelectValue";

const selectTriggerStyles = [
  cn(
    // base
    "group/trigger text-md flex h-9 w-full select-none items-center justify-between gap-1 truncate rounded-lg border px-3 py-1 shadow-sm outline-none transition",
    // border color
    "border-item",
    // text color
    "text",
    // placeholder
    "data-[placeholder]:text-placeholder",
    // background color
    "bg-item",
    // hover
    "hover:bg-item-hover",
    // disabled
    "data-[disabled]:bg-neutral-disabled data-[disabled]:text-disabled data-[disabled]:border-disabled data-[disabled]:pointer-events-none",
    focusInput
  ),
];

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger> & {
    hasError?: boolean;
  }
>(({ className, hasError, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitives.Trigger
      ref={forwardedRef}
      className={cn(selectTriggerStyles, hasError ? hasErrorInput : "", className)}
      {...props}>
      <span className="truncate">{children}</span>
      <SelectPrimitives.Icon asChild>
        <ChevronsUpDown
          className={cn(
            // base
            "size-4 shrink-0",
            // text color
            "stroke-icon",
            // disabled
            "group-data-[disabled]/trigger:stroke-icon-disabled"
          )}
        />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
  );
});

SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ScrollUpButton>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.ScrollUpButton
    ref={forwardedRef}
    className={cn("group flex cursor-default items-center justify-center pb-2 pt-1", className)}
    {...props}>
    <ChevronUp className="group-hover:stroke-icon-hover shrink-0 size-4 stroke-icon" aria-hidden="true" />
  </SelectPrimitives.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitives.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.ScrollDownButton>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.ScrollDownButton
    ref={forwardedRef}
    className={cn("group flex cursor-default items-center justify-center pb-1 pt-2", className)}
    {...props}>
    <ChevronDown className="group-hover:stroke-icon-hover shrink-0 size-4 stroke-icon" aria-hidden="true" />
  </SelectPrimitives.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitives.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(
  (
    { className, position = "popper", children, sideOffset = 4, collisionPadding = 12, ...props },
    forwardedRef
  ) => (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        ref={forwardedRef}
        className={cn(
          // base
          "text-md relative z-50 overflow-hidden rounded-lg border shadow-lg",
          // widths
          "min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[95vw]",
          // heights
          "max-h-[--radix-select-content-available-height]",
          // background color
          "bg-card",
          // text color
          "text",
          // border color
          "border-default",
          // transition
          "will-change-[transform,opacity]",
          // "data-[state=open]:animate-slideDownAndFade",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className
        )}
        sideOffset={sideOffset}
        position={position}
        collisionPadding={collisionPadding}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitives.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width))]"
          )}>
          {children}
        </SelectPrimitives.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  )
);

SelectContent.displayName = "SelectContent";

const SelectGroupLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Label>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.Label
    ref={forwardedRef}
    className={cn(
      // base
      "text-md h-9 px-3 py-2 font-medium tracking-wide",
      // text color
      "text-description",
      className
    )}
    {...props}
  />
));

SelectGroupLabel.displayName = "SelectGroupLabel";

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitives.Item
      ref={forwardedRef}
      className={cn(
        // base
        "data-[state=checked]:text-brand text-md data-[state=checked]:stroke-icon-brand flex h-9 cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-1 outline-none transition-colors",
        // text color
        "text",
        // disabled
        "data-[disabled]:text-disabled data-[disabled]:pointer-events-none data-[disabled]:hover:bg-none",
        // focus
        "focus-visible:bg-item-active",
        // hover
        "hover:bg-item-active",
        className
      )}
      {...props}>
      <SelectPrimitives.ItemText className="flex-1 truncate">{children}</SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator>
        <Check className="shrink-0 size-4 stroke-icon-brand" aria-hidden="true" />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
});

SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitives.Separator
    ref={forwardedRef}
    className={cn(
      // base
      "-mx-1 my-1 h-px",
      // background color
      "bg-border",
      className
    )}
    {...props}
  />
));

SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
