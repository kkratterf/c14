import Hero from '@/components/modules/homepage/hero';
import Popular from '@/components/modules/homepage/popular';
import Footer from '@/components/ui/footer';
import { Separator } from '@c14/design-system/components/ui/separator';

export default function MainPage() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <Hero />
      <Separator />
      <Popular />
      <Footer />
    </div>
  );
}
