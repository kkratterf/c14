import type { Startup } from '@prisma/client'
import Link from 'next/link';

import { InvestorCard } from '@/components/ui/investor-card';
import { MemberCard } from '@/components/ui/member-card';
import { Avatar, AvatarFallback, AvatarImage } from "@c14/design-system/components/ui/avatar";
import { Button } from "@c14/design-system/components/ui/button";
import { Separator } from "@c14/design-system/components/ui/separator";
import { Tag } from "@c14/design-system/components/ui/tag";
import { AvailableChartColors } from '@c14/design-system/lib/chart';

interface ExtendedStartup extends Startup {
    StartupTag: Array<{
        id: string;
        tag: {
            name: string;
        };
    }>;
    FounderStartup: Array<{
        founder: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            linkedin: string | null;
            firstName: string;
            lastName: string;
            photo: string | null;
        };
        role: string;
    }>;
    InvestorStartup: Array<{
        investor: {
            id: string;
            name: string;
            photo: string | null;
            linkedin: string | null;
        };
    }>;
}

interface LeftProps {
    startup: ExtendedStartup;
}

const LeftPanel = ({ startup }: LeftProps) => {
    return (
        <div className='mb-0 flex h-full w-full flex-col gap-6 p-0 lg:mb-10 lg:w-3/5 lg:p-4'>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-3">
                    <Avatar
                        size="xl"
                        className='size-12 rounded-xl border border-border'
                    >
                        <AvatarImage src={startup.logo ?? undefined} />
                        <AvatarFallback className="rounded-xl">
                            {startup.name.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="font-brand text-3xl">{startup.name}</h1>
                </div>
                <p className="text-description">{startup.shortDescription}</p>
            </div>
            {startup.StartupTag.length > 0 && (
                <div className="flex flex-row gap-1">
                    {startup.StartupTag.map((tag) => (
                        <Tag
                            variant={
                                AvailableChartColors[Math.floor(Math.random() * AvailableChartColors.length)]
                            }
                            key={tag.id}
                        >
                            {tag.tag.name}
                        </Tag>
                    ))}
                </div>
            )}
            <div className="flex flex-row gap-2">
                {startup.website && (
                    <Button asChild>
                        <Link target="_blank" href={startup.website ?? ""}>
                            Visit website
                        </Link>
                    </Button>
                )}
                {startup.linkedin && (
                    <Button variant="secondary" asChild>
                        <Link target="_blank" href={startup.linkedin ?? ""}>
                            Linkedin
                        </Link>
                    </Button>
                )}
            </div>
            <Separator />
            <p className="text-description text-sm leading-6">
                {startup.longDescription}
            </p>
            {startup.FounderStartup.length > 0 && (
                <div>
                    <Separator />
                    <div className='mt-6 flex flex-col gap-3'>
                        <h2 className="text-heading-subsection">Meet the team</h2>
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                            {startup.FounderStartup.map((member) => {
                                const founder = member.founder;
                                return (
                                    <MemberCard founder={founder} key={founder.id} role={member.role} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
            {startup.InvestorStartup.length > 0 && (
                <div>
                    <Separator />
                    <div className='mt-6 flex flex-col gap-3'>
                        <h2 className="text-heading-subsection">Meet the investors</h2>
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                            {startup.InvestorStartup.map((investorStartup) => {
                                const investor = investorStartup.investor;
                                return (
                                    <InvestorCard investor={investor} key={investor.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
            <Separator className='lg:hidden' />
        </div>
    );
}

export default LeftPanel;
