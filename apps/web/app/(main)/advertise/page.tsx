import Link from 'next/link';

import { Button } from '@c14/design-system/components/ui/button';
import { Separator } from '@c14/design-system/components/ui/separator';

import Footer from '@/components/layouts/footer';
import AdImg from '@/components/ui/ad-img';

export default function AdvertisePage() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col gap-10 p-6 py-12 sm:p-10 sm:py-16 md:p-16'>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-brand text-4xl">Advertise</h1>
          <p className="text-base text-description">
            Got something awesome to share with the startup world? We’ve got the
            perfect spot for you to shine.
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
            Your banner will be displayed on most pages of the C14 website,
            ensuring high visibility to users throughout their entire time on
            the site.
          </p>
        </div>
        <AdImg />
        <p className="font-mono text-description text-sm">
          Banner includes an image, title, subtitle, and a CTA button.
        </p>
      </div>
      {/* Add Statistics block
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
          className="bg-red-200 rounded-xl w-full h-72"
        />
      </div>
      */}
      <Footer />
    </div>
  );
}
