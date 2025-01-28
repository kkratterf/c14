"use client"

import React from "react"

import type { AvailableChartColorsKeys } from "@c14/design-system/lib/chart"
import {
    AvailableChartColors,
    getColorClassName,
} from "@c14/design-system/lib/chart"
import { cn } from "@c14/design-system/lib/utils"
import { Tooltip } from "@c14/design-system/components/ui/tooltip"

const getMarkerBgColor = (
    marker: number | undefined,
    values: number[],
    colors: AvailableChartColorsKeys[],
): string => {
    if (marker === undefined) return ""

    if (marker === 0) {
        for (let index = 0; index < values.length; index++) {
            if (values[index] > 0) {
                return getColorClassName(colors[index], "bg")
            }
        }
    }

    let prefixSum = 0
    for (let index = 0; index < values.length; index++) {
        prefixSum += values[index]
        if (prefixSum >= marker) {
            return getColorClassName(colors[index], "bg")
        }
    }

    return getColorClassName(colors[values.length - 1], "bg")
}

const getPositionLeft = (
    value: number | undefined,
    maxValue: number,
): number => (value ? (value / maxValue) * 100 : 0)

const sumNumericArray = (arr: number[]) =>
    arr.reduce((prefixSum, num) => prefixSum + num, 0)

const formatNumber = (num: number): string => {
    if (Number.isInteger(num)) {
        return num.toString()
    }
    return num.toFixed(1)
}

const BarLabels = ({ values }: { values: number[] }) => {
    const sumValues = React.useMemo(() => sumNumericArray(values), [values])
    let prefixSum = 0
    let sumConsecutiveHiddenLabels = 0

    return (
        <div
            className={cn(
                // base
                "relative mb-2 flex h-5 w-full text-sm font-medium",
                // text color
                "text-description",
            )}
        >
            <div className="bottom-0 left-0 absolute flex items-center">0</div>
            {values.map((widthPercentage, index) => {
                prefixSum += widthPercentage

                const showLabel =
                    (widthPercentage >= 0.1 * sumValues ||
                        sumConsecutiveHiddenLabels >= 0.09 * sumValues) &&
                    sumValues - prefixSum >= 0.1 * sumValues &&
                    prefixSum >= 0.1 * sumValues &&
                    prefixSum < 0.9 * sumValues

                sumConsecutiveHiddenLabels = showLabel
                    ? 0
                    : (sumConsecutiveHiddenLabels += widthPercentage)

                const widthPositionLeft = getPositionLeft(widthPercentage, sumValues)

                return (
                    <div
                        key={`item-${index}`}
                        className="flex justify-end items-center pr-0.5"
                        style={{ width: `${widthPositionLeft}%` }}
                    >
                        {showLabel ? (
                            <span
                                className={cn("block translate-x-1/2 text-sm tabular-nums")}
                            >
                                {formatNumber(prefixSum)}
                            </span>
                        ) : null}
                    </div>
                )
            })}
            <div className="right-0 bottom-0 absolute flex items-center">
                {formatNumber(sumValues)}
            </div>
        </div>
    )
}

interface CategoryBarProps extends React.HTMLAttributes<HTMLDivElement> {
    values: number[]
    colors?: AvailableChartColorsKeys[]
    marker?: { value: number; tooltip?: string; showAnimation?: boolean }
    showLabels?: boolean
    showAnimation?: boolean
}

const CategoryBar = React.forwardRef<HTMLDivElement, CategoryBarProps>(
    (
        {
            values = [],
            colors = AvailableChartColors,
            marker,
            showLabels = true,
            showAnimation = true,
            className,
            ...props
        },
        forwardedRef,
    ) => {
        const markerBgColor = React.useMemo(
            () => getMarkerBgColor(marker?.value, values, colors),
            [marker, values, colors],
        )

        const maxValue = React.useMemo(() => sumNumericArray(values), [values])

        const adjustedMarkerValue = React.useMemo(() => {
            if (marker === undefined) return undefined
            if (marker.value < 0) return 0
            if (marker.value > maxValue) return maxValue
            return marker.value
        }, [marker, maxValue])

        const markerPositionLeft: number = React.useMemo(
            () => getPositionLeft(adjustedMarkerValue, maxValue),
            [adjustedMarkerValue, maxValue],
        )

        return (
            <div
                ref={forwardedRef}
                className={cn(className)}
                aria-label="Category bar"
                aria-valuenow={marker?.value}
                {...props}
            >
                {showLabels ? <BarLabels values={values} /> : null}
                <div className="relative flex items-center w-full h-2">
                    <div className="flex flex-1 items-center gap-0.5 rounded-full h-full overflow-hidden">
                        {values.map((value, index) => {
                            const barColor = colors[index] ?? "neutral"
                            const percentage = (value / maxValue) * 100
                            return (
                                <div
                                    key={`item-${index}`}
                                    className={cn(
                                        "h-full rounded-full",
                                        getColorClassName(
                                            barColor as AvailableChartColorsKeys,
                                            "bg",
                                        ),
                                        percentage === 0 && "hidden",
                                    )}
                                    style={{ width: `${percentage}%` }}
                                />
                            )
                        })}
                    </div>

                    {marker !== undefined ? (
                        <div
                            className={cn(
                                "absolute w-2 -translate-x-1/2",
                                marker.showAnimation &&
                                "transform-gpu transition-all duration-300 ease-in-out",
                            )}
                            style={{
                                left: `${markerPositionLeft}%`,
                            }}
                        >
                            {marker.tooltip ? (
                                <Tooltip content={marker.tooltip}>
                                    <button
                                        type="button"
                                        className={cn(
                                            "relative mx-auto h-4 w-1 rounded-full ring-2",
                                            "ring-background",
                                            markerBgColor,
                                        )}
                                    >
                                        <div
                                            aria-hidden
                                            className="absolute -translate-x-[45%] size-7"
                                        />
                                    </button>
                                </Tooltip>
                            ) : (
                                <div
                                    className={cn(
                                        "mx-auto h-4 w-1 rounded-full ring-2",
                                        "ring-background",
                                        markerBgColor,
                                    )}
                                />
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        )
    },
)

CategoryBar.displayName = "CategoryBar"

export { CategoryBar, type CategoryBarProps }