import { Separator } from '@c14/design-system/components/ui/separator';

import Hero from '@/components/modules/homepage/hero';
import Popular from '@/components/modules/homepage/popular';
import Submit from '@/components/modules/homepage/submit';
import Footer from '@/components/ui/footer';
import NavMobile from '@/components/ui/nav-mobile';

export default function MainPage() {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col gap-10 px-2 pt-6 pb-12 sm:px-6 sm:pb-16 md:px-12 md:py-16'>
      <div className='flex items-end justify-end px-4'><NavMobile /></div>
      <div className="flex flex-col gap-10 px-4">
        <Hero />
        <Separator />
      </div>
      <Popular />
      <div className="px-4">
        <Separator />
      </div>
      <Submit />
      <div className="px-4">
        <Footer />
      </div>
    </div>
  );
}
