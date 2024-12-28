"use client"
 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@c14/design-system/components/ui/accordion';
import { Alert } from '@c14/design-system/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@c14/design-system/components/ui/alert-dialog';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Badge } from '@c14/design-system/components/ui/badge';
import { Button } from '@c14/design-system/components/ui/button';
import { Calendar } from '@c14/design-system/components/ui/calendar';
import { Card } from '@c14/design-system/components/ui/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@c14/design-system/components/ui/command';
import { Input } from '@c14/design-system/components/ui/input';
import { Label } from '@c14/design-system/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@c14/design-system/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@c14/design-system/components/ui/select';
import { toast } from '@c14/design-system/components/ui/toast';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';
import { cn } from '@c14/design-system/lib/utils';
import { format } from "date-fns";
import { Activity, Calculator, CalendarIcon, CreditCard, FilePlus, Megaphone, Settings, Smile, User } from 'lucide-react';
import * as React from "react";

function page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-4 p-10">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Alert icon={Megaphone} title="Notice" className="max-w-md">
        This is a general notification for your attention. It provides neutral
        information or basic reminders for everyday tasks.
      </Alert>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
          alt="@kkratterf"
        />
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
      <Badge>
        <Activity />
        Active
      </Badge>
      <Button variant="secondary">Secondary</Button>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className='rounded'
    />
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-description'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="calendar-fix"
        />
      </PopoverContent>
    </Popover>
    <Card className="w-[380px]">
      <div className="flex flex-col justify-center gap-1 pb-6">
        <h1 className="text-heading-subsection">Create project</h1>
        <p className="text-description">Deploy your new project in one-click.</p>
      </div>
      <div>
        <form>
          <div className='flex w-full flex-col items-center justify-center gap-4'>
            <div className='flex w-full flex-col space-y-2'>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className='flex w-full flex-col space-y-2'>
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-end gap-2 pt-6'>
        <Button variant="secondary">Cancel</Button>
        <Button>Deploy</Button>
      </div>
    </Card>
    <Command className='rounded-lg border border-default shadow-md'>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="size-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="size-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="size-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="size-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="size-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="size-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    <Tooltip content="Add to library">
      <Button variant="secondary" icon={true}>
        <FilePlus />
      </Button>
    </Tooltip>
    <Button
      variant="secondary"
      onClick={() => {
        toast.error("Your message has been sent.", {
          description: "Your message has been sent.",
        });
      }}>
      Show Toast
    </Button>
    </div>
  );
}

export default page;
