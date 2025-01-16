import Hero from '@/components/modules/homepage/hero';
import Popular from '@/components/modules/homepage/popular';
import Submit from '@/components/modules/homepage/submit';
import Footer from '@/components/ui/footer';
import { Separator } from '@c14/design-system/components/ui/separator';

export default function MainPage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-10 px-2 py-12 sm:px-6 sm:py-16 md:px-12 md:py-16">
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
