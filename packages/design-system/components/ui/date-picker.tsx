"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { addYears, format, isSameMonth } from "date-fns";
import {
  DayPicker,
  useDayPicker,
  useDayRender,
  useNavigation,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
  type Matcher,
} from "react-day-picker";

import { cn, focusRing } from "@c14/design-system/lib/utils";

interface NavigationButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: React.ElementType;
  disabled?: boolean;
}

const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ onClick, icon, disabled, ...props }: NavigationButtonProps, forwardedRef) => {
    const Icon = icon;
    return (
      <button
        ref={forwardedRef}
        type="button"
        disabled={disabled}
        className={cn(
          "group flex border-item size-7 shrink-0 select-none items-center justify-center rounded-lg border p-1 outline-none transition",
          // hover & active
          "hover:bg-item-hover active:bg-item-active",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-disabled",
          "disabled:stroke-icon-disabled",
          focusRing
        )}
        onClick={onClick}
        {...props}>
        <Icon className="shrink-0 size-4 stroke-2 stroke-icon-active" />
      </button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

type CalendarProps =
  | ({
    mode: "single";
  } & SingleProps)
  | ({
    mode?: undefined;
  } & SingleProps)
  | ({
    mode: "range";
  } & RangeProps);

const Calendar = ({
  mode = "single",
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation,
  locale,
  className,
  classNames,
  ...props
}: CalendarProps & { enableYearNavigation?: boolean }) => {
  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cn(className)}
      classNames={{
        months: "flex space-y-0 text-sm",
        month: "space-y-4 p-3 text-sm",
        nav: "gap-1 text-sm flex items-center rounded-full size-full justify-between p-4",
        table: "w-full border-collapse space-y-1 text-sm",
        head_cell: "w-9 text-xs text-center text-description pb-2",
        row: "w-full mt-0.5 ",
        cell: cn("relative p-0 text-center focus-within:relative", "text text-sm"),
        day: cn("text size-9 rounded-lg focus:z-10", "hover:bg-item-hover text-sm", focusRing),
        day_today: "font-medium",
        day_selected: cn("rounded-lg", "aria-selected:bg-neutral aria-selected:text-inverse"),
        day_disabled: "!text-disabled line-through disabled:hover:bg-transparent",
        day_outside: "text-disabled",
        day_range_middle: cn("!rounded-none", "aria-selected:!text aria-selected:bg-item-active"),
        day_range_start: "rounded-r-none !rounded-l",
        day_range_end: "rounded-l-none !rounded-r",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft aria-hidden="true" className="size-4" />,
        IconRight: () => <ChevronRight aria-hidden="true" className="size-4" />,
        Caption: ({ ...props }) => {
          const { goToMonth, nextMonth, previousMonth, currentMonth, displayMonths } = useNavigation();
          const { numberOfMonths, fromDate, toDate } = useDayPicker();

          const displayIndex = displayMonths.findIndex((month) => isSameMonth(props.displayMonth, month));
          const isFirst = displayIndex === 0;
          const isLast = displayIndex === displayMonths.length - 1;

          const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast);
          const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst);

          const goToPreviousYear = () => {
            const targetMonth = addYears(currentMonth, -1);
            if (previousMonth && (!fromDate || targetMonth.getTime() >= fromDate.getTime())) {
              goToMonth(targetMonth);
            }
          };

          const goToNextYear = () => {
            const targetMonth = addYears(currentMonth, 1);
            if (nextMonth && (!toDate || targetMonth.getTime() <= toDate.getTime())) {
              goToMonth(targetMonth);
            }
          };

          return (
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-1">
                {enableYearNavigation && !hidePreviousButton && (
                  <NavigationButton
                    disabled={
                      disableNavigation ||
                      !previousMonth ||
                      (fromDate && addYears(currentMonth, -1).getTime() < fromDate.getTime())
                    }
                    aria-label="Go to previous year"
                    onClick={goToPreviousYear}
                    icon={ChevronsLeft}
                  />
                )}
                {!hidePreviousButton && (
                  <NavigationButton
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous month"
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                    icon={ChevronLeft}
                  />
                )}
              </div>

              <div
                role="presentation"
                aria-live="polite"
                className="font-medium capitalize tabular-nums text">
                {format(props.displayMonth, "LLLL yyy", { locale })}
              </div>

              <div className="flex items-center gap-1">
                {!hideNextButton && (
                  <NavigationButton
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next month"
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                    icon={ChevronRight}
                  />
                )}
                {enableYearNavigation && !hideNextButton && (
                  <NavigationButton
                    disabled={
                      disableNavigation ||
                      !nextMonth ||
                      (toDate && addYears(currentMonth, 1).getTime() > toDate.getTime())
                    }
                    aria-label="Go to next year"
                    onClick={goToNextYear}
                    icon={ChevronsRight}
                  />
                )}
              </div>
            </div>
          );
        },
        Day: ({ date, displayMonth }: DayProps) => {
          const buttonRef = React.useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;
          const { activeModifiers, buttonProps, divProps, isButton, isHidden } = useDayRender(
            date,
            displayMonth,
            buttonRef
          );

          const { selected, today, disabled, range_middle } = activeModifiers;

          if (isHidden) {
            return <></>;
          }

          if (!isButton) {
            return (
              <div
                {...divProps}
                className={cn("text-sm flex items-center justify-center", divProps.className)}
              />
            );
          }

          const { children: buttonChildren, className: buttonClassName, ...buttonPropsRest } = buttonProps;

          return (
            <button
              ref={buttonRef}
              {...buttonPropsRest}
              type="button"
              className={cn("relative", buttonClassName)}>
              {buttonChildren}
              {today && (
                <span
                  className={cn(
                    "text-sm absolute inset-x-1/2 bottom-1.5 h-0.5 w-4 -translate-x-1/2 rounded-[2px]",
                    {
                      "bg-brand": !selected,
                      "!bg-background": selected,
                      "!bg-inverse": selected && range_middle,
                      "bg-neutral-disabled text-disabled": disabled,
                    }
                  )}
                />
              )}
            </button>
          );
        },
      }}
      {...(props as SingleProps & RangeProps)}
    />
  );
};

Calendar.displayName = "Calendar";

export { Calendar, type Matcher };
