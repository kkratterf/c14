import type { Startup } from '@prisma/client';

import ShareButtons from "@/components/ui/share-buttons";
import { Card } from "@c14/design-system/components/ui/card";

interface ExtendedStartup extends Startup {
    teamSize: {
        name: string;
    } | null;
    location: {
        name: string;
    } | null;
    foundingStage: {
        name: string;
    } | null;
}

interface RightProps {
    startup: ExtendedStartup;
}

const RightPanel = ({ startup }: RightProps) => {
    return (
        <div className='flex w-full flex-col gap-3 pt-4 lg:sticky lg:top-6 lg:h-fit lg:w-2/5 lg:pt-0'>
            <div className='flex w-full flex-col gap-3'>
                <Card className='flex w-full flex-col gap-3'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className="font-mono text-description">Team size</p>
                        {startup.teamSize ? (
                            <p className="font-mono">{startup.teamSize.name}</p>
                        ) : (
                            <p className="font-mono">Unknown</p>
                        )}
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className="font-mono text-description">Location</p>
                        {startup.location ? (
                            <p className="font-mono">{startup.location.name}</p>
                        ) : (
                            <p className="font-mono">Unknown</p>
                        )}
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className="font-mono text-description">Foundation date</p>
                        <p className="font-mono">{startup.foundedAt.toDateString()}</p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className="font-mono text-description">Business model</p>
                        <p className="font-mono">{startup.businessModel}</p>
                    </div>
                </Card>
                <div className='flex flex-col gap-2 lg:flex-row'>
                    <Card className='flex w-full flex-col gap-1'>
                        <p className="font-mono text-description">Funding stage</p>
                        <p className="text-heading-body">{startup.foundingStage?.name}</p>
                    </Card>
                    <Card className='flex w-full flex-col gap-1'>
                        <p className="font-mono text-description">Amount raised</p>
                        <p className="text-heading-body">{startup.amountRaised}</p>
                    </Card>
                </div>
                {/* TODO: Add the advertise block here
                {featuredStartup && <Card className='flex flex-col gap-4 bg-subtle w-full'>
                    <div className='flex flex-row items-center gap-3 w-full'>
                    <Avatar className='border border-border rounded-xl size-14'>
                        <AvatarImage src={featuredStartup.logo ?? undefined} />
                        {featuredStartup.name.slice(0, 2)}
                    </Avatar>
                    <div className='flex flex-col w-full'>
                        <p className="text-heading-body">{featuredStartup.name}</p>
                        <p className="line-clamp-1 w-full text-description">
                        {featuredStartup.shortDescription}
                        </p>
                    </div>
                    </div>
                    <div className='flex flex-row justify-between items-end gap-2'>
                    <Button asChild>
                        <Link target="_blank" href={featuredStartup.website ?? ""}>
                        Visit {featuredStartup.name}
                        </Link>
                    </Button>
                    <Tag variant="brand">AD</Tag>
                    </div>
                </Card>}
                */}
                <div className='flex w-full flex-row items-center justify-between px-6 py-3 pb-12'>
                    <p className="font-mono text-description text-sm">Share</p>
                    <ShareButtons />
                </div>
            </div>
        </div>
    );
};

export default RightPanel;
