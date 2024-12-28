import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@c14/design-system/lib/utils';

const sansFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const brandFont = localFont({
  src: '../fonts/brand.woff2',
  variable: '--font-brand',
});

export const fonts = cn(
  sansFont.variable,
  brandFont.variable,
  'touch-manipulation font-sans antialiased'
);

