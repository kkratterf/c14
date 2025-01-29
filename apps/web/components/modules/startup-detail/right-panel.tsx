import type { Startup } from '@prisma/client';

import ShareButtons from "@/components/ui/share-buttons";
import { Card } from "@c14/design-system/components/ui/card";

interface ExtendedStartup extends Startup {
    teamSize: {
        name: string;
    } | null;
    location: {
        name: string;
    };
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
                        <p className="font-mono">{startup.location.name}</p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className="font-mono text-description">Foundation date</p>
                        <p className="font-mono">{startup.foundedAt.getFullYear()}</p>
                    </div>
                </Card>
                <Card className='flex flex-col gap-4 xl:flex-row'>
                    <div className='flex w-full flex-col gap-1'>
                        <p className="font-mono text-description">Funding stage</p>
                        {startup.foundingStage ? (
                            <p className="text-heading-body">{startup.foundingStage.name}</p>
                        ) : (
                            <p className="text-heading-body">Unknown</p>
                        )}
                    </div>
                    <div className='flex w-full flex-col gap-1'>
                        <p className="font-mono text-description">Amount raised</p>
                        {startup.amountRaised ? (
                            <p className="text-heading-body">
                                {startup.amountRaised.toLocaleString('it-IT')} {startup?.amountRaisedCurrency}
                            </p>
                        ) : (
                            <p className="text-heading-body">Unknown</p>
                        )}
                    </div>
                </Card>
                <div className='flex w-full flex-row items-center justify-between px-6 py-3 pb-12'>
                    <p className="font-mono text-description text-sm">Share</p>
                    <ShareButtons />
                </div>
            </div>
        </div>
    );
};

export default RightPanel;