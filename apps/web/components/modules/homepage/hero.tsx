import HeroCard from '@/components/ui/hero-card';

const Hero = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-base font-brand text-heading-screen">
          Discover the best startups
        </h1>
        <p className="text-base text-description">
          Browse a curated list of the best startups shaping tomorrow’s
          technology.
          <br />
          Designed for founders, investors, and industry analysts.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <HeroCard url="/startups" title="Startups" number="1672" />
        <HeroCard url="/benchmark" title="Benchmark" />
      </div>
    </section>
  );
};

export default Hero;
