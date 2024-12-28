import React from "react";
import { Eye, EyeOff, Search } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn, focusInput, focusRing, hasErrorInput } from "@c14/design-system/lib/utils";

const inputStyles = tv({
  base: [
    // base
    "relative block items-center text-md w-full h-9 appearance-none rounded border px-3 py-1.5 shadow-sm outline-none transition",
    // border color
    "border-item",
    // text color
    "text",
    // placeholder color
    "placeholder:text-placeholder",
    // background color
    "bg-item",
    // disabled
    "disabled:border-disabled disabled:bg-neutral-disabled disabled:text-disabled",
    // file
    [
      "file:-my-2 file:-ml-3 file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:px-3 file:py-2 file:outline-none focus:outline-none disabled:pointer-events-none file:disabled:pointer-events-none",
      "file:border-solid file:border-item file:bg-item-hover file:text-placeholder file:hover:bg-item-active",
      "file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]",
      "file:disabled:bg-neutral-disabled file:disabled:text-disabled",
    ],
    // focus
    focusInput,
    // remove search cancel button (optional)
    "[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
    // number input
    enableStepper: {
      false:
        "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
    },
  },
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyles> {
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputClassName, hasError, enableStepper = true, type, ...props }: InputProps,
    forwardedRef
  ) => {
    const [typeState, setTypeState] = React.useState(type);

    const isPassword = type === "password";
    const isSearch = type === "search";

    return (
      <div className={cn("relative w-full", className)}>
        <input
          ref={forwardedRef}
          type={isPassword ? typeState : type}
          className={cn(
            inputStyles({ hasError, enableStepper }),
            {
              "pl-9": isSearch,
              "pr-10": isPassword,
            },
            inputClassName
          )}
          {...props}
        />
        {isSearch && (
          <div
            className={cn(
              // base
              "pointer-events-none absolute bottom-0 left-3 flex h-full items-center justify-center"
            )}>
            <Search className="shrink-0 size-4 stroke-icon" aria-hidden="true" />
          </div>
        )}
        {isPassword && (
          <div className={cn("absolute bottom-0 right-0 flex h-full items-center justify-center px-3")}>
            <button
              aria-label="Change password visibility"
              className={cn(
                // base
                "size-fit rounded-sm outline-none transition-all",
                focusRing
              )}
              type="button"
              onClick={() => {
                setTypeState(typeState === "password" ? "text" : "password");
              }}>
              <span className="sr-only">{typeState === "password" ? "Show password" : "Hide password"}</span>
              {typeState === "password" ? (
                <Eye aria-hidden="true" className="hover:stroke-icon-hover shrink-0 size-4 stroke-icon" />
              ) : (
                <EyeOff aria-hidden="true" className="hover:stroke-icon-hover shrink-0 size-4 stroke-icon" />
              )}
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputStyles, type InputProps };

