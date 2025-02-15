import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@c14/design-system/components/ui/separator';
import { cn, focusRing } from '@c14/design-system/lib/utils';

import Footer from '@/components/layouts/footer';
import NavMobile from '@/components/layouts/nav-mobile';
import { partners } from '@/lib/data/partners';

export default function ManifestoPage() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col gap-10 p-6 pt-6 pb-12 sm:pb-16 md:p-16'>
      <div className='flex items-end justify-end px-4'><NavMobile /></div>
      <div className="flex flex-col gap-6">
        <h1 className="font-brand text-4xl">Manifesto</h1>
        <div className='flex flex-col gap-4'>
          <p className='text-base text-description'>
            Startups thrive in the open, where knowledge flows freely and transparency fuels progress.
          </p>
          <p className='text-base text-description'>
            We believe a stronger ecosystem is built on visibility, collaboration, and shared knowledge.
          </p>
          <p className='text-base text-description'>
            C14 is an open and growing database of Italian startups, created to discover, compare, and connect.
          </p>
          <p className='text-base text-description'>
            Free and community-driven, it’s not just a product but a shared resource—one that expands with every contribution, empowering those who dare to build.
          </p>
          <p className='text-base text-description'>
            Better data means better decisions. A more connected ecosystem sparks new opportunities. And innovation, at its core, is never a solo journey.
          </p>
          <p className='text-base text-description'>
            C14 belongs to the community. As long as there are startups to discover, our work continues.
          </p>
          <p className='text-base text-description'>
            Join us, contribute, and let’s shape the future of startups—together.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="font-mono text-description text-sm">
          Designed and launched by{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kkratter/"
            className="hover:text"
          >
            Federico Kratter Thaler
          </Link>{' '}
          in early 2025
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-6">
        <h3 className="font-brand text-2xl">Partners</h3>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {partners.map((partner, index) => (
            <Link
              target="_blank"
              href={partner.url}
              key={index}
              className={cn('rounded-lg hover:opacity-70', focusRing)}
            >
              <Image
                width={160}
                height={40}
                alt={partner.name}
                src={`/images/partners/${partner.image}`}
                className='h-10 w-40 px-2 brightness-0 dark:invert'
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
