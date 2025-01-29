
import { Avatar, AvatarFallback, AvatarImage } from "@c14/design-system/components/ui/avatar";
import { cn, focusRing } from "@c14/design-system/lib/utils";
import Link from "next/link";

interface InvestorCardProps {
    investor: {
        id: string;
        name: string;
        linkedin: string;
        photo: string | null;
    };
}
export const InvestorCard = ({ investor }: InvestorCardProps) => {
    return (
        <Link
            key={investor.id}
            target="_blank"
            href={investor.linkedin ?? ''}
            className={cn('rounded-2xl', focusRing)}
        >
            <div
                key={investor.id}
                className='group flex flex-col gap-3 rounded-2xl border border-border bg-item p-4 shadow-sm hover:bg-subtle'
            >
                <Avatar className='size-14 rounded-xl border border-border'>
                    <AvatarImage className='transition-all duration-400 group-hover:scale-105' src={investor.photo ?? ""} />
                    <AvatarFallback className="rounded-xl">
                        {investor.name.slice(0, 2)}
                    </AvatarFallback>
                </Avatar>
                <div className='flex w-full flex-col'>
                    <p className="text-heading-body">{investor.name}</p>
                </div>
            </div>
        </Link>
    );
};