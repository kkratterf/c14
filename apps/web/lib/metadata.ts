import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'C14 - Open-source startup database',
  description:
    'Browse a curated list of the best italian startups 🇮🇹 shaping tomorrow’s technology.',
  keywords: [
    'C14',
    'Opens-source',
    'Startup database',
    'Italian startups',
    'Database',
    'Startup',
  ],
  metadataBase: new URL('https://www.c14.so'),
  alternates: {
    canonical: 'https://www.c14.so',
  },
  openGraph: {
    title: 'C14 - Open-source startup database',
    description:
      'Browse a curated list of the best italian startups 🇮🇹 shaping tomorrow’s technology.',
    url: 'https://www.c14.so',
    siteName: 'C14',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
