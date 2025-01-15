import Link from 'next/link';

import Footer from '@/components/ui/footer';

import { Separator } from '@c14/design-system/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-10 p-6 py-12 sm:p-10 sm:py-16 md:p-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-brand text-4xl">About</h1>
        <p className="text-base text-description">
          At C14, our mission is to empower startups with actionable insights
          and unparalleled visibility. We’ve created a dynamic platform that
          brings startups together, offering them a way to showcase their
          projects while gaining access to valuable benchmarks and market
          analysis.
        </p>
        <p className="text-base text-description">
          Our journey started with a simple idea: to build a comprehensive and
          public database of startups that isn’t limited to open-source projects
          but embraces a diverse range of industries and innovations. C14 is
          more than just a database—it’s a tool designed to help startups
          understand their position in the market and make informed decisions to
          fuel their growth.
        </p>
        <p className="text-base text-description">
          We believe in transparency and collaboration, which is why we share
          our progress through a build-in-public approach. By involving our
          community, we aim to create a platform that truly addresses the needs
          of startups. Whether you’re looking for inspiration, insights, or a
          way to stand out in a competitive landscape, C14 is here to support
          you on your journey. Join us, and let’s shape the future of innovation
          together.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="font-mono text-base text-description">
          Designed and launched by{' '}
          <Link
            target="_blank"
            href="https://www.kkratter.com/"
            className="hover:text"
          >
            Federico Kratter Thaler
          </Link>{' '}
          in early 2025.
        </p>
        <p className="font-mono text-base text-description">
          Get in touch |{' '}
          <Link
            target="_blank"
            href="https://t.me/kkratter"
            className="hover:text"
          >
            Telegram
          </Link>{' '}
          |{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kkratter/"
            className="hover:text"
          >
            Linkedin
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
