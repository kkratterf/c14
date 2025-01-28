import type React from "react"

import { Card } from "@c14/design-system/components/ui/card"
import { Separator } from "@c14/design-system/components/ui/separator"

import { NumberTicker } from "@/components/ui/number-ticker"

type BenchmarkSmallCardProps = {
    title: string
    value: number
}

export const BenchmarkSmallCard = ({ title, value }: BenchmarkSmallCardProps) => {
    return (
        <Card className='flex flex-col gap-1'>
            <p className='font-mono text-description text-sm'>{title}</p>
            <NumberTicker
                className=
                'font-brand text-3xl'
                value={value}
            />
        </Card>
    )
}

type BenchmarkLargeCardProps = {
    title: string
    children: React.ReactNode
    customHeader?: boolean
    header?: React.ReactNode
}

export const BenchmarkLargeCard = ({ title, children, customHeader, header }: BenchmarkLargeCardProps) => {
    return (
        <Card className='flex flex-col rounded-xl border border-border bg-card p-0 shadow-sm'>
            {customHeader ? header : <h2 className='px-5 py-4 font-brand text-xl'>{title}</h2>}
            <Separator />
            {children}
        </Card>
    )
}