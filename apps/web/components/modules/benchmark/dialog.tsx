'use client';

import { BenchmarkBarList } from '@/components/modules/benchmark/charts';
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

type DialogBenchmarkProps = {
    items: {
        id?: string;
        tagid?: string;
        name: string;
        startups: number;
    }[]
}

export default function DialogBenchmark({ items }: DialogBenchmarkProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">See all</Button>
            </DialogTrigger>
            <DialogContent className='rounded-xl p-0'>
                <DialogHeader className='border-border border-b px-6 pt-6 pb-4'>
                    <DialogTitle className='flex items-center justify-between'>
                        Startup by industry
                    </DialogTitle>
                </DialogHeader>
                <div className='relative max-h-96 overflow-y-auto p-6'>
                    <BenchmarkBarList
                        data={items}
                    />
                </div>
                <DialogFooter className='border-border border-t px-6 pt-4 pb-6'>
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