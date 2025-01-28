import type { Startup } from '@prisma/client'
import Link from 'next/link';

import { founderFullName } from '@/lib/utils';
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
        };
    }>;
}

interface LeftProps {
    startup: ExtendedStartup;
}

const LeftPanel = ({ startup }: LeftProps) => {
    return (<div className='flex h-full w-full flex-col gap-6 p-0 lg:w-3/5 lg:p-4'>
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
            <Button asChild>
                <Link target="_blank" href={startup.website ?? ""}>
                    Visit website
                </Link>
            </Button>
            <Button variant="secondary" asChild>
                <Link target="_blank" href={startup.linkedin ?? ""}>
                    Linkedin
                </Link>
            </Button>
        </div>
        <Separator />
        <p className="text-description text-sm leading-6">
            {startup.longDescription}
        </p>
        <Separator />
        {startup.FounderStartup.length > 0 && (
            <div className="flex flex-col gap-3">
                <h2 className="text-heading-subsection">Meet the team</h2>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                    {startup.FounderStartup.map((member) => {

                        const founder = member.founder;
                        return (
                            <div
                                key={founder.id}
                                className='flex flex-col gap-3 rounded-xl border border-border p-4'
                            >
                                <Avatar className='size-14 rounded-xl border border-border'>
                                    <AvatarImage src={founder.photo ?? undefined} />
                                    <AvatarFallback className="rounded-xl">
                                        {founderFullName(founder).slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='flex w-full flex-col'>
                                    <p className="text-heading-body">{founderFullName(founder)}</p>
                                    <p className="text-description text-sm">{member.role}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
        <Separator />
        {startup.InvestorStartup.length > 0 && (
            <div className='flex flex-col gap-3 border-border border-b pb-10 lg:border-b-0'>
                <h2 className="text-heading-subsection">Meet the investors</h2>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                    {startup.InvestorStartup.map((investorStartup) => {
                        const investor = investorStartup.investor;
                        return (
                            <div
                                key={investor.id}
                                className='flex flex-col gap-3 rounded-xl border border-border p-4'
                            >
                                <Avatar className='size-14 rounded-xl border border-border'>
                                    <AvatarImage src={investor.photo ?? ""} />
                                    <AvatarFallback className="rounded-xl">
                                        {investor.name.slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='flex w-full flex-col'>
                                    <p className="text-heading-body">{investor.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
    </div>);
}

export default LeftPanel;