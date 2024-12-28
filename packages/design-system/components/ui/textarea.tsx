import React from "react";

import { cn, focusInput, hasErrorInput } from "@c14/design-system/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }: TextareaProps, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={cn(
          // base
          "text-md flex min-h-20 w-full rounded border px-3 py-1.5 shadow-sm outline-none transition-colors",
          // text color
          "text",
          // border color
          "border-item",
          // background color
          "bg-item",
          // placeholder color
          "placeholder:text-placeholder placeholder:text-md",
          // disabled
          "disabled:border-disabled disabled:bg-neutral-disabled disabled:text-disabled",
          // focus
          focusInput,
          // error
          hasError ? hasErrorInput : "",
          // invalid (optional)
          // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, type TextareaProps };