import { founderFullName } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@c14/design-system/components/ui/avatar";
import { cn, focusRing } from "@c14/design-system/lib/utils";
import Link from "next/link";

interface MemberCardProps {
    founder: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        linkedin: string;
        firstName: string;
        lastName: string;
        photo: string | null;
    };
    role: string;
}
export const MemberCard = ({ founder, role }: MemberCardProps) => {
    return (
        <Link
            key={founder.id}
            target="_blank"
            href={founder.linkedin ?? ''}
            className={cn('rounded-2xl', focusRing)}
        >
            <div

                className='group flex flex-col gap-3 rounded-2xl border border-border bg-item p-4 shadow-sm hover:bg-subtle'
            >
                <Avatar className='size-14 overflow-hidden rounded-xl border border-border'>
                    <AvatarImage className='transition-all duration-400 group-hover:scale-105' src={founder.photo ?? undefined} />
                    <AvatarFallback className="rounded-xl">
                        {founderFullName(founder).slice(0, 2)}
                    </AvatarFallback>
                </Avatar>
                <div className='flex w-full flex-col'>
                    <p className="text-heading-body">{founderFullName(founder)}</p>
                    <p className="text-description text-sm">{role}</p>
                </div>
            </div>
        </Link>
    );
};