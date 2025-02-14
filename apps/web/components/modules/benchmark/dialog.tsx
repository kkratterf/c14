'use client';

import { Button } from '@c14/design-system/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@c14/design-system/components/ui/dialog';

import { BenchmarkBarList } from '@/components/modules/benchmark/charts';

type DialogBenchmarkProps = {
    items: {
        id?: string;
        tagid?: string;
        name: string;
        startups: number;
    }[]
}

export const DialogBenchmark = ({ items }: DialogBenchmarkProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">See all</Button>
            </DialogTrigger>
            <DialogContent className='rounded-xl p-0'>
                <DialogHeader className='border-border border-b px-5 py-4'>
                    <DialogTitle className='flex items-center justify-between'>
                        Startup by industry
                    </DialogTitle>
                </DialogHeader>
                <div className='relative max-h-96 overflow-y-auto p-5'>
                    <BenchmarkBarList
                        data={items}
                    />
                </div>
                <DialogFooter className='border-border border-t px-5 py-4'>
                    <DialogClose asChild>
                        <Button>
                            Go back
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}