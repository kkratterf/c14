import { AtSignIcon, GithubIcon, LinkedinIcon, SlackIcon } from 'lucide-react';
import Link from 'next/link';

import Pictogram from '@/components/ui/pictogram';

import { Button } from '@c14/design-system/components/ui/button';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';
import { cn, focusRing } from '@c14/design-system/lib/utils';

const Footer = () => {
  return (
    <footer className="flex w-full justify-between border-border border-t px-2 pt-4">
      <Link href="/" className={cn('rounded-lg', focusRing)}>
        <Pictogram size={32} />
      </Link>
      <div className="flex flex-row gap-1">
        <Tooltip content="Contact us">
          <Button variant="text" icon size="small" asChild>
            <Link target="_blank" href="mailto:kkratterf@gmail.com">
              <AtSignIcon />
              <span className="sr-only">Contact us</span>
            </Link>
          </Button>
        </Tooltip>
        <Tooltip content="Join our Slack">
          <Button variant="text" icon size="small" asChild>
            <Link
              target="_blank"
              href="https://join.slack.com/t/c14dotso/shared_invite/zt-2wsuiiiis-2bBr9Rj7BY7GGq3zfmhu8g"
            >
              <SlackIcon />
              <span className="sr-only">Join us on Slack</span>
            </Link>
          </Button>
        </Tooltip>
        <Tooltip content="Follow us on Linkedin">
          <Button variant="text" icon size="small" asChild>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/c14dotso"
            >
              <LinkedinIcon />
              <span className="sr-only">Follow us on Linkedin</span>
            </Link>
          </Button>
        </Tooltip>
        <Tooltip content="View source code">
          <Button variant="text" icon size="small" asChild>
            <Link target="_blank" href="https://github.com/kkratterf/C14">
              <GithubIcon />
              <span className="sr-only">View source code</span>
            </Link>
          </Button>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
