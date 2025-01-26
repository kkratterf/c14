'use client';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

import { Button } from "@c14/design-system/components/ui/button";
import { Tooltip } from "@c14/design-system/components/ui/tooltip";


const ShareButtons = () => {
    const shareOnLinkedIn = () => {
        const currentUrl = window.location.href;
        const shareText = "Ho trovato questa pagina interessante!";
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`;
        window.open(linkedInShareUrl, '_blank', 'width=600,height=600');
    };

    return (
        <div className="flex flex-row gap-2">
            <Tooltip content="Share on Twitter">
                <Button variant="secondary" disabled icon>
                    <TwitterIcon />
                </Button>
            </Tooltip>
            <Tooltip content="Share on Facebook">
                <Button variant="secondary" disabled icon>
                    <FacebookIcon />
                </Button>
            </Tooltip>
            <Tooltip content="Share on Linkedin">
                <Button variant="secondary" icon onClick={shareOnLinkedIn}>
                    <LinkedinIcon />
                </Button>
            </Tooltip>
        </div>
    );
};

export default ShareButtons;
