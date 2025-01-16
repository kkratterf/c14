import Link from 'next/link';

import Footer from '@/components/ui/footer';

import { Separator } from '@c14/design-system/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-10 p-6 py-12 sm:p-10 sm:py-16 md:p-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-brand text-4xl">About</h1>
        <p className="text-base text-description">
          Our mission is to empower startups with actionable insights and
          unparalleled visibility.
        </p>
        <p className="text-base text-description">
          We’ve created a dynamic platform that brings startups together,
          offering them a way to showcase their projects while gaining access to
          valuable benchmarks and market analysis.
        </p>
        <p className="text-base text-description">
          We believe in transparency and collaboration, which is why we share
          our progress through a build-in-public approach. By involving our
          community, we aim to create a platform that truly addresses the needs
          of startups.
        </p>
        <p className="text-base text-description">
          Whether you’re looking for inspiration, insights, or a way to stand
          out in a competitive landscape, C14 is here to support you on your
          journey. Join us, and let’s shape the future of innovation together.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="font-mono text-description text-sm">
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
        <p className="font-mono text-description text-sm">
          Get in touch |{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kkratter/"
            className="hover:text"
          >
            Linkedin
          </Link>{' '}
          |{' '}
          <Link
            target="_blank"
            href="https://t.me/kkratter"
            className="hover:text"
          >
            Telegram
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
