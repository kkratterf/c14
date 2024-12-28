import * as React from "react";

import { cn } from "@c14/design-system/lib/utils";

const TableRoot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      // Activate if table is used in a float environment
      // className="flow-root"
    >
      <div
        // make table scrollable on mobile
        className={cn("text-md w-full overflow-auto whitespace-nowrap", className)}
        {...props}>
        {children}
      </div>
    </div>
  )
);
TableRoot.displayName = "TableRoot";

const Table = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, forwardedRef) => (
    <table
      ref={forwardedRef}
      className={cn("border-default w-full caption-bottom border-b", className)}
      {...props}
    />
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, forwardedRef) => (
    <thead ref={forwardedRef} className={cn("", className)} {...props} />
  )
);
TableHeader.displayName = "TableHeader";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, forwardedRef) => (
    <th
      ref={forwardedRef}
      className={cn(
        "border-b-default text-description text-md h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&_tr]:border-b",
        className
      )}
      {...props}
    />
  )
);
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, forwardedRef) => (
    <tbody ref={forwardedRef} className={cn("", className)} {...props} />
  )
);
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, forwardedRef) => (
    <tr
      ref={forwardedRef}
      className={cn(
        "border-b-default text-md hover:bg-item-hover data-[state=selected]:bg-item-active border-b transition-colors",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, forwardedRef) => (
    <td ref={forwardedRef} className={cn("h-12 px-4 py-1 align-middle", className)} {...props} />
  )
);
TableCell.displayName = "TableCell";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, forwardedRef) => (
    <tfoot
      ref={forwardedRef}
      className={cn("bg-item-hover text-md w-full font-medium", className)}
      {...props}
    />
  )
);
TableFooter.displayName = "TableFooter";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, forwardedRef) => (
    <caption
      ref={forwardedRef}
      className={cn("text-description text-md mt-4 px-3 text-center", className)}
      {...props}
    />
  )
);
TableCaption.displayName = "TableCaption";

export {
  TableRoot,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
