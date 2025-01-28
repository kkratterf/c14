import * as React from "react";
import * as SheetPrimitives from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn, focusRing } from "@c14/design-system/lib/utils";
import { Button } from "@c14/design-system/components/ui/button";

const Sheet = (props: React.ComponentPropsWithoutRef<typeof SheetPrimitives.Root>) => {
  return <SheetPrimitives.Root {...props} />;
};
Sheet.displayName = "Sheet";

const SheetTrigger = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Trigger>
>(({ className, ...props }, ref) => {
  return <SheetPrimitives.Trigger ref={ref} className={cn(className)} {...props} />;
});
SheetTrigger.displayName = "Sheet.Trigger";

const SheetClose = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Close>
>(({ className, ...props }, ref) => {
  return <SheetPrimitives.Close ref={ref} className={cn(className)} {...props} />;
});
SheetClose.displayName = "Sheet.Close";

const SheetPortal = SheetPrimitives.Portal;

SheetPortal.displayName = "SheetPortal";

const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Overlay>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SheetPrimitives.Overlay
      ref={forwardedRef}
      className={cn(
        // base
        "text-sm bg-mask fixed inset-0 z-50 overflow-y-auto",
        // transition
        "data-[state=closed]:animate-hide data-[state=open]:animate-dialogOverlayShow",
        className
      )}
      {...props}
      style={{
        animationDuration: "400ms",
        animationFillMode: "backwards",
      }}
    />
  );
});

SheetOverlay.displayName = "SheetOverlay";

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SheetPortal>
      <SheetOverlay>
        <SheetPrimitives.Content
          ref={forwardedRef}
          className={cn(
            // base
            "text-sm bg-elevated border-default fixed inset-y-2 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-xl border p-4 shadow-lg focus:outline-none max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6",
            // transition
            "data-[state=closed]:animate-drawerSlideRightAndFade data-[state=open]:animate-drawerSlideLeftAndFade",
            focusRing,
            className
          )}
          {...props}>
          {children}
        </SheetPrimitives.Content>
      </SheetOverlay>
    </SheetPortal>
  );
});

SheetContent.displayName = "SheetContent";

const SheetHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="flex justify-between items-start gap-x-4 border-default pb-4 border-b"
        {...props}>
        <div className={cn("mt-1 flex flex-col gap-y-1", className)}>{children}</div>
        <SheetPrimitives.Close asChild>
          <Button size="small" icon={true} variant="text">
            <X className="size-6" aria-hidden="true" />
          </Button>
        </SheetPrimitives.Close>
      </div>
    );
  }
);

SheetHeader.displayName = "Sheet.Header";

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Title>
>(({ className, ...props }, forwardedRef) => (
  <SheetPrimitives.Title ref={forwardedRef} className={cn("text text-heading-body", className)} {...props} />
));

SheetTitle.displayName = "SheetTitle";

const SheetBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex-1 py-4", className)} {...props} />;
  }
);

SheetBody.displayName = "Sheet.Body";

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitives.Description>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SheetPrimitives.Description
      ref={forwardedRef}
      className={cn("text-description text-sm", className)}
      {...props}
    />
  );
});

SheetDescription.displayName = "SheetDescription";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "border-default text-sm flex flex-col-reverse border-t pt-4 sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};

SheetFooter.displayName = "SheetFooter";

export {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
