import type { Metadata } from 'next'
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Button } from '@c14/design-system/components/ui/button';
import { Card } from '@c14/design-system/components/ui/card';
import { Separator } from '@c14/design-system/components/ui/separator';
import { Tag } from '@c14/design-system/components/ui/tag';

import { getStartupFromId } from '@/api/startup/serverActions';
import { founderFullName } from '@/lib/utils';
import ShareButtons from '@/components/ui/share-buttons';

//TODO: move to constants file
const TAG_VARIANTS = [
  'red',
  'blue',
  'emerald',
  'amber',
  'teal',
  'cyan',
  'violet',
  'fuchsia',
] as const;

interface IProps {
  params: Promise<{
    id: string;
  }>
}

export async function generateMetadata(
  { params }: IProps,
): Promise<Metadata> {
  const { id } = await params;
  const startup = await getStartupFromId(id);
  if (!startup) {
    return {
      title: "C14 - Startup not found",
    };
  }

  return {
    title: `C14 - ${startup.name}`,
    description: startup.shortDescription,
  }
}

export default async function StartupDetailPage({
  params
}: IProps) {
  const { id } = await params;
  //Call API to get the data from the ID
  const startup = await getStartupFromId(id);
  if (!startup) {
    //TODO: empty state page
    return <div className='flex justify-center items-center w-full min-h-screen text-description'>Startup not found</div>;
  }
  // const featuredStartup = await getFeaturedStartup();
  return (
    <div className='relative flex lg:flex-row flex-col gap-4 p-6 pb-0 w-full min-h-screen'>
      <div className='flex flex-col gap-6 p-0 lg:p-4 w-full lg:w-3/5 h-full'>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <Avatar
              size="xl"
              className='border border-border rounded-xl size-12'
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
        <div className="flex flex-row gap-1">
          {startup.StartupTag.map((tag) => (
            <Tag
              variant={
                TAG_VARIANTS[Math.floor(Math.random() * TAG_VARIANTS.length)]
              }
              key={tag.id}
            >
              {tag.tag.name}
            </Tag>
          ))}
        </div>
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
        <div className="flex flex-col gap-3">
          <h2 className="text-heading-subsection">Meet the team</h2>
          <div className='gap-2 grid grid-cols-1 md:grid-cols-2'>
            {startup.FounderStartup.map((member) => {

              const founder = member.founder;
              return (
                <div
                  key={founder.id}
                  className='flex flex-col gap-3 p-4 border border-border rounded-xl'
                >
                  <Avatar className='border border-border rounded-xl size-14'>
                    <AvatarImage src={founder.photo ?? undefined} />
                    <AvatarFallback className="rounded-xl">
                      {founderFullName(founder).slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col w-full'>
                    <p className="text-heading-body">{founderFullName(founder)}</p>
                    <p className="text-description text-sm">{member.role}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Separator />
        <div className='flex flex-col gap-3 pb-10 border-b border-border lg:border-b-0'>
          <h2 className="text-heading-subsection">Meet the investors</h2>
          <div className='gap-2 grid grid-cols-1 md:grid-cols-2'>
            {startup.InvestorStartup.map((investorStartup) => {
              const investor = investorStartup.investor;
              return (
                <div
                  key={investor.id}
                  className='flex flex-col gap-3 p-4 border border-border rounded-xl'
                >
                  <Avatar className='border border-border rounded-xl size-14'>
                    <AvatarImage src={investor.photo ?? ""} />
                    <AvatarFallback className="rounded-xl">
                      {investor.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col w-full'>
                    <p className="text-heading-body">{investor.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='lg:top-6 lg:sticky flex flex-col gap-3 pt-4 lg:pt-0 w-full lg:w-2/5 lg:h-fit'>
        <div className='flex flex-col gap-3 w-full'>
          <Card className='flex flex-col gap-3 w-full'>
            {startup.teamSize ? <div className='flex flex-row justify-between items-center'>
              <p className="font-mono text-description">Team size</p>
              <p className="font-mono">{startup.teamSize.name}</p>
            </div> :
              //TODO: fill with empty state
              null}
            {startup.location ? <div className='flex flex-row justify-between items-center'>
              <p className="font-mono text-description">Location</p>
              <p className="font-mono">{startup.location.name}</p>
            </div> :
              //TODO: fill with empty state
              null}
            <div className='flex flex-row justify-between items-center'>
              <p className="font-mono text-description">Foundation date</p>
              <p className="font-mono">{startup.foundedAt.toDateString()}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p className="font-mono text-description">Business model</p>
              <p className="font-mono">{startup.businessModel}</p>
            </div>
          </Card>
          <div className='flex lg:flex-row flex-col gap-2'>
            <Card className='flex flex-col gap-1 w-full'>
              <p className="font-mono text-description">Funding stage</p>
              <p className="text-heading-body">{startup.foundingStage?.name}</p>
            </Card>
            <Card className='flex flex-col gap-1 w-full'>
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
          <div className='flex flex-row justify-between items-center px-6 py-3 pb-12 w-full'>
            <p className="font-mono text-description text-sm">Share</p>
            <ShareButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
