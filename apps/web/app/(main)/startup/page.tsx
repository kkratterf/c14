import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

import { Button } from '@c14/design-system/components/ui/button';
import { Card } from '@c14/design-system/components/ui/card';
import { Tag } from '@c14/design-system/components/ui/tag';

import { advertise } from '@/lib/advertise';
import { startup } from '@/lib/startup';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@c14/design-system/components/ui/avatar';
import { Separator } from '@c14/design-system/components/ui/separator';
import { Tooltip } from '@c14/design-system/components/ui/tooltip';
import Link from 'next/link';

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

export default function StartupPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col gap-4 p-6 pb-0 lg:flex-row">
      <div className="flex h-full w-full flex-col gap-6 p-0 lg:w-3/5 lg:p-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <Avatar
              size="xl"
              className="size-12 rounded-xl border border-border"
            >
              <AvatarImage src={startup.image} />
              <AvatarFallback className="rounded-xl">
                {startup.image_fallback}
              </AvatarFallback>
            </Avatar>
            <h1 className="font-brand text-3xl">{startup.name}</h1>
          </div>
          <p className="text-description">{startup.summary}</p>
        </div>
        <div className="flex flex-row gap-1">
          {startup.tags.map((tag) => (
            <Tag
              variant={
                TAG_VARIANTS[Math.floor(Math.random() * TAG_VARIANTS.length)]
              }
              key={tag}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <Button asChild>
            <Link target="_blank" href={startup.website}>
              Visit website
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link target="_blank" href={startup.linkedin}>
              Linkedin
            </Link>
          </Button>
        </div>
        <Separator />
        <p className="text-description text-sm leading-6">
          {startup.description}
        </p>
        <Separator />
        <div className="flex flex-col gap-3">
          <h2 className="text-heading-subsection">Meet the team</h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {startup.team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-3 rounded-xl border border-border p-4"
              >
                <Avatar className="size-14 rounded-xl border border-border">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="rounded-xl">
                    {member.image_fallback}
                  </AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-col">
                  <p className="text-heading-body">{member.name}</p>
                  <p className="text-description text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-3 border-border border-b pb-10 lg:border-b-0">
          <h2 className="text-heading-subsection">Meet the investors</h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {startup.investors.map((investor) => (
              <div
                key={investor.name}
                className="flex flex-col gap-3 rounded-xl border border-border p-4"
              >
                <Avatar className="size-14 rounded-xl border border-border">
                  <AvatarImage src={investor.image} />
                  <AvatarFallback className="rounded-xl">
                    {investor.image_fallback}
                  </AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-col">
                  <p className="text-heading-body">{investor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 pt-4 lg:sticky lg:top-6 lg:h-fit lg:w-2/5 lg:pt-0">
        <div className="flex w-full flex-col gap-3">
          <Card className="flex w-full flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <p className="font-mono text-description">Team size</p>
              <p className="font-mono">{startup.team_size}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-mono text-description">Location</p>
              <p className="font-mono">{startup.location}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-mono text-description">Foundation date</p>
              <p className="font-mono">{startup.founded_year}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-mono text-description">Business model</p>
              <p className="font-mono">{startup.business_model}</p>
            </div>
          </Card>
          <div className="flex flex-col gap-2 lg:flex-row">
            <Card className="flex w-full flex-col gap-1">
              <p className="font-mono text-description">Funding stage</p>
              <p className="text-heading-body">{startup.funding_stage}</p>
            </Card>
            <Card className="flex w-full flex-col gap-1">
              <p className="font-mono text-description">Amount raised</p>
              <p className="text-heading-body">{startup.amount_raised}</p>
            </Card>
          </div>
          <Card className="flex w-full flex-col gap-4 bg-subtle">
            <div className="flex w-full flex-row items-center gap-3">
              <Avatar className="size-14 rounded-xl border border-border">
                <AvatarImage src={advertise.avatar_url} />
                <AvatarFallback className="rounded-xl">
                  {advertise.avatar_fallback}
                </AvatarFallback>
              </Avatar>
              <div className="flex w-full flex-col">
                <p className="text-heading-body">{advertise.name}</p>
                <p className="line-clamp-1 w-full text-description">
                  {advertise.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-end justify-between gap-2">
              <Button asChild>
                <Link target="_blank" href={advertise.url}>
                  {advertise.cta}
                </Link>
              </Button>
              <Tag variant="brand">AD</Tag>
            </div>
          </Card>
          <div className="flex w-full flex-row items-center justify-between px-6 py-3 pb-12">
            <p className="font-mono text-description text-sm">Share</p>
            <div className="flex flex-row gap-2">
              <Tooltip content="Share on Twitter">
                <Button variant="secondary" icon>
                  <TwitterIcon />
                </Button>
              </Tooltip>
              <Tooltip content="Share on Facebook">
                <Button variant="secondary" icon>
                  <FacebookIcon />
                </Button>
              </Tooltip>
              <Tooltip content="Share on Linkedin">
                <Button variant="secondary" icon>
                  <LinkedinIcon />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
