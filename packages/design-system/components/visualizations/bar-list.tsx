'use client';

import React from "react"

import { cn, focusRing } from "@c14/design-system/lib/utils"

type Bar<T> = T & {
    key?: string
    href?: string
    value: number
    name: string
}

interface BarListProps<T = unknown>
    extends React.HTMLAttributes<HTMLDivElement> {
    data: Bar<T>[]
    valueFormatter?: (value: number) => string
    showAnimation?: true
    onValueChange?: (payload: Bar<T>) => void
    sortOrder?: "ascending" | "descending" | "none"
}

function BarListInner<T>(
    {
        data = [],
        valueFormatter = (value) => value.toString(),
        showAnimation = true,
        onValueChange,
        sortOrder = "descending",
        className,
        ...props
    }: BarListProps<T>,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    const Component = onValueChange ? "button" : "div"
    const sortedData = React.useMemo(() => {
        if (sortOrder === "none") {
            return data
        }
        return [...data].sort((a, b) => {
            return sortOrder === "ascending" ? a.value - b.value : b.value - a.value
        })
    }, [data, sortOrder])

    const widths = React.useMemo(() => {
        const maxValue = Math.max(...sortedData.map((item) => item.value), 0)
        return sortedData.map((item) =>
            item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2),
        )
    }, [sortedData])

    const rowHeight = "h-8"

    return (
        <div
            ref={forwardedRef}
            className={cn("flex justify-between space-x-6", className)}
            aria-sort={sortOrder}
            {...props}
        >
            <div className="relative space-y-1.5 w-full">
                {sortedData.map((item, index) => (
                    <Component

                        key={item.key ?? item.name}
                        onClick={() => {
                            onValueChange?.(item)
                        }}
                        className={cn(
                            "group w-full rounded-lg",
                            focusRing,
                            onValueChange
                                ? ["!-m-0 cursor-pointer hover:bg-subtle"]
                                : "",
                        )}
                    >
                        <div
                            className={cn(
                                "flex items-center bg-brand-subtle rounded-lg transition-all",
                                rowHeight,
                                onValueChange
                                    ? "group-hover:bg-brand-subtle"
                                    : "",
                                {
                                    "mb-0": index === sortedData.length - 1,
                                    "duration-800": showAnimation,
                                },
                            )}
                            style={{ width: `${widths[index]}%` }}
                        >
                            <div className={cn("absolute left-2 flex max-w-full pr-2")}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className={cn(
                                            "truncate text hover:underline hover:underline-offset-2 whitespace-nowrap rounded-lg text-sm",
                                            focusRing,
                                        )}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event) => event.stopPropagation()}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <p
                                        className={cn(
                                            "truncate whitespace-nowrap text text-sm",
                                        )}
                                    >
                                        {item.name}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Component>
                ))}
            </div>
            <div>
                {sortedData.map((item, index) => (
                    <div
                        key={item.key ?? item.name}
                        className={cn(
                            "flex items-center justify-end",
                            rowHeight,
                            index === sortedData.length - 1 ? "mb-0" : "mb-1.5",
                        )}
                    >
                        <p
                            className={cn(
                                "truncate whitespace-nowrap text-description text-sm leading-none",
                            )}
                        >
                            {valueFormatter(item.value)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

BarListInner.displayName = "BarList"

const BarList = React.forwardRef(BarListInner) as <T>(
    p: BarListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof BarListInner>

export { BarList, type BarListProps }