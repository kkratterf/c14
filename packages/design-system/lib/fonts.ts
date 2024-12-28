import { Inter } from '@next/font/google'
import { cn } from '@c14/design-system/lib/utils';

const sansFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fonts = cn(
  sansFont.variable,
  'touch-manipulation font-sans antialiased'
);

