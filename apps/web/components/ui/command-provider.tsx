'use client';

import {
  AtSign,
  ChartColumn,
  Coins,
  Info,
  Mail,
  MessageCircle,
  PlusCircle,
  Rocket,
} from 'lucide-react';
import * as React from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@c14/design-system/components/ui/command';
import Link from 'next/link';

export function CommandProvider() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <Link href="/startups" onClick={() => setOpen(false)}>
              <CommandItem>
                <Rocket className="size-4" />
                <span>Search startups</span>
              </CommandItem>
            </Link>
            <Link href="/benchmark" onClick={() => setOpen(false)}>
              <CommandItem>
                <ChartColumn className="size-4" />
                <span>See benchmark</span>
              </CommandItem>
            </Link>
            <Link href="/subscribe" onClick={() => setOpen(false)}>
              <CommandItem>
                <Mail className="size-4" />
                <span>Subscribe the newsletter</span>
              </CommandItem>
            </Link>
            <Link href="/submit" onClick={() => setOpen(false)}>
              <CommandItem>
                <PlusCircle className="size-4" />
                <span>Submit startup</span>
              </CommandItem>
            </Link>
            <Link href="/subscribe" onClick={() => setOpen(false)}>
              <CommandItem>
                <Coins className="size-4" />
                <span>Advertise a project</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandGroup heading="Help">
            <Link
              href="https://tally.so/r/mOdyN8"
              onClick={() => setOpen(false)}
            >
              <CommandItem>
                <MessageCircle className="size-4" />
                <span>Send feedback</span>
              </CommandItem>
            </Link>
            <Link
              href="mailto:kkratterf@gmail.com"
              onClick={() => setOpen(false)}
            >
              <CommandItem>
                <AtSign className="size-4" />
                <span>Contact support</span>
              </CommandItem>
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              <CommandItem>
                <Info className="size-4" />
                <span>About</span>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
