import HeroCard from '@/components/ui/hero-card';

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 px-4">
      <div className="flex flex-col gap-3">
        <h1 className="font-base font-brand text-heading-screen">
          Discover the best startups
        </h1>
        <p className="text-base text-description">
          Browse a curated list of the best startups shaping tomorrow’s
          technology.
          <br />
          Built for founders, investors, and analysts.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <HeroCard url="/startups" title="Startups" number="1672" />
        <HeroCard url="/benchmark" title="Benchmark" />
        <HeroCard url="/" title="Categories" number="coming soon" disabled />
        <HeroCard url="/" title="Categories" number="coming soon" disabled />
      </div>
    </section>
  );
};

export default Hero;
