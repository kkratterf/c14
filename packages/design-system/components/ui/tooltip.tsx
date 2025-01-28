"use client";

import React from "react";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";

import { cn, focusRing } from "@c14/design-system/lib/utils";


const TooltipProvider = TooltipPrimitives.Provider

interface TooltipProps
  extends Omit<TooltipPrimitives.TooltipContentProps, "content" | "onClick">,
  Pick<TooltipPrimitives.TooltipProps, "open" | "defaultOpen" | "onOpenChange" | "delayDuration"> {
  content: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  side?: "bottom" | "left" | "top" | "right";
  showArrow?: boolean;
  triggerAsChild?: boolean;
}

const Tooltip = React.forwardRef<React.ComponentRef<typeof TooltipPrimitives.Content>, TooltipProps>(
  (
    {
      children,
      className,
      content,
      delayDuration,
      defaultOpen,
      open,
      onClick,
      onOpenChange,
      showArrow = false,
      side,
      sideOffset = 4,
      triggerAsChild = true,
      ...props
    }: TooltipProps,
    forwardedRef
  ) => {
    return (
      <TooltipPrimitives.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}>
        <TooltipPrimitives.Trigger
          className={cn("rounded-lg", focusRing)}
          onClick={onClick}
          asChild={triggerAsChild}>
          {children}
        </TooltipPrimitives.Trigger>
        <TooltipPrimitives.Portal>
          <TooltipPrimitives.Content
            ref={forwardedRef}
            side={side}
            sideOffset={sideOffset}
            align="center"
            className={cn(
              // base
              "text-sm bg-inverse text-inverse max-w-60 select-none rounded-lg px-3 py-[5px] leading-5 shadow-md",
              // transition
              "will-change-[transform,opacity]",
              "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-hide",
              className
            )}
            {...props}>
            {content}
            {showArrow ? (
              <TooltipPrimitives.Arrow
                className="bg-inverse border-none"
                width={12}
                height={7}
                aria-hidden="true"
              />
            ) : null}
          </TooltipPrimitives.Content>
        </TooltipPrimitives.Portal>
      </TooltipPrimitives.Root>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, TooltipProvider, type TooltipProps };