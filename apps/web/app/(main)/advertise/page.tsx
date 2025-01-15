import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/ui/footer';

import { Button } from '@c14/design-system/components/ui/button';
import { Separator } from '@c14/design-system/components/ui/separator';

export default function AdvertisePage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-10 p-6 py-12 sm:p-10 sm:py-16 md:p-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-brand text-4xl">Advertise</h1>
          <p className="text-base text-description">
            Promote your product or service among startup enthusiasts.
          </p>
        </div>
        <Button className="w-fit" asChild>
          <Link href="mailto:kkratterf@gmail.com">Order Ad</Link>
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-brand text-2xl">Pricing</h3>
          <p className="text-base text-description">
            The minimum advertising placement duration is one month.
            <br />
            Price includes the creation of a banner image and support.
          </p>
        </div>
        <span className="font-brand text-3xl">€500/month</span>
      </div>
      <Separator />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-brand text-2xl">Placement</h3>
          <p className="text-base text-description">
            Your banner will be placed in such a way on every page of the C14
            website that ensures its visibility to users throughout their entire
            time on the site.
          </p>
        </div>
        <Image
          src="/images/advertise.png"
          alt="Advertise"
          width={1000}
          height={1000}
          className="h-72 w-full rounded-xl bg-red-200"
        />
        <p className="font-mono text-description text-xs">
          Banner includes an image, title, subtitle, and a CTA button.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-brand text-2xl">Statistics</h3>
          <p className="text-base text-description">
            Currently, C14 has an average of 100k views per month.
          </p>
        </div>
        <Image
          src="/images/advertise.png"
          alt="Advertise"
          width={1000}
          height={1000}
          className="h-72 w-full rounded-xl bg-red-200"
        />
      </div>
      <Footer />
    </div>
  );
}
