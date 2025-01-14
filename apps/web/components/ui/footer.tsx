import Link from 'next/link';

import Pictogram from '@/components/ui/pictogram';
import { Button } from '@c14/design-system/components/ui/button';
import { cn, focusRing } from '@c14/design-system/lib/utils';

const Footer = () => {
  return (
    <footer className="flex w-full justify-between">
      <Link href="/" className={cn('rounded-lg', focusRing)}>
        <Pictogram size={32} />
      </Link>
      <Button variant="text" size="small">
        <Link href="/">Linkedin</Link>
      </Button>
    </footer>
  );
};

export default Footer;
